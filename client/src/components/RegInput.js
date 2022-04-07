import "./RegInput.css";

const RegInput = ({ label, type, value, handleInput, accept }) => {
  return (
    <div>
      <label>
        <span>{label}:</span>
        <input
          type={type}
          required
          value={value}
          onChange={(e) => {
            handleInput(e.target.value);
          }}
          accept={accept}
        />
      </label>
    </div>
  );
};

export default RegInput;
