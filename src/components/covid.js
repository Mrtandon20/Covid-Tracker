import React, { useEffect , useState} from 'react'
import './covid.css'

const Covid =() =>{

    const[data , setData] = useState([]);

    const getCovidData = async () =>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(res);
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch(err){
            console.log(err);
        }
    
    }

    useEffect(() => {
      getCovidData();
    }, [])
    

  return (
    <div className="hello">

<div class="card1">
    <div class="card-body text-white">
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    </div>
  </div>
 
<div class="card-group">
  <div class="card bg-primary text-white">
    <div class="card-body">
      <h5 class="card-title"><span> OUR </span> COUNTRY </h5>
      <p class="card-text">INDIA</p>
    </div>
  </div>
  <div class="card bg-success text-white">
    <div class="card-body">
    <h5 class="card-title"><span> TOTAL </span> RECOVERED </h5>
      <p class="card-text">{data.recovered}</p>
    </div>
  </div>
  <div class="card bg-warning  text-white">
    <div class="card-body">
      <h5 class="card-title"><span> TOTAL </span> CONFIRMED </h5>
      <p class="card-text">{data.confirmed}</p>
    </div>
  </div>
</div>

<div class="card-group">
  <div class="card bg-danger text-white">
    <div class="card-body">
      <h5 class="card-title"><span> TOTAL </span> DEATHS</h5>
      <p class="card-text">{data.deaths}</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body ">
      <h5 class="card-title"><span> TOTAL </span> ACTIVE</h5>
      <p class="card-text">{data.active}</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body bg-info text-white">
      <h5 class="card-title"><span> LAST </span> UPDATE</h5>
      <p class="card-text">{data.lastupdatedtime}</p>
    </div>
  </div>
</div>
 <div class="card2">
    <div class="card-body text-white">
      <h1 class="card-title"></h1>
      <h5 class="card-title"></h5>
    </div> 
  </div>
    </div>
    
  )
}

export default Covid
