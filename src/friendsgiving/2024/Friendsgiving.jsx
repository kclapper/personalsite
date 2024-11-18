import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import './Friendsgiving.scss';

import Table from '../../components/Table.jsx';
import Row from '../../components/Row.jsx';

const logo = new URL('friendsgiving.svg', import.meta.url);
const parking = new URL('parking.png', import.meta.url);

export default function Friendsgiving() {
  return <StrictMode>
           <div className="container-lg px-4 px-lg-0 pt-4">
             <div className="row justify-content-center">
               <div className="col-lg-8">
                 <h2 className='display-2 text-center'>
                    FriendsGiving 2024!
                 </h2>
                 <hr />

                 <div>
                   <Table title='Details'>
                     <Row title='When'>
                        Saturday November 23rd at 6:00pm&nbsp; 
                        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20241123T230000Z%2F20241124T040000Z&location=200%20MassMills%20Drive%2C%20Apt%20610%2C%20Lowell%2C%20MA&text=FriendsGiving">
                          Add to Google Calendar
                        </a>
                     </Row>
                     <Row title='Where'>
                       <a href='https://maps.app.goo.gl/Jh5zA3c5vvVyBPDe9'>200 MassMills Drive, Apt 610, Lowell MA, 01852</a>
                     </Row>
                   </Table>
                 </div>

                 <div className='pt-2'>
                   <h6 className='display-6'>
                      What Can I Bring?
                   </h6>
                   <p>
                      You can go to <a href="https://docs.google.com/spreadsheets/d/1me0ZUhNzaNOLODpkzatj5l91LxncQrnVEYySmnjYIUk/edit?usp=sharing">this Google Spreadsheet</a>&nbsp;
                      to see what other people are bringing and sign up to bring something yourself. 
                      Sides, desserts, and drinks are much appreciated!
                   </p>
                   {/* <div className="embed-responsive embed-responsive-4by3">
                      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyLiBMKOWTaR8ZFKBYbObtcZftJQjzl7ia0B71ZxzdvY0ODFq7mWTOo-Kgs649it3eR9BMhzrKQD42/pubhtml?gid=1428651860&amp;single=true&amp;widget=true&amp;headers=false"
                              className="embed-responsive-item"
                              width="800"
                              height="400"></iframe>
                   </div> */}
                 </div>

                 <div className='pt-2'>
                   <h6 className='display-6'>
                      Where Can I Park?
                   </h6>
                   <p>
                      There's street parking and <a href='https://maps.app.goo.gl/pusAYzeGsbzKSbUe8'>a garage</a> not far from my apartment.
                   </p>
                   <p>
                      While I've heard you're not supposed to and can get towed, many friends have also had success parking in the 
                      <a href='https://maps.app.goo.gl/AERxcsbimZxoARSd9'> commercial lot</a> next to my apartment. 
                      Some of the spaces are marked 'do not park', but most aren't. When you first arrive at my building complex, 
                      the lot on your right is the the commercial lot. It serves a small church, a labor union, and some businesses.
                   </p>
                   <p>
                      At this point, I think it's a fairly safe bet, but if you're worried I'd park on the street and walk over.
                   </p>
                   <div className='alert alert-warning' role='alert'>
                      Whatever you do, DO NOT PARK IN THE RESIDENTIAL LOT. They'll tow your car and banish it to the shadow realm.
                   </div>
                   <img src={ parking }
                        alt="Diagram of where it's okay to park"
                        width='100%' className='shadow my-4 rounded'/>
                 </div>

                 <h6 className='py-4 text-center display-6'>
                   See you all there! 😁
                 </h6>

                 <div className='center d-flex mx-auto justify-content-around'>
                   <img src={ logo }
                        alt='Triathlon logo'
                        width='250'
                        height='150'/>
                   <img src={ logo }
                        alt='Triathlon logo'
                        width='250'
                        height='150'/>
                   <img src={ logo }
                        alt='Triathlon logo'
                        width='250'
                        height='150'/>
                 </div>

               </div>
             </div>
           </div>
         </StrictMode>
}

createRoot(document.getElementById('app')).render(<Friendsgiving />);
