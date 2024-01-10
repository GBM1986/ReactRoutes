import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Forside</h1>
        <Link to="/" className='link'>Forside</Link>
      </div>
    );
  }

  export default Home