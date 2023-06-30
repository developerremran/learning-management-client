export const allCourse =()=>{
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/class`)
    .then(res => res.json())
}

export const deleteCourse=(id)=>{
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/class/${id}`,
    {
        method:'DELETE'
    })
    .then(res => res.json())
}