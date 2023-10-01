import { useState, useEffect } from 'react';
import Div100vh from 'react-div-100vh'

function MyComponent() {
  const [isClient, setIsClient] = useState(false);
  const [phone, setPhone] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showInitialView, setShowInitialView] = useState(true);
  const [showPhoneSignup, setShowPhoneSignup] = useState(false);

  const thankYouMessage = showPhoneSignup ? (
    <div style={{ textAlign: 'center', padding: '16px' }}>
      <h2>Thank you for signing up!</h2>
      <p>We'll keep you updated with the latest news.</p>
    </div>
  ) : null;
  

  const handlePrevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((prevSlide) => (prevSlide - 1) % (article.slides.length + 1));
    }
  };
  
  const handleNextSlide = () => {
    if (currentSlide < article.slides.length) {
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
      setShowPhoneSignup(true);
    })
    .catch((error) => console.error('Error:', error));
};

  const article = {
    "title": "Feinstein's Funny Fiasco: The Chaotic Conversation About Term Limits",
    "category": "Politics",
    "shortDescription": "Find out how Sen. Feinstein's demise sparked a hilarious debate on congressional term limits!",
    "thumbnail": "https://example.com/feinstein_thumbnail.jpg",
    "datePublished": "Friday August 13th, 10:00 AM EST",
    "author": {
        "name": "Chuck Johnson",
        "pronouns": "he/him",
        "bio": "Chuck Johnson is a seasoned journalist with a knack for uncovering the humor in current events. He brings a unique and playful perspective to his storytelling.",
        "email": "chuck.johnson@example.com"
    },
    "slides": [
        {
            "slide": 1,
            "content": "Senator Feinstein's sudden death brings attention to the need for congressional term limits.",
            "DALLEPrompt": "Generate an image showing a caricature of Senator Feinstein, dressed as a referee, blowing a whistle to signal the end of a politician's term. Surround the referee caricature with signs that say 'Term Limits Now!' and 'Time's Up!' The image should be playful and humorous.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-MxB0n4LMzHHjmnYAfjxUvVb8.png?st=2023-10-01T16%3A43%3A44Z&se=2023-10-01T18%3A43%3A44Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T16%3A20%3A27Z&ske=2023-10-02T16%3A20%3A27Z&sks=b&skv=2021-08-06&sig=LGNFMERBDlapkB0EMYnpHSY7FEeABE1skb4b7jrRCMA%3D"
        },
        {
            "slide": 2,
            "content": "A Pew survey reveals that 87% of the public supports the implementation of congressional term limits.",
            "DALLEPrompt": "Create an image that showcases a graph with a steep upward curve, representing the overwhelming public support for term limits. Use humorous analogies to represent the survey results, such as a mountain with the caption 'Support Peaks!' or a rocket ship taking off.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-fIM6youEn8aStxOi87PlYxUv.png?st=2023-10-01T16%3A43%3A51Z&se=2023-10-01T18%3A43%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-30T19%3A44%3A08Z&ske=2023-10-01T19%3A44%3A08Z&sks=b&skv=2021-08-06&sig=RUR0Rw7jyJgWs42frKyeFFJwzoXyWXBevGJtnFuqJD0%3D"
        },
        {
            "slide": 3,
            "content": "Opponents argue that age should not be the sole determining factor for term limits, sparking an uncomfortable conversation.",
            "DALLEPrompt": "Generate an image that depicts a heated debate between two politicians, one wearing a sash that says 'Age ≠ Experience' and the other holding a sign that says 'Youth is Overrated.' Add a crowd of cartoon people with thought bubbles expressing their opinions on age and term limits.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-4Lv1k1ECq58P5VHQlQkfUYE0.png?st=2023-10-01T16%3A43%3A59Z&se=2023-10-01T18%3A43%3A59Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A24%3A15Z&ske=2023-10-02T00%3A24%3A15Z&sks=b&skv=2021-08-06&sig=7X2dZH/yAjdQzEf2o9719/XLOLuVcXDMnWbfza49VLY%3D"
        },
        {
            "slide": 4,
            "content": "As the discussion escalates, Senator Johnson proposes a comedic solution: 'The Retirement Wheel of Fortune.'",
            "DALLEPrompt": "Visualize the scene of a game show-like setting with a giant spinning wheel. Replace the traditional prizes with funny retirement-related options, such as 'Nap Time Champion' or 'World's Greatest Bingo Caller.' Include a cartoon version of Senator Johnson hosting the game and a diverse group of politicians waiting for their turn.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-KWq14307ozwrPQveKwPQM3yw.png?st=2023-10-01T16%3A44%3A06Z&se=2023-10-01T18%3A44%3A06Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A43%3A06Z&ske=2023-10-02T00%3A43%3A06Z&sks=b&skv=2021-08-06&sig=bCUV91SpWo91ZXBQzsHKsqaVQjyAk8fTbEM%2BY7RvKew%3D"
        },
        {
            "slide": 5,
            "content": "The nation erupts in laughter as late-night talk show hosts roast the absurdity of the 'Retirement Wheel of Fortune.'",
            "DALLEPrompt": "Create an image that mimics a late-night talk show scene with a host behind a desk, holding a microphone, and laughing. Add thought bubbles with comedic jokes about the retirement wheel, such as 'Spinning for Dentures!' or 'Will Pat Sajak Join the Race?' Spotlight various audience members laughing hysterically.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-xAVTZfqMc18qoBD1x0IJNIma.png?st=2023-10-01T16%3A44%3A13Z&se=2023-10-01T18%3A44%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A29%3A07Z&ske=2023-10-02T00%3A29%3A07Z&sks=b&skv=2021-08-06&sig=weRBk7IdyEK9RSJwfWe728cAU13U2UsCUzHziTOjW/k%3D"
        },
        {
            "slide": 6,
            "content": "Meanwhile, the discussion on term limits continues, promising more laughs and controversies.",
            "DALLEPrompt": "Generate a humorous image that symbolizes an ongoing conversation on term limits. Use visuals like a never-ending loop of politicians debating, a talking parrot repeating 'Term Limits!', or a cartoon thought bubble with politicians engaged in a slapstick comedy routine.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-Zyvs8WpyZDiAxSSgVqHduP5l.png?st=2023-10-01T16%3A44%3A21Z&se=2023-10-01T18%3A44%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A20%3A35Z&ske=2023-10-02T00%3A20%3A35Z&sks=b&skv=2021-08-06&sig=q49qavCK7203Bgj5zAVGw5kIHOOvfz1sebcSkyMde6s%3D"
        }
    ]
}

  return (
    <Div100vh style={{ display: "flex", width: "100vw", backgroundColor: "#fff", position: "relative" }}>
      {currentSlide !== article.slides.length + 1 && (
        <div>
          <div onClick={handlePrevSlide} style={{ width: "50vw", left: 0, height: "100vh", position: 'absolute' }}></div>
          <div onClick={handleNextSlide} style={{ width: "50vw", right: 0, height: "100vh", position: 'absolute' }}></div>
        </div>
      )} 
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundSize: "cover",
        /* Retain the linear gradient background here */
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 17.19%, rgba(0, 0, 0, 0.50) 31.77%, rgba(0, 0, 0, 0.00) 57.29%, rgba(0, 0, 0, 0.25) 77.6%, rgba(0, 0, 0, 0.75) 100%), url(${currentSlide === 0 ? (article.thumbnail) : (article.slides[currentSlide - 1]?.image)}), lightgray 50% / cover no-repeat`
      }}>
        <div style={{ marginLeft: 24, color: "#fff", marginRight: 24, transition: "margin-top 0.5s", marginTop: currentSlide !== 0 ? (-48) : (16) }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
            <img style={{ width: 32, height: 32, borderRadius: "64px" }} src={article.author.profilePicture} />
            <p style={{ color: "#fff", fontSize: 18 }}>
              {article.author.name}
            </p>
            <p style={{ color: "#fff", fontSize: 12, fontStyle: "italic" }}>
              ({article.author.pronouns})
            </p>
          </div>
          <div>
            <p style={{
              fontWeight: 800,
              textShadow: "2px 2px 16px rgba(0, 0, 0, 0.75)",
              marginTop: 16, marginBottom: 8, fontSize: 16
            }}>{article.category.toUpperCase()}</p>
            <p style={{
              fontWeight: 800, fontSize: 36,
              textShadow: "2px 2px 16px rgba(0, 0, 0, 0.75)",
              marginTop: 8
            }}>{article.title}</p>
          </div>
        </div>
        <div style={{ color: "#fff", marginLeft: 24, marginRight: 24 }}>
          <p style={{
            fontSize: 12, opacity: currentSlide === 0 ? (1) : (0), transition: "opacity 0.5s",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)",
            fontWeight: 400
          }}>
            {article.datePublished}
          </p>
          <p style={{
            fontSize: currentSlide === 0 ? (32) : (24),
            textShadow: "0px 0px 24px rgba(0, 0, 0, 1.0)",
            marginBottom: 24, marginTop: 0, fontWeight: 600
          }}>
            {currentSlide === 0 ? (article.shortDescription) : (article.slides[currentSlide - 1]?.content)}
          </p>
          <div style={{ display: "flex", height: 16, gap: 16, alignItems: "center", width: "100%", justifyContent: "center", marginBottom: 24, marginTop: 0 }}>
            {Array.from({ length: article.slides.length + 1 }, (_, index) =>
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
          }}>
            <h2 style={{ marginBottom: '20px' }}>Thank you for signing up!</h2>
            <p>We'll keep you updated with the latest news but more fun!</p>
          </div>
        )}
      </div>
    </Div100vh>
  );
  




}


export default MyComponent;