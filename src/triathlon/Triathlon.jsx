import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import './Triathlon.scss';

import Table from './Table.jsx';
import Row from './Row.jsx';

const logo = new URL('triathlon.svg', import.meta.url);
const meonground = new URL('./2023-pics/meonground.jpeg?quality=25', import.meta.url);
const baystatestage = new URL('./2023-pics/baystatestage.jpeg', import.meta.url);
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

                 <div align='center'>
                   <img src={ meonground }
                        alt='Kyle sitting on the ground after the race'
                        width='100%' className='shadow my-4 rounded'/>
                 </div>

                 <div className='pt-2'>
                   <h6 className='display-6'>
                     I Finished!
                   </h6>
                   <p>
                     Huge thank you to everyone who came out and to everyone who's supported me through
                     this endeavor. I might not have expressed it to everyone, but this race was really
                     important to me and your words of encouragement and support were a real boon. Towards
                     the end of the run I almost cried at the thought that I was actually going to finish,
                     and that there'd be people at the finish line (and remote) waiting to celebrate with me.
                   </p>
                   <p>
                     This was my first olympic distance triathlon and it took a lot of
                     work to get here. The race was hard but I'm incredibly proud. I've dealt with
                     several injuries and set-backs over the last two years and I'm grateful
                     to come away from this race feeling exhausted but healthy. We'll see how I feel tomorrow
                     morning, but today I'm just glad my knees and hips appear to be in one piece.
                   </p>
                   <p>
                     Again, thank you everyone. It means a lot 🙂
                   </p>
                 </div>

                 <div align='center'>
                   <img src={ logo }
                        alt='Triathlon logo'
                        width='250'
                        height='150'
                        style={{ objectFit: "cover" }} />
                 </div>

                 <div>
                   <h5 className='display-5'>
                     Thanks Bay State!
                   </h5>
                   <p>
                     Huge thanks to Emily and the wonderful people at Bay State Physical Therapy in Beverly!
                     Without them I'd still be in a whole lot of pain and I certainly wouldn't be able to do this
                     race. Thank you to Jen for letting me borrow her shirt to race in. You'll get it back freshly
                     laundered, I promise.
                   </p>
                   <p>
                     If you're in need of physical therapy I can't recommend these people enough. They're fantastic
                     to work with and incredibly helpful.
                   </p>
                   <p>
                     Thanks again 😊
                   </p>
                   <div align='center'>
                     <img src={ baystatestage }
                          alt='Kyle in a Bay State Physical Therapy T-Shirt posing on the stage.'
                          width='100%' className='shadow my-4 rounded'/>
                   </div>
                 </div>

                 <div>
                   <Table title='Results'>
                     <Row title='Start Time'>
                       7:22:02 AM
                     </Row>
                     <Row title='End Time'>
                       10:30:04 AM
                     </Row>
                     <Row title='Total Time (HH:MM:SS)'>
                       3:08:03
                     </Row>
                     <Row title='Swim (0.93 mile)'>
                       37:06 (2:34 min/100m)
                     </Row>
                     <Row title='Transition 1 Time'>
                       5:07
                     </Row>
                     <Row title='Bike (21.7 miles)'>
                       1:27:00 (14.41 mph)
                     </Row>
                     <Row title='Transition 2 Time'>
                       1:37
                     </Row>
                     <Row title='Run (6.2 miles)'>
                       57:15 (9:30 min/mile)
                     </Row>
                   </Table>
                 </div>

                 <div >
                   <h5 className='display-5'>
                     Pictures
                   </h5>
                   <p>
                     I got a bunch of great photos from family, friends, and photographers around the course!
                     Thanks everybody!
                   </p>
                   <a href="https://photos.app.goo.gl/8RESNyDBw7MDPMKm8"
                      target="_blank">
                     Link to the photo album
                   </a>
                   <hr />
                 </div>

                 <div>
                   <h5 className='display-5 pb-2'>
                     Course Maps
                   </h5>
                   <div align='center' className='pb-2'>
                     <img src={ swimmap }
                          alt='Swimming course map'
                          width='100%' className='shadow-sm rounded mb-2' />
                     <img src={ bikemap }
                          alt='Biking course map'
                          width='100%' className='shadow-sm rounded mb-2' />
                     <img src={ runmap }
                          alt='Running course map'
                          width='100%' className='shadow-sm rounded mb-2' />
                     <img src={ venuemap }
                          alt='Venue map'
                          width='100%' className='shadow-sm rounded mb-2' />
                   </div>
                 </div>

                 <p className='text-center'>
                   Thanks again everyone for a great year 😁
                 </p>

               </div>
             </div>
           </div>
         </StrictMode>
}

createRoot(document.getElementById('app')).render(<Triathlon />);
