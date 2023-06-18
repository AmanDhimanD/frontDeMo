import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [cursorVisible, setCursorVisible] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoveredTextColor, setHoveredTextColor] = useState('');
    const [clickEffectVisible, setClickEffectVisible] = useState(false);
    const [clickEffectPosition, setClickEffectPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => {
            setCursorVisible(true);
        };

        const handleMouseLeave = () => {
            setCursorVisible(false);
            setHoveredTextColor('');
        };

        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const handleMouseOver = (event) => {
            const target = event.target;
            const color = window.getComputedStyle(target).color;
            setHoveredTextColor(color);
        };

        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const handleMouseDown = (event) => {
        setClickEffectVisible(true);
        setClickEffectPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseUp = () => {
        setClickEffectVisible(false);
    };

    const cursorStyle = {
        top: cursorPosition.y,
        left: cursorPosition.x,
        background: hoveredTextColor,
    };

    const clickEffectStyle = {
        top: clickEffectPosition.y,
        left: clickEffectPosition.x,
    };

    return (
        <>
            <div
                className={`touch-ball-cursor ${cursorVisible ? 'visible' : 'hidden'}`}
                style={cursorStyle}
            />
            {clickEffectVisible && (
                <div
                    className="click-effect"
                    style={clickEffectStyle}
                    onAnimationEnd={() => setClickEffectVisible(false)}
                />
            )}
            <div
                className="clickable-area"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            />
        </>
    );
};

export default Cursor;
