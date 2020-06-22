import React from 'react';
import { RouteComponentProps, useNavigate } from "@reach/router";
import { signOut } from "../services/firebase";

interface Props extends RouteComponentProps { }

export const Welcome: React.FC<Props> = () => {
    const navigate = useNavigate();

    const logOut = () => {
        signOut().then(() => console.log("signed out"));
    };

    const goToUnits = () => {
            navigate('/units');
            console.log('tried to navigate to /units')
    }

    return (
        <div>
            <p>Login successful</p>
            <button onClick={logOut}>Logout</button>
            <br></br>
            <button onClick={goToUnits}>View Units</button>
        </div>
    );
}