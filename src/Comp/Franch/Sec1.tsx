
const partnerships = [
  {
    title: "25% - 75% KisanMel Partnership",
    image: "https://i.pinimg.com/736x/a1/cd/ed/a1cded971e3f7e2416bef74a07a501f2.jpg",
  },
  {
    title: "40% - 60% KisanMel Partnership",
    image: "https://i.pinimg.com/736x/05/ae/15/05ae154c9e5444b530a8c480796242e5.jpg",
  },
  {
    title: "50% - 50% KisanMel Partnership",
    image: "https://i.pinimg.com/736x/54/88/fd/5488fd7f44773e347e716771c577530d.jpg",
  },
];

const advantages = [
  "Low initial investment & flexible models",
  "Support with branding & marketing",
  "Operational training & expert guidance",
  "Strong returns based on transparent models",
  "Access to KisanMel's trusted network",
];

function Sec1() {
  return (
    <div className="bg-[#e4e1d8b2] text-[#2d4122] font-sans">

<div className="absolute top-4 left-4 z-50">
  <a
    href="/"
    className="bg-[#2d4122] text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:bg-[#3b5c2f] transition duration-300"
  >
    Back to Website
  </a>
</div>

      {/* Banner */}
      <div className="relative w-full h-[80vh]">
        <img
          src="https://i.pinimg.com/736x/d7/72/aa/d772aa69f4996f7059b3274cd0e7aaf6.jpg"
          alt="Franchise Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg tracking-tight">
            Become a Franchise Partner
          </h1>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Our Story - Full Width */}
        <div className="bg-white p-8 rounded-2xl shadow-md md:col-span-6">
          <h2 className="text-6xl font-black mb-4">Our Story</h2>
          <p className="text-lg leading-8 text-[#3b4f36] font-medium">
            At <strong className="text-[#2d4122]">KisanMel</strong>, we are committed to transforming agri-business in India.
            Our franchise model supports entrepreneurs with <span className="font-semibold">branding, training, and guidance</span> to build sustainable rural ventures.
            <br /><br />
            Whether you're looking to expand your impact or launch a purpose-led journey, <span className="font-semibold">KisanMel</span> empowers you with community trust, operational support, and scalable business strategies.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-3">
          <h2 className="text-4xl font-bold mb-4">Partnership Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {partnerships.map((item, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                <img src={item.image} alt={item.title} className="h-28 w-full object-cover" />
                <div className="p-3">
                  <p className="text-md font-semibold text-[#2d4122]">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-3">
          <h2 className="text-4xl font-bold  mb-4">Challenges & Solutions</h2>
          <p className="text-base mb-2">
            <strong>Challenges:</strong> Confidence in rural logistics, consistent onboarding, and support access.
          </p>
          <p className="text-base">
            <strong>Solutions:</strong> Tech-enabled franchise training, dedicated support, and local trust building ensure success.
          </p>
        </div>

        {/* Features */}
        <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Low-cost entry point</li>
            <li>Smart inventory system</li>
            <li>On-ground mentorship</li>
            <li>Digital & physical marketing</li>
          </ul>
        </div>

        {/* Advantages */}
        <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Advantages</h2>
          <ul className="list-disc pl-5 space-y-2 text-base">
            {advantages.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Testimonials */}
        <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Results & Testimonials</h2>
          <p className="mb-2 text-base">
            <strong>Impact:</strong> 40% rise in local product distribution and farmer income within 6 months.
          </p>
          <p className="italic text-[#2d4122] text-sm">
            "KisanMel empowered us to grow confidently with consistent support. It’s more than a business—it’s a mission!" — Local Franchise Owner
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sec1;
