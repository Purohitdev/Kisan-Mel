import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Set current time value before sending
    const timeInput = formRef.current.querySelector<HTMLInputElement>('input[name="time"]');
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    emailjs
      .sendForm(
        'service_836absd',         // ✅ Your Service ID
        'template_9togqbt',        // ✅ Your Template ID
        formRef.current,
        'j6F2uYP6UWL0elMZt'        // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-fit bg-[#EDEAE4] text-[#2D4122] flex items-center pt-5 pb-16 px-6">
      <div className="w-full grid md:grid-cols-2 gap-8 p-8">
        {/* Left Side */}
        <div>
          <button className="px-6 py-3 mb-5 border border-[#2d4122] rounded-full flex justify-center items-center w-fit text-[#2d4122] font-semibold shadow-md hover:bg-[#2d4122] hover:text-white transition-all">
            Our Contact
          </button>
          <h2 className="text-3xl font-bold my-2">Send a message</h2>
          <p className="text-sm text-gray-600 mb-4">
            Have questions or need farm support? Send us a message — we're here to help!
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

        {/* Right Side - Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d4122]"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d4122]"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d4122]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d4122]"
            required
          />
          {/* Hidden field for time */}
          <input type="hidden" name="time" />

          <button
            type="submit"
            className="w-fit px-4 bg-[#2d4122] text-[#EDEAE4] py-3 rounded-md font-semibold hover:bg-[#EDEAE4] hover:text-[#2d4122] hover:border border-[#2d4122] transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
