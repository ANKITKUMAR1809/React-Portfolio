import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <section id="contact">
            <div className='contact-img'>
                <img src="https://dlzibc868dsjl.cloudfront.net/contact-assets/contact.png" alt="" />
            </div>
            <div className="contact" >
                <div className="phead">
                    <h1>CONTACT</h1>
                </div>
                <form action="https://formspree.io/f/mrgnaezk" method="POST">
                    <div>
                        <input type="text" placeholder="Name" name="username"/>
                            <input type="email" name="email" placeholder="Email"/>
                    </div>
                            <textarea name="message" placeholder="Message"></textarea>
                            <button type="submit">Send</button>
                </form>
                        <div className="contact-link">

                            <a href="https://www.linkedin.com/in/sak1809" target="_blank"><i className="fa fa-linkedin"
                                style={{"fontSize":"30px"}}></i></a>
                            <a href="https://github.com/ANKITKUMAR1809" target="_blank"><i className="fa fa-github"
                                style={{"fontSize":"30px"}}></i></a>
                            <a href="mailto:ankitkumar1878@gmail.com" target="_blank"><i className="material-icons"
                                style={{"fontSize":"30px"}}>email</i></a>
                            <a href="https://www.youtube.com/@seshukiduniya" target="_blank"><i className="fa fa-youtube-play"
                                style={{"fontSize":"30px"}}></i></a>
                        </div>
                    </div>
                </section>
                )
}

                export default Contact