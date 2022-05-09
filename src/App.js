import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const countries = [
    {id:"1",name:"INDIA"},
    {id:"2",name:"USA"}
  ];

  const states = [
    {id:"1",countryId:"1",name:"Haryana"},
    {id:"2",countryId:"1",name:"Delhi"},
    {id:"3",countryId:"2",name:"Texas"},
    {id:"4",countryId:"2",name:"California"}
  ]

  const cities = [
    {id:"1",stateId:"1",name:"Faridabad"},
    {id:"2",stateId:"1",name:"Palwal"},
    {id:"3",stateId:"2",name:"Mandi House"},
    {id:"4",stateId:"2",name:"kalka Ji"},
    {id:"1",stateId:"3",name:"Houston"},
    {id:"2",stateId:"3",name:"Austin"},
    {id:"3",stateId:"4",name:"Los Angeles"},
    {id:"4",stateId:"4",name:"Son Diego"}
  ]

  const [ country, setCountry] = useState([]);
  const [ state, setState] = useState([]);
  const [ city, setCity] = useState([]);

  useEffect(()=>{
    setCountry(countries);
  },[])

  const handleCountry = (id) => {
    const dt = states.filter(x => x.countryId === id);
    setState(dt);
  }

  const handleState = (id) => {
    const dt = cities.filter(x => x.stateId === id);
    setCity(dt);
  }

  return (
    <div className="App">
      <select id="ddlCountry" className='form-control select-class' onChange={(e) => handleCountry(e.target.value)}>
        <option value="0">Select Country</option>
      {
        country && 
        country !== undefined ?
        country.map((ctr,index) => {
            return(
                <option key={index} value={ctr.id}>{ctr.name}</option>
            )
        })
        :"No Country"

      }
      </select>
      <br></br>
      <select id="ddlStates" className='form-control select-class' onChange={(e) => handleState(e.target.value)}>
        <option value="0">Select State</option>
      {
        state && 
        state !== undefined ?
        state.map((ctr,index) => {
            return(
                <option key={index} value={ctr.id}>{ctr.name}</option>
            )
        })
        :"No State"

      }
      </select>
      <br></br>
      <select id="ddlCity" className='form-control select-class'>
        <option value="0">Select City</option>
      {
        city && 
        city !== undefined ?
        city.map((ctr,index) => {
            return(
                <option key={index} value={ctr.id}>{ctr.name}</option>
            )
        })
        :"No City"

      }
      </select>
    </div>
  );
}

export default App;
