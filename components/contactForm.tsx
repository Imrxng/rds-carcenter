import React, { useState } from 'react'
import Input from './input'

const ContactForm = () => {
    const [mail, setMail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    return (
        <React.Fragment>
            <h2 id='title-contact'>Contact</h2>
            <Input label="Naam" name="Name" value={name} onChange={setName} />
            <Input label="E-mail" name="Email-form" type="email" value={mail} onChange={setMail} />
            <Input label="Onderwerp" name="Onderwerp" value={subject} onChange={setSubject} />
            <div className="input-group">
                <label htmlFor="Bericht">Bericht <span className='red'>*</span></label>
                <textarea name="Bericht" defaultValue={message} id="Bericht" onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <br />
            <button id='submit-form'>Verzenden</button>
        </React.Fragment>
    )
}

export default ContactForm;