import React from 'react'
import Card from './Card'
import EmptyContent from './EmptyContent'

const AlbumPhotos = ({photos}) => {
    return (
        <div className="album_wrapper">
            {photos.length > 0 ? photos.map((photo) => (
                <Card photo={photo} key={photo.id}/>
            )): <EmptyContent />}
        </div>
    )
}

export default AlbumPhotos
