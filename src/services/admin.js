import axios from 'axios';

import AppConfig from '@/config'

const {apiBaseUrl, apiToken} = AppConfig;

const seeStudents = async () => {
    const response = await axios.get( `${apiBaseUrl}/admin/seestudents`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
};

const seeTeachers = async () => {
    const response = await axios.get( `${apiBaseUrl}/admin/seeteachers`,{
        headers: {
            'Authorization': apiToken
        }
    });
    // console.log(response.data)
    return response.data;
    
};

const blockStudent = async (blockId)=> {
    const response = await axios.delete(
        `${apiBaseUrl}/admin/blockuser/${blockId}`,{
            headers: {
                'Authorization': apiToken
            }
        }  
    );
    return response.data;
};

const unblockStudent = async (unblockId)=> {
    const response = await axios.delete(
        `${apiBaseUrl}/admin/unblockuser/${unblockId}`,{
            headers: {
                'Authorization': apiToken
            }
        }  
    );
    return response.data;
};

const activeTeacher = async (activeId)=> {
    const response = await axios.delete(
        `${apiBaseUrl}/admin/blockuser/${activeId}`,{
            headers: {
                'Authorization': apiToken
            }
        }  
    );
    return response.data;
};

const inactiveTeacher = async (inactiveId)=> {
    const response = await axios.delete(
        `${apiBaseUrl}/admin/unblockuser/${inactiveId}`,{
            headers: {
                'Authorization': apiToken
            }
        }  
    );
    return response.data;
};

const viewTeachers = async () => {
    const response = await axios.get( `${apiBaseUrl}/admin/seeteachers`,{
        headers: {
            'Authorization': apiToken
        }
    });
    // console.log(response.data)
    return response.data;
    
};

const viewStudents = async () => {
    const response = await axios.get( `${apiBaseUrl}/admin/seestudents`,{
        headers: {
            'Authorization': apiToken
        }
    });
    return response.data;
};

const signUp = async (form) => {
    const response = await axios.post( `${apiBaseUrl}/registeradmin`,{
        ...form,
        headers: {
            'Authorization': apiToken
        }
    })
    return response.data;
}

export {
    seeStudents,
    seeTeachers,
    blockStudent,
    unblockStudent,
    activeTeacher,
    inactiveTeacher,
    viewTeachers,
    viewStudents,
    signUp
};