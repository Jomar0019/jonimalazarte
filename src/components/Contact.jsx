import Me2 from '../assets/me2.jpg'

const Contact = () => {
  return (
    <div className="w-full h-screen ">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center h-full ">
        <div className="w-full flex flex-col md:flex-row justify-center p-6 md:p-12">
          <div className="hidden md:flex basis-5/12">
            {/* <h4 className="text-xl font-bold">Contacts</h4>
            <p className="my-3"><span className="font-bold">Email</span> : Jonimalazarte24@gmail.com</p>
            <p><span className="font-bold">Phone</span> : 09994206537</p> */}
            <img src={Me2} alt="" />
          </div>
          <div className="basis-7/12 border p-6">
            <h4 className="text-xl font-bold mb-3">Get in touch</h4>
            <div className="flex gap-4 w-full">
              <div className="basis-1/2">
              <h4 className="font-bold">First Name</h4>
              <input type="text" placeholder="John" className="w-full border py-2 px-4 rounded  mb-3"/>
              </div>

              <div className="basis-1/2">
              <h4 className="font-bold">Last Name</h4>
              <input type="text" placeholder="Doe" className="w-full border py-2 px-4 rounded  mb-3"/>
              </div>
            </div>
            

            <h4 className="font-bold">Email</h4>
            <input type="email" placeholder="Example@email.co" className="w-full border py-2 px-4 rounded mb-3"/>

            <h4 className="font-bold">Phone</h4>
            <input type="text" placeholder="09991234567" className="w-full border py-2 px-4 rounded mb-3"/>

            <h4 className="font-bold">Message</h4>
            <textarea name="message" placeholder="Type your message..."  id="" cols="30" rows="5" className="w-full border py-2 px-4 rounded mb-3"></textarea>

            <butto className="bg-[#303030] px-6 py-3 text-white rounded">Submit</butto>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
