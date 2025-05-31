
const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: ['Furniture', 'Kitchenware', 'Décor', 'Handcrafted', 'New Arrivals', 'Sale Items']
    },
    {
      title: 'Customer Care',
      links: ['Contact Us', 'Shipping Info', 'Returns', 'Size Guide', 'Care Instructions', 'FAQ']
    },
    {
      title: 'Company',
      links: ['About Treen', 'Our Craftsmen', 'Sustainability', 'Press', 'Careers', 'Wholesale']
    }
  ];

  return (
    <footer className="bg-treen-900 text-treen-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-playfair font-bold mb-4 text-white">Treen</h3>
            <p className="text-treen-300 mb-6 leading-relaxed">
              Crafting premium wooden furniture with sustainable materials and 
              traditional techniques for modern living.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-treen-800 rounded-full flex items-center justify-center hover:bg-treen-700 transition-colors cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-10 h-10 bg-treen-800 rounded-full flex items-center justify-center hover:bg-treen-700 transition-colors cursor-pointer">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-10 h-10 bg-treen-800 rounded-full flex items-center justify-center hover:bg-treen-700 transition-colors cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-playfair font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-treen-300 hover:text-white transition-colors duration-200 text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-treen-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-playfair font-semibold text-white mb-2">
                Stay Connected
              </h4>
              <p className="text-treen-300">
                Get the latest updates on new collections and exclusive offers.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-treen-800 border border-treen-700 rounded-l-lg text-white placeholder-treen-400 focus:outline-none focus:border-treen-600"
              />
              <button className="px-6 py-3 bg-treen-bronze hover:bg-treen-gold text-white rounded-r-lg transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-treen-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-treen-400">
          <p>&copy; 2024 Treen. All rights reserved. Crafted with ❤️ for quality living.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
