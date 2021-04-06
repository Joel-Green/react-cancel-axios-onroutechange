import React , { useEffect } from "react";
import { useLocation } from "react-router";
import { getPosts } from "../services/post";
import api from "../services/apiController";


export default function Home() {
  const location = useLocation();


  useEffect(()=>{

    getData();

    return () =>{
      api.finishPendingRequests('route change')
    }

  },[location?.pathname])

  async function getData() {
    try{

    const res = await getPosts()
    console.log(res)
    }
    catch(err)
      {
        console.error(err)
      }
  }




  return <h2>Home</h2>;
}
