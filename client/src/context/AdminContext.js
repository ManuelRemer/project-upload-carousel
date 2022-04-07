import { createContext, useEffect, useReducer, useCallback } from "react";

export const AdminContext = createContext();

const AdminReducer = (state, action) => {
  switch (action.type) {
    case "ADMIN_CHECK":
      return { ...state, admin: true, adminLogged: false, butter: "frisch" };
    case "LOGIN":
      return { ...state, adminLogged: true, admin: true };
    case "LOGOUT":
      return { ...state, adminLogged: false, admin: true };
    default:
      return state;
  }
};

export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, {
    admin: false,
    adminLogged: false,
    token: null,
    ready: false,
  });

  return (
    <AdminContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
