

const addCartProduct =(classData)=>{
 
   return fetch(`${import.meta.env.VITE_lOCAL_Server}/addProduct`,{
    method:'POST',
    headers:{'content-type': 'application/json'},
    body:JSON.stringify(classData)
   }).then(res=> res.json())
}

export default addCartProduct;