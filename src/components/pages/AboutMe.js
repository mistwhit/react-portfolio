import React from 'react';
// First we import our Hello component from our components folder.
import Header from './components/Header';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return <Header />;
}

export default App;