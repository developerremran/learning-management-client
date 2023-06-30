
export const classItemAdd =(allInfoClass)=>
{    
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/class`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(allInfoClass),
      }).then(res => res.json())
      
}


export const deleteCourseItem =(id)=>{
  return fetch(`${import.meta.env.VITE_lOCAL_Server}/class/${id}`,{
    method:'DELETE',
  })
  .then(res => res.json())
}