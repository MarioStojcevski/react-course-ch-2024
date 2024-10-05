import "./Field.css";

const Field = ({ clickFieldHandler, index, element }) => {
  return (
    <button className="field-button" onClick={() => clickFieldHandler(index)}>
      {element}
    </button>
  );
};

export default Field;