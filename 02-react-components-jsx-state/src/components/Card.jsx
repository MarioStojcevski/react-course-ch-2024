// eslint-disable-next-line react/prop-types
const Card = ({ name, logo, url, alt }) => {
  return (
    <div style={{ border: '2px solid #545454', borderRadius: '5px', margin: '5px', background: '#545454'}}>
      <a href={url} target="_blank">
        <img src={logo} className={`${name} logo`} alt={alt} />
      </a>
    </div>
  );
};

export default Card; 