import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components once
import NavBar from './components/NavBar';
import Home from './components/Home'; // Import Home component
import Login from './components/Login'; // Import Login component
import ReportMissing from './components/ReportMissing'; // Import ReportMissing component
import SignUp from './components/SignUp'; // Import SignUp component
import ContactPolice from './components/ContactPolice'; // Import ContactPolice component
import LandingPage from './components/LandingPage'; // Assuming this is your landing page component
import ViewMissing from './components/ViewMissing'; // Adjust the path as necessary
import AboutUs from './components/AboutUs';

const App = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<LandingPage />} /> {/* Landing page */}
                <Route path="/home" element={<Home />} /> {/* Home route */}
                <Route path="/view-missing" element={<ViewMissing />} /> {/* View Missing route */}
                <Route path="/report-missing" element={<ReportMissing />} /> {/* Report Missing route */}
                <Route path="/contact-police" element={<ContactPolice />} /> {/* Contact Police route */}
                <Route path="/login" element={<Login />} /> {/* Login route */}
                <Route path="/signup" element={<SignUp />} /> {/* Sign Up route */}
                <Route path="/about" element={<AboutUs />} /> {/* About Us route */}            
          </Routes>
        </Router>
    );
};

export default App;
