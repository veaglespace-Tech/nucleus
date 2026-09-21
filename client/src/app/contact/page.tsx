export default function Contact() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="bg-base-100 p-8 rounded-[2rem] shadow-xl shadow-base-300/50 border border-base-200 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" className="input input-bordered w-full" placeholder="Your full name" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" className="input input-bordered w-full" placeholder="Your email address" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea className="textarea textarea-bordered h-32 w-full" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="btn btn-primary w-full">Send Message</button>
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
