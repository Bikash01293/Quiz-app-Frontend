import axios from 'axios';

import AppConfig from '@/config'

const {apiBaseUrl, apiToken} = AppConfig;

const getAllQuizzes = async () => {
    const response = await axios.get( `${apiBaseUrl}/teacher/gethomequiz`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
    
};
// const id = '616bfd1e17c599bde9c7530f'

// const getAllQuestions = async () => {
//     const response = await axios.get( `${apiBaseUrl}/teacher/getallquestion`,{
//         params: {
//             id: id
//         },
//         headers: {
//             'Authorization': apiToken
//         }
//     });
//     return response.data;
    
// };

const seeStudents = async () => {
    const response = await axios.get( `${apiBaseUrl}/teacher/seestudents`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;

};

const deleteQuiz = async (quizId)=> {
    const response = await axios.delete(
        `${apiBaseUrl}/teacher/deletequiz/${quizId}`,{
            headers: {
                'Authorization': apiToken
            }
        }  
    );
    return response.data;
};

const getQuizzes = async () => {
    const response = await axios.get( `${apiBaseUrl}/teacher/gethomequiz`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
};

const createQuiz = async (form) => {
    const response = await axios.post(
        `${apiBaseUrl}/teacher/createquiz`,
        form,
        {
            headers: {
                'Authorization': apiToken,
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data;
};

const blockStudent = async (blockId)=> {
    const response = await axios.delete(
        `${apiBaseUrl}/teacher/blockuser/${blockId}`,{
            headers: {
                'Authorization': apiToken
            }
        }  
    );
    return response.data;
};

const unblockStudent = async (unblockId)=> {
    const response = await axios.delete(
        `${apiBaseUrl}/teacher/unblockuser/${unblockId}`,{
            headers: {
                'Authorization': apiToken
            }
        }  
    );
    return response.data;
};

const viewStudents = async () => {
    const response = await axios.get( `${apiBaseUrl}/teacher/seestudents`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;

};

const submitForm = async (form, quizId) => {
    const response = await axios.post( `${apiBaseUrl}/teacher/addquestion`,{
        ...form,quizId,
        headers: {
            'Authorization': apiToken
        }
    })
    return response.data;
}

const deleteQuestion = async (questionId)=> {
    const response = await axios.delete(
        `${apiBaseUrl}/teacher/deletequestion/${questionId}`,{
            headers: {
                'Authorization': apiToken
            }
        }  
    );
    return response.data;
};


const getAllQuestions = async (quizId) => {
    const response = await axios.get( `${apiBaseUrl}/teacher/getallquestion/${quizId}`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
};

const quizUpload = async (quizId) => {
    const response = await axios.post( `${apiBaseUrl}/teacher/uploadquiz`,{
        params: {
            quizId
        },
        headers: {
            'Authorization': apiToken,
            'Content-Type': 'application/json'
        }
    })
    return response.data;
}

const getAllQuestionsByQuizId = async (quizId) => {
    const response = await axios.get( `${apiBaseUrl}/teacher/getallquestion/${quizId}`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
};

const signUp = async (form) => {
    const response = await axios.post( `${apiBaseUrl}/registerteacher`,{
        ...form,
        headers: {
            'Authorization': apiToken
        }
    })
    return response.data;
}

const getQuestions = async (quizId) => {
    const response = await axios.get( `${apiBaseUrl}/teacher/getallquestion/${quizId}`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
};


export {
    getAllQuizzes,
    // getAllQuestions,
    seeStudents,
    deleteQuiz,
    getQuizzes,
    createQuiz,
    blockStudent,
    unblockStudent,
    viewStudents,
    submitForm,
    getAllQuestions,
    deleteQuestion,
    quizUpload,
    getAllQuestionsByQuizId,
    signUp,
    getQuestions
};