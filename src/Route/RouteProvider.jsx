import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../MainLayout/HomePageLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Class from "../Pages/Class/Class";
import Instructor from "../Pages/Instractor/Instructor";
import BLog from "../Pages/Blog/BLog";
import Contact from "../Pages/Contact/Contact";
import DetailsSInglePage from "../ShearSection/SInglePageDetails/DetailsSInglePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminPanel from "../MainLayout/AdminPanel";
import AdminDashBoard from "../Pages/AdminPanelPages/DashBoardAdmin/AdminDashBoard";
import InstructorList from "../Pages/AdminPanelPages/Instructor/InstructorList";
import AllCourseList from "../Pages/AdminPanelPages/AllCourseList/AllCourseList";
import InstructorDashboard from "../Pages/AdminPanelPages/InstructorPanel/InstructorDashboard";
import ManageCourse from "../Pages/AdminPanelPages/InstructorPanel/ManageCourse";
import CourseUpdate from "../Pages/AdminPanelPages/InstructorPanel/CourseUpdate";
import AddCourse from "../Pages/AdminPanelPages/InstructorPanel/AddCourse";
import UserPanel from "../Pages/AdminPanelPages/UserPanner/UserPanel";

const router = createBrowserRouter([
           {
            path:'/',
            errorElement:<Error></Error>,
            element:<HomePageLayout></HomePageLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/class',
                    element:<Class></Class>
                },
                {
                    path:'/instructor',
                    element:<Instructor></Instructor>
                },
                {
                    path:'/blog',
                    element:<BLog></BLog>
                },
                {
                    path:'/contact',
                    element:<Contact></Contact>
                },
                 
                {
                    path:'/details/:id',
                    element:<PrivateRoute><DetailsSInglePage></DetailsSInglePage>,</PrivateRoute>,
                    loader:({params})=>(`http://localhost:5173/details/${params.id}`)
                },
                {
                   path:'/login',
                   element:<Login></Login>
                },
                {
                   path:'/register',
                   element:<Register></Register>
                },
            ]
           },
           {
            path:'admin-panel',
            element:<AdminPanel></AdminPanel>,
            children:[
                {
                    path:'admin-dashboard',
                    element:<AdminDashBoard></AdminDashBoard>
                },
                {
                    path:'instructor-list',
                    element:<InstructorList></InstructorList>
                },
                {
                    path:'course-list',
                    element:<AllCourseList></AllCourseList>
                },
                {
                    path:'instructor-dashboard',
                    element:<InstructorDashboard></InstructorDashboard>
                },
                {
                    path:'mange-course',
                    element:<ManageCourse></ManageCourse>
                },
                {
                    path:'Course-update',
                    element:<CourseUpdate></CourseUpdate>
                },
                {
                    path:'add-course',
                    element:<AddCourse></AddCourse>
                },
                {
                    path:'paymentAll',
                    element:<UserPanel></UserPanel>
                },
            ]
           }
])

export default router;