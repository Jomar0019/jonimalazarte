import Fb from '../assets/fb.png'
import Dreame from '../assets/dreame.png'
import Yugto from '../assets/yugto.png'
import Wattpad from '../assets/wattpad.png'


const Footer = () => {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between bg-[#303030] p-6">
        <h3 className='text-xl md:text-2xl font-bold text-white'>Joni Malazarte</h3>
        <div className="flex gap-4">
            <a href={`https://www.facebook.com/imSezxy.jonimalazarte`}><img src={Fb} alt="" className='w-8 rounded-md cursor-pointer' /></a>
            <img src={Dreame} alt="" className='w-8 rounded-md cursor-pointer' />
            <img src={Yugto} alt="" className='w-8 rounded-md cursor-pointer' />
            <img src={Wattpad} alt="" className='w-12 h-8 rounded-md cursor-pointer' />
        </div>
      </div>
      <div className="w-full text-center bg-grey-900 p-2">
        <p className='text-sm'>© 2024 Joni Malazarte. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
