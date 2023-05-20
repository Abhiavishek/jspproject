import React, { useEffect, useState } from 'react'
import style from "./home.module.css";
import axios from "axios"
import { Link } from 'react-router-dom';
const StudentDetails = () => {
  let [content, setContent]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/students")
    .then((response)=>{
      // console.log(response.data);
      setContent(response.data);
    })
    .catch(()=>{
      console.log("Something went Wrong");
    })

  },[])

  let deleteData=(value)=>{
    axios.delete(`http://localhost:3000/students/${value}`)
    .then(()=>{
      console.log("data deleted successfully");
    })
    .catch(()=>{
      console.log("data not deleted");
    })
    window.location.assign("/studentdetails")
  }
  return (
    <div id={style.tab}>
      {content.map((x)=>{
        return(
          <div id={style.cards}>
            <table>
        <tr>
          <th colSpan="2">Student{x.id}</th>
        </tr>
        <tr>
          <td>Name</td>
          <td>: {x.name}</td>
        </tr>
        <tr>
          <td>CollegeId</td>
          <td>: {x.cid}</td>
        </tr>
        <tr>
          <td>College</td>
          <td>: {x.college}</td>
        </tr>
        <tr>
          <td id={style.edit}><Link to={`/edit/${x.id}`}>Edit</Link></td>
          <td id={style.del}><button onClick={()=>{
            deleteData(x.id)
          }}>Delete</button></td>
        </tr>
      </table>
          </div>
        )
      })}
    </div>
  )
}

export default StudentDetails