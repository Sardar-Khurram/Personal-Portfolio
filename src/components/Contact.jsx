// Import necessary dependencies
import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center min-h-screen text-gray-800 dark:text-gray-200 bg-gradient-to-b from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-6xl font-extrabold mb-6 text-center">Get in Touch</h1>
      <p className="text-xl mb-8 text-center px-6 md:w-2/3 lg:w-1/2">
        Have questions or collaborations in mind? Drop us a message and we’ll get back to you promptly!
      </p>

      {/* Contact Form */}
      <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-500"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-500"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-500"
              placeholder="yourname@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Your Message</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-500"
              placeholder="Share your thoughts with us"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 flex gap-6">
        <a
          href="#"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-transform duration-300 transform hover:scale-110"
          title="Facebook"
        >
          <i className="fab fa-facebook-f text-3xl"></i>
        </a>
        <a
          href="#"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-transform duration-300 transform hover:scale-110"
          title="Twitter"
        >
          <i className="fab fa-twitter text-3xl"></i>
        </a>
        <a
          href="#"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-transform duration-300 transform hover:scale-110"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin-in text-3xl"></i>
        </a>
        <a
          href="#"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-transform duration-300 transform hover:scale-110"
          title="Instagram"
        >
          <i className="fab fa-instagram text-3xl"></i>
        </a>
      </div>

      {/* Contact Information */}
      <div className="mt-10 text-center">
        <p className="text-lg font-semibold">Phone: <span className="font-normal">(123) 456-7890</span></p>
        <p className="text-lg font-semibold">Email: <span className="font-normal">contact@yourdomain.com</span></p>
        <p className="text-lg font-semibold">Location: <span className="font-normal">123 Your Street, City, Country</span></p>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 cursor-pointer">
            <summary className="font-semibold text-lg">What is your response time?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We aim to respond to all inquiries within 24-48 hours on business days.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 cursor-pointer">
            <summary className="font-semibold text-lg">Can I schedule a meeting?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Yes, please mention your preferred time and date in your message, and we will coordinate accordingly.
            </p>
          </details>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373531531654!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d242824dba4!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1614919980995!5m2!1sen!2sau"
          className="w-full h-64 rounded-lg border-0 shadow-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
