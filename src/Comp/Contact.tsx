function Contact() {
  return (
    <div className="min-h-fit bg-[#EDEAE4] text-[#2D4122] flex items-center pt-5 pb-16  px-6">
      <div className="w-full  grid md:grid-cols-2 gap-8 p-8 ">
        {/* Left Side */}
        <div>
        <button className="px-6 py-3 mb-5 border border-[#2d4122] rounded-full flex justify-center items-center w-fit text-[#2d4122] font-semibold shadow-md hover:bg-[#2d4122] hover:text-white transition-all">
                        Our Contact
                    </button>          <h2 className="text-3xl font-bold my-2">Send a message</h2>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst.
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold">PHONE</p>
              <p className="text-lg">+919999888822</p>
              <p className="text-lg">+880987654321</p>
            </div>
            <div>
              <p className="text-xs font-semibold">EMAIL</p>
              <p className="text-lg">kisanmel@gmail.com</p>
            </div>
            <div>
              <p className="text-xs font-semibold">ADDRESS</p>
              <p className="text-lg">Jagatpura, Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d4122]" />
          <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d4122]" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d4122]" />
          <textarea placeholder="Your Message"  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d4122]"></textarea>
          <button className="w-1/3 bg-[#2d4122] text-[#EDEAE4] py-3 rounded-md font-semibold hover:bg-[#EDEAE4] hover:text-[#2d4122] hover:border border-[#2d4122] transition">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
