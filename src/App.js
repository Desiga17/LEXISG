import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const response = {
        answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "As the age of the deceased at the time of accident was held to be about 54–55 years...",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
          }
        ]
      };

      setResult(response);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Lexi Legal Assistant</h1>

      <textarea
        rows="5"
        placeholder="Type your legal query here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>

      {result && (
        <div className="card">
          <h2>Answer:</h2>
          <p>{result.answer}</p>

          <h3>Citation:</h3>
          <p>{result.citations[0].text}</p>
          <a href={result.citations[0].link} target="_blank" rel="noreferrer">
            View Source: {result.citations[0].source}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;