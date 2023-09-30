import { useState, useEffect } from 'react';

function MyComponent() {
  const [isClient, setIsClient] = useState(false);
  const [phone, setPhone] = useState("");

  const article = {
    title: "Man Gets Hot Dog Stuck In Pine Street Chimney",
    category: "Culture/Politics", 
    shortDescription: "It all started when Ralph got a little tipsy at last night’s super bowl party...",
    thumbnail: "", 
    datePublished: "Saturday September 30th, 8:00 AM EST",
    author: {
      name: "Elissa Framoni",
      profilePicture: "", 
      pronouns: "She/Her",
      bio: "Cool gal who likes to write",
      email: "elissyyyy@burlingtonbuzz.news"
    },
    slides: [
      {
        content: "Ralph is your typical sports fan: very fun and adventurous.",
        image: ""
      },
      {
        content: "Ralph is your typical sports fan: very fun and adventurous.",
        image: ""
      }
    ]
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('phone', phone);
    console.log("This button is being clicked")
    fetch('https://burlington-buzz-api.vercel.app/signup',  {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>   
      <label for="phone">Phone</label>
      <div class="field">
	    <i class="fas fa-phone"></i>
	    <input onChange={handlePhoneChange} id="phone" type="tel" name="phone" placeholder="Your Phone Number" required/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
        <div>

          <p>{article.title}</p>
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
        </div>
        <button id="prev" className="controls" onClick={() => console.log("Prev clicked!")}>
            <img src="/back.svg" alt="Previous Slide" style={{pointerEvents: "none"}} />
        </button>
        <button id="next" className="controls" onClick={() => console.log("Next clicked!")}>
            <img src="/forward.svg" alt="Next Slide" style={{pointerEvents: "none"}} />
            console
        </button>
    </div>
  );
}

export default MyComponent;
