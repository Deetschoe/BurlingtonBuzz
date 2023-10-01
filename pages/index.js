import { useState, useEffect } from 'react';
import Div100vh from 'react-div-100vh'

function MyComponent() {
  const [isClient, setIsClient] = useState(false);
  const [phone, setPhone] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showInitialView, setShowInitialView] = useState(true);
  const [showPhoneSignup, setShowPhoneSignup] = useState(false);


  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };



  const handlePrevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((prevSlide) => (prevSlide - 1) % (article?.slides?.length + 1));
      setShowPhoneSignup(false)
    }
  };
  
  const handleNextSlide = () => {
    if (currentSlide < article?.slides?.length) {
      setCurrentSlide((nextSlide) => nextSlide + 1);
    } else {
      // Show the phone signup slide when the user reaches the end of the slides
      setShowPhoneSignup(true);
      
    }
    
  };
const handleSubmit = () => {
  const formData = new FormData();
  formData.append('phone', phone);
  console.log("This phone button is being clicked");
  fetch('https://burlington-buzz-api.vercel.app/signup',  {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if(data.error) {
      alert(data.error)
      } else {
        setShowPhoneSignup(false)
      }

    })
    .catch((error) =>{
     alert("Ah Didn't work")
    console.error('Error:', error)
    }
    );
};
  const [article, setArticle] = useState(null);

