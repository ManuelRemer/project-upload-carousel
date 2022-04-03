// styles
import { useState } from "react";
import "./Admin.css";
import { RegInput } from "../components";

const Admin = () => {
  // const [admin, setAdmin] = useState(false)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  console.log(color);
  const inputFields = [
    {
      label: "site name",
      type: "text",
      value: name,
      handler: (i) => setName(i),
    },
    {
      label: "password",
      type: "password",
      value: password,
      handler: (i) => setPassword(i),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // postData({
    //   email: email,
    //   password: password,
    // });
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <div>
          {inputFields.map((field) => (
            <RegInput
              label={field.label}
              type={field.type}
              value={field.value}
              handleInput={field.handler}
              key={field.label}
            />
          ))}
        </div>
        {/* <SubmitButton
          // isPending={isPending} error={error}
          label="Login"
        /> */}
        <button type="submit">It's mine!</button>
      </form>
      <form>
        <RegInput
          label="color"
          type="color"
          value={color}
          handleInput={(e) => setColor(e)}
        />
        <div class="form-row">
          <label for="image" class="form-label">
            Image
          </label>
          <input type="file" id="image" accept="image/*"></input>
        </div>
      </form>
    </div>
  );
};

export default Admin;
