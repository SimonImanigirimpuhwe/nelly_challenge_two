import React, { useState } from 'react';
import SearchInput from './components/Search'
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import AlbumPhotos from './components/AlbumPhotos';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchId, setSearchId]= useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    if (searchId === "") {
      setError("Id is required")
    } 
    else {
      setLoading(true)
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then((result) => result.json())
      .then((albums) => {
        setLoading(false)
        const matched = albums.filter((album) => (album.albumId).toString() === searchId)
        if (matched.length ===0) {
          setError("No album with such id")
        }
        setPhotos(matched)
      })
      .catch((err) =>{ 
        setLoading(false)
        setError(err.message)
      })
    }
  }

  const onChange = ({value}) => {
    setSearchId(value)
    setError("")
    setPhotos([])
  }

  return (
    <div className="App">
      <Header />
      <SearchInput onSubmit={onSubmit} onChange={onChange} error={error}/>
      <AlbumPhotos photos={photos} loading={loading}/>
      <Footer />
    </div>
  );
}

export default App;
