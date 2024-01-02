import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutMe from './pages/AboutMe.jsx';
// import Project from './pages/Project.jsx';  // Check the correct file name here
// import Contact from './pages/Contact.jsx';
// import Resume from './pages/Resume.jsx';

import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
// import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App


// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/about" element={<AboutMe />} />
//         <Route path="/projects" element={<Project />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;