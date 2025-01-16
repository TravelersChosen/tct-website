import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TabMenu from './TabMenu'
import Homepage from './components/pages/homepage';
import About from "./about";
import QueueHelper from "./components/pages/queuehelper";
import CheckpointList from "./components/pages/checkpointlist";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TabMenu/>
);


function renderPage(page) {
    const content = document.getElementById('content');
    if (page === 'about') {
      root.render(<About/>)
    } else if (page === 'queuehelper') {
      root.render(<QueueHelper />)
    } else if (page === 'checkpointlist') {
        root.render(<CheckpointList />)
    } else{
        root.render(<Homepage />)
    }
  }

// Basic routing using hash in URL
window.addEventListener('hashchange', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    renderPage(page);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
