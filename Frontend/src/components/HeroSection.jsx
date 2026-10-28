import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cloud,
  Smartphone,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const HeroSection = () => {
  const services = [
    { name: 'Custom Software', icon: Code2 },
    { name: 'Web & Mobile Apps', icon: Smartphone },
    { name: 'Cloud & DevOps', icon: Cloud },
  ];

  return (
    <main className="overflow-hidden bg-[#F8FAFC]">

      {/* Hero Section */}
      <section className="relative">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-[#101C3D] shadow-sm">
              <Sparkles size={16} className="text-orange-500" />
              Your Ideas. Our Technology.
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-[#101C3D] sm:text-5xl lg:text-6xl">
              We Build Digital Experiences That{' '}
              <span className="text-orange-500">Drive Growth.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              From custom software to modern web applications, we help
              businesses transform their ideas into useful digital products.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#101C3D] px-6 py-4 font-semibold text-white transition hover:bg-orange-500"
              >
                Start Your Project
                <ArrowUpRight size={19} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-[#101C3D] transition hover:border-orange-400 hover:text-orange-500"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Business-focused solutions
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Modern technology
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">

            <div className="absolute -right-3 -top-4 h-24 w-24 rounded-3xl bg-orange-400/20" />
            <div className="absolute -bottom-5 -left-4 h-28 w-28 rounded-full bg-blue-300/30" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/40 sm:p-7">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm text-slate-500">Digital Workspace</p>
                  <h2 className="mt-1 text-xl font-bold text-[#101C3D]">
                    Project Overview
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Sparkles size={22} />
                </div>
              </div>

              {/* Dashboard Metrics */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-500">Smart Solutions</p>
                  <p className="mt-2 text-2xl font-bold text-[#101C3D]">
                    Digital
                  </p>
                  <p className="mt-1 text-xs text-blue-600">
                    Built around your needs
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-4">
                  <p className="text-sm text-slate-500">Our Approach</p>
                  <p className="mt-2 text-2xl font-bold text-[#101C3D]">
                    Agile
                  </p>
                  <p className="mt-1 text-xs text-orange-600">
                    Plan, build and improve
                  </p>
                </div>
              </div>

              {/* Service List */}
              <div className="mt-6">
                <h3 className="mb-4 font-semibold text-[#101C3D]">
                  Technology Capabilities
                </h3>

                <div className="space-y-3">
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.name}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-orange-200 hover:bg-orange-50/50"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#101C3D]">
                          <Icon size={20} />
                        </div>

                        <span className="flex-1 text-sm font-medium text-slate-700">
                          {service.name}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="text-slate-400"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#101C3D] p-4 text-white">
                <p className="text-sm text-slate-300">
                  Have an idea in mind?
                </p>
                <p className="mt-1 font-semibold">
                  Let&apos;s build something meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introductory Highlights */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-3 md:px-8">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-[#101C3D]">
              Built for Your Business
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Solutions designed around real business needs.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-[#101C3D]">
              Technology That Fits
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Practical tools for modern digital experiences.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-[#101C3D]">
              From Idea to Launch
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A clear path from planning to implementation.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HeroSection;