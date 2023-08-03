import './index.scss';

import headshot from './NYC-Headshot.jpg';

export default function Header() {
  return (
    <header>
      <img className='headshot img-fluid rounded-circle' src={ headshot }/>
      <h2>Kyle Clapper</h2>
    </header>
  );
}
