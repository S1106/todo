import React from "react";
import "./style.css"
import Form from "./Form";
import Data from "./Data";
import { Context } from "./Context";
import Header from "./Header";
import { useAuth } from "./useAuth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';



const firebaseConfig = {
  apiKey: "AIzaSyBcYKpmM2bHa_0bcfSI2y3cUL_kphaCq3c",
  authDomain: "mytodo-a894e.firebaseapp.com",
  databaseURL: "https://mytodo-a894e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mytodo-a894e",
  storageBucket: "mytodo-a894e.appspot.com",
  messagingSenderId: "929735185471",
  appId: "1:929735185471:web:ef6c1f96686f045b71948a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {

 const [item,setitem] = React.useState([]);
 const a = useAuth(firebase.auth);

 React.useEffect(() =>{
  let c = JSON.parse(localStorage.getItem('myTodo')) || [];
  setitem(c);
 }, []);

 React.useEffect(()=>{
   if(item.length > 0) {
    localStorage.setItem('myTodo', JSON.stringify(item));
   }
 },[item]);

 const toggleTodo = id => {
    setitem(item.map((one) => {
      if(one.id === id) {
        one.completed = !one.completed
      } 
      return one}))
 }

 const deleteTodo = id => {
    setitem(item.filter((one) => {
      return one.id !== id;
    }))
 }

  return (

    <Context.Provider value = {{toggleTodo,deleteTodo}} >
      <div className="container">
         <Header {...a}/>
         <Form setitem={setitem} item= {item} firebaseDataBase={firebase.database} authoentification = {a.authoentification}/>
         <Data item={item}/>
      </div>
    </Context.Provider>
    
  );
}


