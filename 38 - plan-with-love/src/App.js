import React from "react";
import data from "./data";
import Tours from "./Components/Tours";
import { useState } from "react";

const App = () => {
  const [tours, setTours] = useState(data);

  // when not intereseted is clicked this removeTour function is called and based on id passed in the function
  // the filter method is used to remove that data belonging to passed id
  function removeTour(id){
    const newTours = tours.filter( tour => tour.id !== id);
    setTours(newTours);
  }

  // when all tours are clicked not interested then reinitializing all data to tours array
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>Sorry 😔...... <br/>No More Tours Left</h2>
        <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
     {/* removeTour and tours data are passed as props in tours component */}
      <Tours tours={tours} removeTour={removeTour}> </Tours>
    </div>
  );
};

export default App;
