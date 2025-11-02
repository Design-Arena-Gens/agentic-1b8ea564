import { PageHeader } from '@/components/PageHeader';

export default function FacultiesPage() {
  return (
    <div>
      <PageHeader title="Faculties" subtitle="Faculty and schools that drive our academic excellence." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Faculty of Science',
            'School of Business',
            'School of Education',
            'Faculty of Arts',
            'Faculty of Health Sciences',
            'School of Theology'
          ].map((name) => (
            <div key={name} className="card p-6">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="mt-2 text-slate-600">Overview and departments within {name}.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
