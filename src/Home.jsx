import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import './Home.scss';

import Header from './components/Header';
import Text from './components/Text';
import ResumeItem from './components/ResumeItem';
import ResumeSection from './components/ResumeSection';
import PageContent from './components/PageContent';

const resume = new URL('./Kyle Clapper Resume.pdf', import.meta.url);
const hazmat = new URL('./photos/hazmat.jpg?width=1200', import.meta.url);
const mics = new URL('./photos/mics.jpg', import.meta.url);
const counter = new URL('./photos/counter-screenshot.png', import.meta.url);
const badstats = new URL('./photos/badstats-screenshot.png', import.meta.url);

export default function Home() {
  return <StrictMode>
           <Header />
           <PageContent>
             <Text bg='secondary' text='light'>
               For my CS210 students, I've posted
               the slides I use during discussion <a href='/cs210'>here.</a>
             </Text>

             <p>
		My resume site has moved to <a href="https://kyleclapper.dev">kyleclapper.dev</a>
		head there to find my resume, cover letter, and blog.
             </p>


             {/* <ResumeSection>
               Projects
             </ResumeSection>

             <ResumeItem title="Take Counter"
                         location={ <a href="https://takecounter.kyleclapper.dev"
                                       className='text-decoration-none'>
                                      https://takecounter.kyleclapper.dev
                                    </a> }
                         image={ counter }>
               <ul>
                 <li>
                   Helped an audio engineer track takes during recording sessions at Power Station
                   by building a MacOS app.
                 </li>

                 <li>
                   Improved user experience by adding re-assignable global keyboard shortcuts.
                 </li>

                 <li>
                   Increased development speed and reliability by building a CI/CD workflow with
                   automated testing and deployment to AWS S3.
                 </li>
               </ul>
             </ResumeItem>

             <ResumeItem title="MCODE Isotope"
                         location={ <a href="https://github.com/kclapper/MCODE-Isotope"
                                       className='text-decoration-none'>
                                      https://github.com/kclapper/MCODE-Isotope
                                    </a> }>
               <ul>
                 <li>
                   Improved readability and maintainability of a data retrieval program by refactoring
                   the code base, following principles in ”Clean Code” by Robert C. Martin.
                 </li>

                 <li>
                   Improved the UX for the MIT NRL Reactor Engineer by simplifying the installation
                   process and adding features such as a detailed help prompt.
                 </li>
               </ul>
             </ResumeItem>

             <ResumeItem title="Badstats"
                         location={ <a href="https://badstats.offtherailsradio.org/"
                                       className='text-decoration-none'>
                                      https://badstats.offtherailsradio.org/
                                    </a> }
                         image={ badstats }>
               <ul>
                 <li>
                   Built a website to expose and visualize Spotify meta-data using Flask.
                 </li>

                 <li>
                   Eliminated deployment cost by building a self managed Kubernetes cluster, using
                   K3S, on Oracle Cloud Infrastructure.
                 </li>
               </ul>
             </ResumeItem>

             <ResumeSection>
               Work Experience
             </ResumeSection>

             <ResumeItem title="Teaching Assistant"
                         location='UMass Boston'
                         startDate='September 2022'
                         endDate='Present'>
               <ul>
                 <li>
                   CS210 - Intermediate Programming with Algorithms and Data Structures in Java.
                 </li>

                 <li>
                   Taught discussion sections where students get practice with lecture material.
                 </li>

                 <li>
                   Created additional course materials in response to student needs, including; slide
                   decks, example programs, and puzzles.
                 </li>

                 <li>
                   Graded student programming projects, including a written report.
                 </li>

                 <li>
                   Held office hours to provide additional support to students.
                 </li>
               </ul>
             </ResumeItem>

             <ResumeItem title="Senior Reactor Operator"
                         location='MIT Nuclear Reactor Laboratory'
                         startDate='May 2019'
                         endDate='January 2022'
                         image={ hazmat }>
               <ul>
                 <li>
                   Passed NRC licensing exams for a Senior Reactor Operator license.
                 </li>

                 <li>
                   Ensured the safety of personnel, the public, and the environment by supervising
                   proper operation and maintenance of the reactor while on shift.
                 </li>

                 <li>
                   Prevented a significant radiation accident by shutting down the reactor within 30
                   seconds after seeing alarms and abnormal equipment readings.
                 </li>

                 <li>
                   Improved the accuracy of documentation by leading a group of 3 in updating
                   procedures and training manuals to reflect equipment changes and best practices.
                 </li>

                 <li>
                   Took a proactive role during a facility outage by leading operators on shift to finish
                   tests and calibrations ahead of schedule.
                 </li>
               </ul>
             </ResumeItem>

             <ResumeItem title="Chief Engineer"
                         location='91.5 FM WUML, Lowell'
                         startDate='December 2016'
                         endDate='May 2019'
                         image={ mics }>

               {
                 // 1. Church brewery
                 // 2. Shuffleboard dive
                 // 3. Dive college
               }

               <ul>
                 <li>
                   Increased the accessibility of audio engineering to club members by creating a
                   standardized training and certification system.
                 </li>

                 <li>
                   Assisted in the studio renovation by installing audio equipment, wiring logic
                   circuits, and building a remote control and troubleshooting system.
                 </li>

                 <li>
                   Ensured broadcast continuity by being on call 24/7 for equipment troubleshooting.
                 </li>

                 <li>
                   Contributed to the annual charity benefit concert as the head organizer in 2016
                   and sound engineering coordinator in 2017 and 2018.
                 </li>
               </ul>
             </ResumeItem> */}


           </PageContent>
         </StrictMode>;
}

createRoot(document.getElementById('app')).render(<Home />);
