import React from 'react';

const QuestionsList: React.FC = () => {
  const [questions, setQuestions] = React.useState<string[]>([]);

  return (
    <div>
      QuestionsList Component
    </div>
  );
}

export default QuestionsList;
