import React from 'react'
import { Header, MainContainer, CreateContainer } from './Components'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        <main className='w-full bg-primary mt-24 p-8'>
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
