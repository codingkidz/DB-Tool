import React, { useState, useEffect } from 'react';

import QuestionsList from './components/QuestionsList';
import QuestionHeader from './components/QuestionHeader';
import { auth } from './services/firebase'
import { Router } from "@reach/router";

import { Welcome as LandingPage } from './pages/Welcome';
import { SignIn as LoginPage } from './pages/SignIn';

import { Units } from './pages/UnitPage';
import { Quiz } from './pages/Quiz';



const App: React.FC = () => {

  const [user, setUser] = useState<firebase.User>();
  const [loadingUser, setLoadingUser] = useState(true);
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Loaded App");
    }
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        if (process.env.NODE_ENV !== "production") {
          console.log("user logged in");
        }
        setUser(userAuth);
        setLoadingUser(false);
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.log("user logged out");
        }
        setUser(undefined);
        setLoadingUser(false);
      }
    });
  }, []);
  return !loadingUser ? (
    user ? (
      <Router>
        <LandingPage path="/" default />
        <Units path="/units" />
        <Quiz path="/quiz/:unit" />
      </Router>
    ) : (
        <Router>
          <LoginPage path="/login" default />
        </Router>
      )
  ) : (
      <p>Checking Login...</p>
    );
}

export default App;
