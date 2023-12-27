import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { makeTaskUpdate } from "../../../apis/task";
import toast from "react-hot-toast";
import {  useMutation, useQueryClient } from "@tanstack/react-query";

const EditTaskModal = ({  isEditOpen, setIsEditOpen, edtiTaskData,  }) => {
  const [loading, setLoading] = useState(false);
  // const {title, descriptions, deadlines, priorities} = edtiTaskData
  const handleCloseModal = () => {
    setIsEditOpen(false);
  };  
  // update using tansstack query
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async(newTask) => await makeTaskUpdate(edtiTaskData._id, newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tasks']}); 
    },
  })
  // form data
  const handleEditTaskForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const descriptions = form.descriptions.value;
    const deadlines = form.deadlines.value;
    const priorities = form.priorities.value;
    setLoading(true);

    try {
      const formData = {
        title,
        descriptions,
        deadlines,
        priorities,
      };

      console.table(formData);
      mutation.mutate(formData);
      form.reset();
      setIsEditOpen(false);
      toast.success("Task updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Transition appear show={isEditOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* Your form remains the same */}
                  {/* ... */}
                  <form
                    onSubmit={handleEditTaskForm}
                    className="card-body space-y-4"
                  >
                    {/* title */}
                    <div className="form-control">
                      <label className="block space-y-2 " htmlFor="title">
                        <p className="text-gray-600">Title</p>
                        <input
                          className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-primary focus:ring-1"
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Enter Title"
                          defaultValue={edtiTaskData?.title}
                        />
                      </label>
                    </div>
                    {/* descriptions */}
                    <div className="form-control">
                      <label className="block space-y-2" htmlFor="descriptions">
                        <p className="text-gray-600">Descriptions</p>
                        <textarea
                          className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-primary focus:ring-1"
                          type="text"
                          placeholder="Enter Description"
                          id="descriptions"
                          name="descriptions"
                          defaultValue={edtiTaskData?.descriptions}
                        />
                      </label>
                    </div>
                    {/* deadlines */}
                    <div className="form-control">
                      <label className="block space-y-2" htmlFor="descriptions">
                        <p className="text-gray-600">Deadlines</p>
                        <input
                          className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-primary focus:ring-1"
                          type="date"
                          id="deadlines"
                          name="deadlines"
                          placeholder="Enter Title"
                          defaultValue={edtiTaskData?.deadlines}
                        />
                      </label>
                    </div>

                    {/* priorities */}
                    <div className="form-control">
                      <label
                        htmlFor="priorities"
                        className="block mb-3 text-sm font-medium text-gray-900 "
                      >
                        Task Priorities
                      </label>
                      <select
                        name="priorities"
                        id="priorities"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={edtiTaskData?.priorities}
                      >
                        <option value="Urgent">Urgent</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        <option value="Optional">Optional</option>
                      </select>
                    </div>
                    {/* Submit and cancel buttons */}
                    <div className="mt-6 flex justify-end gap-5">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => handleCloseModal() }
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        disabled={loading}
                      >
                        {loading ? "Saving..." : "Save"}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

EditTaskModal.propTypes = {
  isEditOpen: PropTypes.bool,
  setIsEditOpen: PropTypes.func,
  edtiTaskData: PropTypes.object,
};

export default EditTaskModal;
