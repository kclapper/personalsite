import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import './CS210.scss';

import Header from '../components/Header';

import Slide from './Slide';

const instructions = new URL('./env-instructions.pdf', import.meta.url);
const folder = new URL('./cs210.zip', import.meta.url);

// Slides
const week1_s1 = new URL('./slides/week1-section1.pdf', import.meta.url);
const week1_s3 = new URL('./slides/week1-section3.pdf', import.meta.url);
const week2 = new URL('./slides/week2.pdf', import.meta.url);
const week3 = new URL('./slides/week3.pdf', import.meta.url);
const week4 = new URL('./slides/week4.pdf', import.meta.url);
const week5 = new URL('./slides/week5.pdf', import.meta.url);
const week6 = new URL('./slides/week6.pdf', import.meta.url);
const week7 = new URL('./slides/week7.pdf', import.meta.url);
const week8 = new URL('./slides/week8.pdf', import.meta.url);
const week9 = new URL('./slides/week9.pdf', import.meta.url);
const week10 = new URL('./slides/week10.pdf', import.meta.url);
const week11 = new URL('./slides/week11.pdf', import.meta.url);
const week12 = new URL('./slides/week12.pdf', import.meta.url);

export default function CS210() {
  return <StrictMode>
           <Header />
           <div className="container pt-4">
             <div className="row justify-content-center">
               <div className="col-lg-8">
                 <h6 className='display-6'>
                   Slides
                 </h6>
                 <ul>
                   <Slide href={ week1_s1 }>
                     Week 1 Section 1
                   </Slide>

                   <Slide href={ week1_s3 }>
                     Week 1 Section 3
                   </Slide>

                   <Slide href={ week2 }>
                     Week 2
                   </Slide>

                   <Slide href={ week3 }>
                     Week 3
                   </Slide>

                   <Slide href={ week4 }>
                     Week 4
                   </Slide>

                   <Slide href={ week5 }>
                     Week 5
                   </Slide>

                   <Slide href={ week6 }>
                     Week 6
                   </Slide>

                   <Slide href={ week7 }>
                     Week 7
                   </Slide>

                   <Slide href={ week8 }>
                     Week 8
                   </Slide>

                   <Slide href={ week9 }>
                     Week 9
                   </Slide>

                   <Slide href={ week10 }>
                     Week 10
                   </Slide>

                   <Slide href={ week11 }>
                     Week 11
                   </Slide>

                   <Slide href={ week12 }>
                     Week 12
                   </Slide>
                 </ul>
               </div>
             </div>
           </div>
         </StrictMode>
}

createRoot(document.getElementById('app')).render(<CS210 />);
