import { PageHeader } from '@/components/PageHeader';

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="About Valley View University" subtitle="Faith, excellence, and service. Learn about our history, mission, leadership, and campus life." />
      <section className="container-section py-12">
        <div className="prose prose-slate max-w-none">
          <p>
            Valley View University is a leading private university in Ghana, known for academic excellence
            and a transformative campus experience. Our holistic education nurtures intellectual growth,
            character, and leadership prepared to serve society.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[{h:'Our Mission',p:'Provide quality, values-based education that develops competent, ethical leaders.'}, {h:'Our Vision',p:'A premier institution recognized for excellence and impactful research.'}, {h:'Our Values',p:'Integrity, service, innovation, spiritual growth, and community.'}].map((b) => (
              <div key={b.h} className="card p-6">
                <h3 className="font-semibold text-lg">{b.h}</h3>
                <p className="mt-2 text-slate-600">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
