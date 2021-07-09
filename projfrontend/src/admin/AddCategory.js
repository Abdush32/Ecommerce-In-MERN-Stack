import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticate } from '../auth/helper'
import Base from '../core/Base'
import {CreateCategory} from './helper/adminapicall'


const AddCategory = () => {
const [name, setName] = useState("")
const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)


const {user, token} = isAuthenticate()

    const mycategoryForm = () =>(
       <form>
       <div className="form-group">
<p className="lead">Enter The category</p>
<input type="text" onChange={handleChange}  value={name} className="form-control my-3" autoFocus 
required placeholder="For Ex.Summer" />
       <button className="btn btn-outline-info" onClick={onSubmit}>CreateCategory</button>
       </div>
       </form>
       )

const Goback = () =>(
    <div className="mt-5">
    <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
    </div>
)

const handleChange = (e) => {
setError("")
setName(e.target.value)

}

const onSubmit = (e) => {
    e.preventDefault()
setError("")
setSuccess(false)


//REQUEST FIRED
CreateCategory(user._id,token,{name}) //name is coming from adminapicalls
.then(data  =>{
    if(data.error){
        setError(true)
    }
    else{
        setError("")
        setSuccess(true)
        setName("")
    }
})
    }


    const sucessMessage = () =>{
        if(success){
            return <h4 className="text-success">category created succesfully</h4>
        }
    } 
    
      const errorMessage = () =>{
        if(error){
            return <h4 className="text-success">Failed to Create Category</h4>
        }
    } 

    return (
       <Base title="Create a category here"
       description="Add new category fro your  new t-shirts"
       className="container bg-info p-4"
       >
       
       <div className="row bg-white rounded">
<div className="col-md-8 offset-md-2">
{sucessMessage()}
{errorMessage()}
{mycategoryForm()} {Goback()}

</div>
       
       
       
       </div>
       
       
       </Base>
    )
}

export default AddCategory
