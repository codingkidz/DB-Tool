import React from 'react';

interface Props {
  title: string
}

const QuestionHeader: React.FC<Props> = (props) => {
  const [questions, setQuestions] = React.useState<string[]>([]);

  return (
    <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            {props.title}
          </a>
        </div>
      </nav>
  );
}

export default QuestionHeader;
