// eslint-disable-next-line react/prop-types
function Slikicka({ logo, url, alt }) {
  return (
    <a href={url} target="_blank">
      <img src={logo} className="logo" alt={alt} />
    </a>
  );
};

export default Slikicka; 