import react from 'react';
import NavComp from './component/NavComp';
import Note from './component/Note';
import NoteWrite from './component/NoteWrite';
import NoteView from './component/NoteView';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route , Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavComp></NavComp>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/note" element={<Note />}></Route>
        <Route exact path="/note/view/:id" element={<NoteView />}></Route>
        <Route path='/note/write' element={<NoteWrite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
