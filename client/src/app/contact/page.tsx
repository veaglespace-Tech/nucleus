export default function Contact() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="bg-slate-800 text-white p-10 rounded-[2rem] border border-slate-700 shadow-2xl shadow-black/30 hover:shadow-primary/20 transition-all duration-500">
          <h2 className="text-3xl font-bold mb-6 text-white">Send us a message</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text text-slate-300">Name</span></label>
              <input type="text" className="input bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 w-full focus:border-primary focus:outline-none" placeholder="Your full name" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text text-slate-300">Email</span></label>
              <input type="email" className="input bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 w-full focus:border-primary focus:outline-none" placeholder="Your email address" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text text-slate-300">Message</span></label>
              <textarea className="textarea bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 h-32 w-full focus:border-primary focus:outline-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="btn btn-primary w-full border-none shadow-lg shadow-primary/30 mt-4 text-white">Send Message</button>
          </form>
        </div>
        <div className="flex flex-col justify-center space-y-8 p-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-base-content/70">123 Health Avenue, Medical District, City - 400001</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-base-content/70">+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-base-content/70">info@cityhospital.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
