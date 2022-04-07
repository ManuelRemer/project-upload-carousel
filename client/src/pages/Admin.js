import { useEffect } from "react";
// styles
import "./Admin.css";

// custom stuff

import { useAdminContext } from "../hooks/useAdminContext";
import RegisterForm from "../components/RegisterForm";
import UploadForm from "../components/UploadForm";

const Admin = ({ handleAdmin }) => {
  // useCustomHooks + useContexts
  const { dispatch } = useAdminContext();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData")))
      dispatch({ type: "LOGIN" });
  }, [dispatch]);
  // clean up when component unmounts
  useEffect(() => {
    // if (JSON.parse(localStorage.getItem("userData")))
    //   dispatch({ type: "LOGIN" });
    return () => {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("userData");
    };
  }, [dispatch]);

  return (
    <div className="signup">
      <RegisterForm handleAdmin={handleAdmin} />
      <UploadForm />
      {/* <div>
        {imagesToUpload.map((image) => (
          <img src={image.image} alt="" />
        ))}
      </div> */}
    </div>
  );
};

export default Admin;
