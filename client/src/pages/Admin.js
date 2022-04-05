import { useState, useEffect } from "react";
// styles
import "./Admin.css";
// components
import { RegInput } from "../components";
// custom stuff

import { useAdminContext } from "../hooks/useAdminContext";
import RegisterForm from "../components/RegisterForm";

const Admin = () => {
  // states

  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [imagesToUpload, setImagesToUpload] = useState([]);

  // useCustomHooks + useContexts

  const { adminLogged, admin, dispatch } = useAdminContext();

  console.log(admin);
  // clean up when component unmounts
  useEffect(() => {
    return () => {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("userData");
    };
  }, [dispatch]);

  return (
    <div className="signup">
      {!admin && <RegisterForm />}
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
