import React, { useState, useEffect } from 'react';
import NavBar from "../components/Navbar";

function ResultsComponent() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResults();
  }, []);

  async function fetchResults() {
    try {
      const response = await fetch('http://localhost:3000/results');
      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Failed to fetch results:', error);
      setError('Failed to fetch results');
    }
  }

  return (
    <div>
         <NavBar />
      {error && <p>{error}</p>}
      <ul>
        {results.map((result) => (
          <li key={result._id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsComponent;
