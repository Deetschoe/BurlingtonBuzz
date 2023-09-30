import { useState, useEffect } from 'react';
import 'tiny-slider/dist/tiny-slider.css';
// import { tns } from "tiny-slider/src/tiny-slider";

function MyComponent() {
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);

  //   if (isClient) {
  //     // Create the h1 element
  //     const titleElement = document.createElement('h1');
  //     titleElement.textContent = "Burlington Buzz";

  //     // Apply inline styles
  //     titleElement.style.fontFamily = 'Arial, sans-serif';
  //     titleElement.style.fontSize = '32px';
  //     titleElement.style.color = '#333';
  //     titleElement.style.textAlign = 'center';
  //     titleElement.style.padding = '20px';
  //     titleElement.style.backgroundColor = '#f5f5f5';

  //     // Append the title to the placeholder in the HTML
  //     const placeholder = document.getElementById('titlePlaceholder');
  //     if (placeholder) {
  //       placeholder.appendChild(titleElement);
  //     }
  //   }
  // }, [isClient]);  // Runs whenever isClient changes

  return (
    <div>
        <div>
          <h1 style={{fontFamily: "Arial, sans-serif", width: "100%", textAlign: "center"}}>Burlington Buzz</h1>
        </div>
        <div id="titlePlaceholder"></div>
        <div className="my-slider">
            <div className="slide">
                <img src="https://cloud-mwcdvbg3q-hack-club-bot.vercel.app/0outernet_video.jpg" alt="Description 1" />
                <p className="slide-text">This was some crazy event yo</p>
            </div>
            <div className="slide">
                <img src="https://cloud-9lq65xru1-hack-club-bot.vercel.app/0white-paper__2_.jpg" alt="Description 2" />
                <p className="slide-text">Paper texture yes mmm</p>
            </div>
            {/* Add more slides as needed */}
        </div>
        <button id="prev" className="controls">
            <img src="/back.svg" alt="Previous Slide" />
        </button>
        <button id="next" className="controls">
            <img src="/forward.svg" alt="Next Slide" />
        </button>
        {/* ... other JSX ... */}
    </div>
  );
}

export default MyComponent;
