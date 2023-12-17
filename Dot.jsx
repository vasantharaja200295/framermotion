import React from 'react'
import { motion } from 'framer-motion';

const OFFSET = 4;
const ANIMATION_DURATION = 0.7;
const PAUSE_DURATION = 0.3;

const Dot = ({ color, time }) => {
    return (
        <div className=' relative'>
            <motion.div initial={{ x: 0, y: 0 }}
                animate={{ x: OFFSET, y: OFFSET }}
                transition={{
                    duration: ANIMATION_DURATION,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: time / 1000,
                    repeatDelay: PAUSE_DURATION
                }}
                className=' absolute w-8 h-8 rounded-full' 
                style={{backgroundColor:color}}/>

            <motion.div initial={{ x: 0, y: 0 }}
                animate={{ x: -OFFSET, y: -OFFSET }}
                transition={{
                    duration: ANIMATION_DURATION,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: time / 1000,
                    repeatDelay: PAUSE_DURATION
                }}
                className=' absolute w-8 h-8 rounded-full border' 
                style={{borderColor:color, backgroundColor:"#ffea328"}}/>
        </div>
    )
}

export default Dot