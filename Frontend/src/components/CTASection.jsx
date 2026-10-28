import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#101C3D] px-6 py-14 sm:px-12 md:py-20 lg:px-16">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-orange-300">
              <Sparkles size={16} />
              Have an idea?
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Let's build something{' '}
              <span className="text-orange-400">meaningful.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Tell us what you're planning. Let's explore how the right
              technology can help turn your idea into a digital product.
            </p>
          </div>

          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Let's Talk
              <ArrowUpRight size={20} />
            </Link>

            <p className="mt-4 text-sm text-slate-400">
              Start with a conversation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;