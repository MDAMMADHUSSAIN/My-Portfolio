import React from 'react'
import ChromaGrid from './custom-components/ChromaGrid'
import Profile from "../assets/profile.jpg";

const TeamCard = () => {
    const items = [
  
  {
    image: Profile,
    title: "Abu Talib H.",
    subtitle: "Full Stack Developer | @Somewhere",
    handle: "@abutalibhussain",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://linkedin.com/in/"
  },
  {
    image: Profile,
    title: "Md Ammad H.",
    subtitle: "Full Stack Developer | @Somewhere",
    handle: "@ammadhussain2109",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/mdammadhussain21"
  },
  {
    image: Profile,
    title: "Mohd Sameer",
    subtitle: "Full Stack Developer | @Somewhere",
    handle: "@mohdsameer",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://linkedin.com/in/"
  }
];
  return (

<div style={{height: '600px', position: 'relative', }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>
  )
}

export default TeamCard