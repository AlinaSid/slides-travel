import './App.css';
import { data } from './data';
import { useState } from 'react';


function App() {
const  [place,setPlace]= useState(0)
// const {id,placeName,image,description}=list[place] - убираем после 
const [list,setList]=useState(data)

const previousPlace =()=> {
  setPlace((place=>{
    place--;
    if (place<0){
      return list.length-1;
    }
    return place;
  }))
}


const nextPlace =()=>{
  setPlace((place=>{
    place++;
    if (place>list.length-1){
      place=0
    }
    return place;
  }))
}


 const [showMore,setShowMore]=useState(false)

 const removePlace=(id)=>{
  let rePlace = list.filter(placeName=>placeName.id !==id);
  setList(rePlace)

  if (place > 0) setPlace(place => place-1);
  else setPlace(0);
  }
  





  return ( 
  <div>
    {
  list.length> 0 &&
  <div >
    <div className='container'>
      <h1>#{list[place].id} {list[place].placeName}</h1>
    </div>
    
    <div className='container'>
      <img src={list[place].image} width='700px' alt="place"/>
    </div>  

    <div className='container'>
<button className='btn' onClick={previousPlace}><img src='https://img.icons8.com/?size=100&id=39776&format=png'/> </button>

<button className='btn' onClick={()=>removePlace(list[place].id)}>i'm not interesting/remove it</button>

<button className='btn' onClick={nextPlace}><img src='https://img.icons8.com/?size=100&id=39777&format=png'/></button>
    </div>
      

    <div className='container'>
    <h2>{showMore ? list[place].description : list[place].description.substring(0,300)+ "..."}
    <button className='btn2' onClick={()=>setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"} </button>
    </h2>
    </div> 

    <div className='container'>
      <button className='btn3' onClick={()=>setList([])}>Delete All</button>
    </div>

  









    </div>
}
    </div>
  );
}

export default App;
