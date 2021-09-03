import React,{useState, useEffect} from 'react'
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

function FurthurStudies() {

    const [peoples, setPeoples] = useState([])

    useEffect(()=>{
        axios.get('/api/fspeople')
        .then(res =>{
            setPeoples(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }, [])



    return (
        
        <div className='flex'>
           {peoples.map( people => <div class="App" key={people.id}> 
           
           
                <span className="name font">{people.name} <span className="batch"> ({people.batch}) </span></span>
                <a href={"mailto:" + people.email}> 
                <span className="email font">Email Id:  {people.email}</span>      </a>
                <span className="name font">{people.status}</span>
                <span className="name font">{people.cmnts}</span>
                <span className="name font">{people.department}</span>
                <span className="name font">{people.company}</span>
                <span className="name font">{people.institute}</span>
                <span className="name font">{people.exam}</span>
                <span className="name font">{people.field}</span>
                <span className="name font">{people.designation}</span>
       
            </div>
        )}

        </div>
   
    )
}

export default FurthurStudies;
