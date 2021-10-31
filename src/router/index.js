import Router from 'vue-router';
// import store from '@/stores'

import LoginByAdminApp from '@/components/LoginByAdminApp'
import LoginByTeacherApp from '@/components/LoginByTeacherApp'
import LoginByStudentApp from '@/components/LoginByStudentApp'
import StudentApp from '@/components/StudentApp'
import TeacherApp from '@/components/TeacherApp'
import CreateQuizApp from '@/components/CreateQuizApp'
import UploadQuizApp from '@/components/UploadQuizApp'
import ViewStudentByTeacherApp from '@/components/ViewStudentByTeacherApp'
import ViewTeacherByAdminApp from '@/components/ViewTeacherByAdminApp'
import ViewStudentByAdminApp from '@/components/ViewStudentByAdminApp'
import PlayQuestionByStudent from '@/components/PlayQuestionByStudent'
import AddQuestionByTeacher from '@/components/AddQuestionByTeacher'
import ViewQuestionByTeacherApp from '@/components/ViewQuestionByTeacherApp'
import AdminSignUp from '@/components/AdminSignUp'
import TeacherSignUp from '@/components/TeacherSignUp'
import StudentSignUp from '@/components/StudentSignUp'
import ForgotPasswordApp from '@/components/ForgotPasswordApp'
import ResetPasswordDoneApp from '@/components/ResetPasswordDoneApp'


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/login/admin'
        },
        {
            name: 'LoginByAdminApp',
            path: '/login/admin',
            component: LoginByAdminApp
        },
        {
            name: 'LoginByTeacherApp',
            path: '/login/teacher',
            component: LoginByTeacherApp
        },
        {
            name: 'LoginByStudentApp',
            path: '/login/student',
            component: LoginByStudentApp
        },
        {
            name: 'ViewTeacherByAdminApp',
            path: '/admin/home/viewteacher',
            component: ViewTeacherByAdminApp
        },
        {
            name: 'ViewStudentByAdminApp',
            path: '/admin/home/viewstudent',
            component: ViewStudentByAdminApp
        },
        {
            name: 'StudentApp',
            path: '/student/home',
            component: StudentApp
        },
        {
            name: 'TeacherApp',
            path: '/teacher/home',
            component: TeacherApp,
    
        },
        {
            name: 'CreateQuizApp',
            path: '/teacher/home/createquiz',
            component: CreateQuizApp
        },
        {
            name: 'UploadQuizApp',
            path: '/teacher/home/uploadquiz',
            component: UploadQuizApp
        },
        {
            name: 'ViewStudentByTeacherApp',
            path: '/teacher/home/seestudents',
            component: ViewStudentByTeacherApp
        },
        {
            name: 'PlayQuestionByStudent',
            path: '/student/home/playquestions',
            component: PlayQuestionByStudent
        },
        {
            name: 'AddQuestionByTeacher',
            path: '/teacher/home/uploadquiz/addquestion',
            component: AddQuestionByTeacher
        },
        {
            name: 'ViewQuestionByTeacherApp',
            path: '/teacher/home/viewquestions',
            component: ViewQuestionByTeacherApp
        },
        {
            name: 'AdminSignUp',
            path: '/admin/signup',
            component: AdminSignUp
        },
        {
            name: 'TeacherSignUp',
            path: '/teacher/signup',
            component: TeacherSignUp
        },
        {
            name: 'StudentSignUp',
            path: '/student/signup',
            component: StudentSignUp
        },
        {
            name: 'ForgotPasswordApp',
            path: '/reset',
            component: ForgotPasswordApp
        },
        {
            name: 'ResetPasswordDoneApp',
            path: '/resetpassworddone',
            component: ResetPasswordDoneApp
        },

    ]
});






// router.beforeEach(( to, from, next ) => {
//     if( to.name !== 'LoginByAdminApp' && !store.getters.isAuthenticated ) {
//         return next({
//             name: 'LoginByAdminApp'
//         });
//     }else if( to.name !== 'LoginByStudentApp' && !store.getters.isAuthenticated ) {
//         return next({
//             name: 'LoginByStudentApp'
//         });
//     }
//     else if( to.name !== 'LoginByTeacherApp' && !store.getters.isAuthenticated ) {
//         return next({
//             name: 'LoginByTeacherApp'
//         });
//     }
//     next();
// });


export default router;