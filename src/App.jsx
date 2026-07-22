
import React, { useState } from 'react'
const App = () => {
  // let counter = 0
  const [counter , setCounter] = useState(0)
 
 const Changecounter = (feature) => {
    console.log('counter added' , feature);
if (feature==="add") {
 setCounter(counter + 1)
  return
}
counter > 0 ? setCounter(counter - 1) : null



 }
return (
  <div className="container">
    <h1>Counter App</h1>

    <div className="counter">{counter}</div>

    <div className="buttons">
      <button
        className="add"
        onClick={() => Changecounter("add")}
      >
        Add
      </button>

      <button
        className="less"
        onClick={() => Changecounter("less")}
      >
        Less
      </button>
    </div>
  </div>
);
}


export default App














//todo appp start




// import { useState } from "react"


// const App =()=>{
//     const[input, setInput]=useState('');
//    const [todo , setTodo]= useState([]);
// const addtodo = (event)=>{
//     event.preventDefault()
//     console.log(input);
//     setTodo([...todo,input])
//     setInput('')//bad ma input ko empty kara ga

    
// }
// const updatetodo= (feature , index)=>{
//     console.log(feature , index);
     
//     if (feature === "delete") {
//         todo.splice(index , 1);
//         setTodo([...todo])
//         return
        
//     }
//     const updateval = prompt("enter udated val" , todo [index])
//     todo.splice(index , 1 , updateval)
//     setTodo([...todo])
       
       
// }
       
//        return (
//       <div className="container">
//         <h1>hello from todo app</h1>
//         <form onSubmit={addtodo}>
//         <input type="text" placeholder='enter todo' value={input} onChange={(e)=> setInput (e.target.value)}  />
//         <button type='submit'>add todo</button>
        
//         </form>
        
//           <ol>
//       {todo.map((item, index) => (
//         <li key={index}>
//           <span>{item}</span>

//           <button onClick={() => updatetodo("delete", index)}>
//             Delete
//           </button>

//           <button onClick={() => updatetodo("edit", index)}>
//             Edit
//           </button>
//         </li>
//       ))}
//     </ol>
//   </div>
// );

// }



// export default App





