import React, { useState } from 'react'
import './styles/accordian.css'

const Accordian = () => {
    const accordianItems = [
        { title: 'Section 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.' },
        { title: 'Section 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.' },
        { title: 'Section 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.' },
    ]
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div>
            <h1>Accordian</h1>
            <div className="accordion">
                {accordianItems.map((item, index)=>{
                    return(
                        <div key={index} className="accordian-item">
                            <div className="accordian-title" onClick={() => setOpenIndex(index)}>
                                <h2>{item.title}</h2>
                                <span>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && <p>{item.content}</p>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Accordian;
