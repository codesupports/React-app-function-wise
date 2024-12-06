import React, { useState } from 'react'

const StarRating = () => {
    const [star, setStar] = useState(0);
    const [hoverStar, setHoverStar] = useState(0);

    return (
        <div >
            <div className='startRating'>
                {
                    [...Array(5)].map((_, index) => {
                        return (
                            <span
                                key={index}
                                className={`${index + 1 <= star ? 'active' : ''} ${index + 1 <= hoverStar ? 'active' : ''}`}
                                onClick={() => setStar(index + 1)}
                                onMouseOver={() => { setHoverStar(index + 1) }}
                                onMouseOut={() => { setStar(0) || setHoverStar(0) }}
                            >
                                &#9733;
                            </span>
                        )
                    })
                }
            </div>
            <h1>Rating : {star || hoverStar}</h1>
        </div>
    )
}

export default StarRating
