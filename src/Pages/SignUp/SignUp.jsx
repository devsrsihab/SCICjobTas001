import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useState } from "react";
import imageUpload from "../../apis/ImageUpload";
import { getToken } from "../../apis/auth";
import useAuth from "../../hooks/useAuth";
import { FaArrowsSpin } from "react-icons/fa6";
import { insertUser } from "../../apis/auth";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";

const SignUp = () => {
  // auth context
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  // navigate
  const navigate = useNavigate();
  // error & success sate
  const [registerErr, SetRegisterErr] = useState("");
  const [success, SetSuccess] = useState("");
  // loading state
  const [isoading, setIsloding] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  // handleForm
  const handleForm = async (e) => {
    e.preventDefault();

    // first emapy the error and succes state
    SetRegisterErr("");
    SetSuccess("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const term = form.term.checked;
    const photo = form.photo.files[0];
    // form data
    const formData = { name, email, password, photo };
    console.table(formData);

    // error show for term
    if (!name) {
      SetRegisterErr("pLease fill Name Input");
      setIsloding(false);
      return;
    }
    // error show for term
    if (!photo) {
      SetRegisterErr("pLease upload your photo");
      setIsloding(false);
      return;
    }
    // password error handle
    const pattern = "/^(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,26}$/";
    if (pattern.match(password)) {
      SetRegisterErr(
        "Your Password Al least 8 character and 1 Special Character"
      );
      setIsloding(false);

      return;
    }

    // create user in firebase , mongodb and photo upload in imgbb
    try {
      // image upload
      const imageData = await imageUpload(photo);
      // create user in firebase
      const result = await createUser(email, password);
      await updateUserProfile(name, imageData?.data?.display_url);
      // save user in mongodb
      const dbResponse = await insertUser(result?.user);
      console.log(dbResponse);
      // get Token
      await getToken(result?.user?.email);
      toast.success("Sign up successfully");
      form.reset();
      navigate("/");
      console.log(result);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // sing up with google
  const handleGoogle = async () => {
    try {
      // create user
      const resutl = await signInWithGoogle();
      // save user in db
      const dbResponse = await insertUser(resutl?.user);
      console.log(dbResponse);
      // get Token
      await getToken(resutl?.user?.email);
      toast.success("Sign up successfully");
      navigate("/");
      console.log(resutl);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to SRTODO</p>
        </div>
        <form
          onSubmit={handleForm}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="photo"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>

              <div className="relative flex items-center">
                <input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />

                <div
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                  className="icons  text-primary absolute bottom-[30%] text-2xl cursor-pointer right-[5%]"
                >
                  {isShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-accent w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <FaArrowsSpin className="animate-spin mx-auto text-2xl " />
              ) : (
                "sign up"
              )}
            </button>

            {isoading && (
              <span className="loading loading-bars loading-lg"></span>
            )}
            <div
              className={`error text-sm ${registerErr && "text-red-700"}
                     ${success && "text-green-500"}  my-5`}
            >
              <h2>{registerErr && registerErr.replace("Firebase:", "")}</h2>
              <h2>{success && success}</h2>
            </div>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogle}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-accent text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
