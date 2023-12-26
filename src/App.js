import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
 const [loading,setLoading] = useState(true);
 const [tours,setTours] = useState([]);
 

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } 
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTour();
  }, []);

  return(
    <main>
      
      { loading 
          ? <Loading/> : tours.length ===0 ? (
        <main>
          <div className='title'>
            <h2 style={{color:"white"}}>No tours Left</h2>
            <button className='btn' onClick={fetchTour}>Refresh</button>
          </div>
        </main>
      ) : <Tours tours={tours} removeTour={removeTour}/>
      }
    </main>
  ) 
};

export default App
