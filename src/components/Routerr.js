import React from 'react';
import About from '../pages/About.js'
import Service from '../pages/Service.js';
import Contact from '../pages/Contact.js'
import Error from '../pages/Error.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.js';
function Routerr() {
  return <div>
       <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}> </Route>
                    <Route path="About" element={<About></About>}></Route>
                    <Route path="Service" element={<Service></Service>}></Route>      
                    <Route path="Contact" element={<Contact></Contact>}></Route>           
                    <Route path="*" element={<Error></Error>}></Route>
                </Routes>
        </BrowserRouter>
  </div>;
}

export default React.memo(Routerr);
