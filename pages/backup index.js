import { useState, useEffect } from 'react';

function MyComponent() {
  const [isClient, setIsClient] = useState(false);
  const [phone, setPhone] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showInitialView, setShowInitialView] = useState(true);

  const handlePrevSlide = () => {
    if(currentSlide != 0) {
    setCurrentSlide((prevSlide) => (prevSlide - 1) % (article.slides.length + 1));
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide((nextSlide) => (nextSlide + 1) % (article.slides.length + 1)); // fixed the error here
  };


  const article = {
    title: "Man Gets Hot Dog Stuck In Pine Street Chimney",
    category: "Culture/Politics", 
    shortDescription: "It all started when Ralph got a little tipsy at last night’s super bowl party...",
    thumbnail: "https://i.cbc.ca/1.6927332.1691098762!/fileImage/httpImage/lower-east-adams-lake-fire.jpg", 
    datePublished: "Saturday September 30th, 8:00 AM EST",
    author: {
      name: "Elissa Framoni",
      profilePicture: "https://i.postimg.cc/ht3hP9QV/Screenshot-2023-09-30-at-5-16-47-PM.png", 
      pronouns: "She/Her",
      bio: "Cool gal who likes to write",
      email: "elissyyyy@burlingtonbuzz.news"
    },
    slides: [
      {
        content: "But, in an unexpected twist, the hotdog got lodged halfway down the flue! and so he had to dig a whole to get it out which failed..",
        image: "https://www.allaboutbirds.org/guide/assets/photo/59858041-480px.jpg"
      },
      {
        content: "Ralph decided to use his grandmother's oversized knitting needle to retrieve the hotdog, but a mysterious bottle of mustard appeared on his doorstep.",
        image: "https://www.shutterstock.com/shutterstock/photos/1930215425/display_1500/stock-vector-childrenkids-playground-with-a-swing-slide-climbing-ladder-sand-box-bicycle-and-toys-1930215425.jpg"
      },
      {
        content: "The town's been abuzz ever since, wondering if the Mustard Fairy is real and whether Ralph's chimney is a portal to condiment heaven.",
        image: "https://media.istockphoto.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=0&k=20&c=Xl4svBmlDj67f78XK649lRiioherRzPG3KQ3qsUi0bo="
      },
      {
        content: "Pines Street now celebrates Chimney Hotdog Day and hosts an annual Mustard Mystery Hunt for all its intrigued residents.",
        image: "https://www.stonypointhall.com/wp-content/uploads/2014/05/Funny_shocked_face-5.jpg"
      },
    ]
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('phone', phone);
    console.log("This phone button is being clicked")
    fetch('https://burlington-buzz-api.vercel.app/signup',  {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div style={{display: "flex", width: "100vw", height: "100vh", backgroundColor: "#fff"}}>
      <div onClick={handlePrevSlide} style={{width: "50vw", left: 0, height: "100vh", position: 'absolute'}}>

      </div>
      <div onClick={handleNextSlide} style={{width: "50vw", right: 0, height: "100vh", position: 'absolute'}}>

    </div>
<div style={{
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundSize: "cover",
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 17.19%, rgba(0, 0, 0, 0.50) 31.77%, rgba(0, 0, 0, 0.00) 57.29%, rgba(0, 0, 0, 0.25) 77.6%, rgba(0, 0, 0, 0.75) 100%), url(${currentSlide == 0 ? (article.thumbnail) : (article.slides[currentSlide - 1]?.image)}), lightgray 50% / cover no-repeat`
}}>
          <div style={{marginLeft: 24, color: "#fff", marginRight: 24, transition: "margin-top 0.5s", marginTop: currentSlide != 0 ? (-48) : (16)}}>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "8px"}}>
          <img style={{width: 32, height: 32, borderRadius: "64px"}} src={article.author.profilePicture}/>
          <p style={{color: "#fff", fontSize: 18}}>
          {article.author.name}

          </p>
          <p style={{color: "#fff", fontSize: 12, fontStyle: "italic"}}>
            ({article.author.pronouns})
          </p>
        </div>
        <div>
          <p style={{fontWeight: 800,
                            textShadow: "2px 2px 16px rgba(0, 0, 0, 0.75)", // Adding drop shadow
            marginTop: 16, marginBottom: 8, fontSize: 16}}>{article.category.toUpperCase()}</p>
          <p style={{fontWeight: 800, fontSize: 36, 
                            textShadow: "2px 2px 16px rgba(0, 0, 0, 0.75)", // Adding drop shadow

            marginTop: 8}}>{article.title}</p>

        </div>
        </div>
        <div style={{color: "#fff", marginLeft: 24, marginRight: 24}}>
        <p style={{fontSize: 12, opacity: currentSlide == 0 ? (1) : (0), transition: "opacity 0.5s",
                          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)", // Adding drop shadow

          fontWeight: 400}}>
            {article.datePublished}
          </p>
          <p style={{fontSize: currentSlide == 0 ? (32) : (24),
                textShadow: "0px 0px 24px rgba(0, 0, 0, 1.0)", // Adding drop shadow

            marginBottom: 24, marginTop: 0, fontWeight: 600}}>
          {currentSlide == 0 ? (article.shortDescription) : (article.slides[currentSlide - 1]?.content)}
          </p>

          <div style={{display: "flex", height: 16, gap: 16, alignItems: "center", width: "100%", justifyContent: "center", marginBottom: 24, marginTop: 0}}>
          {Array.from({ length: article.slides.length + 1 }, (_, index) => 

          <div style={{
            transition: 'width 0.3s, height 0.3s, opacity 0.5s',
            transitionTimingFunction: 'ease-in-out',
            width: currentSlide != index ? (12) : (16), height: currentSlide != index ? (12) : (16), borderRadius: 16, backgroundColor: `rgba(255, 255, 255, ${currentSlide == index ? (1) : (0.33)})`}}>
            
          </div>)}
          </div>
        </div>
      </div>
      

      {/* {showInitialView ? (
        <div style={{ padding: '10px', backgroundColor: '#DAD7B2', border: '1px solid #ddd', marginTop: '10px' }}>
        <img src={article.thumbnail} alt={article.title} style={{width: '100%', height: 'auto'}} />
        <h2>{article.title}</h2>
        <p>{article.category}</p>
        <p>{article.shortDescription}</p>
        <div>
          <img src={article.author.profilePicture} alt={article.author.name} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
          <span>{article.author.name}</span>

          <p>Date Published: {article.datePublished}</p>
        </div>
      </div>

      ) : (
        <div className="my-slider">
          <div className="slide">
            <img src={article.slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
            <p className="slide-text">{article.slides[currentSlide].content}</p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button id="prev" className="controls" onClick={handlePrevSlide}>
              <img src="/back.svg" alt="Previous Slide" style={{pointerEvents: "none"}} />
            </button>
            <button id="next" className="controls" onClick={handleNextSlide}>
              <img src="/forward.svg" alt="Next Slide" style={{pointerEvents: "none"}} />
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default MyComponent;