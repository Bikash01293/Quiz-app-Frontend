import axios from 'axios';
import store from '@/stores';




axios.interceptors.request.use(
    request => {
        if(request.url.includes( 'auth' ) || request.url.includes( 'admin' ) || request.url.includes( 'teacher' ) || request.url.includes('student') ) {
            request.headers['Authorization'] = `JWT ${store.state.auth.token}`;
        }
 
        return request;
    },
    error => Promise.reject( error )
);