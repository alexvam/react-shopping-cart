import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
import Logo  from'../../static/products/gs.PNG';

const App = () => (
  <React.Fragment>
    <img src = {Logo} alt ={"Golden Shoe Logo"}></img>  {/* < !-- Logo  --> */}
    
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
