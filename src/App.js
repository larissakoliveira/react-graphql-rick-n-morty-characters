import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import CharactersList from './pages/CharactersList';
import CharacterById from './pages/CharacterById';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList/>} />
        <Route strict exact path="/search" element={<Search/>} />
        <Route strict exact path="/:id" element={<CharacterById/>} />
      </Routes>
    </div>
  );
}

export default App;
