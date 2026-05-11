import { useState } from "react";
import { useOutletContext } from "react-router";


function Accesibility() {

  const { subwaySurf, setSubwaySurf, lineFollow, setLineFollow, bw, setBlackWhite, animations, setAnimations, enableGame, setGame } = useOutletContext<{
    subwaySurf: boolean; setSubwaySurf: (v: boolean) => void;
    lineFollow: boolean; setLineFollow: (v: boolean) => void;
    bw: boolean; setBlackWhite: (v: boolean) => void;
    animations: boolean; setAnimations: (v: boolean) => void;
    enableGame: boolean; setGame: (v: boolean) => void;
}>();

  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="bg-[#FAF4E9] h-screen flex flex-col items-center">
      <div className="flex flex-col bg-[#F3CBC5] min-h-30 w-full max-w-6xl mt-5 text-center justify-center rounded-xl">
        <h1 className="text-[#FAF4E9] font-margarine text-5xl">Accesibility</h1>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-15 font-margarine text-[#FAF4E9] text-2xl mr-5">
        <div onClick ={() => setDarkMode(!darkMode)}><DarkMode active = {darkMode}/></div>
        <div onClick={() => setSubwaySurf(!subwaySurf)}><Subwaysurf active={subwaySurf} /></div>

        <div onClick={() => setLineFollow(!lineFollow)}><LineFollowing active={lineFollow} /></div>
        <div onClick={() => setAnimations(!animations)}><Animations active={animations} /></div>
        <div onClick={() => setGame(!enableGame)}><Enablegames active={enableGame} /></div>
        <div onClick={() => setBlackWhite(!bw)}><BlackandWhite active={bw} /></div>
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

function BlackandWhite({active} : {active: boolean}){
    return(
            <div className = {`mb-10 h-40 rounded-xl flex items-center justify-center hover:scale-105 duration-300 ${active ? "bg-[#F3CBC5]" : "bg-[#AABDA0]"}`}>Black and White</div>
    )
}

function Enablegames({active} : {active: boolean}){
    return(
            <div className = {`mb-10 h-40 rounded-xl flex items-center justify-center hover:scale-105 duration-300 ${active ? "bg-[#F3CBC5]" : "bg-[#AABDA0]"}`}>Enable Games</div>
    )
}

export default Accesibility;
