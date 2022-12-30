import React, { useState } from 'react'
function App() {
    const [col, setCol] = useState('white');
setTimeout(function(){
    document.getElementById("one").style.background = col;
  }, 2000);
setTimeout(function(){
  document.getElementById("two").style.background = col;
}, 3000);
setTimeout(function(){
  document.getElementById("three").style.background = col;
}, 4000);
setTimeout(function(){
  document.getElementById("four").style.background = col;
}, 5000);
setTimeout(function(){
  document.getElementById("five").style.background = col;
}, 6000);
setTimeout(function(){
setCol('black');
}, 7000);

  const rectangle = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  background: 'black',
  marginRight: '10px',


};
  return (

  <div>
  <table>
  <tbody >
  <tr>
  <th id="one" style={rectangle}></th>
  <th id="two" style={rectangle}></th>
  <th id="three" style={rectangle}></th>
  <th id="four" style={rectangle}></th>
  <th id="five" style={rectangle}></th>
  </tr>

  <tr>
    <th style={rectangle}></th>
    <th style={rectangle}></th>
    <th style={rectangle}></th>
    <th style={rectangle}></th>
    <th style={rectangle}></th>

  </tr>
  <tr>
  <th style={rectangle}></th>
  <th style={rectangle}></th>
  <th style={rectangle}></th>
  <th style={rectangle}></th>
  <th style={rectangle}></th>
  </tr>

  </tbody>
</table>
</div>
  );
}

export default App;