//   const article = {
//     "title": "Embattled Speaker McCarthy tries new 45-day funding tactic to avoid government shutdown",
//     "category": "Satirical Story",
//     "shortDescription": "Afternoon Delight: Speaker McCarthy's Unconventional Solution",
//     "thumbnail": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-crroAQbiVpgKq5PcJv8d4cLi.png?st=2023-10-01T19%3A22%3A49Z&se=2023-10-01T21%3A22%3A49Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T17%3A05%3A22Z&ske=2023-10-02T17%3A05%3A22Z&sks=b&skv=2021-08-06&sig=tsbaI/hoNP7YPYFnk8yUqzA/lGQwGS1EBIK1ZTWvoHE%3D",
//     "thumbnailDescription": "Embattled Speaker McCarthy tries new 45-day funding tactic to avoid government shutdown",
//     "datePublished": "October 1, 2023",
//     "author": {
//         "name": "Naomi Takahashi",
//         "pronouns": "She/Her",
//         "bio": "Naomi writes articles on mindfulness and the corruption in Vermont's underground society.",
//         "email": "calmcorner@burlingtonbuzz.news",
//         "profilePicture": "https://i.postimg.cc/6Qg7zd9B/Screenshot-2023-09-30-at-5-16-35-PM.png"
//     },
//     "slides": [
//         {
//             "slide": 1,
//             "content": "Embattled Speaker McCarthy tries new 45-day funding tactic to avoid government shutdown",
//             "DALLEPrompt": "hyper-realistic casual + humorous + political + Kevin McCarthy tries unconventional funding tactic for government shutdown + Washington, D.C. + Capitol Hill + Satirical",
//             "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-xeL0D7fmStD3OH1u2xz9Ei42.png?st=2023-10-01T19%3A22%3A50Z&se=2023-10-01T21%3A22%3A50Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A17%3A45Z&ske=2023-10-02T00%3A17%3A45Z&sks=b&skv=2021-08-06&sig=HzpLahtO5OkU9sklErDiv4ivM2anySI7hFAQBG2dl38%3D"
//         },
//         {
//             "slide": 2,
//             "content": "A rollercoaster of events unfolds as McCarthy faces resistance and unexpected allies",
//             "DALLEPrompt": "hyper-realistic suspenseful + unpredictable + politics + Kevin McCarthy's unconventional tactics meet resistance + U.S. Congress + Behind closed doors + Satirical",
//             "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-zvhoXBXYYohxhyAfnf4goy2X.png?st=2023-10-01T19%3A22%3A57Z&se=2023-10-01T21%3A22%3A57Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A36%3A00Z&ske=2023-10-02T00%3A36%3A00Z&sks=b&skv=2021-08-06&sig=L0Ke2D1v/10rx0JEttSSkj5PWHEPbE4YxOrGEoNHBzk%3D"
//         },
//         {
//             "slide": 3,
//             "content": "The climax: McCarthy's 45-day funding bill sparks chaos and hilarity",
//             "DALLEPrompt": "hyper-realistic comedic + chaotic + political + McCarthy's 45-day funding bill causes uproar + House floor + Laughter and pandemonium + Satirical",
//             "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-inAw3FvNdhETIPASskZtPBWn.png?st=2023-10-01T19%3A23%3A04Z&se=2023-10-01T21%3A23%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A30%3A10Z&ske=2023-10-02T00%3A30%3A10Z&sks=b&skv=2021-08-06&sig=ecrr2elak9SR3gAc4UkCkCtmDJ/5Q8S8eCgnnYS10bY%3D"
//         },
//         {
//             "slide": 4,
//             "content": "McCarthy's clever twist saves the day, leaving everyone bewildered",
//             "DALLEPrompt": "hyper-realistic unexpected + clever + political + McCarthy's unconventional tactic pays off + Government saved in absurd fashion + Confused politicians + Satirical",
//             "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-YOBXeVAyinEgYt2g7UsEfk3A.png?st=2023-10-01T19%3A23%3A12Z&se=2023-10-01T21%3A23%3A12Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A28%3A16Z&ske=2023-10-02T00%3A28%3A16Z&sks=b&skv=2021-08-06&sig=wauQMJno2ecwYSxmq41mGU7FI5I5vHSNqz%2BZF2B%2BHkw%3D"
//         }
//     ]
// }

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('https://burlington-buzz-api.vercel.app/');
            const data = await response.json();
            setArticle(data.articles[data.articles.length - 1].articlecontent);
        } catch (error) {
            console.error("There was an error fetching the data", error);
        }
    }

    fetchData();
  }, []); // The empty array means this useEffect will run once when the component mounts.



  return (
    <Div100vh style={{ display: "flex", width: "100vw", backgroundColor: "#fff", position: "relative" }}>
      {currentSlide !== article?.slides?.length + 1 && (
        <div style={{zIndex: 3,}}>
          <div onClick={handlePrevSlide} style={{ width: "50vw", left: 0, height: "100%", position: 'absolute' }}></div>
          <div onClick={handleNextSlide} style={{ width: "50vw", right: 0, height: "100%", position: 'absolute' }}></div>
        </div>
      )} 
<Div100vh
  style={{
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100vw",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative", // Ensure the positioning for absolute elements inside
  }}
>

<div
    style={{
      backgroundImage: `url(${
        currentSlide === 0 ? article?.thumbnail : article?.slides[currentSlide - 1]?.image
      })`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
    }}
  />
  <div
    style={{
      backgroundImage: `url(${
        currentSlide === 0 ? article?.thumbnail : article?.slides[currentSlide - 1]?.image
      })`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 17.19%, rgba(0, 0, 0, 0.50) 31.77%, rgba(0, 0, 0, 0.00) 57.29%, rgba(0, 0, 0, 0.25) 77.6%, rgba(0, 0, 0, 0.75) 100%)`,

      bottom: 0,
      zIndex: 0,
    }}
  />
        <div style={{ marginLeft: 24, zIndex: 1, color: "#fff", marginRight: 24, transition: "margin-top 0.5s", marginTop: currentSlide !== 0 ? (-48) : (16) }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
            <img style={{ width: 32, height: 32, borderRadius: "64px" }} src={article?.author?.profilePicture} />
            <p style={{ color: "#fff", fontSize: 18 }}>
              {article?.author?.name}
            </p>
            <p style={{ color: "#fff", fontSize: 12, fontStyle: "italic" }}>
              ({article?.author?.pronouns})
            </p>
          </div>
          <div>
            <p style={{
              fontWeight: 800,
              textShadow: "2px 2px 16px rgba(0, 0, 0, 0.75)",
              marginTop: 16, marginBottom: 8, fontSize: 16
            }}>{article?.category?.toUpperCase()}</p>
            <p style={{
              fontWeight: 800, fontSize: 36,
              textShadow: "2px 2px 16px rgba(0, 0, 0, 0.75)",
              marginTop: 8
            }}>{article?.title}</p>
          </div>
        </div>
        <div style={{ color: "#fff", zIndex: 1, marginLeft: 24, marginRight: 24 }}>
          <p style={{
            fontSize: 12, opacity: currentSlide === 0 ? (1) : (0), transition: "opacity 0.5s",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)",
            fontWeight: 400
          }}>
            {article?.datePublished}
          </p>
          <p style={{
            fontSize: currentSlide === 0 ? (32) : (24),
            textShadow: "0px 0px 24px rgba(0, 0, 0, 1.0)",
            marginBottom: 24, marginTop: 0, fontWeight: 600
          }}>
            {currentSlide === 0 ? (article?.shortDescription) : (article?.slides[currentSlide - 1]?.content)}
          </p>
          <div style={{ display: "flex", height: 16, gap: 16, alignItems: "center", width: "100%", justifyContent: "center", marginBottom: 24, marginTop: 0 }}>
            {Array.from({ length: article?.slides?.length + 1 }, (_, index) =>
              <div style={{
                transition: 'width 0.3s, height 0.3s, opacity 0.5s',
                transitionTimingFunction: 'ease-in-out',
                width: currentSlide !== index ? (12) : (16), height: currentSlide !== index ? (12) : (16), borderRadius: 16, backgroundColor: `rgba(255, 255, 255, ${currentSlide === index ? (1) : (0.33)})`
              }}>
              </div>)}
          </div>
        </div>
  
        {/* Conditional rendering for Thank You message */}
        {showPhoneSignup && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: 'center',
            padding: '12px',
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "8px",
            zIndex: 999,
            padding: 24,
          }}>
            <h2 style={{ marginBottom: '20px' }}>Enjoy Our Stories? <br/> Get Daily Stories</h2>
            <label for="phone">Phone Number:</label>
      <div class="field">
	    <i class="fas fa-phone"></i>
	    <input onChange={handlePhoneChange} id="phone" type="tel" name="phone" placeholder="Your Phone Number" required/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
          </div>
        )}
      </Div100vh>
    </Div100vh>
  );
  




}


export default MyComponent;