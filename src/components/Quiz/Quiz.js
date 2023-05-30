import React from 'react';
import './Quiz.css'
import { useNavigate } from 'react-router-dom';

const Quiz = ({quiz}) => {
    // console.log(quiz)
    const {id, name, logo} = quiz;
    const navigate = useNavigate();

    const handleQuiz = (id) =>{
        // console.log(id)
        navigate(`/api/quiz/${id}`)
    }
    return (
        <div className='quiz'>
            <div>
                <img src={logo} alt="" />
                <h5>{name}</h5>
                <button onClick={()=>handleQuiz(id)}>Start Pracktice</button>
            </div>
        </div>
    );
};

export default Quiz;