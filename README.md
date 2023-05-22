# BioAnswer

BioAnswer is a React application that provides answers to biological queries based on scientific papers.

## Setup

The application can be set up and run on [Replit.com](https://replit.com/), a free online IDE and hosting service.

### 1. Import the repository on Replit

On the Replit homepage, click the `+ New Repl` button in the top right. In the popup, select the `Import from GitHub` tab, and then paste the URL of your GitHub repository.

### 2. Install dependencies

The application has a few dependencies which can be installed with the following command:


``` bash
npm install
```

Your application will run at `https://<your-repl-name>.replit.run`.

## Features

- Users can ask biological questions in the search bar.
- Search results display the title and abstract of a relevant scientific paper.
- The queried term is highlighted in the search results.
- An AI model generates an answer to the question, which is displayed below the search bar.

## Technologies

- React.js
- CSS
- `react-highlight-words` library

## Future Work

- Integrate with a backend/API to fetch paper data and AI-generated answers.
- Enhance UI design and responsiveness.
