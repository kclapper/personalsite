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
           <div className="container-lg px-4 px-lg-0 pt-4">
             <div className="row justify-content-center">
               <div className="col-lg-8">
                 <h2 className='display-2 text-center'>
                   Boston Triathlon 2023!
                 </h2>
                 <hr />
                 <p>
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
                   with tacos. Specifically at <a href="https://goo.gl/maps/UnwGLxMdzSgRyahu5" target='_blank'>Loco Taqueria & Oyster Bar</a>.
                 </p>
                 <p>
                   While I'm actually running the race, people can
                   hangout at Carson beach. It'll
                   be a bit busy but you'll have a good view of the swim course and racers
                   in the transition area.
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
                     <a href='https://goo.gl/maps/rCLAu8hZCWjnTgvQ9' target='_blank'>
                       Map to here
                     </a>
                   </Row>
                   <Row title='Race Start Time'>
                     7:12am (Wave 3)
                   </Row>
                   <Row title='Est. Finish Time'>
                     10:30am (~3hr 15min total)
                   </Row>
                   <Row title='Forecast'>
                     <a href="https://weather.com/weather/weekend/l/6f03ddf87585ae5600e3dee28e519d788ddeb749efefa3f236796ef7167fc411"
                        target='_blank'
                        // className='btn btn-info text-white'
                        alt="Triathlon Weather">
                       Weather.com
                     </a>
                   </Row>
                   <Row title='Post Race Tacos'>
                     <a href="https://goo.gl/maps/UnwGLxMdzSgRyahu5">Loco Taqueria & Oyster Bar</a>
                   </Row>
                 </Table>

                 <p>
                   I'll arrive around 6:15pm and <strong>won't have my phone on me</strong>.
                   You'll be able to find me around the beach house near the starting line.
                 </p>
                 <p>
                   At time of writing (8/21/23 7:14pm) it looks like it's gonna rain
                   during the race. For the folks coming to spectate, it's likely not
                   gonna be a super nice beach day. I recommend checking out &nbsp;
                   <a href="https://www.google.com/maps/search/%22breakfast%22+OR+%22bar%22+OR+%22cafe%22/@42.3274212,-71.0554064,15.12z/data=!4m8!2m7!3m5!2sCarson+Beach,+Boston,+MA!3s0x89e37af64bec5499:0x450e8f0699e5bd61!4m2!1d-71.0475482!2d42.3261384!6e5?entry=ttu"
                      target='_blank'>
                     a local cafe or bar (if one's open)
                   </a> if you have time to kill before I finish the race.
                 </p>
                 <p>
                   On race day you'll be able to find a live results page
                   <a href="https://bostontri.com/results/" alt='Results page'> here</a>
                 </p>

                 {
                 //<div>
                 //  <strong>
                 //    Confirmed Attending
                 //  </strong>
                 //  <ul>
                 //    <li>
                 //      My parents
                 //    </li>
                 //    <li>
                 //      Sara
                 //    </li>
                 //    <li>
                 //      Steph
                 //    </li>
                 //    <li>
                 //      Genevra (Laura?)
                 //    </li>
                 //  </ul>
                 //  <p>
                 //    If you haven't already, definitely lmk if you're planning to go! I'll
                 //    be sure to keep you in the loop.
                 //  </p>
                 //</div>
                 }

                 <div className="w-75 text-center mx-auto">
                   <Table title='Race Order & Distances'>
                     <Row title='1) Swim'>
                       0.93 mile (1.5 km), ~35 min
                     </Row>
                     <Row title='2) Transition 1 (T1)'>
                       ~10 min
                     </Row>
                     <Row title='3) Bike'>
                       21.7 miles (35 km), ~1.5 hr
                     </Row>
                     <Row title='4) Transition 2 (T2)'>
                       ~5 min
                     </Row>
                     <Row title='5) Run'>
                       6.2 miles (10 km), ~55 min
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

                 <div>
                   <h5 className='display-5'>
                     Misc. Details
                   </h5>
                   <ul>
                     <li>
                       <a href="https://bostontri.com/" target='_blank'>
                         Race website
                       </a>
                     </li>

                     <li>
                       <a href="https://f978b82b-9429-400b-bdc6-0f714a14b86c.usrfiles.com/ugd/f978b8_79f541083e934c5d95a2fd752e70fe38.pdf" alt='Athlete Guide' target='_blank'>
                         Athlete Guide
                       </a>
                     </li>
                   </ul>
                 </div>

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
