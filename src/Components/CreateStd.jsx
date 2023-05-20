import React, { useState } from 'react'
import style from "./home.module.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
const CreateStd = () => {

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

    let FormHandle=()=>{
        // console.log(name,reg,branch);
        let payload={name,cid,college}
        axios.post("http://localhost:3000/students",payload)
        .then(()=>{
            console.log("Data Successfully Uploaded");
        })
        .catch(()=>{
            console.log("Didn't get the Data");
        })
        navigate("/studentdetails")
    }
  return (
    <div id={style.formDiv}>
    <article>
        <h2>Fill Your Details</h2>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData}/><br></br>
        <label htmlFor="">CollegeId</label>
        <input type="number" value={cid} onChange={cidData} /><br></br>
        <label htmlFor="">College</label>
        <input type="text" value={college} onChange={collegeData} /><br></br>
        <button onClick={FormHandle}>Submit</button>

    </article>
    </div>
  )
}

export default CreateStd