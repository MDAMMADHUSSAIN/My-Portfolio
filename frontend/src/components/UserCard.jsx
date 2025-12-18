import React from 'react'
import ChromaGrid from './custom-components/ChromaGrid'
import Profile from "../assets/profile.png";

const TeamCard = () => {
    const items = [
  
 {
    image: Profile,
    title: "Md Ammad H.",
    subtitle: "Full Stack Developer | @Kuwait",
    handle: "@ammadhussain2109",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/MDAMMADHUSSAIN"
  },
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