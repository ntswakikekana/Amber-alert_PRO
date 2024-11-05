import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const ContactPolice = () => {
  const [location, setLocation] = useState('');
  const [policeContact, setPoliceContact] = useState('');
  const [error, setError] = useState(''); // For handling errors
  const [loading, setLoading] = useState(false); // For loading state

  const handleSearchPolice = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPoliceContact('');

    try {
      // Replace with your actual endpoint
      const response = await axios.get(`/api/police-contacts?location=${location}`);
      
      if (response.data && response.data.contactInfo) {
        setPoliceContact(response.data.contactInfo);
      } else {
        setPoliceContact('No contact information available for this location.');
      }
    } catch (err) {
      setError('Error fetching police contact information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 min-h-screen flex flex-col">
      <div className="flex flex-col items-center text-white my-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Local Authorities</h1>

        <p className="italic text-lg text-center mb-6 max-w-3xl">
          Amber Alert PRO helps you contact local authorities to report or gather information on missing persons 
          quickly based on your location.
        </p>

        <div className="w-full max-w-xl bg-white bg-opacity-10 p-6 rounded-lg">
          <form onSubmit={handleSearchPolice}>
            <div className="mb-4">
              <label className="block text-white text-lg font-semibold mb-2" htmlFor="location">
                Enter Your Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white"
                placeholder="e.g. New York"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300"
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Search Police Contact'}
              </button>
            </div>
          </form>

          {error && <p className="text-red-500 mt-4">{error}</p>}
          {policeContact && !loading && (
            <div className="mt-6 bg-white bg-opacity-10 p-4 rounded text-center">
              <h2 className="text-xl font-semibold">Police Contact Information</h2>
              <p className="text-lg">{policeContact}</p>
            </div>
          )}
        </div>
      </div>

      <footer className="bg-blue-600 w-full py-6 text-center text-white mt-auto">
        <p>© 2024 Amber-alert PRO. All rights reserved.</p>
        <p>Contact us at: info@amberalertpro.com</p>
      </footer>
    </div>
  );
};

export default ContactPolice;
