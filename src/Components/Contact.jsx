import React from 'react'

const Contact = () => {
  return (
    <div id="contactMe">
        <div class="headTextContact">
            <p>Contact Us</p>
        </div>
        <div class="basicInfo">
            <p>
                <span>
                    123-456-7890 / info@mysite.com
                </span>
                <span>
                    500 Terry Francine Street San Francisco, CA 94158
                </span>
            </p>
        </div>
        <form class="form">
            <div class="name">
                <div class="firstName">
                    <p>First Name *</p>
                    <input type="text" required/>
                </div>
                <div class="lastName">
                    <p>Last Name *</p>
                    <input type="text" required/>
                </div>
            </div>
            <div class="mail">
                <p>Email *</p>
                <input type="email" name="email" id="mail" required/>
            </div>
            <div class="msg">
                <p>Write a message </p>
                <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <div class="btn">

                <button type="submit">Submit</button>

            </div>
        </form>
    </div>
  )
}

export default Contact