// styles
import { useState } from "react";
import "./Admin.css";
import { RegInput } from "../components";

const Admin = () => {
  // const [admin, setAdmin] = useState(false)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const inputFields = [
    {
      label: "text",
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
    <div className="login">
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
      </form>
    </div>
  );
};

export default Admin;
