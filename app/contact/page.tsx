import { PageHeader } from '@/components/PageHeader';

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We are here to help. Reach out to us for inquiries and support." />
      <section className="container-section py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="rounded-xl ring-1 ring-slate-200 px-4 py-3" placeholder="First name" />
              <input className="rounded-xl ring-1 ring-slate-200 px-4 py-3" placeholder="Last name" />
              <input className="sm:col-span-2 rounded-xl ring-1 ring-slate-200 px-4 py-3" placeholder="Email" />
              <textarea className="sm:col-span-2 rounded-xl ring-1 ring-slate-200 px-4 py-3" placeholder="Your message" rows={5} />
            </div>
            <button className="button-primary mt-4">Send message</button>
          </form>

          <div className="card p-6">
            <h3 className="font-semibold text-lg">Campus</h3>
            <p className="mt-2 text-slate-600">Oyibi, Accra ? Ghana</p>
            <p className="mt-2 text-slate-600">+233 000 000 000</p>
            <p className="mt-2 text-slate-600">info@vvu.edu.gh</p>
            <div className="mt-6 h-64 rounded-2xl bg-[url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </section>
    </div>
  );
}
