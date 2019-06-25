import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

function App() {
  useEffect(() => {
    //Initialize materialize CSS
    M.AutoInit();
  });
  return (
    <div className="App">
      <Fragment>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
          <AddLogModal />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
