import React from 'react'
import './contactuscard.css'
import Typewriter from 'typewriter-effect';
import pic from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import youtube from '../../assets/youtube.png'

const ContactUsCard = () => {
    return (
        <>
            <section id="contact">
                <div class="contact-box">
                    <div class="contact-form-wrapper">
                        <h2 className='h2-css-contactpage h2-gradient-contact'> <Typewriter
                            options={{
                                strings: ['Contact Us', 'Ask your query'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </h2>
                        <img src={pic} className='img_email img-css-contact'></img>
                        <a href="mailto:Abhinav@crackdsa.com"><button class="submit-btn">Send us an email</button></a>

                    </div>
                    <div class="contact-links">
                        <h2 className='message_h2 h2-css-contactpage'>Follow us on.</h2>
                        <div class="links">
                            <div class="link">
                                <a><img src={linkedin} className="img-css-contact" alt="linkedin" /></a>
                            </div>
                            <div class="link">
                                <a><img src={instagram} className="img-css-contact" alt="github" /></a>
                            </div>
                            <div class="link">
                                <a><img src={github} className="img-css-contact" /></a>
                            </div>
                            <div class="link">
                                <a><img src={youtube} className="img-css-contact" alt="linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUsCard