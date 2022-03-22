import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import app from "../realmApp";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(app.currentUser);
  //const [userGeocaches, setGeocaches] = useState([]);
  const realmRef = useRef(null);

  useEffect(() => {
    if (!user) {
      return;
    }

    const config = {
      sync: {
        user,
        partitionValue: `user=${user.id}`,
      },
    };

    Realm.open(config).then((userRealm) => {
      realmRef.current = userRealm;
      const users = userRealm.objects("Users");
      //const myGeocaches = { name: "My Geocaches", partition: `geocache=${user.id}` };
      //setGeocaches([myGeocaches]);

      //users.addListener(() => {
      //  if (users.length === 0) {
      //      setGeocaches([myGeocaches]);
      //  } else {
      //      const { ownsCache } = users[0];
      //      setGeocaches([...ownsCache]);
      //  }
      //});
    });

    return () => {
      const userRealm = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = null;
      //  setGeocaches([]);
      }
    };
  }, [user]);

  const signIn = async (email, password) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

  const signUp = async (email, password) => {
    await app.emailPasswordAuth.registerUser({ email, password });
  };

  const signOut = async (email, password) => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  //const deleteAccount = async

  //const updatePrivacy = async (username, privacy) => {
  //  realm.write(() => {
  //      user.privacy = privacy;
  //  }
  //  console.log('User')
  //}

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
        //userGeocaches,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error("useAuth() called outside of a AuthProvider");
  }
  return auth;
};

export { AuthProvider, useAuth };