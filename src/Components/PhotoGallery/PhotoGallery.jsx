import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const photos = [
  {
    src: "https://i.ibb.co/94jDJgG/Gallery-2.jpg",
    width: 400,
    height: 300,
    srcSet: [
      { src: "https://i.ibb.co/94jDJgG/Gallery-2.jpg", width: 400, height: 300 },
      { src: "https://i.ibb.co/94jDJgG/Gallery-2.jpg", width: 200, height: 150 }
    ]
  },
  {
    src: "https://i.ibb.co/vk5rqZn/Gallery-3.jpg",
    width: 400,
    height: 300,
    srcSet: [
      { src: "https://i.ibb.co/vk5rqZn/Gallery-3.jpg", width: 400, height: 300 },
      { src: "https://i.ibb.co/vk5rqZn/Gallery-3.jpg", width: 200, height: 150 }
    ]
  },
  {
    src: "https://i.ibb.co/G9RYjVw/Gallery-6.jpg",
    width: 800,
    height: 400,
    srcSet: [
      { src: "https://i.ibb.co/G9RYjVw/Gallery-6.jpg", width: 800, height: 450 },
      { src: "https://i.ibb.co/G9RYjVw/Gallery-6.jpg", width: 400, height: 225 }
    ]
  },
  {
    src: "https://i.ibb.co/CWD4zTY/Gallery-4.jpg",
    width: 320,
    height: 300,
    srcSet: [
      { src: "https://i.ibb.co/CWD4zTY/Gallery-4.jpg", width: 400, height: 300 },
      { src: "https://i.ibb.co/CWD4zTY/Gallery-4.jpg", width: 100, height: 150 }
    ]
  },
  {
    src: "https://i.ibb.co/mvbMBvW/Gallery-5.jpg",
    width: 400,
    height: 300,
    srcSet: [
      { src: "https://i.ibb.co/mvbMBvW/Gallery-5.jpg", width: 400, height: 300 },
      { src: "https://i.ibb.co/mvbMBvW/Gallery-5.jpg", width: 200, height: 150 }
    ]
  },
  {
    src: "https://i.ibb.co/J2Tbzrr/Gallery-7.jpg",
    width: 300,
    height: 400,
    srcSet: [
      { src: "https://i.ibb.co/J2Tbzrr/Gallery-7.jpg", width: 40, height: 450 },
      { src: "https://i.ibb.co/J2Tbzrr/Gallery-7.jpg", width: 40, height: 225 }
    ]
  },
  {
    src: "https://i.ibb.co/4PkSPcW/Gallery-8.jpg",
    width: 800,
    height: 400,
    srcSet: [
      { src: "https://i.ibb.co/4PkSPcW/Gallery-8.jpg", width: 100, height: 50 },
      { src: "https://i.ibb.co/4PkSPcW/Gallery-8.jpg", width: 200, height: 25 }
    ]
  },
  {
    src: "https://i.ibb.co/ZMBjjKT/Gallery.jpg",
    width: 200,
    height: 100,
    srcSet: [
      { src: "https://i.ibb.co/ZMBjjKT/Gallery.jpg", width: 200, height: 100 },
      { src: "https://i.ibb.co/ZMBjjKT/Gallery.jpg", width: 100, height: 55 }
    ]
  },
  {
    src: "https://i.ibb.co/dPRTgdc/Gallery-1.jpg",
    width: 170,
    height: 100,
    srcSet: [
      { src: "https://i.ibb.co/dPRTgdc/Gallery-1.jpg", width: 200, height: 100 },
      { src: "https://i.ibb.co/dPRTgdc/Gallery-1.jpg", width: 100, height: 55 }
    ]
  },
];

const PhotoGallery = () => {
  return (

    <div data-aos="zoom-in">
      <PhotoAlbum layout="rows" photos={photos} />
    </div>

  );
};

export default PhotoGallery;