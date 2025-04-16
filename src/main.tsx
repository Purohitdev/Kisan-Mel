// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { LanguageProvider } from './Lang.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <LanguageProvider>

//       <App />
//     </LanguageProvider>

//   </StrictMode>, 
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { LanguageProvider } from "./Lang"; // adjust path

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
