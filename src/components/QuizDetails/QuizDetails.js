import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = () => {
const quizDetails = useLoaderData({});
    const totalData = quizDetails.data; 
    const [answer, setAnswer] = useState([]);

    console.log(totalData)
    const {id, correctAnswer, questions, name, options, total} = totalData;
    console.log(quizDetails)

    const handleAnswer = (id)=>{
        
        toast('this is correct')
    }
    
    return (
        <div className='quizDetails'>
            <h3>{name}</h3>
            {
                questions.map(question =>
                <div className='question' key={question.id} question={question}>
                    <div>
                        <h5>{question.question}</h5>
                        {
                            question.options.map(option =>{
                                return(
                                <div>
                                    <p ><small>{option}</small></p>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <button onClick={() =>handleAnswer(id)}>Show Answer</button>
                        <ToastContainer />
                    </div>
                </div>
                
                )
            }
        </div>
    );
};

export default QuizDetails;