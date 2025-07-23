import React from 'react'

const Contact = () => {
  return (
    <div id="contactMe">
        <div className="headTextContact">
            <p>Contact Us</p>
        </div>
        <div className="basicInfo">
            <p>
                <span>
                    123-456-7890 / info@mysite.com
                </span>
                <span>
                    500 Terry Francine Street San Francisco, CA 94158
                </span>
            </p>
        </div>
        <form className="form">
            <div className="name">
                <div className="firstName">
                    <p>First Name *</p>
                    <input type="text" required/>
                </div>
                <div className="lastName">
                    <p>Last Name *</p>
                    <input type="text" required/>
                </div>
            </div>
            <div className="mail">
                <p>Email *</p>
                <input type="email" name="email" id="mail" required/>
            </div>
            <div className="msg">
                <p>Write a message </p>
                <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <div className="btn">

                <button type="submit">Submit</button>

            </div>
        </form>
    </div>
  )
}

export default Contact