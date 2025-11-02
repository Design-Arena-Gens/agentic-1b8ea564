import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <div>
      <PageHeader title="Admissions" subtitle="Join a diverse community of global learners. Learn about requirements, deadlines, and scholarships." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { h: 'Undergraduate', p: 'First-degree applicants and transfer students' },
            { h: 'Postgraduate', p: 'Masters, MBA, and doctoral admissions' },
            { h: 'International', p: 'Guidance for international applicants' },
          ].map((b) => (
            <div key={b.h} className="card p-6">
              <h3 className="font-semibold text-lg">{b.h}</h3>
              <p className="mt-2 text-slate-600">{b.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/apply" className="button-primary">Start Your Application</Link>
          <Link href="/contact" className="button-secondary">Request Info</Link>
        </div>
      </section>
    </div>
  );
}
