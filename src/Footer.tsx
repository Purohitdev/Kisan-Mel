const Footer = () => {
    return (
      <footer className="bg-black text-[#DAD7CD] py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and Socials */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-green-500">Kisan <span className="text-green-700">मेल</span></h2>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis portaa quam ut finibus ultricies.
            </p>
            <div className="flex gap-4 mt-4 text-yellow-500 text-xl">
              <a href="#" className="hover:text-yellow-400">🔗</a>
              <a href="#" className="hover:text-yellow-400">🔗</a>
              <a href="#" className="hover:text-yellow-400">🔗</a>
              <a href="#" className="hover:text-yellow-400">🔗</a>
            </div>
          </div>
  
          {/* Explore & Resources */}
          <div className="flex-2 flex justify-around ">
            <div>
              <h3 className="text-lg font-semibold">Explore</h3>
              <ul className="mt-2 text-sm text-gray-400 space-y-1">
                <li><a href="#" className="hover:text-white">New Projects</a></li>
                <li><a href="#" className="hover:text-white">Our Services</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-2 text-sm text-gray-400 space-y-1">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Best Practices</a></li>
                <li><a href="#" className="hover:text-white">Colors</a></li>
                <li><a href="#" className="hover:text-white">Color Wheel</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Developers</a></li>
                <li><a href="#" className="hover:text-white">Resource Library</a></li>
              </ul>
            </div>
          </div>
  
          {/* Contact Info */}
          <div className="flex-1  justify-end">
         
                <h3 className="text-lg font-semibold">📞 +91123456789</h3>
            <p className="mt-2 text-sm text-gray-400">Jaipur, Rajasthan</p>

          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>Copyright &copy; KisanMela | All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;