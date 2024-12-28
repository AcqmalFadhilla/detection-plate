import { ModeToggle } from '@/components/dark-mode/mode-toggle'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center space-x-4 border-b-2  mb-10 py-5'>
        <h1 className='capitalize font-semibold text-lg  lg:font-bold lg:text-2xl'>Detection Plate</h1>
        <ModeToggle/>
    </div>
  )
}

export default Navbar