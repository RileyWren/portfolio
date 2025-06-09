import { FaGithub, FaFacebook, FaDiscord } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d1117] text-white py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-green-400 uppercase font-semibold tracking-wider mb-2">Contact Me</p>
        <h2 className="text-4xl font-bold mb-2">Let's Connect</h2>
        <p className="text-gray-400 mb-6">
          Have a project in mind? Let's work together to bring it to life.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-10">
          <a href="https://github.com/RileyWren" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
            <FaGithub size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61552133309014" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
            <FaFacebook size={20} />
          </a>
          <a href="https://discord.gg/yKJhF5HSrm" className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
            <FaDiscord size={20} />
          </a>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/youremail@example.com"
          method="POST"
          className="bg-[#161b22] p-6 rounded-xl shadow-lg space-y-4"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaEnvelope /> Send Me a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 rounded-md bg-[#0d1117] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-md bg-[#0d1117] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="w-full p-3 rounded-md bg-[#0d1117] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          {/* Hidden field to disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Send Message ✈️
          </button>
        </form>
      </div>
    </section>
  );
}
