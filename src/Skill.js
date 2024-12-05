import './Skill.css';
import htmlLogo from './assets/Html.png'; 
import cssLogo from './assets/Css.png'; 
import phpLogo from './assets/Php.png';
import laravelLogo from './assets/Laravel.png'; 

function Skill() {
    const skills = [
        { name: "HTML", description: "Hypertext Markup Language for structuring web pages.", logo: htmlLogo },
        { name: "CSS", description: "Cascading Style Sheets for styling and layouts.", logo: cssLogo },
        { name: "PHP", description: "Server-side scripting language for web development.", logo: phpLogo },
        { name: "Laravel", description: "PHP framework for building robust web applications.", logo: laravelLogo },
    ];

    return (
        <div className="skill-container">
            <h1>My Skills</h1>
            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                        <h2>{skill.name}</h2>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skill;
