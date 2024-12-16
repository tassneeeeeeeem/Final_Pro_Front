
import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import RingsDisplay from '../../components/RingsDisplay/RingsDisplay';

const Home = () => {
  
  const [category, setCategory] = useState('All'); 

  return (
    <div>
      <Header />
     
      <ExploreMenu category={category} setcategory={setCategory} />
      <RingsDisplay category={category}/>
    </div>
  );
};

export default Home;

