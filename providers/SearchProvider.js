import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import app from "../realmApp";

const SearchContext = React.createContext(null);

const SearchProvider = ({ children }) => {
  const [user, setUser] = useState(app.currentUser);
  const realmRef = useRef(null);
  const [projectData, setProjectData] = useState([]);

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
      const users = userRealm.objects("User");
    });

    return () => {
      const userRealm = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = null;
      }
    };
  }, [user]);

  const searchUsers = async (searchName) => {
    return app.Users.find({ username: searchName }).toArray();
  };

};