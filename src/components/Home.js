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

  function getData() {
    getPosts().then(console.log).catch(console.error)
  }




  return <h2>Home</h2>;
}
