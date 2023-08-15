import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import './Diet.scss';

import Header from '../components/Header';

import Food from './Food';

export default function Diet() {
  return <StrictMode>
           <Header />
           <div className="container pt-4">
             <div className="row justify-content-center">
               <div className="col-lg-8 fs-3">
                 <h2 className="display-4">
                   Foods I Cannot Eat
                 </h2>
                 <hr />
                 <p>
                   Since I'm going through a rigorous food
                   elimination diet and already have a laundry
                   list of allergies, I've compiled a list of the
                   foods I can't eat. I'll actively maintain this
                   list for the benefit of anyone brave enough to
                   try cooking for me.
                 </p>
                 <br />
                 <h4 className="display-6 text-primary">Update 08/03/2023:</h4>
                 <p>
                   The dairy endoscopy was bad! This means I can no longer eat dairy, in perpetuity.
                   The next trial is Wheat, with an endoscopy sometime in October or November.
                 </p>
                 <br/>
                 <h3 className="display-5 text-decoration-underline"> I Cannot Eat </h3>
                 <p>
                   If I specify "Raw" then that food is
                   okay cooked. Items marked in <strong style={{ color: "red" }}>red </strong>
                   are foods on my elimination diet. They won't cause acute effects and I'll
                   take added care to make sure I don't eat them.
                 </p>
                 <ul>
                   <Food emph>Dairy</Food>
                   <Food emph>Eggs</Food>
                   <Food emph>Nuts</Food>
                   <Food emph>Fish</Food>
                   <Food emph>Shellfish</Food>
                   <Food>Chickpeas</Food>
                   <Food>Eggplant</Food>
                   <Food>Green Peas</Food>
                   <Food>Pea Protein</Food>
                   <Food>Lentils</Food>
                   <Food>Avocado</Food>
                   <Food>Raw oranges (clementines are suspect)</Food>
                   <Food>Raw banana</Food>
                   <Food>Raw apples</Food>
                   <Food>Raw carrot</Food>
                   <Food>Raw broccoli</Food>
                   <Food>Mango</Food>
                   {
                     //These items are only bad because of wheat,
                     //during the wheat trial they are okay.
                     //
                     //<Food>Beer</Food>
                     //<Food>Whiskey and the like</Food>
                     //<Food>
                     //Soy sauce (unless marked as
                     //gluten free)
                     //</Food>
                     //<Food>Oats (unless marked as gluten free)</Food>
                   }
                 </ul>
                 <p>
                   Additionally: Beans are somewhat suspect in large
                   quantities. If you're planning on cooking with beans,
                   please check with me first but it should be okay.
                   <br /><br />
                   Huge thank you to everyone who's accomodated me through
                   this endeavor!! I appreciate it so much.
                 </p>
               </div>
             </div>
           </div>
         </StrictMode>;
}

createRoot(document.getElementById('app')).render(<Diet />);
