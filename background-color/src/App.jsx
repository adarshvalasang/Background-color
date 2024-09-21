import { useState } from "react";
function App() {
  const [color, setColor] = useState("Yellow");

  return (
    <>
      <div
        className="w-full h h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-xl">
           <button onClick={()=>setColor("Red")} 
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"red"}}
           >Red</button>
           <button  onClick={()=>setColor("Blue")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"blue"}}
           >Blue</button>
           <button  onClick={()=>setColor("Grey")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"grey"}}
           >Grey</button>
           <button  onClick={()=>setColor("Orange")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"orange"}}
           >Orange</button>
           <button  onClick={()=>setColor("Purple")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"Purple"}}
           >Purple</button>
           <button  onClick={()=>setColor("white")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"White"}}
           >White</button>
           <button  onClick={()=>setColor("Pink")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"Pink"}}
           >Pink</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
