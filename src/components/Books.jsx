import B1 from '../assets/cover/750.png'
import B2 from '../assets/cover/aakp.jpg'
import B3 from '../assets/cover/ABG.jpg'
import B4 from '../assets/cover/ceo.jpg'
import B5 from '../assets/cover/HCH.png'
import B6 from '../assets/cover/mtch.jpg'
import B7 from '../assets/cover/TCD.png'
import B8 from '../assets/cover/TTAB.png'
import B9 from '../assets/cover/VE - HAGE.png'
import B10 from '../assets/cover/WOP.png'

const Books = () => {
  return (
    <div className="w-full md:h-screen py-12 md:py-0">
      <div className="flex flex-col justify-center items-center h-full">
        <h3 className='text-4xl font-bold mb-12'>Books</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 max-w-[1200px] mx-auto gap-3 md:gap-6">
              <div className="">
                <img src={B1} alt="" className='w-[200px] ' />
              </div>
              <div className="">
                <img src={B2} alt="" className='w-[200px] ' />
              </div>
              <div className="">
                <img src={B3} alt="" className='w-[200px] ' />
              </div>
              <div className="">
                <img src={B4} alt="" className='w-[200px] ' />
              </div>
              <div className="">
                <img src={B5} alt="" className='w-[200px] ' />
              </div>
              <div className="">
                <img src={B6} alt="" className='w-[200px] ' />
              </div>
              <div className="hidden md:block">
                <img src={B7} alt="" className='w-[200px] ' />
              </div>
              <div className="hidden md:block">
                <img src={B8} alt="" className='w-[200px] ' />
              </div>
              <div className="hidden md:block">
                <img src={B9} alt="" className='w-[200px] ' />
              </div>
              <div className="hidden md:block">
                <img src={B10} alt="" className='w-[200px] ' />
              </div>
          </div>
          <div className="text-center mt-12">
              <button className='bg-[#303030] text-white px-6 py-3 rounded'>Read More</button>
          </div>
      </div>
        
    </div>
  )
}

export default Books
