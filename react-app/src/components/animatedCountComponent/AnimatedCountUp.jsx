import React, {useState} from 'react';
import './AnimatedCountUp.css';
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import Title from "../donation/General-Components/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons';
import {faHandsHoldingChild} from '@fortawesome/free-solid-svg-icons';
import {faKitMedical} from '@fortawesome/free-solid-svg-icons';
import {faScaleBalanced} from '@fortawesome/free-solid-svg-icons';


function AnimatedCountUp() {
    const [counter, setCounter] = useState(false)

    return (
        <>
            <Title title='The number of people we helped!'/>

            <div className='animated-count-section '>

                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <div className='animated-count-section'>
                        <div className='animated-count'>
                            <FontAwesomeIcon icon={faEarthAmericas} style={{fontSize: '60px'}} />
                            <Title subtitle="Help Nature" style={{fontsize: '16px', margin: '0', padding: '0'}}/>
                            {counter &&
                            <CountUp start={0} end={75000} duration={10} delay={0} style={{fontSize: '30px'}}/>}
                        </div>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <div className='animated-count-section'>
                        <div className='animated-count'>
                            <FontAwesomeIcon icon={faHandsHoldingChild} style={{fontSize: '60px'}}/>
                            <Title subtitle="Help Women" style={{fontsize: '16px', margin: '0', padding: '0'}}/>
                            {counter &&
                            <CountUp start={0} end={800000} duration={10} delay={0} style={{fontSize: '30px'}}/>}
                        </div>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <div className='animated-count-section'>
                        <div className='animated-count'>
                            <FontAwesomeIcon icon={faKitMedical}  style={{fontSize: '60px'}}/>
                            <Title subtitle="Medication Help" style={{fontsize: '16px', margin: '0', padding: '0'}}/>
                            {counter &&
                            <CountUp start={0} end={90000} duration={10} delay={0} style={{fontSize: '30px'}}/>}
                        </div>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <div className='animated-count-section'>
                        <div className='animated-count'>
                            <FontAwesomeIcon icon={faScaleBalanced} style={{fontSize: '60px'}}/>
                            <Title subtitle="Equality" style={{fontsize: '16px', margin: '0', padding: '0'}}/>
                            {counter &&
                            <CountUp start={0} end={60000} duration={10} delay={0} style={{fontSize: '30px'}}/>}
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </>
    )
}

export default AnimatedCountUp