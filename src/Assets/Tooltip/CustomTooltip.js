import React, { useState } from 'react';
import './CustomTooltip.css';

const CustomTooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="custom-tooltip-container">
            <div
                className="custom-tooltip"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            {showTooltip && <div className="custom-tooltip-text">{text}</div>}
        </div>
    );
};

export default CustomTooltip;
