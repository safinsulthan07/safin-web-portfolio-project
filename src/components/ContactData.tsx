function ContactData(props: any) {
  return (
    <div className="contact-data">
      <h3>{props.tittle}</h3>
      {props.tittle !== 'LinkedIn' && props.tittle !== 'Github' && (
        <h5>{props.value}</h5>
      )}
      {props.tittle === 'LinkedIn' && (
        <a href={props.value} target="_blank" rel="noopener noreferrer">
          {props.value}
        </a>
      )}

      {props.tittle === 'Github' && (
        <a href={props.value} target="_blank" rel="noopener noreferrer">
          {props.value}
        </a>
      )}
    </div>
  );
}
export default ContactData;
