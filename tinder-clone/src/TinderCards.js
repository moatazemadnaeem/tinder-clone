
import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'


function TinderCards() {
    const [people,SetPeople]=useState([])
 
    useEffect(()=>{
        async function fetchData(){
            const req=await axios.get('/tinder/cards');
           
            SetPeople(req.data);
        }
        fetchData();
    },[])
   const Swiped=(dir,nameToDelete)=>{
       console.log("removing:" +nameToDelete)
   }
   const outofFrame=(name)=>{
    console.log(name+" left the screen")
   }
    return (
        
        <div className="tinderCards">
            <div className="containerForCards">
            {people.map((person)=>{
                
                return  <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>Swiped(dir,person.name)}
                onCardLeftScreen={()=>outofFrame(person.name)}
                
                >
                    <div style={{backgroundImage:"url("+person.imgurl+")"}} className="card">
                      <h3 className="cardcontent">{person.name}</h3>
                    </div>
                </TinderCard>  
            })}
            </div>
            
        </div>
    )
}

export default TinderCards
