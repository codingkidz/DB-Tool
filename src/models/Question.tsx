import {Promise} from 'es6-promise'

export interface Question {
    id: string;
    question: string;
    correct_answer: string;
    wrong_answers: string[];
  }