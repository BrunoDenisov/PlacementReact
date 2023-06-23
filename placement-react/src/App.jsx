import './App.css';
import React, { useState, useEffect } from 'react';
import PlacementInputForm from './routes/PlacementInputForm';
import PlacementsTable from './routes/PlacementsTable';
import PlacementGetAll from './routes/PlacementGetAll';
import PlacementGetById from './routes/PlacementGetById';
import PlacementDelte from './routes/PlacementDelete';
import PlacementPut from './routes/PlacementPut';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

//Remove stats form PlacementInputForm, PlacementsTable, PlacementsTableRow add them here. Remember to modificy code acordingly.
//Moraš rposljediid u PlacementInputForm, PlacementsTable, PlacementsTableRow respected objekte i use stateove.
export default function App() {

  const [placements, setPlacements] = useState([]);

  const addPlacement = (newPlacmenet) => {
    setPlacements([...placements, newPlacmenet]);
  }

  const router = createBrowserRouter( [
    {
      path:"/",
      element: <PlacementInputForm />
    }
  ])

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
