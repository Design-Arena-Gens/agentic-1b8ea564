import { PageHeader } from '@/components/PageHeader';

export default function DepartmentsPage() {
  return (
    <div>
      <PageHeader title="Departments" subtitle="Academic departments across faculties and schools." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Computer Science', 'Nursing', 'Accounting', 'Mathematics', 'Biology', 'Education', 'Public Health', 'Theology'
          ].map((d) => (
            <div key={d} className="card p-6">
              <h3 className="font-semibold text-lg">{d}</h3>
              <p className="mt-2 text-slate-600">Programs, faculty, and research in {d}.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
