import { useEffect } from 'react';
import './App.css';
import Main from './main/index';
import Clarity from '@microsoft/clarity';

const projectId = "q8iryf070x";

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Clarity.init(projectId);
    }
  }, []);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
