// These imports are what my Spa function relies on to work properly and also for it to look nice and snazzy 
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import { UserContext } from './components/context'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// These import my different routes for the navbar as elements, makes the code cleaner
import Home from './routes/home';
import CreateAccount from './routes/createaccount';
import Login from './routes/login';
import Deposit from './routes/deposit';
import Withdraw from './routes/withdraw';
import AllData from './routes/alldata';


function Spa() {
  var timestamp = Date.now()
  var date = new Date(timestamp);

  var eventDate = date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()+
    ":"+date.getSeconds();
  console.log(eventDate);
  console.log("you're already inspecting my ~element~!? Buy me dinner first!")

  return(
    <HashRouter>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, history: [{action:"Initial", amount:100, balance: 100, eventDate}]}], currentUserIndex: null}}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="login" element={<Login/>} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="alldata" element={<AllData />} />
        </Route>
      </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
