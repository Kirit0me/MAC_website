import { useState } from 'react'
import MainPage from './MainPage'
import About from './AbousUs'


function App() {
  return (
    <div class="h-screen overflow-y-scroll scrollbar-hide snap-y snap-mandatory">
      <MainPage />
      <About />
    </div>
  )
}

export default App
