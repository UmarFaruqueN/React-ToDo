import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>{ setToDo(e.target.value)}} placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(), text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
    <div className="todos">{
      toDos.map((data)=>{

        return( 

          
          <div className="todo">
          <div className="left">
            <input  onChange={(e)=>{
              console.log(e.target.checked);
              console.log(data);
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===data.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
              
            }} value ={data.status} type="checkbox" name="" id="" />
            <p>{data.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div> 
           )
        })
      }

      {toDos.map((obj)=>{
        if(obj.status){
          return (<h1>{obj.text}</h1>)
        }
        return null
      })}
      </div>
    </div>
  );
}

export default App;