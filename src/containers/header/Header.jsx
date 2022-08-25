import React from 'react';
//import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="zm__header section__padding" id="home">
    <div className="zm__header-content">
      <h1 >Zeta Mesh is a </h1>
      <h2>boutique consulting</h2>
      <p>Serving small and medium businesses to create competitive advantage by unlocking insights and profits from data.​</p>

      <div className="zm__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="zm__header-content__people">
       {/*} <img src={people} />*/}
        <p>www.abc.com | address| +1 972 111 1111| admin@abc.com​</p>
      </div>
    </div>

    <div className="zm__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
