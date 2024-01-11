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
    <div className="w-full h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h3 className='text-2xl font-bold mb-12'>Books</h3>
        <div className="grid grid-cols-5 max-w-[1200px] mx-auto gap-6">
              <div className="">
                <img src={B1} alt="" />
              </div>
              <div className="">
                <img src={B2} alt="" />
              </div>
              <div className="">
                <img src={B3} alt="" />
              </div>
              <div className="">
                <img src={B4} alt="" />
              </div>
              <div className="">
                <img src={B5} alt="" />
              </div>
              <div className="">
                <img src={B6} alt="" />
              </div>
              <div className="">
                <img src={B7} alt="" />
              </div>
              <div className="">
                <img src={B8} alt="" />
              </div>
              <div className="">
                <img src={B9} alt="" />
              </div>
              <div className="">
                <img src={B10} alt="" />
              </div>
          </div>
      </div>
        
    </div>
  )
}

export default Books
