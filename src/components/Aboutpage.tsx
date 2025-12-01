function AboutData(props: any) {
  return (
    <div className="about-data">
      <h3>{props.section}</h3>
      <p>{props.description}</p>
    </div>
  );
}
export default AboutData;
