import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useAdminContext } from "../hooks/useAdminContext";
import { RegInput } from "../components";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { data, error, isPending, postData } = useFetch("/api/v1/admin/create");
  const { dispatch } = useAdminContext();
  const inputFields = [
    {
      label: "name",
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
    postData({
      name,
      password,
    });
    dispatch({ type: "LOGIN" });
    localStorage.setItem("userData", JSON.stringify(data));
  };

  return (
    <div>
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
        {!isPending ? (
          <button type="submit">It's mine!</button>
        ) : (
          <button type="submit" disabled>
            loading...
          </button>
        )}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterForm;
