import React, { useState, useEffect } from 'react';
import Header from './Header';

function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const Currentuser = JSON.parse(localStorage.getItem('currentuser')!);
    setState(Currentuser.firstName);
  });
  return (
    <>
      <Header />
      <div className="d-flex flex-wrap justify-content-between">
        <div className="w-50">
          <h4>Things you can do</h4>
          <ul>
            <li>Add Article</li>
            <li>View Article</li>
          </ul>
        </div>
        <h3 className="w-25">
          Welcome{' '}
          <span>
            {' '}
            <u>
              <b>{state}</b>
            </u>
          </span>
        </h3>
      </div>
    </>
  );
}

export default Home;
