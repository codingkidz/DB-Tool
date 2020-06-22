import React, { useEffect } from "react";

import { Promise } from 'es6-promise'


import { RouteComponentProps, useNavigate } from "@reach/router";

import { db } from "../services/firebase";

import { Question } from "../models/Question";
import { render } from "react-dom";

interface Props extends RouteComponentProps {
    unit?: string
}


export const Quiz: React.FC<Props> = (props) => {
    const { unit } = props;
    const [questions, setQuestions] = React.useState<Question[] | null>(null);
    const [currentQuestionIndex, setQuestionIndex] = React.useState<number>(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            let question: Question;
            let tempQuestions: Question[] = [];
            await db
                .collection("units")
                .doc(unit)
                .collection("questions")
                .get()
                .then((collectionSnapshot) => {
                    collectionSnapshot.forEach((ss) => {
                        question = ss.data() as Question;
                        question.id = ss.id;
                        tempQuestions.push(question);
                    });
                })
                .then(() => {
                    setQuestions(tempQuestions);
                }).catch(error => {
                    console.log(error)
                })
        };

        fetchQuestions();
    }, [unit]);

    return true === true ? (
        <>

            <p>{questions?.map((q) => {
                return <p>
                    {q.question}
                    <br></br>
                    {q.correct_answer}
                    <br></br>
                    {q.id}
                    <br></br>
                    {q.wrong_answers}
                </p>

            })}</p>
        </>
    ) :
        (
            <>
                <p>true is not true</p>
            </>
        )
};  