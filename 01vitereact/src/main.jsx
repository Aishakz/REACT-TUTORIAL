import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
    return(
        <div>
            <h1>Custom App || Chai</h1>
        </div>
    )
}

// const reactELement = {
//     type : 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }



const anotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
);

const anotherUser = "chai or react"

const reactELement = React.createElement(
    'a',
    {href:'http://google.com', target:'_blank'},
    'Click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
   
   reactELement

)
