import { useEffect, useRef } from 'react';

import Collapse from 'bootstrap/js/dist/collapse';

import NavItem from './NavItem';

const headshot = new URL('./NYC-Headshot.jpg?width=500', import.meta.url);

const defaultShow = window.matchMedia("(min-width: 992px)").matches;

export default function NavBar() {
  const element = useRef(null);

  useEffect(() => {
    if (element.current !== null) {
      new Collapse(element.current, {toggle: false});
    }
  }, [ element ]);

  return <div className='navbar-expand-lg'>
           <div className='container-fluid mw-100 g-0 pb-4 pt-4 border-bottom'>
             <div className='row justify-content-center align-items-center'>
               <div className='col-12 col-lg-2 text-center'>
                 <a href="/">
                   <img id='header-headshot'
                        className='img-fluid rounded-circle shadow-lg'
                        src={ headshot }
                        alt="Kyle's headshot" />
                 </a>
               </div>
               <div className='col-12 col-lg-3 text-center'>
                 <div className="d-flex flex-column align-items-center justify-content-center">
                   <a href='/' className='h1 text-decoration-none'>
                     <h1 className='display-1'>
                       Kyle Clapper
                     </h1>
                   </a>
                   <div ref={ element } className={ defaultShow ? 'collapse show' : 'collapse' } id='navMenuCollapse'>
                     <ul className='navbar-nav'>
                       <NavItem href='/diet'>
                         Diet
                       </NavItem>

                       <NavItem href='/cs210'>
                           CS210
                       </NavItem>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
}
