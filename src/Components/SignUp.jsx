import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const SignUp = () => {
    // const [loginAllow, setloginAllow] = useState(false)
    // const handleLoginClick = (e) => {
    //     e.preventDefault();
    //     setloginAllow(true);
    // }
    const handleLogin=(e)=>{
        e.preventDefault();
        window.location.href('/login')
    }
    const handleSignUpClick = (e) => {
        e.preventDefault();
        alert("Sign Up succefull")
        window.location.href('/login')
    }
    return (
        <>
            <Header />
            <div id='contactMe' style={{height:"90dvh"}}>
                <form className="form">
                <div className='headerOfLogin'>Sign Up</div>
                    <div className="name">
                        <div className="firstName">
                            <p>First Name </p>
                            <input type="text" required />
                        </div>
                        <div className="lastName">
                            <p>Last Name </p>
                            <input type="text" required />
                        </div>
                    </div>
                    <div className="mail">
                        <p>Email </p>
                        <input type="email" name="email" id="mail" required />
                    </div>
                  <div className="msg">
                        <p>Create your password</p>
                        <input name="pwd" className="pwd" type='password'></input>
                    </div>
                        <div className="msg">
                            <p>Confirm your password</p>
                            <input name="cnfPwd" id="cnfPwd" type='password'></input>
                        </div>
                       
                    <div className="btn">
                        <button className='loginBtn' onClick={handleLogin}>Log In</button>
                        <button type="submit" className='signupBtn' onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default SignUp


// import React from 'react'
// import Header from './Header'

// const Login = () => {
//   return (
//     <>
//     <Header/>
//     <div className="container my-10 h-dvh flex items-center justify-center">
//         <p className='text-2xl'>Oops ! We are currently working on this page</p>
//     </div>
//     </>
//   )
// }

// export default Login