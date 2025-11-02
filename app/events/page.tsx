import { PageHeader } from '@/components/PageHeader';

export default function EventsPage() {
  return (
    <div>
      <PageHeader title="Events" subtitle="Conferences, seminars, open days, and community gatherings." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-lg">Event Title {i}</h3>
              <p className="mt-2 text-slate-600">Date ? Venue ? Short description</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
