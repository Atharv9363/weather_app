import React, { useState } from 'react';
import axios from 'axios';
import serverUrl from '../config';
import { useNavigate } from 'react-router-dom';
import cloud from '../assets/cloud.png';
import { motion } from 'framer-motion';

const Form = () => {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCity('');

        try {
            const response = await axios.post(`${serverUrl}/`, { city });

            if (response.data.cod === '404') {
                alert('City name is incorrect.');
            } else {
                navigate('/weather', { state: { data: response.data } });
            }
        } catch (error) {
            alert('Enter Correct city name.');
        }
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (/^\d+$/.test(inputValue)) {
            // If the input value contains only digits, do not update state
            return;
        }
        setCity(inputValue);
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-teal-300'>
            <div className='w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 bg-white rounded-lg shadow-md p-8'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='text-center text-4xl md:text-5xl font-bold text-teal-600 mb-6'>
                        Weather App
                    </h1>
                </motion.div>
                <div className='w-full flex justify-center items-center mb-6'>
                    <motion.img
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        src={cloud}
                        alt='Cloud'
                        className='w-1/2 sm:w-1/4'
                    />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col items-center'
                >
                    <input
                        className='border border-gray-300 rounded-md px-4 py-3 w-full mb-3 focus:outline-none focus:ring focus:border-teal-500'
                        type='text'
                        value={city}
                        onChange={handleInputChange}
                        placeholder='Enter city name'
                        required
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='rounded-md bg-teal-600 text-white px-6 py-3 w-full max-w-xs hover:bg-teal-700 transition duration-300'
                    >
                        Get Weather
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default Form;
