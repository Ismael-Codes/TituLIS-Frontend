import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Notifications from "./pages/Notifications.jsx";
import Statistics from "./pages/Statistics.jsx";
import Revision from "./pages/Revision.jsx";
import LogOut from "./pages/LogOut";



function App() {

  return (

    <div>
      <BrowserRouter>
          <Sidebar>
          <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/notifications" element={<Notifications/>}/>
              <Route path="/revision" element={<Revision/>}/>
              <Route path="/statistics" element={<Statistics/>}/>
              <Route path="/LogOut" element={<LogOut/>} className="LogOut" />
          </Routes>
          </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
