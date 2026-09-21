export default function Contact() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="bg-base-100 text-base-content p-10 rounded-[2rem] border border-base-200 shadow-2xl shadow-base-300/50 hover:shadow-primary/20 transition-all duration-500">
          <h2 className="text-3xl font-bold mb-6 text-base-content">Send us a message</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text font-medium text-base-content/80">Name</span></label>
              <input type="text" className="input bg-base-200/50 border-base-300 text-base-content placeholder-base-content/40 w-full focus:border-primary focus:outline-none focus:bg-base-100 transition-colors" placeholder="Your full name" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-medium text-base-content/80">Email</span></label>
              <input type="email" className="input bg-base-200/50 border-base-300 text-base-content placeholder-base-content/40 w-full focus:border-primary focus:outline-none focus:bg-base-100 transition-colors" placeholder="Your email address" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-medium text-base-content/80">Message</span></label>
              <textarea className="textarea bg-base-200/50 border-base-300 text-base-content placeholder-base-content/40 h-32 w-full focus:border-primary focus:outline-none focus:bg-base-100 transition-colors" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="btn btn-primary w-full border-none shadow-lg shadow-primary/30 mt-4 text-white hover:-translate-y-0.5 transition-transform duration-300">Send Message</button>
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
