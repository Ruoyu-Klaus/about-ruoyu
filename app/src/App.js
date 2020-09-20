import React, { useContext } from 'react';
import themeContext from './context/theme/themeContext';
// import './_color.scss';

function App() {
  const themeState = useContext(themeContext);
  console.log(themeState);
  return <div className='App'>hello world</div>;
}

export default App;
