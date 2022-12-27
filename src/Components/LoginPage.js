import React from 'react';
import { useState} from 'react';
import "./LoginPage.css"




export default function LoginPage({checkLogged}) {

    const [inputText,setInputText]=useState({ 
        
        email:"",
        password:""
    });
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    
      const submitHandler = (e) => {
       e.preventDefault();
       setFormErrors(validate(inputText));
       setIsSubmit(true);
       checkLogged(isSubmit);
      
          
      };
    //   useEffect(() => {
        
    //     if(Object.keys(formErrors).length === 0 && isSubmit){
    //         console.log(inputText)


    //     }
    //   }, [formErrors]);
      const validate = (values)=>{
        const errors = {};
        
        
        if (!values.email){
            errors.email = "email is required"
        } 
        if (!values.password){
            errors.password = "password is required"
        } else if (values.password.length < 8){
            errors.password = "password must be 8 characters long"
        }
        return errors;

      }
        
        
      
      const inputEvent=(event)=>{
            
        const name=event.target.name; 
        const value=event.target.value;
        setInputText({ ...inputText, [name]: value});
      } 
  return (
    <div className='main'>
    
      <div className='lheader'>
        <h1 style={{color:"#287be8", fontSize:"58px",marginBottom:"0px",paddingBottom:"0px"}}>facebook</h1>
        <p id='lastpara' style={{fontSize:"28px"}}>Connect with friends and the world<br/> around you on Facebook</p>
      </div>
      <div className='lform' >
      
        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor='email'></label>
            <input id='email' type="email" name="email" placeholder="Email or phone number"
              autoComplete='off' value={inputText.email} onChange={inputEvent}
            /><br/>
            <p style={{color:" #FF0000"}}>{formErrors.email}</p>
            </div>
            

            <div>
            <label htmlFor='password'></label>
            <input id='password' type="password" name="password" placeholder="Password"
                autoComplete='off' value={inputText.password} onChange={inputEvent}
            /><br/>
            <p style={{color:" #FF0000"}}>{formErrors.password}</p>
            </div>
            
            
            <div>
            
            <button id='login' type="submit">Log In</button><br/><br/>
            </div>
            

            <a href='#' style={{color:"#287be8", textDecoration:"none"}}>Forget password?</a>

            <br/><br/>
            <hr size='1' style={{opacity:"0.3"}}/>
            <br/>

            <div>
            <button id='create'>Create new account</button>
            </div>
            

        </form>
        <br/>
        <p id='lastpara' style={{fontSize:"14px",marginLeft:"8%",fontWeight:"490"}}><a href='#' style={{textDecoration:"none",color:"black",fontWeight:"640"}}>Create a Page</a> for a celebrity, brand or business</p>
      </div>
    </div>
  )
}
