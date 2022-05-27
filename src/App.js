import React from 'react';
import reduxThunk from "redux-thunk";
import './App.css';
import HeaderNavbar from './components/HeaderNavbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

import LoadBoard from './pages/LoadBoard';

import history from './history'
// import Layout from './components/Layout';

// AUTH
import requireAuth from "./components/requireAuth";
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// DASHBOARD
import Dashboard from "./components/Dashboard";
import NewNewsletter from "./components/newsletter/newsletterNew";
import EditNewsletter from "./components/newsletter/newsletterEdit";
import NewsletterDetail from './components/newsletter/newsletterDetail';
// import RequestNew from "./components/request/requestsNew";
import NewRequest from './components/request/requestsNew';
// import { Header } from './components/header';
import Footer from './components/Footer';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(
  compose(
    (window.devToolsExtension ? window.devToolsExtension() : f => f)(
      createStore
    )
  )
);

const App = () =>{
  return (  
  <Router history={history}>
      <div className="app">
        <Provider store={createStoreWithMiddleware(reducers)}>
          <HeaderNavbar />
            <Routes>
              {/* <Layout>  */}
              <Route path='/' exact element={<Home/>} />
              <Route path='/service' exact element={<Services/>} />
              <Route path='/loardboad' exact element={<LoadBoard/>} />
              <Route path='/about' exact element={<About/>}/>
              <Route path='/contact' exact element={<Contact/>} />
              <Route path='/login' exact element={<Login/>}/>
              <Route path='/register' exact element={<Register/>}/>
              <Route path="/dashboard" element={requireAuth(<Dashboard/>)} />
              <Route path="/newsletter/new" component={requireAuth(<NewNewsletter/>)}/>
              <Route path="./components/newsletter/newsletterEdit.js:id"
                component={requireAuth(<EditNewsletter/>)}/>
              <Route path="./components/newsletter/newsletterDetail.js"
                component={requireAuth(<NewsletterDetail/>)}/>
              <Route path="./components/request/requestsNew.js" component={requireAuth(<NewRequest/>)} /> 
              {/* <Route path='/header' exact element={<Header/>}/> */}
             {/* </Layout> */}
          </Routes>
          <Footer />
      </Provider> 
    </div>
  </Router>
// ReactDOM.render(document.querySelectorAll("root"))
)}
export default App;