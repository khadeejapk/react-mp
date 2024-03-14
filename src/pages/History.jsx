import React, { useEffect, useState } from 'react'
import { getHistory , deleteHistory } from '../Services/allApis'


function History() {

  const [his,setHis]=useState([])
  const [delHis,setDelHis]=useState({})


   useEffect(()=>{
       getData()
   },[delHis])

   const getData=async()=>{
     const res=await getHistory()
     console.log(res.data);
     setHis(res.data)
   }

    const handleDelete=async(id)=>{
    console.log(id)
    const res=await deleteHistory(id)
    // console.log(res);
    if(res.status>=200 && res.status<300){
      setDelHis(res)
      toast.success("Category deleted Successfully!!")
      
    }else{
      toast.error("Category Deletion Failed!!!")

    }
  }

  

  return (
    <div className='p-5'>
      <h1> Watch History </h1>
      <table className='table table-bordered'>
        <tr>
          <th>Caption</th>
          <th>Url</th>
          <th>Date & Time</th>
          <th></th>
        </tr>
        {
          his?
          his.map(item=>(
            <tr>
              <td>{item.caption}</td>
              <td>{item.url}</td>
              <td>{item.datetime}</td>
              <td>
                <i className='fa-solid fa-trash'  onClick={()=>{handleDelete(item.id)}} ></i>
              </td>
            </tr>
          ))
          :
          <tr>
            <p className='text-danger'>No Watch History</p>
          </tr>
        }

      </table>
    </div>
  )
}

export default History