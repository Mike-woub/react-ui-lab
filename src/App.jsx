import React from 'react'
import Meals from './components/Meals'
import ToggleBackgroundColor from './components/ToggleBackgroundColor'
import HiddenSearchBar from './components/HiddenSearchBar'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
    <Meals/>
    <ToggleBackgroundColor/> 
    <HiddenSearchBar/>
    <Testimonials/>
    </div>
  )
}

export default App