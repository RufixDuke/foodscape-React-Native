import React from "react";
import { MyStack, SignedOutStack } from "./navigator";
import { useState, useEffect } from "react";
import { firebase } from "./firebase";

const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const userhandler = (user) =>
        user ? setCurrentUser(user) : setCurrentUser(null);
    useEffect(
        () => firebase.auth().onAuthStateChanged((user) => userhandler(user)),
        []
    );
    return <>{currentUser ? <MyStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
