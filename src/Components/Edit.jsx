import React, { useEffect } from 'react'
import style from "./home.module.css"
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {
    let [name, setName]=useState();
    let [cid, setCid]=useState();
    let [college, setCollege]=useState();


    let navigate = useNavigate();

    let nameData=(e)=>{
        setName(e.target.value)
   }
   let cidData=(e)=>{
       setCid(e.target.value)
   }
   let collegeData=(e)=>{
       setCollege(e.target.value)
   }

    let {index}=useParams();
    console.log(index)
    
    let FormHandle=()=>{
        let payload={name,cid,college}
        axios.put(`http://localhost:3000/students/${index}`,payload)
        .then(()=>{
            console.log("Data updated successfully");
        })
        .catch(()=>{
            console.log("Something went wrong");
        })
        navigate("/studentdetails")
    }
    console.log(index);

    useEffect(()=>{
        axios.get(`http://localhost:3000/students/${index}`)
        .then((response)=>{
            setName(response.data.name);
            setCid(response.data.cid);
            setCollege(response.data.college);
        })
        .catch(()=>{
            console.log("data not found");
        })
    },[])
  return (
    <div id={style.formDiv}>
    <article>
        <h2>Update Your Details</h2>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData}/><br></br>
        <label htmlFor="">CollegeId</label>
        <input type="number" value={cid} onChange={cidData} /><br></br>
        <label htmlFor="">College</label>
        <input type="text" value={college} onChange={collegeData} /><br></br>
        <button onClick={FormHandle}>Update</button>

    </article>
    </div>
  )
}

export default Edit