import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import { Card } from 'components/card';

ReactDOM.createRoot(document.querySelector('#root')).render(<Card />);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const paragrph = React.createElement('p', {
//   id: 'p-id',
//   children: ['I am p']
// })

// const paragraph = <p id="new-p">I am new P</p>;

// const div = React.createElement('div', {
//   name: 'main',
//   className: 'test-class',
//   id: 'test-id',
//   children: [paragrph]
// });

// const div = (
//   <div id="div-id" className="test-class">
//     {paragraph}
//   </div>
// );

// console.dir(div);



