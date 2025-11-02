import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';

export default function StudentsPage() {
  const links = [
    { name: 'Portal', href: '#' },
    { name: 'Library', href: '#' },
    { name: 'Timetable', href: '#' },
    { name: 'Accommodation', href: '#' },
  ];

  return (
    <div>
      <PageHeader title="Students" subtitle="Resources and services to support your success." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map(l => (
            <Link key={l.name} href={l.href} className="card p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg">{l.name}</h3>
              <p className="mt-2 text-slate-600">Quick access</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
