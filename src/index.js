// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import HomePage from './Components/HomePage';
// import Login from './Components/Login';

// function checkAuth(nextState, replaceState) {
//   let { loggedIn } = true;
// }

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="/home" component={HomePage} />
//       <Route onEnter={checkAuth}>
//         <Route path="/login" component={Login} />
//       </Route>
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
