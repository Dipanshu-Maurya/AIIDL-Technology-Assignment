import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B142E] px-5 text-white md:px-8">

      <div className="mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#101C3D]">
              A<span className="text-orange-500">.</span>
            </div>

            <div>
              <h2 className="text-lg font-bold">AIIDL</h2>
              <p className="text-[10px] uppercase tracking-[2px] text-slate-400">
                Technologies
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Thoughtful technology solutions for businesses ready to build,
            improve and grow their digital experiences.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/services" className="transition hover:text-white">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold">Our Services</h3>

          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li>Custom Software</li>
            <li>Web & Mobile Apps</li>
            <li>Cloud & DevOps</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AIIDL Technologies. Assignment concept.
          </p>

          <Link
            to="/"
            className="transition hover:text-white"
          >
            Back to Home ↑
          </Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;