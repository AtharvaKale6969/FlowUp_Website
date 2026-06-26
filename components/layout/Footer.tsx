import Link from "next/link";

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XLogo = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Link href="/" className="text-4xl font-serif font-bold text-white tracking-tight mb-4">
            Flow <span className="text-gold italic">Up</span>
          </Link>
          <p className="text-gold text-sm tracking-widest uppercase font-semibold">
            Drink Pure. Flow Up.
          </p>
        </div>

        {/* 3 Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <h4 className="text-lg font-serif font-semibold text-white mb-2">Quick Links</h4>
            <Link href="/about" className="text-gray-400 hover:text-gold transition-colors text-sm">About Us</Link>
            <Link href="/order" className="text-gray-400 hover:text-gold transition-colors text-sm">Order Now</Link>
            <Link href="/benefits" className="text-gray-400 hover:text-gold transition-colors text-sm">Our Benefits</Link>
            <Link href="/lab" className="text-gray-400 hover:text-gold transition-colors text-sm">Lab & Certs</Link>
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h4 className="text-lg font-serif font-semibold text-white mb-2">Contact Us</h4>
            <a href="mailto:sales@flowupdrinks.com" className="text-gray-400 hover:text-gold transition-colors text-sm">sales@flowupdrinks.com</a>
            <div className="text-gray-400 text-sm flex flex-col items-center gap-1">
              <a href="tel:+919763562944" className="hover:text-gold transition-colors">+91 9763562944</a>
              <a href="tel:+917123100024" className="hover:text-gold transition-colors">+91 7123100024</a>
            </div>
            <p className="text-gray-400 text-sm max-w-[280px] text-center">Plot no 12A, 1st Floor, Smruti Nagar Rd, Smruti Nagar, Koradi, Bokara, Nagpur Maharashtra 441111</p>
          </div>

          <div className="flex flex-col space-y-4 items-center md:items-end">
            <h4 className="text-lg font-serif font-semibold text-white mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors" aria-label="X (Twitter)">
                <XLogo size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Flow Up. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
