import React from 'react'
import Counter from './Counter'
import Input from './Input'
import Navbar from '../Navbar/Navbar'
import MultipleInputFormStates from './MultipleInputFormStates'
import InsertHyephenAfterFourChar from './InsertHyephenAfterFourChar'
import StarRating from './StarRating'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>

            <Router>
                <div>
                    {/* Navigation Links */}
                    <nav className='navigation-main'>
                        <ul>
                            <li>
                                <Link to="/">Counter</Link>
                            </li>
                            <li>
                                <Link to="/input">Input</Link>
                            </li>
                            <li>
                                <Link to="/Navbar">Navbar</Link>
                            </li>
                            <li>
                                <Link to="/MultipleInputFormStates">MultipleInputFormStates</Link>
                            </li>
                            <li>
                                <Link to="/InsertHyephenAfterFourChar">Insert Hyephen After Four Char</Link>
                            </li>
                            <li>
                                <Link to="/StarRating">Star Rating</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Define Routes */}
                    <Routes>
                        <Route path="/" element={<Counter />} />
                        <Route path="/input" element={<Input />} />
                        <Route path="/Navbar" element={<Navbar />} />
                        <Route path="/MultipleInputFormStates" element={<MultipleInputFormStates />} />
                        <Route path="/InsertHyephenAfterFourChar" element={<InsertHyephenAfterFourChar />} />
                        <Route path="/StarRating" element={<StarRating />} />

                    </Routes>
                </div>
            </Router>

        </div>
    )
}

export default Home
