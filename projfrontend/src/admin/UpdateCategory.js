import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  isAuthenticate } from "../auth/helper/index";
import Base from '../core/Base'
import { getCategory, updateCategory } from './helper/adminapicall'

const UpdateCategory = ({match}) => {
  const {user, token} = isAuthenticate();

  const [values, setValues] = useState({
    name:"",
    category:"",
    loading:"",
    error:"",
    createdCategory:"",
    getaRedirect:false,
    formData:""
  })

  const {    
    name,
     category,
    loading,
    error,
    createdCategory,
    getaRedirect,
    formData} = values;

const preload = categoryId => {
  getCategory(categoryId).then(data =>{
    console.log(data);

    if(data.error){
      setValues({...values, error: data.error})
    }
    else{
      setValues({
        ...values,
        name:data.name,
        category:data.category,
        fromData: new FormData()
        
      })
    }
  })
}

useEffect(() => {
 
  preload(match.params.categoryId)
}, [])


const handleChange = name => event =>{
const value = event.target.value;

setValues({...values,[name]:value})
}

const onSubmit = (e) => {
  e.preventDefault()
  setValues({ ...values, error: "", loading: true });


//REQUEST FIRED
updateCategory(match.params.categoryId,user._id,token,{name}) //name is coming from adminapicalls
.then(data  =>{
  if(data.error){
    setValues({ ...values, error: data.error });
  }
  else{
    setValues({
      ...values,
      name: "",
   
      loading: false,
      createdCategory: data.name
    });
  }
})
  }

const successMessage = () => (
  <div
    className="alert alert-success mt-3"
    style={{ display: createdCategory ? "" : "none" }}
  >
    <h4>{createdCategory} updated successfully</h4>
  </div>
);






  const mycategoryForm = () =>(
    <form>
    <div className="form-group">
<p className="lead">Enter The Update category</p>
<input type="text" 
onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
className="form-control my-3" autoFocus 
required placeholder="Enter New Update" />
    <button className="btn btn-outline-info" onClick={onSubmit}>UpdateCategory</button>
    </div>
    </form>
    )

const Goback = () =>(
 <div className="mt-5">
 <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
 </div>
)
  return (
    <Base title="Update category here"
       description="Update here for new T-shirt"
       className="container bg-info p-4"
       >
       
       <div className="row bg-white rounded">
<div className="col-md-8 offset-md-2">

{successMessage()}
{mycategoryForm()} {Goback()}

</div>
       
       
       
       </div>
       
       
       </Base>
  )
}

export default UpdateCategory
