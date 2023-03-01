import Head from 'next/head'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'
import deved from 'public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.jpeg'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div  className={darkMode? "dark" : ""}>
      <Head>
        <title>Vignesh Portfolio</title>
        <meta name="description" content="Vignesh Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-29 lg:px-40 dark:bg-gray-900 '>
      <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-end'>
        <ul className='flex items-center'>
          <li>
           {
            darkMode ? <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl fill-white' /> : <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /> 
           }
          </li>
          <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://www.linkedin.com/in/vignesh-mernstack/" target="_blank">Resume</a></li>
        </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Vignesh Arumugam</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200 '>Full-Stack Web Dev</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200 '>A Passionate UI and Software developer with a keen interest in solving problems, to optimize web applications.</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href="https://www.linkedin.com/in/vignesh-mernstack/" target="_blank"><AiFillLinkedin /></a>
          <a href="https://twitter.com/Vignesh_armugam" target="_blank"><AiFillTwitterCircle /></a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={deved} fill='true' style='cover' />
        </div>
      </section>
      {/* Tech Stack Section */}
      <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-200 '>Tech-Stack</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 '>
            Since the beginning of my journey as a web dev i have build projects with following tech-stack
            </p>
          </div>
          <div className='lg:flex  justify-between gap-5 dark:text-gray-200 '>
          <div className='text-center object-center shadow-lg dark:shadow-gray-600 p-10 rounded-xl '>
              <Image className='cardImage object-center' src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              {/* <p className='py-2'>
                Creating elegant design suited for your needs following core design theory.
              </p> */}
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200 '>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-200 '>Figma</p>
          </div>
          <div className='text-center object-center shadow-lg dark:shadow-gray-600 p-10 rounded-xl '>
              <Image className='cardImage object-center' src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Style Your Site</h3>
              {/* <p className='py-2'>
                Creating elegant design suited for your needs following core design theory.
              </p> */}
              <h4 className='py-4 text-teal-600'>CSS Frameworks I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200 '>Tailwind</p>
              <p className='text-gray-800 py-1 dark:text-gray-200 '>Bootstrap</p>
              <p className='text-gray-800 py-1 dark:text-gray-200 '>Material UI</p>
          </div>
          <div className='text-center object-center shadow-lg dark:shadow-gray-600 p-10 rounded-xl '>
              <Image className='cardImage object-center' src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Frameworks</h3>
              <h4 className='py-4 text-teal-600'>JS Frameworks I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200 '>React</p>
              <p className='text-gray-800 py-1 dark:text-gray-200 '>Next.js</p>
              <p className='text-gray-800 py-1 dark:text-gray-200 '>Node.js</p>
          </div>
          </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-5 dark:text-gray-200 '>Portfolio</h3>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap '>
        <div className='basis-1/3 flex-1 '>
          <div className='shadow-lg dark:shadow-gray-600 rounded-lg'><a href="https://github.com/avvicky/gym-app" target="_blank"><Image className='rounded-lg object-cover' loading='lazy' alt="Gym-app"  src={web1} width={'100%'} height={'100%'}  /></a> <h4 className='text-gray-800 py-1 px-5 dark:text-gray-200'>Gym-app</h4></div>
        </div>
        <div className='basis-1/3 flex-1'>
          <div className='shadow-lg dark:shadow-gray-600 rounded-lg'><a href="https://github.com/avvicky/Blog" target="_blank"><Image className='rounded-lg object-cover' loading='lazy' alt="Blog" src={web3} width={'100%'} height={'100%'}  /></a> <h4 className='text-gray-800 py-1 px-5 dark:text-gray-200'>Gym-app</h4></div>
        </div>
        <div className='basis-1/3 flex-1'> 
          <div className='shadow-lg dark:shadow-gray-600 rounded-lg'><a href="https://github.com/avvicky/random-quote" target="_blank"><Image  className='rounded-lg object-cover' alt="random-quote" loading='lazy'   src={web4}  width={'100%'} height={'100%'} /></a> <h4 className='text-gray-800 py-1 px-5 dark:text-gray-200'>Blog</h4></div>
        </div>
        <div className='basis-1/3 flex-1'>
          <div className='shadow-lg dark:shadow-gray-600 rounded-lg'><a href="https://github.com/avvicky/Todo-List" target="_blank"><Image className='rounded-lg object-cover' alt="Todo-List" loading='lazy'   src={web2} width={'100%'} height={'100%'}  /></a> <h4 className='text-gray-800 py-1 px-5 dark:text-gray-200'>Random-Quote Generater</h4></div>
        </div>
        <div className='basis-1/3 flex-1'>
          <div className='shadow-lg dark:shadow-gray-600 rounded-lg'><a href="https://github.com/avvicky/OAuth" target="_blank"><Image className='rounded-lg object-cover' alt="OAuth" loading='lazy'   src={web5} width={'100%'} height={'100%'}  /></a> <h4 className='text-gray-800 py-1 px-5 dark:text-gray-200'>Secrets</h4></div>
        </div>
        <div className='basis-1/3 flex-1'>
          <div className='shadow-lg dark:shadow-gray-600 rounded-lg'><a href="https://github.com/avvicky/Drum-Machine" target="_blank"><Image className='rounded-lg object-cover' alt="Drum-Machine" loading='lazy'   src={web6} width={'100%'} height={'100%'}  /></a> <h4 className='text-gray-800 py-1 px-5 dark:text-gray-200'>Drum-Machine</h4></div>
        </div>
        </div>
      </section>
      </main>
    </div>
  )
}
