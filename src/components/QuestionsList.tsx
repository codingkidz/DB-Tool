import React from 'react';

const QuestionsList: React.FC = () => {
  const [questions, setQuestions] = React.useState<string[]>([]);

  return (
    <div>
      <p>QuestionsList Component</p>
    </div>
  );
}

export default QuestionsList;
