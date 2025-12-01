import './SkillsCard.css';
function Skills(props: any) {
  return (
    <div className="skills-card">
      <img src={props.image} className="skillimage" alt="{props.image}"></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
export default Skills;
