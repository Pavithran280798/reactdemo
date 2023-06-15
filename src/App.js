//working with array list

// import React from 'react'

// function app(props) {

//   const { notes } = props;
//   //console.log(notes);
//   return (
//     <div>
//       <h1>notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//         <li>{notes[3].content}</li>
//         <li>{notes[4].content}</li>
//       </ul>
//     </div>
//   )
// }

// export default app



// import React from 'react'

// function app(props) {

//   const { notes } = props;
//   //console.log(notes.map(note => <li> {note.content} </li> ));
//   return (
//     <div>
//       <h1>notes</h1>
//       <ul>
//         {notes.map(note => 
//         <li key= {note.id} > {note.content} </li> )}
//       </ul>
//     </div>
//   )
// }
// export default app


// import React from 'react'

// function Note({note}) {

//   //★
//   if (note.important) {
//   return(
//     <li> {note.content}★ </li>
//     )}
//     return(
//     <li> {note.content} </li>
//     )
// }
// function app({notes}) {
//   return( 
//     <div>
//       <h1>notes</h1>
//       <ul>
//       {notes.map(note => 
//            <Note  key= {note.id} note= { note }/>
//       )}
//       </ul>
//     </div>
//   )
// }
  
    
// export default app



// import React from 'react'

// function Note({note}) {

//     return(
//     <li>
//        {note.important ? note.content +' ★ ' : note.content} 
//     </li>
//     )
// }
// function app({notes}) {
//   return( 
//     <div>
//       <h1>notes</h1>
//       <ul>
//       {notes.map(note => 
//            <Note  key= {note.id} note= { note }/>
//       )}
//       </ul>
//     </div>
//   )
// }
  
// export default app



import React from 'react'

function Note({note}) {

    return(
    <li>
       {/* {note.important ? note.content +' ★ ' : note.content}  */}
       {note.content} {note.important && ' ★ '}
    </li>
    )
}
function app({notes}) {
  return( 
    <div>
      <h1>notes</h1>
      <ul>
      {notes.map(note => 
           <Note  key= {note.id} note= { note }/>
      )}
      </ul>
    </div>
  )
}
  
export default app
