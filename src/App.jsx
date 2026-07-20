
// import React, { useState } from 'react'
// const App = () => {
//   // let counter = 0
//   const [counter , setCounter] = useState(0)
 
//  const Changecounter = (feature) => {
//     console.log('counter added' , feature);
// if (feature==="add") {
//  setCounter(counter + 1)
//   return
// }
// counter > 0 ? setCounter(counter - 1) : null



//  }
//  return(
//   <>
//      <h1>{counter }Counter App {counter}</h1>
//        <button onClick={()=> Changecounter('add')}>Add {counter} </button>
//       <button onClick={()=> Changecounter('less')}>Less {counter} </button>
  
//   </>
// )
// }




// export default App














//todo appp start





import { useState } from "react"

const app =()=>{
    const[input, setInput]=useState('');
   const [todo , settodo]= useState([]);
const addtodo = (event)=>{
    event.preventDefault()
    console.log(input);
    settodo([...todo,input])
    setInput('')//bad ma input ko empty kara ga

    
}
const updatetodo= (feature , index)=>{
    console.log(feature , index);
     
    if (feature === "delete") {
        todo.splice(index , 1);
        settodo([...todo])
        return
        
    }
    const updateval = prompt("enter udated val" , todo [index])
    settodo([...todo])
       
       
       
       return (
       <>
        <h1>hello from todo app</h1>
        <form onSubmit={addtodo}>
        <input type="text" placeholder='enter todo' value={input} onChange={(e)=> setInput (e.target.value)}  />
        <button type='submit'>add todo</button>
        
        </form>
        
       <ol>
        {todo.map ((item , index) =>{
            return <li key = {index} > {item}
            <button onClick={()=> updatetodo("delete",index)}>delete</button>
            <button onClick={()=> updatetodo("edit",index)}>edit</button>
                
                
                
                
                 </li>
        }
    
    
    
    )}
        
        </ol> 
        </>
        )
        }

}








export default app





