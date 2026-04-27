import React from 'react'

/*function btnClicked() {
  alert('Button Clicked');
}
function mouseEnter(){
  alert('Mouse Entered');
}
function inputChanging(){
  console.log('User is Typing');
}*/

const App = () => {
  return (
    <div>
      <h1>Hello Baby</h1>
      <div onMouseMove={(elem) => {
        console.log('nachioooooo');
      }} className='box'>
      </div>
    </div>
  )
}

export default App
