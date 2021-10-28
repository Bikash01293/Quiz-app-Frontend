import { login } from '@/services/auth';

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_ROLE = 'role';
const QUIZ_ID = 'quizId'

const auth = {
    state: {
        token: localStorage.getItem( KEY_TOKEN ) || '',
        email: localStorage.getItem( KEY_EMAIL ) || '',
        role: localStorage.getItem( KEY_ROLE ) || '',
        quizId: localStorage.getItem( QUIZ_ID ) || ''
    },
    getters: {
        isAuthenticated( state ) {
            return !!state.token;
        },
        isAdmin( state ) {
            return state.role === 'admin';
        }
    },
    mutations: {
        setToken( state, token ) {
            state.token = token;
        },
        setEmail( state, email ) {
            state.email = email;
        },
        setRole( state, role ) {
            state.role = role;
        },
        setQuizId(state, quizId){
            localStorage.setItem( QUIZ_ID, quizId );
            state.quizId = quizId
        }
    },
    actions: {
        login( { commit }, credentials ) {
            return login( credentials )
                        .then( data => {
                            // in meeting app the token may be in token, not authToken
                            const { token, email, role } = data
        
                            localStorage.setItem( KEY_TOKEN, token );
                            localStorage.setItem( KEY_EMAIL, email );
                            localStorage.setItem( KEY_ROLE, role );
        
                            commit( 'setToken', token );
                            commit( 'setEmail', email );
                            commit( 'setRole', role );
        
                            return email;
                        });
        },
        logout( { commit } ) {
            localStorage.removeItem( KEY_TOKEN );
            localStorage.removeItem( KEY_EMAIL );
            localStorage.removeItem( KEY_ROLE );
            localStorage.removeItem( QUIZ_ID );
        
            commit( 'setToken', '' );
            commit( 'setEmail', '' );
            commit( 'setRole', '' );
            commit( 'quizId', '' );

            return Promise.resolve();
        }
    }
};

export default auth;