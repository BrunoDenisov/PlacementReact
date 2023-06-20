import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import PlacementInputForm from './PlacementInputForm';
import PlacementsTable from './PlacementsTable';
import PlacementGetAll from './PlacementGetAll';

//Remove stats form PlacementInputForm, PlacementsTable, PlacementsTableRow add them here. Remember to modificy code acordingly.
//Moraš rposljediid u PlacementInputForm, PlacementsTable, PlacementsTableRow respected objekte i use stateove.
export default function App() {

  const [placements, setPlacements] = useState([]);

  const addPlacement = (newPlacmenet) => {
    setPlacements([...placements, newPlacmenet]);
  }

  return (
    <div className="App">
      <PlacementInputForm addPlacement={addPlacement} />
      <PlacementsTable placements={placements} />
      <PlacementGetAll />
    </div>
  );
}
