import React from 'react';
import IMAGES from "../data/images";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";

const Gallery = () => {
    return (
        <div>
            {IMAGES.map(imageObject => {
                return <Image key={imageObject.id} src={imageObject.image} desc={imageObject.description} title={imageObject.title} />
            })}
        </div>
    )
}

const Image = ({ src, desc, title }) => {
    return (
        <div className="gallery">
            <a target="_blank" rel="noreferrer" href={src}><ImageShadow src={src} /></a>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Gallery;