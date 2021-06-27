import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SplashPage from './components/SplashPage/index.js';
import Dashboard from './components/Dashboard/index';
import { authenticate } from './store/session';

function App() {
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

// Updates

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <NavBar />
          <SplashPage />
        </Route>
        <ProtectedRoute path="/dashboard" exact={true}>
          <NavBar />
          <Dashboard />
          {/* <Sidebar />
          <TaskView /> */}
        </ProtectedRoute>
        {/* <ProtectedRoute path="/add-project" exact={true}>
          <NavBar />
          <Sidebar />
          <AddProjectForm />
        </ProtectedRoute> */}
        <Route path="/login" exact={true}>
          <NavBar />
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <NavBar />
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
