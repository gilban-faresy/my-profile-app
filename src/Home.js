import './Home.css'
import profileImage from './assets/Faresy.jpg'; // Ganti path sesuai lokasi gambar Anda

function Home(){
    return(
        
        <div className="home-container">
            <div className="photo-section">
                <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
            <div className="welcome-section">
                <h1>Welcome to My Website</h1>
                <p>
                currently on the home page if you are interested please find out more about me
                </p>
            </div>
        </div>
    );
}

export default Home;