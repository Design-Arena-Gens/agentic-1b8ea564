import { PageHeader } from '@/components/PageHeader';

export default function NewsPage() {
  return (
    <div>
      <PageHeader title="News" subtitle="Latest updates from our campus community." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <article key={i} className="card p-6">
              <span className="badge mb-3">Announcement</span>
              <h3 className="font-semibold text-lg">Campus Update {i}</h3>
              <p className="mt-2 text-slate-600">Stay informed about events, achievements, and notices.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
