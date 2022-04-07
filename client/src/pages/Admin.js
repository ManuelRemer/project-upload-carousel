import { useEffect } from "react";
// styles
import "./Admin.css";
// custom stuff
import { useAdminContext } from "../hooks/useAdminContext";
// components
import RegisterForm from "../components/RegisterForm";
import UploadForm from "../components/UploadForm";

const Admin = ({ handleAdminExists, adminExists }) => {
  // useCustomHooks + useContexts
  const { dispatch } = useAdminContext();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData")))
      dispatch({ type: "LOGIN" });
  }, [dispatch]);

  // clean up when component unmounts
  useEffect(() => {
    return () => {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("userData");
    };
  }, [dispatch]);

  return (
    <div className="signup">
      {!adminExists && <RegisterForm handleAdminExists={handleAdminExists} />}
      {adminExists && <UploadForm />}
      {/* <div>
        {imagesToUpload.map((image) => (
          <img src={image.image} alt="" />
        ))}
      </div> */}
    </div>
  );
};

export default Admin;
