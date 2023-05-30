import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Topics from "../components/Topics/Topics";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import QuizDetails from "../components/QuizDetails/QuizDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:async()=>{
                    return fetch('https://openapi.programming-hero.com/api/quiz')  
                },
                element:<Topics></Topics>
            },
            {
                path:'topics',
                loader:async()=>{
                  return fetch('https://openapi.programming-hero.com/api/quiz')  
                },
                element:<Topics></Topics>
            },
            {
                path:`/api/quiz/:id`,
                loader:async({params}) =>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element:<QuizDetails></QuizDetails>
            },
            {
                path:'statistics',
                loader:async () =>{
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element:<Statistics></Statistics>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'*',
                element:<h2>This route is not Found Rasheduzzaman !!!!</h2>
            }
        ]
    }
])