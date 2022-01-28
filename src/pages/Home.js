import React from 'react';
import Brand from '../components/Brand.js';
import CardGroups from '../components/CardGroup.js';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';
import MiniCard from '../components/MiniCard.js';
import Share from '../partials/Share.js'

function Home() {
  return <div className='home'>
    <Header></Header>
    <Share></Share>
    <CardGroups></CardGroups>
    <MiniCard></MiniCard>
    <Brand></Brand>
    <Footer></Footer>

  </div>;
}

export default React.memo(Home);
