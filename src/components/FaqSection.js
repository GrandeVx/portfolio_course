import React, {useState} from 'react';
import styled from 'styled-components';
import {About} from '../style';

import Toggle from './Toggle';

import  {AnimateSharedLayout} from 'framer-motion';

import { fade } from '../animations';
import {useScroll} from './useScroll';

const FaqSection = () => {

    const [faqToggle,setFaqToggle] = useState(false);
    const [element,controls] = useScroll();
    


        return (

            <Faq variants={fade} animate={controls} initial="hidden" ref={element}>

                <h2>Any Questions <span>FAQ</span></h2>
                <AnimateSharedLayout >
                    <Toggle title='How Do I Start?'>

                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Fugiat asperiores 
                            </p>
                        </div>

    
                    
                    </div>

                    </Toggle>

                    <Toggle title='What Products do you offers'>
                    <div className="question">
                
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Fugiat asperiores 
                            </p>
                        </div>

    

                    </div>
                    </Toggle>

                    <Toggle title='Daily Schedure'>
                    <div className="question">

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Fugiat asperiores 
                            </p>
                        </div>



                    </div>
                    </Toggle>

                    <Toggle title='Diffrent Payments'>
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Fugiat asperiores 
                            </p>
                        </div>

    

                    </div>
                    </Toggle>

                </AnimateSharedLayout>

            </Faq>

        );

}

const Faq  = styled(About)`

    display: block;

        span {
            display: block;
        } ;

        h2 {
            padding-bottom: 2rem;
            font-weight: lighter;
        };

        .faq-line {
            background: #cccccc;
            height: .2rem;
            margin: 2rem 0rem;
            width: 100%;
        }

        .question {
            padding: 3rem 0rem;
            cursor: pointer;
        }

        .answer {
            padding: 2rem 0rem;

            p{
                 padding: 1rem 0rem;
            }
        }

`


export default FaqSection;