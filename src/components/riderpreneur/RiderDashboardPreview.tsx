'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  CalendarCheck,
  Wallet,
  Award,
  Gift,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

type TabType = 'overview' | 'campaigns' | 'earnings' | 'career' | 'rewards';

export default function RiderDashboardPreview() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <section className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0A9BE0]/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
            The Digital Operating System
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            YOUR PROFESSIONAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              DASHBOARD
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Manage your campaign dispatches, live earnings, GPS corridor verification, affiliate analytics, and career milestones through one intuitive mobile console.
          </p>
        </div>

        {/* Dashboard Mockup Console */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#030d17]/95 border-2 border-[#0A9BE0]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Top Bar / Profile Header */}
          <div className="p-6 bg-[#001426] border-b border-[#0A9BE0]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#B4F000] text-black font-black flex items-center justify-center text-base shadow-[0_0_15px_rgba(180,240,0,0.4)]">
                AS
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-white">Arjun Sharma</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#B4F000]/20 text-[#B4F000] text-[10px] font-black uppercase border border-[#B4F000]/30">
                    Level 4 Gold
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono flex items-center gap-2 mt-0.5">
                  <span>ID: ADRYD-R10025</span>
                  <span>•</span>
                  <span className="text-amber-400">★ 4.92 (184 Reviews)</span>
                  <span>•</span>
                  <span>Hitec City Corridor</span>
                </div>
              </div>
            </div>

            {/* Quick Status Tag */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/20 border border-[#0A9BE0]/40 text-xs font-bold text-[#0A9BE0]">
              <span className="w-2 h-2 rounded-full bg-[#B4F000] animate-pulse" />
              <span>Active Dispatch Mode</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar p-2 bg-black/40 border-b border-white/10">
            {(
              [
                { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                { id: 'campaigns', label: 'Campaigns', icon: CalendarCheck },
                { id: 'earnings', label: 'Earnings & Payouts', icon: Wallet },
                { id: 'career', label: 'Career Growth', icon: Award },
                { id: 'rewards', label: 'Rewards & Gear', icon: Gift },
              ] as const
            ).map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0A9BE0] text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Monthly Gross</div>
                    <div className="text-2xl font-black text-[#B4F000] mt-1">₹21,450</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">↑ +18% vs last month</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Corridor Hours</div>
                    <div className="text-2xl font-black text-white mt-1">54.5 hrs</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Across 14 shifts</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Affiliate Sales</div>
                    <div className="text-2xl font-black text-[#0A9BE0] mt-1">32 Orders</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">₹3,200 commission</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Reward Points</div>
                    <div className="text-2xl font-black text-amber-400 mt-1">4,820 pts</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Gear store ready</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#001426] border border-[#0A9BE0]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0A9BE0]/20 flex items-center justify-center text-[#0A9BE0]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Next Assigned Shift: Hyd-Beverages Sunset Convoy</div>
                      <div className="text-[11px] text-slate-400">Today • 5:00 PM – 8:30 PM • Durgam Cheruvu & Mindspace Hub</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#B4F000]/20 text-[#B4F000] text-xs font-bold border border-[#B4F000]/30">
                    Confirmed • ₹1,200 Stipend
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'campaigns' && (
              <div className="space-y-3">
                {[
                  { name: 'Hydra Energy Drink Launch Blitz', status: 'In Progress', type: 'Sampling + Convoy', pay: '₹3,400', date: 'Active Today' },
                  { name: 'Organic Cold Brew Tech Corridor Dwell', status: 'Completed', type: 'Pop-Up Showcase', pay: '₹2,200', date: 'Yesterday' },
                  { name: 'Fintech App QR Pre-Order Blitz', status: 'Completed', type: 'Direct Pre-Orders', pay: '₹1,850', date: '2 days ago' },
                  { name: 'Weekend Grand Mall Flash Escort', status: 'Upcoming', type: 'Synchronized Convoy', pay: '₹4,000', date: 'Sat 4:00 PM' },
                ].map((camp, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{camp.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{camp.type} • {camp.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-[#B4F000]">{camp.pay}</div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        camp.status === 'In Progress' ? 'bg-[#0A9BE0]/20 text-[#0A9BE0]' :
                        camp.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' :
                        'bg-amber-500/20 text-amber-400'
                      }`}>
                        {camp.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#001426] to-[#041a2e] border border-[#0A9BE0]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Available Wallet Balance</div>
                    <div className="text-3xl font-black text-white mt-1">₹4,850</div>
                    <div className="text-xs text-[#B4F000] mt-1">Ready for Instant UPI settlement</div>
                  </div>
                  <button className="px-5 py-2.5 rounded-full bg-[#B4F000] text-black font-extrabold text-xs shadow-md">
                    Withdraw to Bank / UPI
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Recent Payout Settlements</div>
                  {[
                    { ref: 'UPI-84920491', amount: '₹6,400', date: '22 Nov 2026', status: 'Settled to HDFC' },
                    { ref: 'UPI-84910238', amount: '₹5,800', date: '15 Nov 2026', status: 'Settled to HDFC' },
                    { ref: 'UPI-84893012', amount: '₹4,400', date: '08 Nov 2026', status: 'Settled to HDFC' },
                  ].map((p, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-300">{p.ref}</span>
                      <span className="text-slate-400">{p.date}</span>
                      <span className="font-bold text-white">{p.amount}</span>
                      <span className="text-emerald-400 font-bold">{p.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'career' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#001426] border border-[#0A9BE0]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">Progress toward Level 5 Platinum Marshall</span>
                    <span className="text-xs font-mono font-bold text-[#B4F000]">82% Completed</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0A9BE0] to-[#B4F000] w-[82%]" />
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Only 18 more corridor hours and 2 flash convos needed to unlock Lead Captaincy (+25% pay).
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-300">
                  Redeem your accumulated performance points for official gear, smart accessories, and gift vouchers:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-2">
                    <div className="text-sm font-bold text-white">Smart Bluetooth Helmet</div>
                    <div className="text-xs text-amber-400 font-bold font-mono">3,500 Pts</div>
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      Eligible to Claim
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-2">
                    <div className="text-sm font-bold text-white">Smartphone Gimbal Stabilizer</div>
                    <div className="text-xs text-amber-400 font-bold font-mono">5,000 Pts</div>
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-slate-500/20 text-slate-400">
                      180 Pts away
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-2">
                    <div className="text-sm font-bold text-white">Goa Vacation Experience</div>
                    <div className="text-xs text-amber-400 font-bold font-mono">15,000 Pts</div>
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-400">
                      Level 7 Exclusive
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prototype note */}
        <div className="text-center mt-6">
          <span className="text-xs text-slate-500 font-mono">
            Interactive preview showing proposed ADRYD Rider App interface (v2.4).
          </span>
        </div>
      </div>
    </section>
  );
}
