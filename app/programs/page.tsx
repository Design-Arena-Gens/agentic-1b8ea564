import { PageHeader } from '@/components/PageHeader';

export default function ProgramsPage() {
  const programs = [
    { name: 'BSc Computer Science', level: 'Undergraduate' },
    { name: 'BBA Accounting', level: 'Undergraduate' },
    { name: 'BSc Nursing', level: 'Undergraduate' },
    { name: 'MBA Management', level: 'Postgraduate' },
    { name: 'MSc Public Health', level: 'Postgraduate' },
    { name: 'MA Education', level: 'Postgraduate' },
  ];

  return (
    <div>
      <PageHeader title="Programs" subtitle="Explore undergraduate and postgraduate programs offered across our faculties." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div key={p.name} className="card p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="mt-1 text-slate-600">{p.level}</p>
              </div>
              <button className="button-secondary">View details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
