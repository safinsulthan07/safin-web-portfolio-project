import about from '../api/about.json';
import AboutData from '../components/Aboutpage';
import '../pages/AboutPage.css';
function About() {
  return (
    <div className="about-page">
      <h1>ABOUT ME</h1>
      <div className="section">
        {about.map((item, index) => (
          <AboutData
            key={index}
            section={item.section}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
export default About;
