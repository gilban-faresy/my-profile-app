import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>If you'd like to get in touch, feel free to use the information below:</p>
            <div className="contact-info">
                <div className="contact-item">
                    <h2>Name:</h2>
                    <p>Muhammad Ikmal Gilban Faresy</p>
                </div>
                <div className="contact-item">
                    <h2>Email:</h2>
                    <p><a href="mailto:your.email@example.com">MuhammadikmalGF@gmail.com</a></p>
                </div>
                <div className="contact-item">
                    <h2>Phone:</h2>
                    <p><a href="tel:+1234567890">+69 85964228264</a></p>
                </div>
                <div className="contact-item">
                    <h2>Social Media:</h2>
                    <p>
                        <a href="https://www.linkedin.com/in/migfaresy/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                        <a href="https://github.com/gilban-faresy" target="_blank" rel="noopener noreferrer"> GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
