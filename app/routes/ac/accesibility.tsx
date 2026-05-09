
function accesibility() {
    return (
        <main className="bg-[#FAF4E9] h-screen flex flex-col items-center">
            <div className = "flex flex-col bg-[#F3CBC5] min-h-30 min-w-300 mt-5 text-center justify-center rounded-xl">
                <h1 className="text-[#FAF4E9] font-margarine text-5xl"> Accesibility </h1>
            </div>

            <div className = "grid grid-cols-2 gap-5 mt-10 font-margarine text-[#FAF4E9] text-2xl ">
                <div className = "bg-[#AABDA0] w-150 h-40 mb-10 rounded-xl flex items-center justify-center duration-300"> Dark Mode</div>
                <div className = "bg-[#AABDA0] mb-10 rounded-xl flex items-center justify-center"> Subway surfers</div>
                <div className = "bg-[#AABDA0] h-40 mb-10 rounded-xl flex items-center justify-center"> Line Following</div>
                <div className = "bg-[#AABDA0] mb-10 rounded-xl flex items-center justify-center"> Animations on/off</div>
                <div className = "bg-[#AABDA0] h-40 mb-10 rounded-xl flex items-center justify-center"> Black and white</div>
                <div className = "bg-[#AABDA0] mb-10 rounded-xl flex items-center justify-center"> Enable games</div>
            </div>
        </main>
    );
}

export default accesibility;
