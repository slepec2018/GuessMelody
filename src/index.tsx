import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {questions} from './mocks/questions';

const Setting = {
  ErrorsCount: 3,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      errorsCount={Setting.ErrorsCount}
      questions = {questions}
    />
  </React.StrictMode>,
);
