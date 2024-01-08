import './App.css';
import { data } from './data';
import { useState } from 'react';


function App() {
const  [place,newPlace]= useState(0)
const {id,placeName,image,description}=data[place]

const removePlace=(id)=>{
  let rePlace = place.filter(placeName=>placeName.id !==id);
  newPlace(rePlace)
  }
  












  const [showMore,setShowMore]=useState(false)




const previousPlace =()=> {
  newPlace((place=>{
    place--;
    if (place<0){
      return data.length-1;
    }
    return place;
  }))
}


const nextPlace =()=>{
  newPlace((place=>{
    place++;
    if (place>data.length-1){
      place=0
    }
    return place;
  }))
}


  return ( <div >
    <div className='container'>
      <h1>#{id} {placeName}</h1>
    </div>
    
    <div className='container'>
      <img src={image} width='700px' alt="place"/>
    </div>  

    <div className='container'>
<button className='btn' onClick={previousPlace}><img src='https://img.icons8.com/?size=100&id=39776&format=png'/> </button>

<button className='btn' onClick={()=>removePlace(id)}>i'm not interesting/remove it</button>

<button className='btn' onClick={nextPlace}><img src='https://img.icons8.com/?size=100&id=39777&format=png'/></button>
    </div>
      

    <div className='container'>
    <h2>{showMore ? description : description.substring(0,300)+ "..."}
    <button className='btn2' onClick={()=>setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"} </button>
    </h2>
    </div> 

    <div className='container'>
      <button className='btn3' onClick={()=>newPlace([])}>Delete All</button>
    </div>

  









    </div>
  );
}

export default App;
