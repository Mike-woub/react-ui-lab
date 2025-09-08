import React from 'react'
import Meals from './components/Meals'
import ToggleBackgroundColor from './components/ToggleBackgroundColor'
import HiddenSearchBar from './components/HiddenSearchBar'
import Testimonials from './components/Testimonials'
import Accordion from './components/Accordion'
import { accordionData } from './utils/content'
import Form from './components/Form'

const App = () => {
  return (
    <div>
    <Meals/>
    <ToggleBackgroundColor/> 
    <HiddenSearchBar/>
    <Testimonials/>

    <div className='accordion'>
      {accordionData.map(({title, content})=>(
        <Accordion title={title} content={content}/>
      ))}
    </div>
    <Form/>

    </div>
  )
}

export default App