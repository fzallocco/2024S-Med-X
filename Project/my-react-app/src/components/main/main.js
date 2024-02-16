import React from 'react';
import Navbar from '../navbar/navbar';
import Submain from '../submain/submain';

const Main = () => {
    return (
        <div className="h-screen w-screen bg-stone-900 justify-start items-center inline-flex">
        <Navbar/>
        <Submain/>
    </div>
    );
};

export default Main;
