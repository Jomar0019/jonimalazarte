import Me from '../assets/me.png'

const About = () => {
  return (
    <div className="w-full md:h-screen">
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row justify-center items-center h-full p-4">
        <div className="basis-1/2 flex justify-center">
            <img src={Me} alt="" className='w-[600px]' />
        </div>
        <div className="basis-1/2">
            <h3 className=' text-4xl font-bold mb-3'>About me</h3>
            <p className='leading-6'>My primary writing focus is on article, blog and site content, but I am always open to other areas of writing.
            I also do eBook design and formatting. I use Adobe Illustrator and Adobe InDesign to create a professional and modern eBook design.
            When I am not writing, you can find me at the park running after my rambunctious two year old twins.</p>
        </div>
      </div>
    </div>
  )
}

export default About
