import { PageHeader } from '@/components/PageHeader';

export default function StaffPage() {
  return (
    <div>
      <PageHeader title="Staff" subtitle="Faculty and staff resources, opportunities, and support." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[ 'Directory', 'HR & Careers', 'Research Support' ].map((t) => (
            <div key={t} className="card p-6">
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="mt-2 text-slate-600">Tools and information for staff.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
