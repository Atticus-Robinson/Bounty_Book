import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const BountyForm = () => {
    const form = useRef();

    addBounty () {
        //AddBountyAPI
    }


    return (
        <>
            <form ref={form} onSubmit={addBounty}>
                {/* future idea: automatically select username  via id token */}
                <label for='username'>Username</label>
                <input type='text' name='username' id='username' required />
                <label for='email'>Email</label>
                <input type='text' name='email' id='email' required />
                <label for='region'>Locale</label>
                <input type='text' name='region' id='region' required />
                <label for='bountyname'>Name</label>
                <input type='text' name='name' id='bountyname' />
                <label for='bounty'>Bounty Amount</label>
                <input type='text' name='bounty' id='bounty' />
                <label for='info'>Please provide details about the bounty.</label>
                <textarea name='info' id='info' required > </textarea>
                <input type='submit'  value='SEND' />

            </form>
        </>
    )
}