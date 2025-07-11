'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [currentDescriptor, setCurrentDescriptor] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const descriptors = [
    'Community',
    'Scholarship', 
    'Leadership',
    'Innovation',
    'Democracy',
    'Excellence',
    'Engagement',
    'Discovery'
  ]
  
  const imageFiles = [
    '062.jpg',
    '10-24-06 Bookerpodium.jpg',
    '2.jpg',
    '3 - eagleton-targumarticle.jpg',
    '3.JPG',
    '37.jpg',
    '5.jpg',
    '9.jpg',
    'AR WL postcard crop.jpg',
    'case1957.jpg',
    'Caucus room-Students watch 1960 presidential election results.jpg',
    'Christie speaking.jpg',
    'class of 1981.jpg',
    'debate.jpg',
    'dining room.tif',
    'Director 2 Alan Rosenthal.jpg',
    'Director 3 Ruth B Mandel headshot.jpg',
    'Director 4 John J. Farmer, Jr crop.jpg',
    'Drawing room-Senator Clifford Case at Eagleton in 1957.jpg',
    'drawing room.tif',
    'Ed in Political Campaigning.jpg',
    'EIP 25th anniversary President Bloustein and Governors Byrne Meyner Cahill.jpg',
    'EIPbldg.jpg',
    'For drawing room - 1966 fellows.jpg',
    'Foyer 1938.jpg',
    'Foyer-1960s reception.jpg',
    'govhughes.jpg',
    'Harold Martin and Gov. Byrne.jpg',
    'IMG_3525_2.JPG',
    'IWL Class w Ruth and Mary 001.jpg',
    'JB2_2513.JPG',
    'JB2_2959.JPG',
    'KEK Elizabeth Warren.jpg',
    'NR16SotomayorVisit4034.JPG',
    'NR17BookTalkMarch4998.jpg',
    'ruth_s class take two 007.jpg',
    'Seniors_4x6.jpg',
    'With Anita Hill.jpg',
    'Wood Lawn fall.jpg',
    'Wood Lawn spring.jpg',
    'Wood Lawn summer.jpg',
    'Wood Lawn winter.jpg'
  ]

  useEffect(() => {
    // Change descriptor every 3 seconds
    const descriptorInterval = setInterval(() => {
      setCurrentDescriptor((prev) => (prev + 1) % descriptors.length)
    }, 7000)

    // Change slide every 20 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageFiles.length)
    }, 7000)

    return () => {
      clearInterval(descriptorInterval)
      clearInterval(slideInterval)
    }
  }, [])

  return (
    <div className="container">
      {/* Background slideshow */}
      <div className="background-slideshow">
        {imageFiles.map((filename, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={`/Kiosk-images/${filename}`} alt="Eagleton Event" />
          </div>
        ))}
      </div>

      {/* Glass overlay content */}
      <div className="content-card">
        <p className="descriptor" key={currentDescriptor}>
          <span className="eagleton-text">Eagleton is </span>
          {descriptors[currentDescriptor]}
        </p>
      </div>
    </div>
  )
}