import React, { useState } from 'react';

const RingsItem = ({ name, description, price, image }) => {
    const [itemCount, setItemCount] = useState(0); // تتبع عدد العناصر

    return (
        <div className="Rings-item">
            <div className="Rings-item-img-container">
                <img className="Ring-item-image" src={image} alt="Ring" />
                {itemCount === 0 ? (
                    <button
                        className="add"
                        onClick={() => {
                            setItemCount(itemCount + 1);
                        }}
                    >
                        +
                    </button>
                ) : (
                    <div className="Ring-item-counter">
                        <button onClick={() => setItemCount(Math.max(itemCount - 1, 0))}>-</button>
                        <p>{itemCount}</p>
                        <button onClick={() => setItemCount(itemCount + 1)}>+</button>
                    </div>
                )}
            </div>

            <div className="Rings-item-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default RingsItem;
