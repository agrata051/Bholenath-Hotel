import {
  aboutLinks,
  locations,
  footerBrand,
  footerCopyright,
} from '@/data/footer';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">{footerBrand.logoText}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{footerBrand.title}</h3>
                <p className="text-xs text-gold-400 font-medium">{footerBrand.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerBrand.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-gold-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Location</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {locations.map((loc, index) => (
                <li key={index}>
                  <a href={loc.href} className="hover:text-gold-400 transition-colors">
                    {loc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Subscribe Our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get hotel news, offers, and more</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-gold-500"
              />
              <button className="bg-gold-500 hover:bg-gold-600 px-4 py-2 rounded-r-md text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">{footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

