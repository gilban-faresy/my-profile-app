import './About.css';
import profileImage from './assets/Faresy.jpg'; 

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                    Let me introduce myself, my name is Muhammad Ikmal Gilban Faresy. Born in Bogor on April 20 2007. I am the second child of three brothers. I study at Wikrama Vocational School majoring in PPLG.PPLG XI-4 rayon Cicurug 8. My father works as a religion lecturer and my mother works as a junior high school principal. My younger brother is an elementary school student and my older brother is a first semester college student
                    </p>
                </div>
                <div className="about-image-container">
                    <img src={profileImage} alt="Profile" className="about-profile-image" />
                </div>
            </div>
        </div>
    );
}

export default About;