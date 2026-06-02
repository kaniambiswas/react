import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | Mainak</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

const reactElemnt = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to vist email',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElemnt
)
