import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/Users/User';
import Sidebar from './components/SideBar/index';
import SplashPage from './components/SplashPage/index.js';
import TaskView from './components/TaskView/index.js';
// import AddProjectForm from './components/AddProjectForm'

// import { authenticate } from "./services/auth";
import { authenticate } from './store/session';

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <NavBar />
          <SplashPage />
        </Route>
        <ProtectedRoute path="/dashboard" exact={true}>
          <NavBar />
          <Sidebar />
          <TaskView />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/add-project" exact={true}>
          <NavBar />
          <Sidebar />
          <AddProjectForm />
        </ProtectedRoute> */}
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        {/* <Redirect from="/" to="/dashboard" /> */}
        {/* <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
