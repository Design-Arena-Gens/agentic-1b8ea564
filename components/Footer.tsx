import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-semibold">{site.name}</h3>
            <p className="mt-3 text-slate-600 max-w-xs">{site.tagline}</p>
            <div className="mt-4 flex gap-3">
              {site.social.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 ring-slate-200 hover:ring-slate-300">
                  <span className="sr-only">{s.name}</span>
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              {site.primaryNav.slice(0, 6).map((item) => (
                <li key={item.name}><Link href={item.href} className="hover:text-slate-900">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li><Link href="/students" className="hover:text-slate-900">Students</Link></li>
              <li><Link href="/staff" className="hover:text-slate-900">Staff</Link></li>
              <li><Link href="/programs" className="hover:text-slate-900">Programs</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>Oyibi, Accra ? Ghana</li>
              <li>+233 000 000 000</li>
              <li>info@vvu.edu.gh</li>
            </ul>
            <Link href="/apply" className="button-primary mt-4 inline-flex">Apply Now</Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 pt-6 text-sm text-slate-600">
          <p>? {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex gap-4">
            <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
