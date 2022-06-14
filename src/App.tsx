/* src/App.jsx */
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="text-center">
      <div className="py-3">
        <button 
          className="px-10 py-3 text-sm text-white font-semibold rounded-full 
            border border-purple bg-purple
            hover:text-white hover:bg-purple-dark hover:border-purple-dark
        ">Primary</button>
      </div>
      <div className="py-1">
        <button 
          className="px-10 py-3 text-sm text-purple font-semibold rounded-full 
        ">Secondary</button>
      </div>
      <div className="py-1">
        <button 
          className="px-10 py-3 text-sm text-black font-semibold rounded-full 
        ">Secondary</button>
      </div>
    </div>
  );
}

export default App;
