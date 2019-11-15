import React from 'react';
import './App.css';
import QuestionsList from './components/QuestionsList';
import QuestionHeader from './components/QuestionHeader';

const App: React.FC = () => {
  return (
    <div className="container">
      <QuestionHeader title="Simple Firebase App"/>
      <QuestionsList />
    </div>
  )
}

export default App;
