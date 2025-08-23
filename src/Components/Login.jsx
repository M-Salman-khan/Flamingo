import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Login = () => {
    // const [loginAllow, setloginAllow] = useState(false)
    const handleLoginClick = (e) => {
        e.preventDefault();
        alert("Login Successfull! ")
        window.location.href("/")
    }
    // const handleSignUpClick = (e) => {
    //     e.preventDefault();
    //     setloginAllow(false);
    // }
    return (
        <>
            <Header />
            <div id='contactMe' style={{height:"90dvh"}}>
                <form className="form">
                <div className='headerOfLogin'>Log In</div>
                    <div className="mail">
                        <p>Email </p>
                        <input type="email" name="email" id="mail" required />
                    </div>
                    <div className="msg">
                        <p>Enter your password</p>
                        <input name="pwd" id="pwd" type='password'></input>
                    </div>
                    <div className="btn">
                        <button type="submit" className='loginBtn' onClick={handleLoginClick}>Log In</button>
                        <button className='signupBtn'>
                            <Link   to="/signup">Sign Up</Link>
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Login


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