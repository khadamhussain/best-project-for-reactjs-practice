import React, { useState } from 'react';
import '../css/Accordian.css';
import questionsData from '../data/accordianQuestion';
import SingleQuestion from '../components/accordian/Question';
const Accordian = () => {
  const [questions, setQuestions] = useState(questionsData);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Accordian