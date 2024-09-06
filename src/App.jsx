import React, { useState } from "react";
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlMap, setUrlMap] = useState({});

  const generateShortUrl = () => {
    if (longUrl === "") {
      alert("Please enter a valid URL");
      return;
    }

    const shortId = Math.random().toString(36).substring(2, 8); 
    const newShortUrl = `short.ly/${shortId}`;

    setUrlMap({ ...urlMap, [newShortUrl]: longUrl });
    setShortUrl(newShortUrl);
  };

  return (
    <div className="App">
      <h1>React URL Shortener</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button onClick={generateShortUrl}>Shorten URL</button>
      </div>

      {shortUrl && (
        <div>
          <p>
            Shortened URL: <a href={`https://${longUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </p>
        </div>
      )}

      {Object.keys(urlMap).length > 0 && (
        <div>
          <h2>Shortened URLs:</h2>
          <ul>
            {Object.keys(urlMap).map((short, index) => (
              <li key={index}>
                <a href={`https://${urlMap[short]}`} target="_blank" rel="noopener noreferrer">
                  {short} → {urlMap[short]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
