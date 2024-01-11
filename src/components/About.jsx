import Me from '../assets/me.jpg'

const About = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center h-full p-4">
        <div className="basis-1/2 flex justify-center">
            <img src={Me} alt="" className='w-[450px]' />
        </div>
        <div className="basis-1/2 ">
            <h3 className='text-2xl font-bold mb-3'>About me</h3>
            <p>My primary writing focus is on article, blog and site content, but I am always open to other areas of writing.
            I also do eBook design and formatting. I use Adobe Illustrator and Adobe InDesign to create a professional and modern eBook design.
            When I am not writing, you can find me at the park running after my rambunctious two year old twins.</p>
        </div>
      </div>
    </div>
  )
}

export default About
