import React, { useState } from 'react'
import Counter from './Counter'
import Input from './Input'
import Navbar from '../Navbar/Navbar'
import MultipleInputFormStates from './MultipleInputFormStates'
import InsertHyephenAfterFourChar from './InsertHyephenAfterFourChar'
import StarRating from './StarRating'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginatedList from './PaginatedList'
import Modal from './Modal'
import ApiCall from './ApiCall'
import Accordian from './Accordian'
import ShareMarketCalculator from './ShareMarketCalculator '
import CounterForHOC from './CounterForHOC'
import TableWithExpend from './TableWithExpend'
import DebounceWithLoadContent from './DebounceWithLoadContent'
import CrudApp from '../CrudApp/CrudApp'
import CounterRedux from '../ReduxToolkitApp/CounterRedux'
import ReduxAPIData from '../ReduxToolkitApp/ReduxAPIData'
// import ContextAPI from '../ContextAPI/ContextAPI'



const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
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
                            <li>
                                <Link to="/PaginatedList">PaginatedList </Link>
                            </li>
                            <li><Link to="/ModalPopup" onClick={openModal}>Modal Popup </Link></li>
                            <li><Link to="/ApiCall" >ApiCall </Link></li>
                            <li><Link to="/Accordian" >Accordian </Link></li>
                            <li><Link to="/Profit-Loss" >ShareMarketCalculator </Link></li>
                            <li><Link to="/HOC" >HOC (Component)</Link></li>
                            <li><Link to="/TableWithExpend" >Table With Expand Column</Link></li>
                            <li><Link to="/DebounceWithLoadContent" >Debounce - Content Load when scroll</Link></li>
                            <li><Link to="/CrudApp" >CrudApp</Link></li>
                            {/* <li><Link to="/ContextAPI" >ContextAPI</Link></li> */}
                            <li><Link to="/React-Redux" >React-Redux</Link></li>
                            <li><Link to="/ReduxToolkit" >Redux Toolkit API Data</Link></li>
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
                        <Route path="/PaginatedList" element={<PaginatedList />} />
                        <Route path="/ModalPopup" element={<Modal isOpen={isModalOpen} onClose={closeModal} />} />
                        <Route path="/ApiCall" element={<ApiCall />} />
                        <Route path="/Accordian" element={<Accordian />} />
                        <Route path="/Profit-Loss" element={<ShareMarketCalculator/>} />
                        <Route path="/HOC" element={<CounterForHOC/>}/>
                        <Route path="/TableWithExpend" element={<TableWithExpend />} />
                        <Route path="/DebounceWithLoadContent" element={<DebounceWithLoadContent/>} />
                        <Route path="/CrudApp" element={<CrudApp/>} />
                        {/* <Route path="/ContextAPI" element={<ContextAPI/>} /> */}
                        <Route path="/React-Redux" element={<CounterRedux />} /> 
                        <Route path="/ReduxToolkit" element={<ReduxAPIData />} />
                    </Routes>
                </div>
            </Router>

        </div>
    )
}

export default Home
