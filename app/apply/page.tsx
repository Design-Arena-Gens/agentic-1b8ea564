import { PageHeader } from '@/components/PageHeader';

export default function ApplyPage() {
  return (
    <div>
      <PageHeader title="Apply to VVU" subtitle="Start your application in minutes. Join a community that helps you thrive." />
      <section className="container-section py-12">
        <div className="card p-6">
          <ol className="list-decimal pl-6 space-y-3 text-slate-700">
            <li>Create an account on the admissions portal</li>
            <li>Complete the application form</li>
            <li>Upload supporting documents</li>
            <li>Pay application fee</li>
            <li>Submit and track your application</li>
          </ol>
          <button className="button-primary mt-6">Go to Admissions Portal</button>
        </div>
      </section>
    </div>
  );
}
