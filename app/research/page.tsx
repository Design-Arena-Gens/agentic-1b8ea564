import { PageHeader } from '@/components/PageHeader';

export default function ResearchPage() {
  return (
    <div>
      <PageHeader title="Research" subtitle="Solving real-world challenges through innovative research and collaboration." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-lg">Research Highlight {i}</h3>
              <p className="mt-2 text-slate-600">Interdisciplinary work advancing knowledge and societal impact.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
