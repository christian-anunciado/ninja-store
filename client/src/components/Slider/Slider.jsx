import React, { useEffect, useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Slider.scss"
import useOnScreen from '../../hooks/useOnScreen';
import { useRef } from 'react';
import { useOnTabFocused } from '../../hooks/useOnTabFocused';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    const isTabFocused = useOnTabFocused()

    useEffect(() => {
        if (isTabFocused) {
            if (isVisible) {
                const timer = setTimeout(() => {
                    nextSlide()
                    console.log("Running");
                }, 5000);
                return () => clearTimeout(timer);
            }
        } else {
        }
    }, [currentSlide, isVisible, isTabFocused]);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1835660/pexels-photo-1835660.jpeg?auto=compress&cs=tinysrgb&w=1600&h=3648&dpr=1",
        "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1600&h=3648&dpr=1"
        // "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }



    return (
        <div className="slider" ref={ref}>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider