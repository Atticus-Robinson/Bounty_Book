import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ProfileRequestForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5au0kpg', 'template_yy7za99', form.current, 'n9WQKxS1uwBdltTop')
            .then((result) => {
                alert('Thanks! We will review your application and respond within 72 hours')
            }, (error) => {
                alert('Sorry. Something went wrong. Please try again.')
            });
    }

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                {/* future idea: automatically select username  via id token */}
                <label for='username'>Username</label>
                <input type='text' name='username' id='username' required />
                <label for='email'>Email</label>
                <input type='text' name='email' id='email' required />
                <label for='region'>Locale</label>
                <input type='text' name='region' id='region' required />
                <label for='license'>License Number</label>
                <input type='text' name='license' id='license' />
                <label for='message'>Please take a moment to let us know why you would like to join.</label>
                <textarea name='message' id='message' required > </textarea>
                <input type='submit'  value='SEND' />

            </form>
        </>
    )
}

export default ProfileRequestForm;