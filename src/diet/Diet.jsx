import { StrictMode, useState, useCallback } from "react";
import { createRoot } from 'react-dom/client';

import './Diet.scss';

import Header from '../components/Header';

import Food from './Food';

const eliminationFoods = [
  // "Dairy",
  // "Eggs",
  // "Nuts",
  // "Fish",
  // "Shellfish"
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
                   Since I have a laundry
                   list of food allergies, I've compiled them here 
                   for the benefit of anyone brave enough to
                   try cooking for me.
                 </p>
                 <br />
                 <h6 className="display-6 text-primary">Update 07/21/2025:</h6>
                 <p>
                    This list used to be a lot longer. Now that I'm no longer 
                    doing the food elimination diet for EoE I can eat many 
                    more foods.
                 </p>
                 <br/>
                 <h6 className="display-6 text-decoration-underline"> I Cannot Eat </h6>
                 <p>
                   If I specify "Raw" then that food is
                   okay cooked. 
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
                 </p>
               </div>
             </div>
           </div>
         </StrictMode>;
}

createRoot(document.getElementById('app')).render(<Diet />);
