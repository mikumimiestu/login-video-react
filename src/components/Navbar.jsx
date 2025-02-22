import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full p-5 bg-transparent z-10'>
        <div className="flex justify-between items-center">
            <Link to="/" className='text-white text-xl font-semibold'>Logo.</Link>
            <div>
                <Link to="/login" className='text-white text-lg font-semibold mx-3'>Login</Link>
                <Link to="/register" className='text-white text-lg font-semibold mx-3'>Register</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar