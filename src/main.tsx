import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="my-8 flex justify-between text-center">
      <div className="rounded-2xl bg-gray-600 px-8 py-6 text-gray-100">
        <p className="text-3xl font-bold underline">Vite + React + WindiCSS</p>
        <p>
          <em className="text-sm opacity-50">So fast!</em>
        </p>
      </div>
    </div>
  </React.StrictMode>,
);
