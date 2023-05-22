import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import './App.css';

const BioAnswer = () => {
    const [query, setQuery] = useState("");
    const [paper, setPaper] = useState(null);
    const [answer, setAnswer] = useState(null);

    const handleSearch = async () => {
        // Perform search here, fetch paper data and answer from your backend/API
        // For now, we'll set dummy data
        setPaper({
            title: 'The structure of the SARS-CoV-2 spike glycoprotein',
            abstract: 'This is the abstract of the paper.'
        });
        setAnswer('The spike protein is located on the surface of SARS-CoV-2 and helps the virus to enter host cells.');
    };

    return (
        <div className="container">
            <h1 className="title">BioAnswer</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Where is the spike protein in sars-cov-2?"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                </button>
            </div>
            {answer && (
                <div className="answer">
                    <p>{answer}</p>
                </div>
            )}
            {paper && (
                <div className="paper-info">
                    <h2 className="paper-title">
                        <Highlighter
                            highlightClassName="highlighted"
                            searchWords={[query]}
                            autoEscape={true}
                            textToHighlight={paper.title}
                        />
                    </h2>
                    <p className="paper-abstract">
                        <Highlighter
                            highlightClassName="highlighted"
                            searchWords={[query]}
                            autoEscape={true}
                            textToHighlight={paper.abstract}
                        />
                    </p>
                </div>
            )}
        </div>
    );
};

export default BioAnswer;
