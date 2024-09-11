'use client'


export default function Home() {
  return (
    <>
    <div>
      <p>Hi, Tripurari Here. Welcome to my website. Please visit my LinkedIn</p>
    
    </div>
    <button onClick={() => {
    window.location.href = 'https://www.linkedin.com/in/tripurari-jha-27477a134/';
  }}>
      Please visit here
    </button>
    </>
  );
}
