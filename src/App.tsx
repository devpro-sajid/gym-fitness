import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home"
import {useState,useEffect} from "react";
import {SelectedPage} from "@/Shared/types.ts"


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
     <Home></Home>
    </div>
        
  )
}

export default App
