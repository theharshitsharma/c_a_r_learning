import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'



import App from './App.jsx'
function MyApp(){
    return(
        <div>
            <h1>My App|chai</h1>
        </div>
    )       
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://www.google.com",
//         target: '_blank'
//     },
//         children: 'click me to visit google'
    
// };
const anotherUser="sharma ji is smart"
const reactElement=React.createElement(
    'a',
    {
        href: "https://www.google.com",
        target: '_blank'
    },
    'click me to visit google',
    anotherUser
)
const anotherElement =(
    <a href="https://google.com" target='_blank'>Visit google</a>
)


createRoot(document.getElementById('root')).render(
 
reactElement
  
  
)
