import React from 'react'
import { Header, MainContainer, CreateContainer } from './Components'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        <main className='w-full bg-primary mt-14 md:mt-20 px-4 md:px-16 py-4'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/CreateItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
