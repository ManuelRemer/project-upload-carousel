import { AdminContext } from "../context/AdminContext";
import { useContext } from "react";

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within its provider");
  }

  return context;
};
