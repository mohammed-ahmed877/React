// import React from 'react'

// const App = () => {
//   return (
//     <>
//     <h1>hello from the react app of ahmed dehwar </h1>
      
//     </>
//   )
// }

// export default App





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
 return(
  <>
     <h1>{counter }Counter App {counter}</h1>
       <button onClick={()=> changeCounter('add')}>Add {counter} </button>
      <button onClick={()=> changeCounter('less')}>Less {counter} </button>
  
  </>
)
}




export default App





// import React, { useState } from 'react'

// const App = () => {
//   // let counter = 0
//   const [counter , setCounter] = useState(0)

//   const changeCounter = (feature)=>{
//     console.log('counter added' , feature);
//     if(feature === 'add'){
//       setCounter(counter + 1)
//       return 
//     }

//     counter > 0 ?
//     setCounter(counter - 1) : null
//   }
//   return (
//     <>
//       <h1>{counter }Counter App {counter}</h1>
//       <button onClick={()=> changeCounter('add')}>Add {counter} </button>
//       <button onClick={()=> changeCounter('less')}>Less {counter} </button>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque eveniet {counter} id molestiae sunt iste eos {counter}, {counter} placeat {counter} doloribus ut earum nemo dicta consectetur obcaecati! Voluptates, {counter}.</p>
//     </>
//   )
// }

// export default App
// import React, { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const Changecounter = (feature) => {
//     if (feature === "add") {
//       setCounter(counter + 1);
//       return;
//     }

//     counter > 0 ? setCounter(counter - 1) : null;
//   };

//   return (
//     <>
//       <h1>Welcome to Counting App {counter}</h1>

//       <button onClick={() => Changecounter("add")}>Add</button>
//       <button onClick={() => Changecounter("less")}>Less</button>
//     </>
//   );
// };

// export default App;
