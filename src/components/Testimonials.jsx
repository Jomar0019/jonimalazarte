
const Testimonials = () => {
  return (
    <div className="w-full md:h-screen py-12 md:py-0">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12">Book Reviews by my readers</h2>
            <div className="flex gap-6 flex-col md:flex-row p-4">

            <div className="shadow-lg p-6 md:p-12 w-full flex justify-start items-start gap-6 rounded-md">
                <div className="bg-red-200 p-6 md:p-10 rounded-full"></div>
                <div className="md:leading-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro facilis, quae autem adipisci recusandae. Eveniet adipisci voluptatibus dolor, voluptas dolorem explicabo cum voluptatum ad ullam, dolorum illum.</p>

                    <h4 className=" font-bold text-lg mt-3">Reader One</h4>
                </div>
            </div>

            <div className="shadow-lg p-6 md:p-12 w-full flex justify-start items-start gap-6 rounded-md">
                <div className="bg-red-200 p-6 md:p-10 rounded-full"></div>
                <div className="md:leading-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro facilis, quae autem adipisci recusandae. Eveniet adipisci voluptatibus dolor, voluptas dolorem explicabo cum voluptatum ad ullam, dolorum illum.</p>

                    <h4 className=" font-bold text-lg mt-3">Reader Two</h4>
                </div>
            </div>

            </div>



        </div>
    </div>
  )
}

export default Testimonials
