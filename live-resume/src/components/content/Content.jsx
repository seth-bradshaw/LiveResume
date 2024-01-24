import React from 'react'
import Experience from './experience/Experience'
import About from './about/About'
import Projects from './projects/Projects'

export default function Content() {
  return (
    <main className='pt-24 lg:w-1/2 lg:py-24'>
        <About />
        <Experience />
        <Projects />
    </main>
  )
}
