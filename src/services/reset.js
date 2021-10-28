import axios from 'axios';

import AppConfig from '@/config'

const {apiBaseUrl, apiToken} = AppConfig;


const resetPassword = async (email) => {
    const response = await axios.post( `${apiBaseUrl}/reset`,{
        email,
        
        headers: {
            'Authorization': apiToken
        }
    })
    return response.data;
}

const resetPasswordDone = async (form) => {
    const response = await axios.post( `${apiBaseUrl}/reset-password-done`,{
        ...form,
        headers: {
            'Authorization': apiToken
        }
    })
    return response.data;
}

export{ 
    resetPassword,
    resetPasswordDone
}


