import React from "react";
import Spline from '@splinetool/react-spline';

export default function ErrorPage() {
  return (
    <main className="w-full h-screen bg-black relative overflow-hidden">
      <Spline 
        scene="https://prod.spline.design/2fXAux-rsCaAPM5P/scene.splinecode"
        className="w-full h-full"
        onLoad={(spline) => {
          console.log('Spline loaded:', spline);
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <div className="animate-bounce mb-8">
          <div className="w-24 h-24 bg-gradient-to-r white mx-auto mb-6 shadow-2xl"></div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-white to-yellow bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
            
കൗതുകം ലേശം കൂടുതൽ ആണ് ഇല്ലേ?
          </h1>
        </div>
        
        <div className="space-y-4 max-w-md mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg animate-pulse">
            നീ എത്തിയ സ്ഥലം ഒരിക്കലും ഉണ്ടായിരുന്നില്ല!😅  
          </h2>
          
          <p className="text-lg text-thLight font-medium">
            ഇനി ഇങ്ങനെ വീണ്ടും വരരുത്! 🤭
          </p>
        </div>

        <div className="mt-12 space-x-4">
          <a 
            href="/" 
            className="inline-block bg-thPurple hover:bg-thOrange text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            🏠 Home
          </a>
          <button 
            onClick={() => window.history.back()} 
            className="inline-block bg-transparent border-2 border-white hover:border-thOrange text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-thDark"
          >
            ← Back
          </button>
        </div>
      </div>
    </main>
  );
}
