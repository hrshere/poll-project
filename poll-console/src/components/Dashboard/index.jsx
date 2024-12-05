import { Fragment, useEffect, useState } from "react";
import { fetchDashBoard } from "../../services/dashboardService";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const fetchQuestions = async() => {
        const response = await fetchDashBoard();
        setQuestions(response);
    }
    useEffect( () => {
        fetchQuestions();
    }, []);

    return (
        <Fragment>
            <h1>Pick a question:</h1>
            <ul>
                {questions.map(question => (
                    <li key={question.id} onClick={() => navigate(`/question_detail/${question.id}`)}>{question.name}</li>
                ))}
            </ul>
        </Fragment>
    )
}