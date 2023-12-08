
// Life Cycle methods --

// 1. Mounting - when an instance of a component is created and inserted into the dom.
// e.g - constructor, static getDerivedStateFromProps, render and
//       componentDidMount
// 2. Updating - when a component is being re-rendered as a result of changes to its
//               props and states.
// e.g - static getDerivedStateFromProps, shouldComponentUpdate, render, 
//       getSnapshotBeforeUpdate and componentDidUpdate

// 3. Unmounting - when a component is being removed from the dom.
// e.g - componentWillUnmount
// 4. Error Handling - When there is an error during rendering, in a lifecycle hook
//                     or in the constructor of a child Component.
// e.g - static getDerivedStateFromError and componentDidCatch   

//1. constructor -
//   A special function that will get called whenever a new component is created.
//   Intializing state, binding the eventHandlers
//   Do not cause side effects. e.g Http requests
//   super(props) directly overwrite this.state.

//2. static getDerivedStateFromProps(props, state) -
//   When the state of the component depends on changes in props over time. 
//   Set the state
//   Do not cause side effects. e.g - Http requests

//3. render - 
//   Only required method. 
//   Read props and state and return JSX.
//   Do not change state or interact with DOM or make ajax calls.
//   Children components lifecycle methods are also executed.

//4. componentDidMount -
//   Invoked immediately after a component and all its children components 
//   have been rendered into the DOM.
//   Cause side effects. e.g - Interact with the dom or perform any ajax calls
//   to load data. 



