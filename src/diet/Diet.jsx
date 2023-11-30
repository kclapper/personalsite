import { StrictMode, useState, useCallback } from "react";
import { createRoot } from 'react-dom/client';

import './Diet.scss';

import Header from '../components/Header';

import Food from './Food';

const eliminationFoods = [
  "Dairy",
  "Eggs",
  //"Nuts",
  "Fish",
  "Shellfish"
]

const allergyFoods = [
  "Chickpeas (Garbanzo Beans)",
  "Eggplant",
  "Green Peas",
  "Pea Protein",
  "Lentils",
  "Avocado",
  "Raw oranges (clementines are suspect)",
  "Raw banana",
  "Raw apples",
  "Raw carrot",
  "Raw broccoli",
  "Mango",
  "Cantaloupe",
]

function foodMap(elimination, allergy) {
  const eliminationFoods = elimination.map((food) => (
    <Food emph key={ food }>{ food }</Food>
  ));

  const allergyFoods = allergy.map((food) => (
    <Food key={ food }>{ food }</Food>
  ));

  return eliminationFoods.concat(allergyFoods);
}

function matchesQuery(food, query) {
  food = food.toLowerCase().trim();
  return food.includes(query);
}

export default function Diet() {
  const [foods, setFoods] = useState(foodMap(eliminationFoods, allergyFoods));

  const handleSearch = useCallback((event) => {
    let query = event.target.value;

    if (query === undefined || query.trim() === '') {
      setFoods(foodMap(eliminationFoods, allergyFoods));
      return;
    }

    query = query.toLowerCase().trim();

    const eliminationResults = eliminationFoods.filter((food) => matchesQuery(food, query));
    const allergyResults = allergyFoods.filter((food) => matchesQuery(food, query));

    setFoods(foodMap(eliminationResults, allergyResults));
  }, [foods, setFoods]);

  return <StrictMode>
           <Header />
           <div className="container pt-4">
             <div className="row justify-content-center">
               <div className="col-lg-8">
                 <h5 className="display-5">
                   Foods I Cannot Eat
                 </h5>
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
                 <h6 className="display-6 text-primary">Update 11/30/2023:</h6>
                 <p>
		   <b>I can keep eating Wheat!</b> The endoscopy results came back good. 
		   Now I can <b>move on to the nuts</b> trial with an endoscopy scheduled 
		   at the end of February.
                 </p>
                 <br/>
                 <h6 className="display-6 text-decoration-underline"> I Cannot Eat </h6>
                 <p>
                   If I specify "Raw" then that food is
                   okay cooked. Items marked in <strong style={{ color: "red" }}>red </strong>
                   are foods on my elimination diet. They won't cause acute effects and I'll
                   take added care to make sure I don't eat them.
                 </p>
                 <input type='text'
                        name='food search'
                        onChange={ handleSearch }
                        placeholder='Food search'
                        aria-label='Food search box'
                        className='form-control mb-2'/>
                 <ul>
                   { foods }
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
