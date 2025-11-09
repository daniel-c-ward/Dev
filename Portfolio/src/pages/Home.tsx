import { HomeAnimation } from '../components/HomeAnimation.js'

export function Home() {
  return (
    <>
    <div className='lg:my-75 md:my-50 my-20 flex md:flex-row flex-col items-center justify-center xl:text-8xl lg:text-6xl md:text-5xl text-5xl font-bold'>
      <h2 className=''>Making</h2>
      <HomeAnimation />
      <h2>websites.</h2>
    </div>
    <div className="bg-green-900 w-100vh h-300"></div>
        <div className="bg-blue-900 w-100vh h-300"></div>
    </>
    
  )
}
