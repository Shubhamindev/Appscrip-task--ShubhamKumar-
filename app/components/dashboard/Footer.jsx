"use client";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
       
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-8 mb-8">
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">BE THE FIRST TO KNOW</h3>
            <p className="text-gray-400 text-sm mb-4">
              Sign up for updates from mettà muse.
            </p>
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="flex-grow px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Contact Us */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <p className="text-sm text-gray-400">+91 9084253488</p>
            <p className="text-sm text-gray-400 mb-4">shubhamrajput8954samrat@gmail.com</p>
            <h3 className="text-lg font-semibold mb-4">CURRENCY</h3>
            <p className="text-sm text-gray-400">USD</p>
            <p className="text-xs text-gray-600">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Links */}
          <div className="flex flex-col space-y-4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">mètta muse</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Social Media and Payment Methods */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-lg font-semibold">FOLLOW US</h3>
              <div className="flex flex-row items-center space-x-4 mt-2">
                <a href="#" className="text-gray-400  hover:text-white">
                <img
                  src="/instagram.png"
                  alt="MasterCard"
                  className="h-8"
                />
                </a>
                <a href="#" className="text-gray-400  hover:text-white">
                <img
                  src="/linkedin.png"
                  alt="Visa"
                  className="h-8"
                />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">mètta muse ACCEPTS</h3>
              <div className="flex space-x-2 mt-2">
                <img
                  src="/gpay.png"
                  alt="Visa"
                  className="h-8"
                />
                <img
                  src="/mastercard.png"
                  alt="MasterCard"
                  className="h-8"
                />
                <img
                  src="/paypal.png"
                  alt="Apple Pay"
                  className="h-8"
                />
                <img
                  src="/amex.png"
                  alt="PayPal"
                  className="h-8"
                />
                 <img
                  src="/applepay.png"
                  alt="PayPal"
                  className="h-8"
                />
                 <img
                  src="/shoppay.png"
                  alt="PayPal"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm mt-8">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
