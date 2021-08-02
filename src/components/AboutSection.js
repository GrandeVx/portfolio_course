import React from 'react';
import home1 from '../img/home1.png';

// Frame Motion

import {motion} from 'framer-motion';
 
import {About,Description,Hide,Image} from '../style';

import {titleAnimation , fade , photoAnim} from '../animations'

import  Wave  from './Wave'

const AboutSection = () => {


    return (
    
        <About>
            <Description>
                <motion.div>

                    <Hide>
                        <motion.h2 variants={titleAnimation} >We Work to Make</motion.h2>
                    </Hide>


                    <Hide>
                        <motion.h2 variants={titleAnimation}> your <span>dreams</span> come </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>

                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have 
                professionals with amazing skills</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img  variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave/>
        </About>
    
    
    
    
    
    
    
    
    );



}

// style







export default AboutSection;



