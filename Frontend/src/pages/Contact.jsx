import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Mail, MessageSquare, User } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the current field's error when the user edits it.
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    const email = formData.email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us a little about your project.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    setSubmitted(false);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const inputClasses = (field) =>
    `mt-2 w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
      errors[field] ? 'border-red-400' : 'border-slate-200'
    }`;

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Contact our team
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Have a project in mind?
            <span className="text-orange-400"> Let's talk.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Tell us what you're working on, what you're trying to solve, and
            where you'd like to go. Every good project starts with a
            conversation.
          </p>
        </div>
      </section>

      {/* Contact form and information */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        {/* Left information panel */}
        <aside>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Let's collaborate
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Turn your idea into something real.
          </h2>

          <p className="mt-5 max-w-lg leading-7 text-slate-600">
            Whether you need a new digital product, a better web experience, or
            help improving an existing process, start by sharing a few details.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-orange-400">
                <MessageSquare size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Start with your idea
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Explain your goals, challenges, or the opportunity you've
                  identified.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-orange-400">
                <Mail size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Share your details
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Add your email so your project information is associated with
                  the right contact.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-sm text-slate-400">A good next step</p>
            <p className="mt-2 text-xl font-semibold">
              Clarity before complexity.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              You don't need a complete specification. A clear problem is
              enough to begin.
            </p>
          </div>
        </aside>

        {/* Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Project enquiry
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Tell us about your project
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Fields marked with <span className="text-red-500">*</span> are
              required.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <User size={16} className="text-slate-400" />
                Your name <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={inputClasses('name')}
              />

              {errors.name && (
                <p
                  id="name-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Mail size={16} className="text-slate-400" />
                Email address <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClasses('email')}
              />

              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-7">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-800"
              >
                Project message <span className="text-red-500">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What would you like to build, improve, or explore?"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? 'message-error' : undefined
                }
                className={`${inputClasses('message')} resize-y`}
              />

              {errors.message && (
                <p
                  id="message-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 cursor-pointer"
            >
              Submit project enquiry
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
              >
                Demo only - no message was sent.
              </div>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              This is a frontend demonstration form. It does not send or store
              your information.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;