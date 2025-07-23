import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Login = () => {
    const [loginAllow, setloginAllow] = useState(false)
    const handleLoginClick = (e) => {
        e.preventDefault();
        setloginAllow(true);
    }
    const handleSignUpClick = (e) => {
        e.preventDefault();
        setloginAllow(false);
    }
    return (
        <>
            <Header />
            <div id='contactMe' style={{height:"90dvh"}}>
                <form className="form">
                <div className='headerOfLogin'>{loginAllow?"Log In":"Sign Up"}</div>
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
                    {loginAllow ? (<div className="msg">
                        <p>Enter your password</p>
                        <input name="pwd" id="pwd" type='password'></input>
                    </div>) : (<><div className="msg">
                        <p>Create your password</p>
                        <input name="pwd" className="pwd" type='password'></input>
                    </div>
                        <div className="msg">
                            <p>Confirm your password</p>
                            <input name="cnfPwd" id="cnfPwd" type='password'></input>
                        </div></>)}
                    <div className="btn">
                        <button className='loginBtn' onClick={handleLoginClick}>Log In</button>
                        <button type="submit" className='signupBtn' onClick={handleSignUpClick}>Sign Up</button>
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