const Contact = (props) =>
{
    return (

        <div className="contactContainer">
            <h3>Contact</h3>
            <p>Contact me, contact you.. ahaa, there is nothing we can do...</p>
            <form>
                <input type="text" value="Name" placeholder="Name"></input>
                <input type="email" value="Email"></input>
                <input type="text" value="Phone"></input>
                <textarea type="message" value="Message"></textarea>
                <button className="contactButton">Send message</button>
            </form>
        </div>
    );
}

export default Contact;