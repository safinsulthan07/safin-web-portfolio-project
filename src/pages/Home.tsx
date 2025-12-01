import Skills from '../components/SkillsCard';
import './Home.css';
import skillsData from '../api/SkillsCard.json';

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h1>Hi,This is Safin Sulthan.N</h1>
          <p>
            Aspiring Artificial Intelligence and Data Science Student <br></br>
            at Central University of Andhra Pradesh
          </p>
          <p>Excited to Learn Web Development</p>
          <a href="/resume.pdf" download={'./resume.pdf'}>
            <button>Resume</button>
          </a>
        </div>
        <div className="hero-right">
          <img src="/mine.jpeg" alt="Safin" />
        </div>
      </div>
      <div className="skills">
        <h2>MY SKILLS</h2>
        <div className="skills-cards">
          {skillsData.map((item, index) => (
            <Skills
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
