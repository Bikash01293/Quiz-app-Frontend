import axios from 'axios';

import AppConfig from '@/config'

const {apiBaseUrl, apiToken} = AppConfig;

const getAllQuizzes = async () => {
    const response = await axios.get( `${apiBaseUrl}/student/getallquiz`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;

};

const getAllQuestions = async (quizId) => {
    const response = await axios.get( `${apiBaseUrl}/student/getallquestion/${quizId}`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
};

const getQuestions = async (quizId) => {
    const response = await axios.get( `${apiBaseUrl}/student/getallquestion/${quizId}`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
};

const signUp = async (form) => {
    const response = await axios.post( `${apiBaseUrl}/registerstudent`,{
        ...form,
        headers: {
            'Authorization': apiToken
        }
    })
    return response.data;
}


export {
    getAllQuizzes,
    getAllQuestions,
    getQuestions,
    signUp
};