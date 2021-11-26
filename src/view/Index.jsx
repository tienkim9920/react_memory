import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Difficult from '../Component/Difficult';
import Easy from '../Component/Easy';
import Hard from '../Component/Hard';
import Intro from '../Component/Intro';
import Normal from '../Component/Normal';
import Terrible from '../Component/Terrible';

function Main(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Intro />}/>
                    <Route path="/easy" element={<Easy />}/>
                    <Route path="/normal" element={<Normal />}/>
                    <Route path="/hard" element={<Hard />}/>
                    <Route path="/difficult" element={<Difficult />}/>
                    <Route path="/terrible" element={<Terrible />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;