import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import './CS210.scss';

import Header from '../components/Header';

import Slide from './Slide';

export default function CS210() {
  return <StrictMode>
           <Header />
           <div className="container pt-4">
             <div className="row justify-content-center">
               <div className="col-lg-8 fs-3">
                 <h3 className='display-3'>
                   Slides
                 </h3>
                 <ul>
                   <Slide href="week1.pdf">
                     Week 1
                   </Slide>

                   <Slide href="week2.pdf">
                     Week 2
                   </Slide>

                   <Slide href="week3.pdf">
                     Week 3
                   </Slide>

                   <Slide href="week4.pdf">
                     Week 4
                   </Slide>

                   <Slide href="week5.pdf">
                     Week 5
                   </Slide>

                   <Slide href="week6.pdf">
                     Week 6
                   </Slide>

                   <Slide href="week7.pdf">
                     Week 7
                   </Slide>

                   <Slide href="week8.pdf">
                     Week 8
                   </Slide>

                   <Slide href="week9.pdf">
                     Week 9
                   </Slide>

                   <Slide href="week10.pdf">
                     Week 10
                   </Slide>

                   <Slide href="week11.pdf">
                     Week 11
                   </Slide>

                   <Slide href="week12.pdf">
                     Week 12
                   </Slide>

                   <Slide href="week13.pdf">
                     Week 13
                   </Slide>
                 </ul>
               </div>
             </div>
           </div>
         </StrictMode>
}

createRoot(document.getElementById('app')).render(<CS210 />);
