import React, { useState } from 'react';

const Contact = () =>
{
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) =>
    {
        e.prevent.default();
        setStatus("Sending...");
        const { Name, Email, Phone, Message } = e.target.elements;
        let details = {
            name: Name.value,
            email: Email.value,
            phone: Phone.value,
            message: Message.value
        };
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    {
        return (

            <div className="contactContainer">
                <h3>Contact</h3>
                <p>Contact me, contact you.. ahaa, there is nothing we can do...</p>
                <form onSubmit={handleSubmit}>
                    <input onChange={ } type="text" id="Name" value="Name" placeholder="Name"></input>
                    <input type="email" id="Email" value="Email"></input>
                    <input type="text" id="Phone" value="Phone"></input>
                    <textarea id="Message" value="Message"></textarea>
                    <button className="contactButton">Send message</button>
                </form>
            </div>
        );
    }
}
export default Contact;