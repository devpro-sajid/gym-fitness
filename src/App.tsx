import Navbar from "@/scenes/Navbar";
import Home from "@/scenes/Home";
import Benefits from "@/scenes/Benefits"

import {useState,useEffect} from "react";
import {SelectedPage} from "@/Shared/types.ts"
import OurClasses from "./scenes/OurClasses";


function App() {
const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
const [isTopOfPage,setIsTopOfPage]=useState<boolean>(true);

useEffect(() => {
  const handleScroll=()=>{
    if(window.scrollY === 0){
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home)
    }
    if(window.scrollY !== 0){
      setIsTopOfPage(false)
    }
  }
  window.addEventListener("scroll", handleScroll);
  return()=> window.removeEventListener("scroll", handleScroll)
}, [])

  return (
    <div className="bg-gray-20 app">
     <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
     <Home setSelectedPage={setSelectedPage}></Home>
     <Benefits setSelectedPage={setSelectedPage}></Benefits>
     <OurClasses setSelectedPage={setSelectedPage}></OurClasses>
    </div>
        
  )
}

export default App
