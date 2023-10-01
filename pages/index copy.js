import { useState, useEffect } from 'react';

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


useEffect(() => {
  // Detect Safari browser
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Calculate safe area bottom inset
  let safeAreaInsetBottom = 0;
  if (isSafari && window.safeAreaInsets) {
    safeAreaInsetBottom = window.safeAreaInsets.bottom || 0;
  }

  // Apply safe area adjustments to the body
  if (isSafari) {
    document.body.style.height = `calc(100vh - ${safeAreaInsetBottom}px)`;
    document.body.style.overflow = 'hidden';
  }

  return () => {
    // Reset styles when the component unmounts
    if (isSafari) {
      document.body.style.height = '';
      document.body.style.overflow = '';
    }
  };
}, []);
  const article = {
    "title": "The Bigfoot Festival: A Hilarious Weekend of Myth and Mischief",
    "category": "Entertainment/Travel",
    "shortDescription": "Join the small town of Bemidji, Minnesota, for a wacky Bigfoot Festival!",
    "thumbnail": "https://images.unsplash.com/photo-1610390958051-0c5b531b1e46",
    "datePublished": "Saturday October 2nd, 8:00 AM CST",
    "author": {
        "name": "Johnny McLaughlin",
        "pronouns": "he/him",
        "bio": "Johnny McLaughlin is a lifelong adventurer and storyteller who brings humor to every tale he tells. You can reach him at johnnymclaughlin@gmail.com.",
        "email": "johnnymclaughlin@gmail.com"
    },
    "slides": [
        {
            "slide": 1,
            "content": "Get ready for the hilarity of the Bigfoot Festival, where believers and skeptics unite!",
            "DALLEPrompt": "Create a comical scene showing enthusiasts of all types gathering at the Bigfoot Festival. Imagine people in costumes, signs with funny slogans, and a lively atmosphere.The size of this image should be 1080x1920 vertical image built for iPhone.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-6uHHFGpl1Wq1WIsn9IFPg8lH.png?st=2023-10-01T00%3A35%3A20Z&se=2023-10-01T02%3A35%3A20Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A22%3A26Z&ske=2023-10-02T00%3A22%3A26Z&sks=b&skv=2021-08-06&sig=Q6pfqbhwSs7fUZm0kYFcTv9d9J65Y97MUMJ9%2BhFcRS4%3D"
        },
        {
            "slide": 2,
            "content": "Witness the 'Finding Bigfoot' contest as adventurers search for the elusive creature!",
            "DALLEPrompt": "Generate an image capturing the excitement of the 'Finding Bigfoot' contest. Depict participants in safari gear, tracking devices, and hilarious contraptions trying to locate Bigfoot.The size of this image should be 1080x1920 vertical image built for iPhone.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-MUF27cTGdM3apOCGnR1oBThC.png?st=2023-10-01T00%3A35%3A29Z&se=2023-10-01T02%3A35%3A29Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-30T21%3A41%3A25Z&ske=2023-10-01T21%3A41%3A25Z&sks=b&skv=2021-08-06&sig=FSaEkUz3Tlo4ku55kqEvT7igV%2BuvWFrDSW7z151JlZA%3D"
        },
        {
            "slide": 3,
            "content": "Mayor Johnson declares 'Bigfoot Hunting Season' with ridiculous regulations!",
            "DALLEPrompt": "Illustrate a humorous town hall meeting with Mayor Johnson announcing 'Bigfoot Hunting Season.' Show the mayor holding a comical proclamation and residents reacting with confusion and amusement.The size of this image should be 1080x1920 vertical image built for iPhone.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-jXZHk4SLfqOOAaFH8wWJdWad.png?st=2023-10-01T00%3A35%3A38Z&se=2023-10-01T02%3A35%3A38Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A21%3A17Z&ske=2023-10-02T00%3A21%3A17Z&sks=b&skv=2021-08-06&sig=/7Yd2tDCO0oa5np2HaT%2BtwyBe6OB5xsoZthpLzOEMBM%3D"
        },
        {
            "slide": 4,
            "content": "Local pranksters set up a 'Bigfoot Sighting' attraction - tourists fall for it every time!",
            "DALLEPrompt": "Create an image of tourists gathered around a fake 'Bigfoot Sighting' attraction. Show the pranksters with a hidden speaker, fake footprints, and unsuspecting tourists taking photos in awe.The size of this image should be 1080x1920 vertical image built for iPhone.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-KWMob8AWozTPrEle7NER2ogs.png?st=2023-10-01T00%3A35%3A46Z&se=2023-10-01T02%3A35%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A21%3A12Z&ske=2023-10-02T00%3A21%3A12Z&sks=b&skv=2021-08-06&sig=sIj5o/qWIxLtzgcoEhMTWi93au89GPzdZPZlE6tfZg4%3D"
        },
        {
            "slide": 5,
            "content": "The highlight of the festival: Bigfoot impersonator dance-offs and hilarious shenanigans!",
            "DALLEPrompt": "Visualize the lively Bigfoot impersonator dance-offs at the festival. Depict participants dressed in Bigfoot costumes and striking funny poses, while spectators laugh and cheer.The size of this image should be 1080x1920 vertical image built for iPhone.",
            "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZjgrBz1mauwsC8qhQEqrPgBj/user-W5WdRLu4p7wyKo8AAuwMMpgw/img-V6d73DVgUfGrFI2iEdQzxmEu.png?st=2023-10-01T00%3A35%3A55Z&se=2023-10-01T02%3A35%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-01T00%3A15%3A19Z&ske=2023-10-02T00%3A15%3A19Z&sks=b&skv=2021-08-06&sig=zUCuwT4BHkxgjpbCdxGVZ/C/uPSSbwQzzoA/Z9w8rUk%3D"
        }
    ]
}

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", backgroundColor: "#fff", position: "relative" }}>
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
    </div>
  );
  




}


export default MyComponent;