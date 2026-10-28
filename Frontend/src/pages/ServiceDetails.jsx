import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Layers3,
  Rocket,
  Plus,
  Minus,
  Building2,
  Workflow,
  Gauge,
} from 'lucide-react';

const ServiceDetails = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const deliverables = [
    'Software tailored to your business requirements',
    'Responsive and intuitive user interfaces',
    'Integration with relevant APIs and services',
    'Testing, documentation and deployment support',
  ];

  const process = [
    {
      number: '01',
      title: 'Discover',
      description:
        'We identify your goals, understand your users and define the essential requirements for your project.',
      icon: Lightbulb,
    },
    {
      number: '02',
      title: 'Design & Build',
      description:
        'We plan the experience, develop the core features and review progress against the agreed requirements.',
      icon: Layers3,
    },
    {
      number: '03',
      title: 'Launch & Improve',
      description:
        'We test the application, prepare it for launch and identify opportunities for future improvements.',
      icon: Rocket,
    },
  ];

  const faqs = [
    {
      question: 'What is custom software development?',
      answer:
        'Custom software development means creating an application or digital tool around specific business needs instead of relying entirely on a generic, ready-made product.',
    },
    {
      question: 'How do you determine the scope of a project?',
      answer:
        'We start by understanding the problem, intended users, essential features and constraints. These discussions help define a practical scope and an initial development plan.',
    },
    {
      question: 'Can an existing application be improved?',
      answer:
        'Yes. Depending on the application, improvements can include interface redesign, new features, API integrations, performance enhancements and maintenance.',
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F8FAFC]">

      {/* Hero Section */}
      <section className="relative bg-[#101C3D] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-orange-300">
              <Code2 size={16} />
              Our Services / Custom Software
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Software designed around{' '}
              <span className="text-orange-400">your business.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Turn your business requirements into practical digital
              solutions with software built around your workflows,
              goals and users.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-400"
              >
                Discuss Your Project
                <ArrowUpRight size={19} />
              </Link>

              <a
                href="#our-process"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Process
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Illustrative Visual */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-slate-400">
                  Solution Blueprint
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  Built for your workflow
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <Workflow size={25} />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: 'Understand',
                  subtitle: 'Define the problem and requirements',
                  icon: Lightbulb,
                },
                {
                  title: 'Develop',
                  subtitle: 'Build features around your needs',
                  icon: Code2,
                },
                {
                  title: 'Deliver',
                  subtitle: 'Test and prepare for launch',
                  icon: Rocket,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-400">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {item.subtitle}
                      </p>
                    </div>

                    <span className="ml-auto text-xs text-slate-500">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Who It Helps */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
              Who We Help
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101C3D] sm:text-4xl">
              The right solution starts with the right problem.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every business works differently. Custom software can help
              when existing tools cannot support your processes, when
              manual tasks need automation or when a new digital product
              needs to be built.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#101C3D] hover:text-orange-500"
            >
              Tell us about your idea
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Building2,
                title: 'Growing Businesses',
                description:
                  'Organize operations and reduce repetitive manual work.',
              },
              {
                icon: Workflow,
                title: 'Complex Workflows',
                description:
                  'Connect business processes through tailored tools.',
              },
              {
                icon: Gauge,
                title: 'Existing Products',
                description:
                  'Improve functionality and refine user experiences.',
              },
              {
                icon: Code2,
                title: 'New Ideas',
                description:
                  'Turn a product concept into a working application.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-200 hover:shadow-lg"
                >
                  <Icon size={25} className="text-orange-500" />

                  <h3 className="mt-4 font-bold text-[#101C3D]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
              What We Deliver
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101C3D] sm:text-4xl">
              From requirements to a working product.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              The deliverables depend on your project scope. A typical
              engagement may include the following.
            </p>
          </div>

          <div className="space-y-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-orange-500"
                />

                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Development Process */}
      <section
        id="our-process"
        className="px-5 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
              How We Work
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101C3D] sm:text-4xl">
              Three steps from idea to launch.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A straightforward process helps keep the work focused on
              your goals and requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                      <Icon size={27} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-slate-400">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#101C3D]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
              FAQs
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101C3D] sm:text-4xl">
              Questions about custom software?
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Here are some useful starting points. Have another question?
              We would be happy to hear about your project.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#101C3D] hover:text-orange-500"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC]"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenFAQ(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-[#101C3D] focus-visible:outline-2 focus-visible:outline-orange-500 sm:p-6"
                    >
                      <span className=''>{faq.question}</span>

                      {isOpen ? (
                        <Minus size={20} className="shrink-0 text-orange-500" />
                      ) : (
                        <Plus size={20} className="shrink-0 text-orange-500 transition-transform duration-700" />
                      )}
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={answerId}
                      className="px-5 pb-5 sm:px-6 sm:pb-6"
                    >
                      <p className="leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-orange-50 p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#101C3D] sm:text-3xl">
              Have a project in mind?
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Let's discuss the problem you're trying to solve.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#101C3D] px-6 py-4 font-semibold text-white transition hover:bg-orange-500"
          >
            Start a Conversation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default ServiceDetails;