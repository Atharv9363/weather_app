import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WeatherData = () => {
    const { state } = useLocation();
    const { data } = state;
    const icon = data.weather[0].icon;
    const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 to-indigo-800'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12'
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='text-3xl md:text-4xl font-semibold text-center mb-4 text-purple-800'
                >
                    {data.name}, {data.sys.country}
                </motion.h1>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='w-24 mx-auto mb-4'
                >
                    <img
                        key={data.id}
                        src={icon_url}
                        alt={data.weather[0].main}
                        className='w-full'
                    />
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='text-center font-bold text-lg md:text-xl text-purple-800 mb-6'
                >
                    {data.weather[0].description}
                </motion.h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='text-center'>
                        <h1 className='font-semibold text-purple-600'>Temperature</h1>
                        <p className='text-xl md:text-2xl text-purple-800'>{data.main.temp}°C</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='font-semibold text-purple-600'>Humidity</h1>
                        <p className='text-xl md:text-2xl text-purple-800'>{data.main.humidity}%</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='font-semibold text-purple-600'>Feels Like</h1>
                        <p className='text-xl md:text-2xl text-purple-800'>{data.main.feels_like}°C</p>
                    </div>
                </div>
                <div className='mt-8 text-center'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={back}
                        className='bg-purple-600 px-6 py-2 rounded-lg text-lg md:text-xl text-white hover:bg-purple-700 transition duration-300'
                    >
                        Back
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default WeatherData;
