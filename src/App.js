import React, { useState } from 'react';
import SearchInput from './components/Search'
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import AlbumPhotos from './components/AlbumPhotos';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchId, setSearchId]= useState("")
  const [error, setError] = useState(null)

  const onSubmit = () => {
    if (searchId === "") {
      setError("Id is required")
    } 
    else {
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then((result) => result.json())
      .then((albums) => {
        const matched = albums.filter((album) => (album.albumId).toString() === searchId)
        setPhotos(matched)
      })
      .catch((err) => setError(err.message))
    }
  }

  const onChange = ({value}) => {
    setSearchId(value)
    setError("")
  }

  return (
    <div className="App">
      <Header />
      <SearchInput onSubmit={onSubmit} onChange={onChange} error={error}/>
      <AlbumPhotos photos={photos}/>
      <Footer />
    </div>
  );
}

export default App;
