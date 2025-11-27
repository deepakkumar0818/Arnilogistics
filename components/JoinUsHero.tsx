import { Users, Network, TrendingUp } from 'lucide-react'

export default function JoinUsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24 pt-44">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column – content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-medium mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-400 mr-2" />
              Careers at ARVI Logistics
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build your
              <span className="block gradient-text">career in logistics</span>
              with a winning team.
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
              Join a high-performing logistics team where your ambition, relationships,
              and work ethic directly shape your success and earning potential.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#career-opportunities"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent-500 text-primary-900 font-semibold shadow-lg hover:bg-accent-600 transition-colors"
              >
                View open roles
              </a>
              <a
                href="mailto:hr@arvilogisticsinc.com?subject=Career%20at%20ARVI%20Logistics"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Talk to our talent team
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-200 max-w-md">
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-md border border-white/10">
                <p className="text-2xl font-bold text-accent-400 mb-1">20+ years</p>
                <p>trusted reputation in freight and logistics</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-md border border-white/10">
                <p className="text-2xl font-bold text-accent-400 mb-1">Unlimited</p>
                <p>commission and growth potential</p>
              </div>
            </div>
          </div>

          {/* Right column – animated cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="sm:col-span-2">
              <div className="glass shadow-soft rounded-2xl p-6 flex items-start gap-4 animate-float">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20 border border-accent-400/40">
                  <Users className="h-6 w-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">High-impact sales roles</h3>
                  <p className="text-gray-200 text-sm">
                    Build and own your customer portfolio with the backing of a proven operations team.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass shadow-soft rounded-2xl p-6 flex flex-col gap-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20 border border-accent-400/40">
                <Network className="h-6 w-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Real partnerships</h3>
                <p className="text-gray-200 text-sm">
                  Work directly with shippers and carriers who value long-term, honest relationships.
                </p>
              </div>
              <div className="mt-auto text-xs text-gray-300">
                Built on integrity, transparency, and mutual success.
              </div>
            </div>

            <div className="glass shadow-soft rounded-2xl p-6 flex flex-col gap-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20 border border-accent-400/40">
                <TrendingUp className="h-6 w-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Growth you can measure</h3>
                <p className="text-gray-200 text-sm">
                  Clear goals, transparent commissions, and leadership that invests in your development.
                </p>
              </div>
              <div className="mt-auto text-xs text-gray-300">
                Your effort drives your income and career path.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
