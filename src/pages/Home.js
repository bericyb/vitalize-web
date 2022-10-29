const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vitalize</h1>
        <img src="/bearnson158.jpg" height="200" alt="grid one" />
        <h2>
          Just Because they've gone home, <br></br>doesn't mean they should be
          left out
        </h2>
      </header>

      <header className="App-header-white">
        <div>
          <img
            style={{ padding: 20 }}
            src="/bearnson21.jpg"
            height="200"
            alt="grid one"
          />
          <img
            style={{ padding: 20 }}
            src="/bearnson139.jpg"
            height="200"
            alt="grid two"
          />
        </div>
        <h2>Put deceased family members back into your family photos</h2>
        <p>
          Using the latest in AI image generation, Vitalize places deceased
          loved ones back into your family photos
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how it works
        </a>
      </header>
    </div>
  );
};

export default Home;
