import logo from './logo.svg';
import './App.css';
//import Dropdown from './Dropdown';
import React,{useState, useEffect} from 'react';
import PlacementInputForm from './PlacementInputForm';
import PlacementsTable from './PlacementsTable';
import PlacementsTableRow from './PlacementsTableRow';


//Remove stats form PlacementInputForm, PlacementsTable, PlacementsTableRow add them here. Remember to modificy code acordingly.
//Moraš rposljediid u PlacementInputForm, PlacementsTable, PlacementsTableRow respected objekte i use stateove.
export default function App() {
  return (
    <div className="App">
      <PlacementInputForm />
      <PlacementsTable />
    </div>
  );
}
