import logo from './logo.svg';
import './App.css';
import TranscriptView from './Pages/ViewTranscript';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      
     <BrowserRouter>
      <TranscriptView />
     </BrowserRouter>
    </div>
  );
}

export default App;
