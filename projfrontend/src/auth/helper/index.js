import {API} from "../../backend";


export const signup = user =>{
    return fetch(`${API}/signup`,{
      
        method: "POST",
        headers:{
            Accept : "application/json",
            "Content-Type" : "application/json"
        },

        body: JSON.stringify(user)
    })
    .then(res =>{
        return res.json();
})
.catch(err => console.log(err))
}

//SIGNIN PART

export const signin = user =>{
    return fetch(`${API}/signin`,{
      
        method: "POST",
        headers:{
            Accept : "application/json",
            "Content-Type" : "application/json"
        },

        body: JSON.stringify(user)
    })
    .then(res =>{
        return res.json();
})
.catch(err => console.log(err))
}

//Authenticate
export const authenticate = (data, next) => {
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

//Signout

export const signout = next =>{
 
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt") // jwt is token
        next();

        return fetch (`${API}/signout`,{
            method:"GET"
        })
        .then(res => console.log("signout sucess"))
        .catch( err => console.log(err))
    }
}

// It is validating user signin or Not
export const isAuthenticate = () => {
    if(typeof window == "undefined"){
       return false;
    }
    if(localStorage.getItem("jwt")){  // if we are able to getting jwt token
        return JSON.parse(localStorage.getItem("jwt"));

    }
    else{
        return false;
    }
}