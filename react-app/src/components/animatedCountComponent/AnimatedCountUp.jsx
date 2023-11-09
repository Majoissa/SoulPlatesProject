import React, {useState} from 'react';
import './AnimatedCountUp.css';
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import Title from "../donation/General-Components/Title";



function AnimatedCountUp() {
    const [counter, setCounter] = useState(false)

    return (
        <>
            <Title title='The number of people we helped!'/>

            <div className='animated-count-section '>

                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <div className='animated-count-section'>
                        <div className='animated-count'>
                            {counter && <CountUp start={0} end={1000} duration={10} delay={0} style={{fontSize:'30px'}}/>}
                            <Title subtitle="Kids!" style={{fontsize: '16px', margin: '0', padding: '0'}}/>
                        </div>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <div className='animated-count-section'>
                        <div className='animated-count'>
                            {counter && <CountUp start={0} end={1000} duration={10} delay={0} style={{fontSize:'30px'}}/>}
                            <Title subtitle="Women!" style={{fontsize: '16px', margin: '0', padding: '0'}}/>
                        </div>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <div className='animated-count-section'>
                        <div className='animated-count'>
                            {counter && <CountUp start={0} end={1000} duration={10} delay={0} style={{fontSize:'30px'}}/>}
                            <Title subtitle="Education!" style={{fontsize: '16px', margin: '0', padding: '0'}}/>
                        </div>
                    </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <div className='animated-count-section'>
                        <div className='animated-count'>
                            {counter && <CountUp start={0} end={1000} duration={10} delay={0} style={{fontSize:'30px'}}/>}
                            <Title subtitle="kids!" style={{fontsize: '16px', margin: '0', padding: '0'}}/>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </>

    )
}

export default AnimatedCountUp