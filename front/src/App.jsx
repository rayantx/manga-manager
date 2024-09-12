import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateMangas from './pages/CreateMangas';
import ShowMangas from './pages/ShowMangas';
import EditManga from './pages/EditManga';
import DeleteMangas from './pages/DeleteMangas';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mangas/create' element={<CreateMangas />} />
      <Route path='/mangas/details/:id' element={<ShowMangas />} />
      <Route path='/mangas/edit/:id' element={<EditManga />} />
      <Route path='/mangas/delete/:id' element={<DeleteMangas />} />
    </Routes>
  );
};

export default App;