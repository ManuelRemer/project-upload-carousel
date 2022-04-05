import { useState, useEffect } from "react";
// styles
import "./Admin.css";
// components
import { RegInput } from "../components";
// custom stuff
import { useFetch } from "../hooks/useFetch";
import { useAdminContext } from "../hooks/useAdminContext";

const Admin = () => {
  // states
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [imagesToUpload, setImagesToUpload] = useState([]);

  // useCustomHooks + useContexts
  const { data, error, isPending, postData } = useFetch("/api/v1/admin/create");
  const { adminLogged, admin, dispatch } = useAdminContext();

  console.log(admin);
  // clean up when component unmounts
  useEffect(() => {
    return () => {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("userData");
    };
  }, [dispatch]);

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
    postData({
      name,
      password,
    });
    dispatch({ type: "LOGIN" });
    localStorage.setItem("userData", JSON.stringify(data));
  };

  return (
    <div className="signup">
      {!admin && (
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
          <button type="submit">It's mine!</button>
        </form>
      )}
      {adminLogged && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setImagesToUpload([...imagesToUpload, { color, image }]);
            setColor("");
            setImage("");
          }}
        >
          <RegInput
            label="color"
            type="color"
            value={color}
            handleInput={(e) => setColor(e)}
            required
          />
          <RegInput
            label="image"
            type="file"
            value={image}
            handleInput={(e) => {
              const selected = e;
              setImage(selected);
            }}
            accept="image/*"
            required
          />
          <button type="submit">Add image</button>
        </form>
      )}
      {/* <div>
        {imagesToUpload.map((image) => (
          <img src={image.image} alt="" />
        ))}
      </div> */}
    </div>
  );
};

export default Admin;
