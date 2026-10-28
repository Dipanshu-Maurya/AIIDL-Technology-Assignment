import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Cloud,
  Check,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Custom Software Development',
    description:
      'Turn complex business challenges into practical software solutions designed around your unique workflow.',
    icon: Code2,
    features: ['Business automation', 'Custom platforms', 'API integration'],
  },
  {
    number: '02',
    title: 'Web & Mobile Applications',
    description:
      'Create responsive, intuitive digital experiences that help your customers connect with your business.',
    icon: Smartphone,
    features: ['Responsive websites', 'Web applications', 'Mobile experiences'],
  },
  {
    number: '03',
    title: 'Cloud & DevOps',
    description:
      'Build a reliable foundation for your applications with streamlined deployment and cloud infrastructure.',
    icon: Cloud,
    features: ['Cloud infrastructure', 'Deployment workflows', 'Monitoring'],
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
              What We Do
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#101C3D] sm:text-4xl md:text-5xl">
              Technology solutions built around your business.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-slate-600">
            From your first idea to a working digital product, we help you
            choose the right tools to move forward.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#101C3D] text-white transition group-hover:bg-orange-500">
                    <Icon size={26} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-slate-400">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug text-[#101C3D]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <Check size={17} className="shrink-0 text-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-2 border-t border-slate-200 pt-5 text-sm font-bold text-[#101C3D] transition group-hover:text-orange-500"
                >
                  Learn More
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;