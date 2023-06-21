import './App.css';
import React, { useState, useEffect } from 'react';
import PlacementInputForm from './PlacementInputForm';
import PlacementsTable from './PlacementsTable';
import PlacementGetAll from './PlacementGetAll';
import PlacementGetById from './PlacementGetById';
import PlacementDelte from './PlacementDelete';
import PlacementPut from './PlacementPut';

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
      <PlacementGetById />
      <PlacementDelte />
      <PlacementPut />
    </div>
  );
}
