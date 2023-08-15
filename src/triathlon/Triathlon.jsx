import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import './Triathlon.scss';

import Table from './Table.jsx';
import Row from './Row.jsx';

const logo = new URL('triathlon.svg', import.meta.url);
const finishline = new URL('./2023-pics/finishline.jpg', import.meta.url);
const venuemap = new URL('./2023-pics/venu-parking.png', import.meta.url);
const swimmap = new URL('./2023-pics/swim-course.png', import.meta.url);
const runmap = new URL('./2023-pics/run-course.png', import.meta.url);
const bikemap = new URL('./2023-pics/bike-course.png', import.meta.url);

export default function Triathlon() {
  return <StrictMode>
           <div className="container pt-4">
             <div className="row justify-content-center">
               <div className="col-lg-8">
                 <h2 className='display-2 text-center'>
                   Boston Triathlon 2023!
                 </h2>
                 <hr />
                 <p className="">
                   Hey folks! I'm doin' another triathlon this year and I'd
                   love it if you'd came to hang out 😁 I'd really appreciate
                   the support, especially at the end of the race as my
                   body sustains critical damage.
                 </p>
                 <p>
                   My race starts in the early morning and will take me
                   several hours to complete. So my idea is that people can
                   show up at any time, aiming to <strong>be there at the
                   end</strong>. If you can only come for the start/middle/end, it'll
                   still mean a lot to me. I really appreciate everyone who's
                   supported me over the last two years! 😊
                 </p>
                 <p>
                   After the race, we're drinking. Specifically tequila. Specifically
                   with tacos. Specifically at <a href="https://goo.gl/maps/UnwGLxMdzSgRyahu5">Loco Taqueria & Oyster Bar</a>.
                 </p>
                 <p>
                   While I'm actually running the race, people can
                   hangout at Carson beach (or Dorchester brewing company). The beach will
                   be a bit busy but you'll have a good view of the swim course and racers
                   in the transition area. I encourage you to bring beach games, and
                   as far as I can tell, there's no prohibition against day drinking.
                 </p>

                 <div align='center'>
                   <img src={ logo }
                        alt='Triathlon logo'
                        width='250'
                        height='150'
                        style={{ objectFit: "cover" }} />
                 </div>

                 <Table title='Logistics'>
                   <Row title='Date'>
                     Sunday August 27th, 2023
                   </Row>
                   <Row title='Location'>
                     Carson Beach, Boston MA <br/>
                     <a href='https://goo.gl/maps/rCLAu8hZCWjnTgvQ9'>
                       Map to here
                     </a>
                   </Row>
                   <Row title='Race Start Time'>
                     7:00am
                   </Row>
                   <Row title='Est. Finish Time'>
                     9:45am (~2hr 45min hours total)
                   </Row>
                   <Row title='Vibe'>
                     Beach casual
                   </Row>
                   <Row title='Post Race Tacos'>
                     <a href="https://goo.gl/maps/UnwGLxMdzSgRyahu5">Loco Taqueria & Oyster Bar</a>
                   </Row>
                 </Table>

                 <p>
                   If you haven't already, definitely lmk if you're planning to go! I'll
                   be sure to keep you in the loop.
                 </p>
                 <p>
                   Before the race starts, I'll be waiting by the beach house
                   near the starting line.
                 </p>
                 <p>
                   In the next week I'll pinpoint a more specific meeting location for people during
                   the race itself.
                 </p>

                 <div className="w-75 text-center mx-auto">
                   <Table title='Race Order & Distances'>
                     <Row title='1) Swim'>
                       0.93 mile (1.5 km)
                     </Row>
                     <Row title='2) Bike'>
                       21.7 miles (35 km)
                     </Row>
                     <Row title='3) Run'>
                       6.2 miles (10 km)
                     </Row>
                   </Table>
                 </div>

                 <p>
                   Here are maps of the venue and course:
                 </p>
                 <div align='center' className='pb-2'>
                   <img src={ venuemap }
                        alt='Venue map'
                        width='100%' className='shadow-sm rounded mb-2' />
                   <img src={ swimmap }
                        alt='Swimming course map'
                        width='100%' className='shadow-sm rounded mb-2' />
                   <img src={ bikemap }
                        alt='Biking course map'
                        width='100%' className='shadow-sm rounded mb-2' />
                   <img src={ runmap }
                        alt='Running course map'
                        width='100%' className='shadow-sm rounded mb-2' />
                 </div>

                 <Table title='Misc. Details'>
                   <Row title=<a href="https://bostontri.com/">
                       Race website
                   </a> />
                 </Table>

                 <div align='center'>
                   <img src={ finishline }
                        alt='Kyle crossing a finish line'
                        width='100%' className='shadow my-4 rounded'/>
                 </div>

                 <p>
                   See you there! 😁
                 </p>

               </div>
             </div>
           </div>
         </StrictMode>
}

createRoot(document.getElementById('app')).render(<Triathlon />);
