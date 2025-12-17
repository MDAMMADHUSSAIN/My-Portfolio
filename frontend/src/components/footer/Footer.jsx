import React from 'react'
import GlassIcons from '../custom-components/GlassIcons'
import {FileArchive} from "lucide-react" 
import {BookA} from "lucide-react" 
import {FolderHeart} from "lucide-react" 
import {CloudUpload} from "lucide-react" 
import {FilePenLine} from "lucide-react" 
import {ChartBarIncreasing} from "lucide-react" 

const Footer = () => {

     const items = [
        { icon: <FileArchive />, color: "blue", label: "Files" },
        { icon: <BookA />, color: "purple", label: "Books" },
        { icon: <FolderHeart />, color: "red", label: "Health" },
        { icon: <CloudUpload />, color: "indigo", label: "Weather" },
        { icon: <FilePenLine />, color: "orange", label: "Notes" },
        { icon: <ChartBarIncreasing />, color: "green", label: "Stats" },
      ];

  return (
    <div className='w-full bg-white flex justify-center items-center'>
      <div className="relative ">
                <GlassIcons items={items} className="text-white flex justify-center w-full items-center h-50" />
              </div>
    </div>
  )
}

export default Footer
