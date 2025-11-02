import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';

export default function AcademicsPage() {
  const blocks = [
    { title: 'Faculties', href: '/faculties', desc: 'Explore our faculties and schools' },
    { title: 'Departments', href: '/departments', desc: 'Discover departments and study areas' },
    { title: 'Programs', href: '/programs', desc: 'Undergraduate and postgraduate programs' },
  ];

  return (
    <div>
      <PageHeader title="Academics" subtitle="Rigorous programs, inspiring faculty, and supportive learning environments." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((b) => (
            <Link key={b.title} href={b.href} className="card p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-slate-600">{b.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
