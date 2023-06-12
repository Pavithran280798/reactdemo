
// function App() {

//   // javascript
//   //console.log('hello from component');

//   const now = new Date();
//   const a = 10;
//   const b = 20;

//   console.log(now, a + b);

//   return (
//     <div>
//       <p>Hello World! it is { now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
      
//     </div>
//   );
// }

// export default App;

import React from 'react'

function Hello(prop) {
  console.log(prop);
  return(
    <div>
      <p>hello world { prop.name } , {prop.age} years oldgit !</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <p>greeting</p>
      <Hello name = 'pavithran' age = '24'/>
      <Hello name = 'sathish' age = '30'/>
      <Hello name = 'vimal' age = '29'/>

    </div>
  )
}

export default App

