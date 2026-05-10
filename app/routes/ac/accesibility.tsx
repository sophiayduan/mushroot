import { useState } from "react";
import { useOutletContext } from "react-router";


function Accesibility() {
const { subwaySurf, setSubwaySurf } = useOutletContext<{ subwaySurf: boolean; setSubwaySurf: (v: boolean) => void }>();
  const [darkMode, setDarkMode] = useState(false);
  const [linefollow, setLineFollowing] = useState(false);
  const [animations, setAnimations] = useState(false);

  return (
    <main className="bg-[#FAF4E9] h-screen flex flex-col items-center">
      <div className="flex flex-col bg-[#F3CBC5] min-h-30 min-w-300 mt-5 text-center justify-center rounded-xl mr-5">
        <h1 className="text-[#FAF4E9] font-margarine text-5xl">Accesibility</h1>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-15 font-margarine text-[#FAF4E9] text-2xl mr-5">
        <div onClick ={() => setDarkMode(!darkMode)}><DarkMode active = {darkMode}/></div>
        <div onClick={() => setSubwaySurf(!subwaySurf)}><Subwaysurf active={subwaySurf} /></div>

        <div onClick={() => setLineFollowing(!linefollow)}><LineFollowing active={linefollow} /></div>
        <div className="bg-[#AABDA0] mb-10 rounded-xl flex items-center justify-center hover:scale-105 duration-300">Animations on/off</div>
        <div className="bg-[#AABDA0] h-40 mb-10 rounded-xl flex items-center justify-center hover:scale-105 duration-300">Black and white</div>
        <div className="bg-[#AABDA0] mb-10 rounded-xl flex items-center justify-center hover:scale-105 duration-300">Enable games</div>
      </div>
      
    </main>
  );
}

function Subwaysurf({ active }: { active: boolean }) {
  return (
      <div className={`mb-10 w-150 h-40 rounded-xl flex items-center justify-center hover:scale-105 duration-300 ${active ? "bg-[#F3CBC5]" : "bg-[#AABDA0]"}`}>
        Subway surfers
      </div>
  );
}

function DarkMode({active} : {active: boolean}){
    return(
        <div className = {`mb-10 h-40 rounded-xl flex items-center justify-center hover:scale-105 duration-300 ${active ? "bg-[#F3CBC5]" : "bg-[#AABDA0]"}`}> Dark Mode</div>
    )
}

function LineFollowing({active} : {active: boolean}){
    return(
            <div className = {`mb-10 h-40 rounded-xl flex items-center justify-center hover:scale-105 duration-300 ${active ? "bg-[#F3CBC5]" : "bg-[#AABDA0]"}`}>Line Following</div>
    )
}

function Animations({active} : {active: boolean}){
    return(
            <div className = {`mb-10 h-40 rounded-xl flex items-center justify-center hover:scale-105 duration-300 ${active ? "bg-[#F3CBC5]" : "bg-[#AABDA0]"}`}>Animations On/Off</div>
    )
}
export default Accesibility;