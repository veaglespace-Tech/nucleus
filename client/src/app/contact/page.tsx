export default function Contact() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="relative bg-gradient-to-br from-primary/10 via-base-100 to-accent/5 text-base-content p-10 rounded-[2rem] border border-primary/20 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500 overflow-hidden group">
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500"></div>
          
          <h2 className="text-3xl font-bold mb-6 text-base-content relative z-10">Send us a message</h2>
          <form className="space-y-4 relative z-10">
            <div className="form-control">
              <label className="label"><span className="label-text font-medium text-base-content/80">Name</span></label>
              <input type="text" className="input bg-base-100 border-base-200 shadow-sm text-base-content placeholder-base-content/40 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your full name" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-medium text-base-content/80">Email</span></label>
              <input type="email" className="input bg-base-100 border-base-200 shadow-sm text-base-content placeholder-base-content/40 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your email address" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-medium text-base-content/80">Message</span></label>
              <textarea className="textarea bg-base-100 border-base-200 shadow-sm text-base-content placeholder-base-content/40 h-32 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="btn bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-secondary w-full border-none shadow-lg shadow-primary/30 mt-4 text-white hover:-translate-y-1 transition-all duration-300">Send Message</button>
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
