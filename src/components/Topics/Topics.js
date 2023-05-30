import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
const topics = useLoaderData(({}));
    console.log(topics)
    return (
        <div className={`main-topics`}>
            <h1>WELCOME TO E-LEARNING ACADEMY</h1>
            <div className='topics'>
                {
                    topics.data.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }
            </div>
            {/* <h5>{topics.length}</h5> */}
            
        </div>
    );
};

export default Topics;