import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, GraduationCap, Microscope, Newspaper } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-10" style={{ background: 'var(--gradient)' }} />
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2073&auto=format&fit=crop"
            alt="Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
        </div>

        <div className="container-section pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="max-w-3xl">
            <span className="badge mb-4">Inspiring Excellence. Empowering Purpose.</span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Valley View University
            </h1>
            <p className="mt-6 text-lg text-slate-700 max-w-2xl">
              A vibrant community of scholars and innovators in the heart of Ghana.
              Discover world-class academics, faith-inspired leadership, and a campus that helps you thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/apply" className="button-primary">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/programs" className="button-secondary">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="container-section pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Admissions', href: '/admissions', Icon: GraduationCap, desc: 'Undergraduate, postgraduate, and international applicants' },
            { title: 'Academics', href: '/academics', Icon: BookOpen, desc: 'Faculties, departments, programs, and resources' },
            { title: 'Research', href: '/research', Icon: Microscope, desc: 'Innovation, labs, and scholarly work' },
          ].map(({ title, href, Icon, desc }) => (
            <Link key={title} href={href} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brand-50 text-brand-700 p-3 ring-1 ring-brand-200">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-slate-600 mt-1">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container-section py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 card p-8">
          {[
            { value: '8k+', label: 'Students' },
            { value: '100+', label: 'Programs' },
            { value: '30+', label: 'Nationalities' },
            { value: '1995', label: 'Founded' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-slate-900">{s.value}</div>
              <div className="mt-1 text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* News & Events */}
      <section className="container-section pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">News & Events</h2>
          <div className="flex gap-3">
            <Link href="/news" className="button-secondary"><Newspaper className="mr-2 h-5 w-5"/>News</Link>
            <Link href="/events" className="button-secondary"><CalendarDays className="mr-2 h-5 w-5"/>Events</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="card overflow-hidden">
              <div className="relative h-48">
                <Image src={`https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1800&auto=format&fit=crop`} alt="Campus life" fill className="object-cover"/>
              </div>
              <div className="p-6">
                <span className="badge">Announcement</span>
                <h3 className="mt-3 font-semibold text-lg">Campus Spotlight {i}</h3>
                <p className="mt-2 text-slate-600">Highlights from our vibrant campus and academic community.</p>
                <Link href="/news" className="mt-4 inline-flex items-center text-brand-700 font-semibold">Read more <ArrowRight className="ml-1 h-4 w-4"/></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
