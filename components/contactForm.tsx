import React, { useState } from 'react'
import Input from './input'

const ContactForm = () => {
    const [mail, setMail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = () => {
        setError('');
        setSuccess('');

        if (!name.trim()) {
            setError("Vul je naam in!");
            return;
        }
        if (!mail.trim() || !isValidEmail(mail)) {
            setError("Vul een geldig e-mailadres in!");
            return;
        }
        if (!subject.trim()) {
            setError("Vul een onderwerp in!");
            return;
        }
        if (!message.trim()) {
            setError("Vul een bericht in!");
            return;
        }

        console.log({ name, mail, subject, message });

        setName('');
        setMail('');
        setSubject('');
        setMessage('');
        setError('');
        setSuccess("Bericht succesvol verzonden!");
    }

    return (
        <React.Fragment>
            <h2 id='title-contact'>Contact</h2>
            <Input label="Naam" name="Name" value={name} onChange={setName} />
            <Input label="E-mail" name="Email-form" type="email" value={mail} onChange={setMail} />
            <Input label="Onderwerp" name="Onderwerp" value={subject} onChange={setSubject} />
            <div className="input-group">
                <label htmlFor="Bericht">Bericht <span className='red'>*</span></label>
                <textarea name="Bericht" value={message} id="Bericht" onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <div style={{ minHeight: '1.5rem', margin: '1rem 0' }}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </div>

            <button id='submit-form' onClick={handleSubmit}>Verzenden</button>
        </React.Fragment>
    )
}

export default ContactForm;
