import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(10);

  const handleCounterIncreaseClick = () => {
    const prevCount = count;
    setTimeout(() => setCount((prev) => prev + 1), 1000);
    // setCount =prevCount + 1
  };

  const handleCounterDecreaseClick = () => {
    const prevCount = count;
    setCount(prevCount - 1);
  };

  return (
    <div>
      <div>
        <h3>Challenge 1: Update me to hooks</h3>
        <p>
          Create your own Counter JS file and copy paste the necessary part of
          the code. Transition this application from Class Based To Hooks
        </p>
      </div>
      <div>
        <h3>Counter Application</h3>
      </div>

      <div>
        <p>Count: {count}</p>
      </div>

      <div>
        <button onClick={handleCounterIncreaseClick}>Increase</button>
        <button onClick={handleCounterDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

// class Counter extends React.Component {
//   state = {
//     count: 0,
//   };

//   handleCounterIncreaseClick = () => {
//     const prevCount = this.state.count;
//     this.setState({
//       count: prevCount + 1,
//     });
//   };

//   handleCounterDecreaseClick = () => {
//     const prevCount = this.state.count;
//     this.setState({
//       count: prevCount - 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <h3>Challenge 1: Update me to hooks</h3>
//           <p>
//             Create your own Counter JS file and copy paste the necessary part of
//             the code. Transition this application from Class Based To Hooks
//           </p>
//         </div>
//         <div>
//           <h3>Counter Application</h3>
//         </div>

//         <div>
//           <p>Count: {this.state.count}</p>
//         </div>

//         <div>
//           <button onClick={this.handleCounterIncreaseClick}>Increase</button>
//           <button onClick={this.handleCounterDecreaseClick}>Decrease</button>
//         </div>
//       </div>
//     );
//   }
// }

export default Counter;
