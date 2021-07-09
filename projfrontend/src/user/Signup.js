import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import usercss from "./usercss.css"
const Signup = () => {
const [values, setValues] = useState({
  name:"",
  email:"",
  password:"",
  error:"",
  sucess:false
})
const {name,email,password,error,sucess} = values;

const handleChange = name => e =>{
  setValues({...values, error:false,[name]:e.target.value})
}

const onSubmit = e =>{
  e.preventDefault();
  setValues({...values, error: false})
  signup({name,email,password})
.then(data =>{
  if(data && data.error){
    setValues({...values, error: data.error, sucess:false})
  }
  else{
    setValues({
      ...values,
      name:"",
      email:"",
      password:"",
      error:"",
      sucess:true
    })
  }
})
.catch(console.log("Error in signup"))

}

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
<input className="form-control" type="text" value={name} onChange={handleChange("name")} placeholder="Enter Name"/>
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
<input className="form-control" type="email" value={email} onChange={handleChange("email")}  placeholder="Enter Email"/>
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
<input className="form-control" type="password" value={password}  onChange={handleChange("password")}  placeholder="Enter Password"/>
            </div>

<br/>
           <div className="text-center">
           <button className="btn btn-success btn-block" onClick={onSubmit}>Submit</button>
         
        </div>

   
          </form>
        </div>
      </div>
    );
  };

  const sucessMessage = () =>(
    <div className="alert alert-success" style={{display: sucess ? "" : "none"}}>
    New Account was created Sucessfully.please{""}
    <Link to="/signin">Login Here..</Link>
    </div>
    ) 

  const errorMessage = () =>(
    <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
  {error}
    </div>
    )

  return (
    <Base title="Signup Here !" description="">
    {sucessMessage()}
    {errorMessage()}
      {signUpForm()}
     
    </Base>
  );
};

export default Signup;
