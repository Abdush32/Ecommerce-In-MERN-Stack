import React, { useState } from "react";
import Base from '../core/Base'
import { Link,Redirect } from "react-router-dom";
import { signin,authenticate,isAuthenticate } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email:"",
    password:"",
    error: "",
    loading:false,
    didRedirect:false
  })

  const{email,password,error,loading,didRedirect} = values;

  const handleChange = name => e =>{
    setValues({...values, error:false,[name]:e.target.value})
  }

  const {user} = isAuthenticate();

const onSubmit = e =>{
e.preventDefault();
setValues({...values,error:false,loading:true})
signin({email,password})
.then(data =>{
  if(data && data.error){
    setValues({...values, error: data.error, loading:false})
  }
  else{
    authenticate(data, () =>{
      setValues({
        ...values,
        didRedirect:true
      })
    })
  }
})
.catch(console.log("Signin got failed"))

}

const performRedirect = () =>{
  if(didRedirect){
    if(user && user.role ===1){
return <Redirect to="/admin/dashboard"/>;
    }
    else{
      return <Redirect to="/user/dashboard"/>;
    }
  }
  if(isAuthenticate()){
    return <Redirect to="/" />
  }
}

const loadingMessage = () => {
  return(
    loading &&(
      <div className="alert alert-info">
      <h2>Loading...</h2>
      </div>
    )
  )
}

const errorMessage = () =>(
  <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
{error}
  </div>
  )





    const signinForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
                
                <div className="form-group">
                  <label className="text-light">Email</label>
                  <input className="form-control" type="email"  value={email} onChange={handleChange("email")} placeholder="Enter Email" />
                </div>
    
                <div className="form-group">
                  <label className="text-light">Password</label>
<input className="form-control" type="password" value={password} onChange={handleChange("password")} placeholder="Enter Password" />
                </div>
                <br/>
               <center> <button className="btn btn-success btn-block text-center" onClick={onSubmit}>Submit</button>
               </center>    
              </form>
            </div>
          </div>
        );
      };
    
    return (
     <Base title="SignIn Here! " description="">
     {loadingMessage()}
     {errorMessage()}
  {signinForm()}
  {performRedirect()}

     </Base>
    )
}

export default Signin
