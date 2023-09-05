import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../Firebase/FirebaseUtility";

export const UserContext = createContext({
  CurrentUser: null,
  setCurrentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect((user) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
    });

    setCurrentUser(user);
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
