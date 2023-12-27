import axiosSecure from "./Index"

// ===========================
//      BUILDING CRUD
// ===========================

// 1. CREATE THE TASKS API
export const createTask = async data => {    
    // user info
    const createTask = {
        ...data,
    }
    const insert = axiosSecure.post(`/tasks/${data.userEmail}`,  createTask)
    return insert
    
}

// 2. SHOW THE TASKS API FOR SPECIFIC USER
export const getAllTasks = async (email) => {
    const {data} = await axiosSecure(`/tasks/${email}`)
    return data
}

// 3. SHOW THE SINGLE BUILDING
export const getSingleTask = async (id) => {
    const {data} = await axiosSecure(`/singleTask/${id}`)
    return data
}

// 4. UPDATE THE BUILDING
export const makeTaskUpdate = async (id,taskData) => {
    const {data} = await axiosSecure.put(`/task/${id}`,taskData)
    return data
}

// // 5. DELETE THE BUILDING
// export const makeBuildingDelete = async (id) => {
//     const {data} = await axiosSecure.delete(`/building/${id}`)
//     return data
// }

// // 6. CHANGE THE BUILDING DATA STATUS WHEN ORDERED
// export const makeOrderedBuilding = async (data) => {
//     const orderBuilding = await axiosSecure.patch('/building/ordered',data)
//     return orderBuilding
// }