import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import './Home.scss';

import Header from './components/Header';
import Text from './components/Text';

const resume = new URL('./Kyle Clapper Resume.pdf', import.meta.url);

export default function Home() {
  return <StrictMode>
           <Header />
           <Text bg='primary' text='light'>
             After working for several years in the nuclear industry, I
             quit my job to pursue my passion. Now I'm a computer science
             master's student at UMass Boston! It's been incredibly
             rewarding and I look forward to my next adventure after I
             graduate in May.
           </Text>
           <Text>
             <p className='text-center'>
               <a href={ resume }
                  download
                  className='display-3 text-center text-decoration-none'>
                 Resume
               </a>
             </p>
           </Text>
           <Text bg='secondary' text='light'>
             For my CS210 students, I've posted
             the slides I use during discussion <a href='/cs210'>here.</a>
           </Text>
           <Text>
             TODO: Make the homepage look better 🤷‍♂️
           </Text>
           {
           //<Interests />
           //<Carousel />
           }
         </StrictMode>;
}

createRoot(document.getElementById('app')).render(<Home />);
