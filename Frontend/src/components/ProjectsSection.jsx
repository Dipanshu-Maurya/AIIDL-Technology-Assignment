import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Coffee,
  LayoutDashboard,
  Sparkles,
} from 'lucide-react';

const projects = [
  {
    id: '01',
    category: 'Food & Beverage',
    title: 'Cafe Ordering Experience',
    description:
      'A concept for a modern cafe website that helps customers explore a menu, discover favorites, and start an online order.',
    tags: ['Web Design', 'Responsive UI'],
    icon: Coffee,
    theme: 'bg-orange-100',
    iconColor: 'text-orange-600',
    preview: 'cafe',
  },
  {
    id: '02',
    category: 'Business Productivity',
    title: 'Team Workspace Dashboard',
    description:
      'A concept dashboard for organizing projects, tracking tasks, and giving teams a clearer view of their work.',
    tags: ['Dashboard UI', 'Productivity'],
    icon: LayoutDashboard,
    theme: 'bg-blue-100',
    iconColor: 'text-blue-700',
    preview: 'dashboard',
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
              Selected Concepts
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#101C3D] sm:text-4xl md:text-5xl">
              Ideas brought to life through design.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-slate-600">
            Explore two illustrative concepts showing how thoughtful design
            can make everyday digital experiences simpler.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Project Visual */}
                <div className={`relative ${project.theme} p-5 sm:p-8`}>
                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 backdrop-blur">
                    <Sparkles size={14} className="text-orange-500" />
                    Concept Project
                  </div>

                  {project.preview === 'cafe' ? (
                    <div className="mx-auto max-w-md rounded-2xl bg-white p-5 shadow-lg sm:p-7">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white">
                            <Coffee size={19} />
                          </div>
                          <span className="font-bold text-[#101C3D]">
                            Daily Brew
                          </span>
                        </div>

                        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                          Cafe concept
                        </span>
                      </div>

                      <div className="mt-6 rounded-xl bg-[#FFF7ED] p-5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">
                          Freshly prepared
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-[#101C3D] sm:text-3xl">
                          Your daily cup of joy.
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                          Coffee, comfort and something delicious.
                        </p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-slate-100 p-3">
                          <div className="mb-3 flex h-14 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                            <Coffee size={27} />
                          </div>
                          <p className="text-sm font-semibold text-[#101C3D]">
                            Classic Latte
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            Coffee favourite
                          </p>
                        </div>

                        <div className="rounded-xl border border-slate-100 p-3">
                          <div className="mb-3 flex h-14 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                            <Sparkles size={27} />
                          </div>
                          <p className="text-sm font-semibold text-[#101C3D]">
                            Sweet Treats
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            A little indulgence
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mx-auto max-w-md rounded-2xl bg-white p-5 shadow-lg sm:p-7">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium text-slate-500">
                            WORKSPACE
                          </p>
                          <h3 className="mt-1 text-lg font-bold text-[#101C3D]">
                            Team Overview
                          </h3>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                          <LayoutDashboard size={21} />
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {[
                          { label: 'Planned', value: '08' },
                          { label: 'In progress', value: '05' },
                          { label: 'Review', value: '03' },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl bg-slate-50 p-3"
                          >
                            <p className="text-xl font-bold text-[#101C3D]">
                              {item.value}
                            </p>
                            <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <div className="mb-4 flex items-center justify-between">
                          <p className="text-sm font-semibold text-[#101C3D]">
                            Sample tasks
                          </p>
                          <span className="text-xs text-slate-400">
                            Preview
                          </span>
                        </div>

                        {[
                          'Design landing page',
                          'Review user feedback',
                          'Prepare project brief',
                        ].map((task, index) => (
                          <div
                            key={task}
                            className="flex items-center gap-3 border-t border-slate-100 py-3"
                          >
                            <div
                              className={`h-2.5 w-2.5 rounded-full ${
                                index === 0
                                  ? 'bg-blue-500'
                                  : index === 1
                                    ? 'bg-orange-500'
                                    : 'bg-green-500'
                              }`}
                            />
                            <span className="text-xs text-slate-600 sm:text-sm">
                              {task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Information */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                    {project.category}
                  </p>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-[#101C3D] sm:text-2xl">
                      {project.title}
                    </h3>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#101C3D] transition group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#101C3D] transition hover:text-orange-500"
                  >
                    Discuss a Similar Project
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;