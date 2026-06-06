export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Find Where Your{" "}
          <span className="text-[#58a6ff]">Billable Time</span>{" "}
          Leaks
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Import your time tracking data and instantly see which projects bleed unbilled hours through scope creep. Stop leaving money on the table.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📥</div>
            <h3 className="font-semibold text-white mb-1">Import Time Data</h3>
            <p className="text-sm text-[#8b949e]">Connect Toggl, Harvest, or upload CSV exports from any tracker.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">Detect Patterns</h3>
            <p className="text-sm text-[#8b949e]">Automated analysis flags scope creep, unbilled overruns, and recurring leaks.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚨</div>
            <h3 className="font-semibold text-white mb-1">Get Alerts</h3>
            <p className="text-sm text-[#8b949e]">Receive alerts before a project goes over budget so you can act fast.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited project imports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Billable vs non-billable dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Scope creep alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CSV &amp; Toggl / Harvest import</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Background pattern analysis</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which time trackers are supported?</h3>
            <p className="text-sm text-[#8b949e]">You can import data from Toggl Track, Harvest, or any tool that exports CSV. More integrations are added regularly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does scope creep detection work?</h3>
            <p className="text-sm text-[#8b949e]">The analysis engine compares estimated vs logged hours per project phase, flags tasks logged outside the original scope, and surfaces recurring patterns across projects.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Time Leak Detector. All rights reserved.
      </footer>
    </main>
  );
}
