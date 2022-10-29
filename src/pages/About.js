const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How does it work?</h1>
        <h2>
          No, it's not magic, <br></br> it's just the latest in technology
        </h2>
        <p>
          Vitalize uses the latest open-source AI image generation technology.
          Using stable diffusion at its core, Vitalize is able to combine
          multiple photos together and stitch and new cohesive photo. Stable
          diffusion even allows for stylized images with prompt based
          generation.
        </p>

        <h3>See some sample photos from stable diffusion below</h3>
      </header>

      <img src="/grid-0018.png" alt="grid one" />
      <img src="/grid-0019.png" alt="grid one" />
      <img src="/grid-0024.png" alt="grid one" />
      <img src="/grid-0040.png" alt="grid one" />
      <img src="/grid-0041.png" alt="grid one" />
      <img src="/grid-0054.png" alt="grid one" />
    </div>
  );
};

export default About;
