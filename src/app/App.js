/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import store from './store/index';
import Home from '../feature/Home';
import About from '../feature/About';
import CreateArticle from '../feature/articles/createArticle/CreateArticleComponent';
import ProtectedRoutes from '../feature/protectedRoutes/ProtectedRoutesComponent';
import Nav from './routes/Nav';
import SignUp from '../feature/auth/signup/SignUpComponent';
import Login from '../feature/auth/login/LoginComponent';
import ForgotPassword from '../feature/Reset Password/forgot password/ForgotPasswordComponent';
import ResetPassword from '../feature/Reset Password/reset password/ResetPasswordComponent';
import SingleArticle from '../feature/article/getSingleArticle/ReadSingleArticleComponent';

toast.configure();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav />
        </header>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route
            path="/users/reset-password/:token"
            component={ResetPassword}
          />
          <ProtectedRoutes path="/Create" component={CreateArticle} />
          <Route path="/login" component={Login} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/articles/:slug" component={SingleArticle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
