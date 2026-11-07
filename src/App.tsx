import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  ArrowRight, 
  ArrowLeft,
  CreditCard, 
  Calculator, 
  Bell, 
  Newspaper,
  HandCoins,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Phone,
  Twitter,
  TrendingUp,
  DollarSign,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
  Download,
  Mail,
  User,
  Search,
  Building2,
  Home,
  Key,
  Briefcase,
  Calendar,
  Bed,
  Bath,
  Maximize,
  MessageSquare,
  Layout,
  Layers,
  CheckCircle2,
  Image as ImageIcon,
  ExternalLink,
  Clock,
  Wallet,
  Flame,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from 'recharts';

import { DEVELOPERS } from './data/developers';
import { PROJECTS } from './data/projects';
import { Developer, Project, PropertyType } from './types';
import BlogView, { BLOG_POSTS, BlogPost } from './components/BlogView';
import { SocialShare } from './components/SocialShare';
import { OffPlanView } from './components/OffPlanView';
import { OFFPLAN_PROJECTS } from './data/offplanProjects';
import { NewLaunchesView } from './components/NewLaunchesView';
import { NEW_LAUNCHES } from './data/newLaunches';
import { SmartImage } from './components/SmartImage';
import { PropertyCompareModal, PropertyItem } from './components/PropertyCompareModal';
import { PropertyCompareBar } from './components/PropertyCompareBar';
import { LiveRatesWindow } from './components/LiveRatesWindow';
import { GoogleMapsDubai } from './components/GoogleMapsDubai';

const NavLink = ({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) => (
  <a 
    href={href} 
    className={`text-[12px] tracking-[0.25em] uppercase font-black transition-all duration-300 cursor-pointer whitespace-nowrap relative group ${active ? 'text-dark' : 'text-dark/50 hover:text-dark'}`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-porsche-red transition-all duration-300 group-hover:w-full ${active ? 'w-full' : ''}`}></span>
  </a>
);

const FeatureCard = ({ icon: Icon, title, description, badge, onClick }: { icon: any; title: string; description: string; badge: string; onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={`group bg-white p-6 sm:p-8 md:p-10 hover:shadow-2xl hover:shadow-dark/5 transition-all duration-700 border border-gray-100 relative overflow-hidden ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
  >
    <div className="absolute top-0 left-0 w-1 h-0 bg-porsche-red transition-all duration-500 group-hover:h-full"></div>
    <div className="flex items-start justify-between mb-6 sm:mb-10 md:mb-12">
      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-dark text-white rounded-none transition-all duration-500 group-hover:bg-porsche-red group-hover:rotate-[360deg]">
        <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
      </div>
      <span className="bg-gray-100 text-dark/60 text-[9px] sm:text-[8px] md:text-[7px] font-black px-2.5 sm:px-3 py-1 tracking-[0.25em] sm:tracking-[0.3em] uppercase whitespace-nowrap group-hover:bg-porsche-red group-hover:text-white transition-colors duration-500">
        {badge}
      </span>
    </div>
    <h3 className="text-dark font-display font-black text-lg sm:text-xl mb-2 sm:mb-4 tracking-tight uppercase">
      {title}
    </h3>
    <p className="text-dark/50 text-xs sm:text-sm leading-relaxed font-light">
      {description}
    </p>
    <div className="mt-6 sm:mt-10 flex items-center gap-3 text-porsche-red text-[10px] sm:text-[11px] font-black tracking-[0.3em] uppercase opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-0 sm:translate-y-2 group-hover:translate-y-0">
      {onClick ? 'Open Calculator' : 'Explore Details'} <ArrowRight className="w-3 h-3" />
    </div>
  </div>
);

const PaymentCalculator = ({ onBack }: { onBack: () => void }) => {
  const [price, setPrice] = useState<number | string>(1000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number | string>(10);
  const [selectedPlan, setSelectedPlan] = useState('60/40');

  const plans: Record<string, { during: number; handover: number; post?: number; postMonths?: number }> = {
    '60/40': { during: 60, handover: 40 },
    '70/30': { during: 70, handover: 30 },
    '50/50': { during: 50, handover: 50 },
    '80/20': { during: 80, handover: 20 },
    '1% Monthly (80 Months)': { during: 20, handover: 0, post: 80, postMonths: 80 },
    '40/60 (Post Handover)': { during: 40, handover: 0, post: 60, postMonths: 36 },
  };

  const currentPlan = plans[selectedPlan] || plans['60/40'];
  
  const numPrice = Number(price) || 0;
  const numDPPercent = Number(downPaymentPercent) || 0;

  const dpAmount = (numPrice * numDPPercent) / 100;
  const duringAmount = (numPrice * (currentPlan.during - numDPPercent)) / 100;
  const handoverAmount = (numPrice * currentPlan.handover) / 100;
  const postAmount = currentPlan.post ? (numPrice * currentPlan.post) / 100 : 0;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="min-h-screen bg-white font-sans text-dark">
      {/* Header */}
      <header className="px-6 md:px-8 lg:px-24 py-4 md:py-8 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-xl z-[100]">
        <div className="flex items-baseline gap-1">
          <span className="text-dark font-display font-black text-xl md:text-2xl tracking-tighter">ROCK</span>
          <span className="text-dark/40 font-display font-light text-xl md:text-2xl tracking-tighter">DEALS</span>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 md:gap-3 text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-black hover:text-porsche-red transition-colors min-h-[44px]"
        >
          <X className="w-4 h-4" /> <span className="hidden sm:inline">Close Calculator</span><span className="sm:hidden">Close</span>
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-8 py-8 md:py-16">
        <div className="mb-10 md:mb-12">
          <p className="text-porsche-red text-[11px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-4 md:mb-6">Financial Intelligence</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-dark tracking-tighter leading-none uppercase">
            Payment Plan<br />
            <span className="text-porsche-red">Calculator.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          {/* Inputs */}
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-4">
              <label className="text-[12px] tracking-[0.3em] uppercase font-black text-dark/40">Property Price (AED)</label>
              <div className="relative group">
                <input 
                  type="number" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 md:py-6 px-0 text-2xl md:text-3xl font-technical font-bold focus:border-porsche-red outline-none transition-all"
                />
                <div className="absolute right-0 bottom-4 md:bottom-6 text-dark/20 font-technical font-bold">AED</div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[12px] tracking-[0.3em] uppercase font-black text-dark/40">Down Payment (%)</label>
              <div className="grid grid-cols-2 sm:flex gap-3 md:gap-4">
                {[10, 20, 25].map((pct) => (
                  <button 
                    key={pct}
                    onClick={() => setDownPaymentPercent(pct)}
                    className={`flex-1 py-3 md:py-4 border-2 transition-all font-technical font-bold text-sm md:text-base ${downPaymentPercent === pct ? 'border-porsche-red bg-porsche-red text-white' : 'border-gray-100 hover:border-dark/10'}`}
                  >
                    {pct}%
                  </button>
                ))}
                <div className="flex-1 relative col-span-2 sm:col-span-1">
                  <input 
                    type="number" 
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full h-full min-h-[44px] border-2 border-gray-100 bg-gray-50 px-4 text-center font-technical font-bold focus:border-porsche-red outline-none"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-black opacity-20">%</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[12px] tracking-[0.3em] uppercase font-black text-dark/40">Select Payment Plan</label>
              <select 
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full bg-gray-50 border-2 border-gray-100 py-4 md:py-6 px-6 md:px-8 text-base md:text-lg font-technical font-bold focus:border-porsche-red outline-none appearance-none cursor-pointer"
              >
                {Object.keys(plans).map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="bg-dark p-6 md:p-12 rounded-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-porsche-red/10 blur-3xl rounded-full"></div>
            
            <h2 className="text-white font-display font-black text-xl md:text-2xl mb-8 md:mb-12 tracking-tight uppercase">Breakdown</h2>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
                <div>
                  <p className="text-white/40 text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black mb-1 md:mb-2">Down Payment</p>
                  <p className="text-white font-technical font-bold text-base md:text-xl">{downPaymentPercent}%</p>
                </div>
                <p className="text-porsche-red font-technical font-bold text-lg md:text-2xl">{formatCurrency(dpAmount)}</p>
              </div>

              <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
                <div>
                  <p className="text-white/40 text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black mb-1 md:mb-2">During Construction</p>
                  <p className="text-white font-technical font-bold text-base md:text-xl">{currentPlan.during - numDPPercent}%</p>
                </div>
                <p className="text-white font-technical font-bold text-lg md:text-2xl">{formatCurrency(duringAmount)}</p>
              </div>

              {currentPlan.handover > 0 && (
                <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
                  <div>
                    <p className="text-white/40 text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black mb-1 md:mb-2">On Handover</p>
                    <p className="text-white font-technical font-bold text-base md:text-xl">{currentPlan.handover}%</p>
                  </div>
                  <p className="text-white font-technical font-bold text-lg md:text-2xl">{formatCurrency(handoverAmount)}</p>
                </div>
              )}

              {currentPlan.post !== undefined && currentPlan.post > 0 && (
                <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
                  <div>
                    <p className="text-white/40 text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black mb-1 md:mb-2">Post Handover</p>
                    <p className="text-white font-technical font-bold text-base md:text-xl">{currentPlan.post}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-porsche-red font-technical font-bold text-lg md:text-2xl">{formatCurrency(postAmount)}</p>
                    <p className="text-white/20 text-[8px] tracking-widest uppercase mt-1">
                      Est. {formatCurrency(postAmount / (currentPlan.postMonths || 36))} / mo ({currentPlan.postMonths ? `${currentPlan.postMonths} mos` : '3 yrs'})
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-8 md:pt-12 flex justify-between items-center">
                <p className="text-white/60 text-[10px] md:text-[12px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-black">Total Commitment</p>
                <p className="text-white font-display font-black text-2xl md:text-4xl tracking-tighter">{formatCurrency(numPrice)}</p>
              </div>
            </div>

            <button className="w-full mt-12 md:mt-16 bg-porsche-red text-white py-5 md:py-6 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs hover:bg-white hover:text-dark transition-all duration-500 min-h-[48px]">
              Download PDF Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

const ROICalculator = ({ onBack }: { onBack: () => void }) => {
  const [price, setPrice] = useState<number | string>(2000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number | string>(25);
  const [monthlyRent, setMonthlyRent] = useState<number | string>(15000);
  const [serviceCharges, setServiceCharges] = useState<number | string>(15000);
  const [interestRate, setInterestRate] = useState<number | string>(4.5);
  const [loanTenure, setLoanTenure] = useState<number | string>(25);
  const [appreciation, setAppreciation] = useState<number | string>(5);
  const [holdingPeriod, setHoldingPeriod] = useState<number | string>(5);
  const [maintenance, setMaintenance] = useState<number | string>(1);
  const [vacancy, setVacancy] = useState<number | string>(5);

  const [showResults, setShowResults] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportForm, setExportForm] = useState({ name: '', email: '', mobile: '' });
  const [isExporting, setIsExporting] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  const handleExport = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsExporting(true);

    try {
      // 1. Generate PDF
      const doc = new jsPDF('p', 'mm', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Add Header
      doc.setFillColor(177, 43, 40); // Porsche Red
      doc.rect(0, 0, pageWidth, 40, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('ROCK DEALS', 20, 25);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('INVESTMENT ANALYTICS REPORT', 20, 32);

      // Add User Info
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      doc.text(`Prepared for: ${exportForm.name}`, 20, 55);
      doc.text(`Email: ${exportForm.email}`, 20, 62);
      doc.text(`Mobile: ${exportForm.mobile}`, 20, 69);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 60, 55);

      // Add Property Details
      doc.setDrawColor(230, 230, 230);
      doc.line(20, 75, pageWidth - 20, 75);
      doc.setFont('helvetica', 'bold');
      doc.text('PROPERTY PARAMETERS', 20, 85);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Property Price: ${formatCurrency(numPrice)}`, 20, 95);
      doc.text(`Down Payment: ${numDPPercent}%`, 20, 102);
      doc.text(`Monthly Rent: ${formatCurrency(numMonthlyRent)}`, 20, 109);
      doc.text(`Interest Rate: ${numInterestRate}%`, 20, 116);
      doc.text(`Holding Period: ${numHoldingPeriod} Years`, 20, 123);

      // Add Results
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('INVESTMENT PERFORMANCE', 20, 140);
      doc.line(20, 142, pageWidth - 20, 142);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      const results = [
        ['Gross Rental Yield', `${grossYield.toFixed(2)}%`],
        ['Net Rental Yield', `${netYield.toFixed(2)}%`],
        ['Monthly Mortgage', formatCurrency(monthlyMortgage)],
        ['Annual Cash Flow', formatCurrency(annualCashFlow)],
        ['Future Value', formatCurrency(futureValue)],
        ['Capital Gain', formatCurrency(capitalGain)],
        ['Total ROI', `${totalROI.toFixed(1)}%`]
      ];

      let yPos = 152;
      results.forEach(([label, value]) => {
        doc.text(label, 20, yPos);
        doc.setFont('helvetica', 'bold');
        doc.text(value, pageWidth - 60, yPos);
        doc.setFont('helvetica', 'normal');
        yPos += 8;
      });

      // Footer
      doc.setFillColor(245, 245, 245);
      doc.rect(0, 280, pageWidth, 17, 'F');
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text('This report is generated by Rock Deals ROI Calculator. All projections are estimates.', pageWidth / 2, 290, { align: 'center' });

      doc.save(`RockDeals_ROI_Report_${exportForm.name.replace(/\s+/g, '_')}.pdf`);

      // 2. Trigger Official Email
      const subject = `ROI Report Exported: ${exportForm.name}`;
      const body = `
User Details:
-------------
Name: ${exportForm.name}
Email: ${exportForm.email}
Mobile: ${exportForm.mobile}

Investment Details:
-------------------
Property Price: ${formatCurrency(numPrice)}
Down Payment: ${numDPPercent}%
Monthly Rent: ${formatCurrency(numMonthlyRent)}
Interest Rate: ${numInterestRate}%
Holding Period: ${numHoldingPeriod} Years

Performance:
------------
Gross Yield: ${grossYield.toFixed(2)}%
Net Yield: ${netYield.toFixed(2)}%
Monthly Mortgage: ${formatCurrency(monthlyMortgage)}
Annual Cash Flow: ${formatCurrency(annualCashFlow)}
Future Value: ${formatCurrency(futureValue)}
Capital Gain: ${formatCurrency(capitalGain)}
Total ROI: ${totalROI.toFixed(1)}%
      `;
      
      const mailtoLink = `mailto:info@rock-deals.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // 3. Trigger WhatsApp
      const waMessage = `Hello Rock Deals, I just generated an ROI report.\n\nName: ${exportForm.name}\nEmail: ${exportForm.email}\nProperty Price: ${formatCurrency(numPrice)}\nTotal ROI: ${totalROI.toFixed(1)}%`;
      const waLink = `https://wa.me/971529178630?text=${encodeURIComponent(waMessage)}`;

      // Execute triggers
      window.open(waLink, '_blank');
      window.location.href = mailtoLink;

      setIsExportModalOpen(false);
      setExportForm({ name: '', email: '', mobile: '' });
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  // Calculations
  const numPrice = Number(price) || 0;
  const numDPPercent = Number(downPaymentPercent) || 0;
  const numMonthlyRent = Number(monthlyRent) || 0;
  const numServiceCharges = Number(serviceCharges) || 0;
  const numInterestRate = Number(interestRate) || 0;
  const numLoanTenure = Number(loanTenure) || 0;
  const numAppreciation = Number(appreciation) || 0;
  const numHoldingPeriod = Number(holdingPeriod) || 0;
  const numMaintenance = Number(maintenance) || 0;
  const numVacancy = Number(vacancy) || 0;

  const annualRent = numMonthlyRent * 12;
  const grossYield = numPrice > 0 ? (annualRent / numPrice) * 100 : 0;
  const effectiveRent = annualRent * (1 - numVacancy / 100);
  const maintenanceCost = (numPrice * numMaintenance) / 100;
  const netRentalIncome = effectiveRent - numServiceCharges - maintenanceCost;
  const netYield = numPrice > 0 ? (netRentalIncome / numPrice) * 100 : 0;
  
  const loanAmount = numPrice * (1 - numDPPercent / 100);
  const monthlyInterestRate = (numInterestRate / 100) / 12;
  const numberOfPayments = numLoanTenure * 12;
  const monthlyMortgage = loanAmount > 0 && monthlyInterestRate > 0
    ? (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    : 0;
  
  const annualMortgage = monthlyMortgage * 12;
  const annualCashFlow = netRentalIncome - annualMortgage;
  
  const futureValue = numPrice * Math.pow(1 + numAppreciation / 100, numHoldingPeriod);
  const capitalGain = futureValue - numPrice;
  const totalRentalIncome = netRentalIncome * numHoldingPeriod;
  const totalProfit = totalRentalIncome + capitalGain;
  const initialInvestment = (numPrice * numDPPercent / 100) + (numPrice * 0.04); // Including 4% DLD fee
  const totalROI = initialInvestment > 0 ? (totalProfit / initialInvestment) * 100 : 0;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(val);

  const chartData = [
    { name: 'Year 0', value: numPrice },
    ...Array.from({ length: Math.floor(numHoldingPeriod) }, (_, i) => ({
      name: `Year ${i + 1}`,
      value: numPrice * Math.pow(1 + numAppreciation / 100, i + 1)
    }))
  ];

  const pieData = [
    { name: 'Rental Income', value: totalRentalIncome },
    { name: 'Capital Gain', value: capitalGain }
  ];

  const COLORS = ['#B12B28', '#FFFFFF'];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#B12B28] selection:text-white">
      {/* Header */}
      <header className="px-6 md:px-8 lg:px-24 py-4 md:py-8 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-xl z-[100]">
        <div className="flex items-baseline gap-1">
          <span className="text-white font-display font-black text-xl md:text-2xl tracking-tighter">ROCK</span>
          <span className="text-white/40 font-display font-light text-xl md:text-2xl tracking-tighter">DEALS</span>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 md:gap-3 text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-black hover:text-[#B12B28] transition-colors min-h-[44px]"
        >
          <X className="w-4 h-4" /> <span className="hidden sm:inline">Exit Calculator</span><span className="sm:hidden">Exit</span>
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-16">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-[#B12B28] text-[11px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-4 md:mb-6">Investment Analytics</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none uppercase mb-6 md:mb-8">
            Property ROI<br />
            <span className="text-[#B12B28]">Calculator.</span>
          </h1>
          <p className="text-[#BFBFBF] text-lg md:text-xl font-light leading-relaxed">
            Calculate rental yield, ROI and future value in seconds with precision-engineered financial modeling.
          </p>
          <button 
            onClick={() => {
              setShowResults(true);
              window.scrollTo({ top: 800, behavior: 'smooth' });
            }}
            className="mt-8 md:mt-12 bg-[#B12B28] text-white px-8 md:px-12 py-5 md:py-6 text-[11px] md:text-[12px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-black hover:bg-white hover:text-black transition-all duration-500 min-h-[48px]"
          >
            Calculate ROI
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Inputs Section */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="text-white/20 text-[12px] tracking-[0.4em] uppercase font-black border-b border-white/5 pb-4">Core Parameters</h3>
              
              <div className="space-y-6">
                <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Property Price (AED)</label>
                <div className="relative group">
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-3xl font-technical font-bold focus:border-[#B12B28] outline-none transition-all"
                  />
                  <div className="absolute right-0 bottom-4 text-white/20 font-technical font-bold">AED</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Down Payment</label>
                  <span className="text-[#B12B28] font-technical font-bold">{downPaymentPercent}%</span>
                </div>
                <input 
                  type="range" min="0" max="100" step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#B12B28] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                  <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Monthly Rent</label>
                  <input 
                    type="number" value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-technical font-bold focus:border-[#B12B28] outline-none"
                  />
                </div>
                <div className="space-y-6">
                  <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Service Charges (Annual)</label>
                  <input 
                    type="number" value={serviceCharges}
                    onChange={(e) => setServiceCharges(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-technical font-bold focus:border-[#B12B28] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-white/20 text-[12px] tracking-[0.4em] uppercase font-black border-b border-white/5 pb-4">Mortgage & Growth</h3>
              
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Interest Rate</label>
                    <span className="text-[#B12B28] font-technical font-bold">{interestRate}%</span>
                  </div>
                  <input 
                    type="range" min="1" max="10" step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#B12B28] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="space-y-6">
                  <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Loan Tenure (Yrs)</label>
                  <input 
                    type="number" value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-technical font-bold focus:border-[#B12B28] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Appreciation</label>
                    <span className="text-[#B12B28] font-technical font-bold">{appreciation}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="20" step="1"
                    value={appreciation}
                    onChange={(e) => setAppreciation(Number(e.target.value))}
                    className="w-full accent-[#B12B28] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="space-y-6">
                  <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Holding Period (Yrs)</label>
                  <input 
                    type="number" value={holdingPeriod}
                    onChange={(e) => setHoldingPeriod(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-technical font-bold focus:border-[#B12B28] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-white/20 text-[12px] tracking-[0.4em] uppercase font-black border-b border-white/5 pb-4">Optional Overheads</h3>
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                  <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Maintenance (%)</label>
                  <input 
                    type="range" min="0" max="5" step="0.5"
                    value={maintenance}
                    onChange={(e) => setMaintenance(Number(e.target.value))}
                    className="w-full accent-[#B12B28] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="space-y-6">
                  <label className="text-[12px] tracking-[0.3em] uppercase font-black text-[#BFBFBF]">Vacancy Rate (%)</label>
                  <input 
                    type="range" min="0" max="20" step="1"
                    value={vacancy}
                    onChange={(e) => setVacancy(Number(e.target.value))}
                    className="w-full accent-[#B12B28] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-7">
            <AnimatePresence>
              {showResults ? (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  {/* Smart Insights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {netYield > 7 && (
                      <div className="bg-[#B12B28]/10 border border-[#B12B28]/20 p-6 flex items-center gap-4">
                        <TrendingUp className="text-[#B12B28] w-6 h-6" />
                        <p className="text-[12px] tracking-widest uppercase font-black">Strong Rental Investment</p>
                      </div>
                    )}
                    {appreciation > 5 && (
                      <div className="bg-white/5 border border-white/10 p-6 flex items-center gap-4">
                        <TrendingUp className="text-white w-6 h-6" />
                        <p className="text-[12px] tracking-widest uppercase font-black">High Growth Potential</p>
                      </div>
                    )}
                    {annualCashFlow > 0 && (
                      <div className="bg-white/5 border border-white/10 p-6 flex items-center gap-4">
                        <DollarSign className="text-white w-6 h-6" />
                        <p className="text-[12px] tracking-widest uppercase font-black">Positive Cash Flow</p>
                      </div>
                    )}
                  </div>

                  {/* Glass Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Gross Rental Yield', value: `${grossYield.toFixed(2)}%`, color: 'text-white' },
                      { label: 'Net Rental Yield', value: `${netYield.toFixed(2)}%`, color: 'text-[#B12B28]' },
                      { label: 'Monthly Mortgage', value: formatCurrency(monthlyMortgage), color: 'text-white' },
                      { label: 'Annual Cash Flow', value: formatCurrency(annualCashFlow), color: 'text-white' },
                      { label: 'Future Value', value: formatCurrency(futureValue), color: 'text-white' },
                      { label: 'Capital Gain', value: formatCurrency(capitalGain), color: 'text-[#B12B28]' },
                      { label: 'Total Rental Income', value: formatCurrency(totalRentalIncome), color: 'text-white' },
                      { label: 'Total Profit', value: formatCurrency(totalProfit), color: 'text-white' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10 group hover:bg-white/10 transition-all duration-500">
                        <p className="text-white/40 text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-black mb-2 md:mb-4">{item.label}</p>
                        <p className={`text-2xl md:text-4xl font-display font-black tracking-tighter ${item.color}`}>{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* ROI Highlight */}
                  <div className="bg-[#B12B28] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                      <p className="text-white/60 text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-black mb-2">Total ROI over {holdingPeriod} years</p>
                      <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">{totalROI.toFixed(1)}%</h2>
                    </div>
                    <button 
                      onClick={() => setIsExportModalOpen(true)}
                      className="bg-white text-black px-10 py-5 text-[12px] tracking-[0.4em] uppercase font-black hover:bg-black hover:text-white transition-all duration-500 flex items-center gap-3"
                    >
                      <Download className="w-4 h-4" /> Export Report
                    </button>
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                    <div className="bg-white/5 p-8 border border-white/10">
                      <h4 className="text-[12px] tracking-[0.4em] uppercase font-black text-white/40 mb-10">Future Value Growth</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData}>
                            <defs>
                              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#B12B28" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#B12B28" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                            <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" fontSize={10} />
                            <YAxis hide />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px' }}
                              itemStyle={{ color: '#B12B28' }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#B12B28" fillOpacity={1} fill="url(#colorVal)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="bg-white/5 p-8 border border-white/10">
                      <h4 className="text-[12px] tracking-[0.4em] uppercase font-black text-white/40 mb-10">Profit Breakdown</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px' }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex justify-center gap-8 mt-4">
                        {pieData.map((entry, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2" style={{ backgroundColor: COLORS[i] }}></div>
                            <span className="text-[8px] tracking-widest uppercase text-white/40">{entry.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lead Capture */}
                  <div className="bg-white p-16 mt-24">
                    <div className="max-w-xl mx-auto text-center">
                      <h3 className="text-black font-display font-black text-4xl tracking-tighter uppercase mb-6">Want the best property deals in Dubai?</h3>
                      <p className="text-black/50 text-sm font-light mb-12">Our AI-driven platform identifies high-yield opportunities before they hit the open market.</p>
                      
                      <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault();
                        const target = e.target as any;
                        const name = target[0].value;
                        const phone = target[1].value;
                        const email = target[2].value;
                        const subject = `Investment Deal Request from ${name}`;
                        const body = `Investment Deal Request:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nROI Parameters:\nPrice: ${price}\nYield: ${netYield.toFixed(2)}%`;
                        window.location.href = `mailto:info@rock-deals.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                            <input required type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 text-black outline-none focus:border-[#B12B28]" />
                          </div>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                            <input required type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 text-black outline-none focus:border-[#B12B28]" />
                          </div>
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                          <input required type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 text-black outline-none focus:border-[#B12B28]" />
                        </div>
                        <button type="submit" className="w-full bg-[#B12B28] text-white py-6 text-[12px] tracking-[0.4em] uppercase font-black hover:bg-black transition-all duration-500">
                          Get Investment Deals
                        </button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-24 border border-white/5 bg-white/[0.02]">
                  <Calculator className="w-16 h-16 text-white/10 mb-8" />
                  <h3 className="text-white/20 font-display font-black text-2xl tracking-tight uppercase mb-4">Ready to analyze?</h3>
                  <p className="text-white/10 text-sm max-w-xs">Adjust the parameters on the left and click calculate to see your potential returns.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Export Modal */}
      <AnimatePresence>
        {isExportModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExportModalOpen(false)}
              className="absolute inset-0 bg-dark/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-porsche-red" />
              <button 
                onClick={() => setIsExportModalOpen(false)}
                className="absolute top-6 right-6 text-dark/20 hover:text-dark transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-10">
                <p className="text-porsche-red text-[10px] tracking-[0.5em] uppercase font-black mb-4">Secure Export</p>
                <h2 className="text-4xl font-display font-black text-dark tracking-tighter uppercase leading-none">
                  Get Your<br />
                  <span className="text-porsche-red">Full Report.</span>
                </h2>
                <p className="mt-4 text-dark/40 text-sm font-light leading-relaxed">
                  Enter your details to receive the professional investment analysis via PDF, Email, and WhatsApp.
                </p>
              </div>

              <form onSubmit={handleExport} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black tracking-widest uppercase text-dark/40 mb-3 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-porsche-red" />
                    <input 
                      required
                      type="text" 
                      value={exportForm.name}
                      onChange={(e) => setExportForm({...exportForm, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border-b-2 border-gray-100 py-5 pl-14 pr-6 text-dark font-technical font-bold focus:border-porsche-red outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-widest uppercase text-dark/40 mb-3 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-porsche-red" />
                    <input 
                      required
                      type="email" 
                      value={exportForm.email}
                      onChange={(e) => setExportForm({...exportForm, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border-b-2 border-gray-100 py-5 pl-14 pr-6 text-dark font-technical font-bold focus:border-porsche-red outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-widest uppercase text-dark/40 mb-3 ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-porsche-red" />
                    <input 
                      required
                      type="tel" 
                      value={exportForm.mobile}
                      onChange={(e) => setExportForm({...exportForm, mobile: e.target.value})}
                      placeholder="+971 50 000 0000"
                      className="w-full bg-gray-50 border-b-2 border-gray-100 py-5 pl-14 pr-6 text-dark font-technical font-bold focus:border-porsche-red outline-none transition-all"
                    />
                  </div>
                </div>

                <button 
                  disabled={isExporting}
                  type="submit"
                  className="w-full bg-porsche-red text-white py-6 text-[12px] font-black tracking-[0.4em] uppercase shadow-[0_20px_40px_rgba(213,0,28,0.2)] hover:bg-dark transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isExporting ? (
                    <>Generating...</>
                  ) : (
                    <>
                      <Download className="w-4 h-4" /> Generate Report
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const JourneyStep = ({ number, title, description, index }: { number: string; title: string; description: string; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="flex-shrink-0 w-[300px] lg:flex-1 flex flex-col items-center text-center px-6 relative group"
  >
    {/* Phase Label */}
    <div className="h-12 flex items-center justify-center mb-6">
      <span className="text-porsche-red text-[12px] tracking-[0.6em] font-black uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-500">Phase {number}</span>
    </div>
    
    {/* Node Container */}
    <div className="relative flex flex-col items-center mb-14 h-16 w-full">
      <div className="w-16 h-16 bg-white border border-dark/5 flex items-center justify-center z-10 shadow-2xl group-hover:border-porsche-red/30 transition-colors duration-500">
        <div className="w-4 h-4 bg-dark group-hover:bg-porsche-red transition-all duration-700 group-hover:rotate-45"></div>
      </div>
      
      {/* Technical Coordinates */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="text-[8px] font-mono text-dark/10 tracking-[0.5em] uppercase group-hover:text-porsche-red/20 transition-colors duration-500">NODE_REF_0{number}</span>
      </div>
    </div>

    {/* Content */}
    <h3 className="text-dark font-display font-black text-2xl mb-6 tracking-tighter uppercase leading-none min-h-[3rem] flex items-center justify-center group-hover:text-porsche-red transition-colors duration-500">{title}</h3>
    <p className="text-dark/40 text-sm leading-relaxed font-light max-w-[240px] group-hover:text-dark/60 transition-colors duration-500">
      {description}
    </p>
  </motion.div>
);

const ZONES = [
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    tagline: 'Iconic Waterfront Living',
    areas: ['The Fronds', 'The Crescent', 'Golden Mile', 'Atlantis', 'Palm Tower'],
    yield: '7.2%',
    pricePerSqft: '3,200 AED',
    description: 'The world\'s most famous man-made island, offering ultra-luxury beachfront villas, branded residences, and direct private beach access on the Arabian Gulf.',
    image: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '24%', y: '50%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'marina',
    name: 'Dubai Marina',
    tagline: 'Riviera High-Rise Living',
    areas: ['Dubai Marina Promenade', 'JBR Beach', 'Bluewaters Island', 'Marsa Dubai'],
    yield: '7.8%',
    pricePerSqft: '2,100 AED',
    description: 'A vibrant waterfront community known for its high-rise towers, luxury yachts, and a bustling promenade with world-class dining and high rental demand.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '17%', y: '70%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'downtown',
    name: 'Downtown Dubai',
    tagline: 'The Center of Now',
    areas: ['Burj Khalifa', 'Dubai Mall', 'Opera District', 'Old Town', 'The Address'],
    yield: '6.5%',
    pricePerSqft: '2,800 AED',
    description: 'The prestigious epicenter of Dubai, home to the Burj Khalifa and Dubai Mall. Offers premium urban living with iconic skyline views and unmatched global prestige.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '58%', y: '44%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    tagline: 'Metropolitan Canal Enclave',
    areas: ['Executive Towers', 'Bay Square', 'Marasi Drive', 'Canal Front Residences'],
    yield: '7.4%',
    pricePerSqft: '1,850 AED',
    description: 'Dubai\'s central commercial and luxury residential artery running alongside the Dubai Water Canal, bordering Downtown with exceptional capital growth.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '55%', y: '56%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'creek-harbour',
    name: 'Creek Harbour',
    tagline: 'Future Waterfront Masterpiece',
    areas: ['Creek Island', 'The Island District', 'Creek Beach', 'Address Grand'],
    yield: '8.1%',
    pricePerSqft: '1,950 AED',
    description: 'A forward-looking waterfront master development by Emaar, offering modern luxury residences overlooking the Ras Al Khor sanctuary and Dubai skyline.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '74%', y: '40%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'hills-estate',
    name: 'Dubai Hills Estate',
    tagline: 'Green Heart of Dubai',
    areas: ['Sidra Villas', 'Maple', 'Park Heights', 'Golf Grove', 'Park Point'],
    yield: '6.8%',
    pricePerSqft: '1,650 AED',
    description: 'A master-planned family golf community centered around an 18-hole championship course, Dubai Hills Mall, and vast rolling green parks.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '46%', y: '70%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'arabian-ranches',
    name: 'Arabian Ranches',
    tagline: 'Premier Desert Oasis',
    areas: ['Ranches 1', 'Ranches 2', 'Ranches 3', 'Polo Club'],
    yield: '6.2%',
    pricePerSqft: '1,450 AED',
    description: 'Dubai\'s benchmark gated villa community offering spacious family villas, world-class polo club, golf facilities, and tranquil suburban security.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '36%', y: '82%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'jumeirah-beach',
    name: 'Jumeirah Beach',
    tagline: 'Exclusive Coastal Strip',
    areas: ['La Mer', 'Pearl Jumeirah', 'Jumeirah Bay Island', 'Kite Beach'],
    yield: '7.0%',
    pricePerSqft: '2,400 AED',
    description: 'Prestigious low-rise coastal strip featuring private mansions, five-star resorts, and ultra-prime waterfront branded residences.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '42%', y: '35%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'bur-dubai',
    name: 'Bur Dubai',
    tagline: 'Heritage & Trade Corridor',
    areas: ['Al Mankhool', 'Al Karama', 'Oud Metha', 'Al Fahidi'],
    yield: '7.9%',
    pricePerSqft: '1,250 AED',
    description: 'A historic district known for diplomatic missions, cultural landmarks, high rental occupancy, and traditional trading proximity.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '67%', y: '30%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'deira',
    name: 'Deira & Waterfront',
    tagline: 'Historic Commercial Gateway',
    areas: ['Dubai Islands', 'Gold Souk District', 'Al Rigga', 'Deira Corniche'],
    yield: '8.5%',
    pricePerSqft: '1,100 AED',
    description: 'Dubai\'s historic trading capital with new master developments at Dubai Islands, yielding some of the highest gross rental returns across the city.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    coords: { x: '82%', y: '22%' },
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  }
];

const DubaiMap = ({ onSearch }: { onSearch?: (filter: string) => void }) => {
  const [activeZone, setActiveZone] = useState(ZONES[0]);
  const [filterMode, setFilterMode] = useState<'all' | 'highYield' | 'waterfront'>('all');

  const displayedZones = ZONES.filter((z) => {
    if (filterMode === 'highYield') return parseFloat(z.yield) >= 7.2;
    if (filterMode === 'waterfront') {
      return ['palm-jumeirah', 'marina', 'jumeirah-beach', 'creek-harbour', 'business-bay'].includes(z.id);
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Top Quick Area Selection Track */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-technical uppercase tracking-[0.4em] text-white/40 font-bold">Filter By Category:</span>
          <div className="inline-flex p-1 bg-black/60 border border-white/10 rounded-lg">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 text-[10px] font-technical uppercase tracking-wider transition-all rounded ${
                filterMode === 'all' ? 'bg-porsche-red text-white font-bold shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              All Zones ({ZONES.length})
            </button>
            <button
              onClick={() => setFilterMode('waterfront')}
              className={`px-3 py-1 text-[10px] font-technical uppercase tracking-wider transition-all rounded ${
                filterMode === 'waterfront' ? 'bg-porsche-red text-white font-bold shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              Waterfront
            </button>
            <button
              onClick={() => setFilterMode('highYield')}
              className={`px-3 py-1 text-[10px] font-technical uppercase tracking-wider transition-all rounded ${
                filterMode === 'highYield' ? 'bg-porsche-red text-white font-bold shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              High Yield (≥7.2%)
            </button>
          </div>
        </div>

        {/* Live Map Coordinates Telemetry */}
        <div className="hidden md:flex items-center gap-6 text-[10px] font-mono text-white/40 tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            DUBAI CARTOGRAPHY 2026.4
          </span>
          <span className="text-white/20">|</span>
          <span>N 25° 12&apos; 18&quot; • E 55° 16&apos; 44&quot;</span>
        </div>
      </div>

      {/* Horizontal Area Buttons Bar for instant tap navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        {ZONES.map((zone) => {
          const isActive = activeZone.id === zone.id;
          return (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-lg border text-xs font-technical uppercase tracking-wider transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-porsche-red text-white border-porsche-red font-bold shadow-[0_0_15px_rgba(213,0,28,0.5)] scale-[1.02]'
                  : 'bg-black/40 border-white/10 text-white/70 hover:border-white/30 hover:text-white hover:bg-black/60'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? 'bg-white animate-ping' : 'bg-white/40'
                }`}
              />
              <span>{zone.name}</span>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                  isActive ? 'bg-black/30 text-white' : 'bg-white/5 text-emerald-400'
                }`}
              >
                {zone.yield}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Map + Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Custom Dubai Vector Map with Low-Opacity UAE Flag Backdrop */}
        <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[540px] md:min-h-[600px] bg-[#050508] border border-white/15 overflow-hidden group rounded-xl shadow-2xl">
          {/* Scanning Technical Radar Line */}
          <motion.div
            animate={{ x: ['-100%', '240%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-porsche-red/10 to-transparent skew-x-12 pointer-events-none z-20"
          />

          {/* UAE Flag Backdrop & Shadow Atmosphere (Black background with low opacity flag) */}
          <div className="w-full h-full absolute inset-0 overflow-hidden bg-black">
            {/* Target Element: UAE Flag with low opacity */}
            <motion.img
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=2000"
              alt="United Arab Emirates Flag Backdrop"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000';
              }}
              className="w-full h-full object-cover opacity-[0.12] contrast-125 saturate-150 pointer-events-none mix-blend-screen scale-105 origin-center"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.12, scale: 1.05 }}
              transition={{ duration: 1.5 }}
            />

            {/* UAE Flag Chromatic Shadow Backdrops (Red, Green, White, Black delicate atmospheric ambient layers) */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/[0.08] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/[0.07] via-transparent to-black/80 pointer-events-none" />
            <div className="absolute inset-0 bg-radial from-white/[0.04] via-transparent to-black pointer-events-none" />
            
            {/* Architectural Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
            
            {/* Vignette shadows around perimeter */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-transparent to-[#050508] pointer-events-none" />
          </div>

          {/* Crisp White Vector Dubai Map Overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <svg
              viewBox="0 0 1000 700"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
            >
              <defs>
                {/* Crisp White Line Glow */}
                <filter id="whiteGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgba(255,255,255,0.7)" />
                </filter>
                {/* Porsche Red Active Glow */}
                <filter id="redGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="rgba(213,0,28,0.9)" />
                </filter>
                {/* Coastal Water Hatch */}
                <pattern id="waterHatch" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                </pattern>
              </defs>

              {/* Arabian Gulf Water Zone Indicator */}
              <rect x="0" y="0" width="1000" height="700" fill="url(#waterHatch)" />
              <text x="70" y="100" fill="rgba(255,255,255,0.18)" fontSize="14" fontFamily="monospace" letterSpacing="0.4em" fontWeight="bold">
                ARABIAN GULF // GULF WATERS
              </text>
              <text x="70" y="125" fill="rgba(255,255,255,0.10)" fontSize="10" fontFamily="monospace" letterSpacing="0.3em">
                TERRITORIAL COASTLINE • DUBAI SECTOR
              </text>

              {/* 1. DUBAI ARABIAN GULF COASTLINE - Crisp White Vector Line */}
              <path
                d="M 20 690 Q 110 590 180 520 T 320 380 T 470 270 T 630 190 T 710 160 Q 750 145 840 120 T 980 60"
                fill="none"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="2.5"
                filter="url(#whiteGlow)"
              />
              {/* Secondary Coast Depth Contour */}
              <path
                d="M 10 680 Q 100 580 170 510 T 310 370 T 460 260 T 620 180 T 700 150 Q 740 135 830 110 T 970 50"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />

              {/* 2. PALM JUMEIRAH - Iconic Crescent, Trunk & Palm Fronds in Crisp White */}
              <g className="palm-jumeirah-vector">
                {/* Outer Crescent Breakwater */}
                <path
                  d="M 180 370 A 75 75 0 1 1 310 370"
                  fill="none"
                  stroke="rgba(255,255,255,0.95)"
                  strokeWidth="2.2"
                  filter="url(#whiteGlow)"
                />
                {/* Crescent Openings */}
                <circle cx="245" cy="275" r="3" fill="#D5001C" />
                {/* Central Spine / Trunk */}
                <line x1="245" y1="440" x2="245" y2="330" stroke="rgba(255,255,255,0.95)" strokeWidth="3" />
                {/* Monorail Spine */}
                <line x1="245" y1="440" x2="245" y2="300" stroke="#D5001C" strokeWidth="0.8" strokeDasharray="3 3" />
                {/* Radiating Fronds */}
                <path
                  d="
                    M 245 340 Q 210 325 190 338 M 245 340 Q 280 325 300 338
                    M 245 360 Q 195 345 178 360 M 245 360 Q 295 345 312 360
                    M 245 380 Q 190 365 172 385 M 245 380 Q 300 365 318 385
                    M 245 400 Q 195 390 180 410 M 245 400 Q 295 390 310 410
                    M 245 418 Q 210 410 198 426 M 245 418 Q 280 410 292 426
                  "
                  fill="none"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="1.6"
                />
              </g>

              {/* 3. THE WORLD ISLANDS - Stylized Archipelago in White Vector Outlines */}
              <g className="world-islands-vector" opacity="0.6">
                {[
                  { cx: 500, cy: 140, r: 4 },
                  { cx: 515, cy: 135, r: 3 },
                  { cx: 530, cy: 130, r: 5 },
                  { cx: 545, cy: 132, r: 4 },
                  { cx: 560, cy: 138, r: 4.5 },
                  { cx: 490, cy: 155, r: 3.5 },
                  { cx: 510, cy: 150, r: 5 },
                  { cx: 530, cy: 148, r: 6 },
                  { cx: 550, cy: 150, r: 4 },
                  { cx: 570, cy: 155, r: 3.5 },
                  { cx: 485, cy: 170, r: 4 },
                  { cx: 505, cy: 168, r: 5 },
                  { cx: 525, cy: 165, r: 6.5 },
                  { cx: 545, cy: 168, r: 5 },
                  { cx: 565, cy: 172, r: 4 }
                ].map((island, idx) => (
                  <ellipse
                    key={idx}
                    cx={island.cx}
                    cy={island.cy}
                    rx={island.r * 1.4}
                    ry={island.r}
                    fill="rgba(255,255,255,0.15)"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1"
                  />
                ))}
                <text x="500" y="195" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" letterSpacing="0.25em">
                  THE WORLD ISLANDS
                </text>
              </g>

              {/* 4. DUBAI WATER CANAL - Connecting Arabian Gulf through Business Bay */}
              <path
                d="M 470 270 Q 520 310 560 360 T 600 400"
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="2.5"
                strokeDasharray="6 2"
              />
              <text x="495" y="310" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="monospace" transform="rotate(35 495 310)">
                DUBAI WATER CANAL
              </text>

              {/* 5. DUBAI CREEK & RAS AL KHOR SANCTUARY - Flowing Inland */}
              <path
                d="M 710 160 Q 725 200 745 240 T 780 290 Q 810 320 830 310 T 850 350"
                fill="none"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="3.5"
              />
              <path
                d="M 710 160 Q 725 200 745 240 T 780 290 Q 810 320 830 310 T 850 350"
                fill="none"
                stroke="rgba(213,0,28,0.35)"
                strokeWidth="1"
              />
              <text x="750" y="220" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" letterSpacing="0.2em">
                DUBAI CREEK
              </text>

              {/* 6. MAJOR HIGHWAY ARTERIALS (Sheikh Zayed Road E11 & Al Khail Road E44) */}
              {/* Sheikh Zayed Road (E11) - Primary White Arterial */}
              <path
                d="M 80 670 Q 180 530 280 430 T 480 310 T 670 210 T 890 120"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.8"
              />
              <text x="320" y="405" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace" letterSpacing="0.2em" transform="rotate(-30 320 405)">
                SHEIKH ZAYED RD (E11)
              </text>

              {/* Al Khail Road (E44) */}
              <path
                d="M 180 680 Q 280 560 380 460 T 580 350 T 760 270 T 920 200"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />

              {/* Mohammed Bin Zayed Road (E311) */}
              <path
                d="M 280 690 Q 380 590 480 500 T 680 400 T 860 320"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="2 4"
              />

              {/* Technical Target Reticle on Selected Zone */}
              {activeZone && (
                <g>
                  {/* Outer Radar Ping */}
                  <circle
                    cx={activeZone.coords.x}
                    cy={activeZone.coords.y}
                    r="28"
                    fill="none"
                    stroke="#D5001C"
                    strokeWidth="1"
                    opacity="0.4"
                    strokeDasharray="3 3"
                  />
                  {/* Crosshairs */}
                  <line
                    x1={parseFloat(activeZone.coords.x) * 10 - 24}
                    y1={parseFloat(activeZone.coords.y) * 7}
                    x2={parseFloat(activeZone.coords.x) * 10 + 24}
                    y2={parseFloat(activeZone.coords.y) * 7}
                    stroke="#D5001C"
                    strokeWidth="0.8"
                    opacity="0.6"
                  />
                  <line
                    x1={parseFloat(activeZone.coords.x) * 10}
                    y1={parseFloat(activeZone.coords.y) * 7 - 24}
                    x2={parseFloat(activeZone.coords.x) * 10}
                    y2={parseFloat(activeZone.coords.y) * 7 + 24}
                    stroke="#D5001C"
                    strokeWidth="0.8"
                    opacity="0.6"
                  />
                </g>
              )}
            </svg>
          </div>

          {/* Interactive Area Buttons placed directly on the Map Coordinates */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {displayedZones.map((zone) => {
              const isActive = activeZone.id === zone.id;
              return (
                <div
                  key={zone.id}
                  style={{ left: zone.coords.x, top: zone.coords.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <button
                    onClick={() => setActiveZone(zone)}
                    className={`group/btn relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl select-none ${
                      isActive
                        ? 'bg-porsche-red text-white ring-2 ring-white scale-110 shadow-[0_0_25px_rgba(213,0,28,0.85)] z-40'
                        : 'bg-black/85 text-white/90 border border-white/25 hover:border-porsche-red hover:bg-black hover:text-white hover:scale-105 z-20'
                    }`}
                  >
                    {/* Pulsing Location Pin Beacon */}
                    <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                      {isActive && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      )}
                      <span
                        className={`relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 ${
                          isActive ? 'bg-white' : 'bg-porsche-red'
                        }`}
                      />
                    </span>

                    {/* Area Name */}
                    <span className="font-technical text-[10px] sm:text-xs font-bold tracking-tight whitespace-nowrap uppercase">
                      {zone.name}
                    </span>

                    {/* ROI Pill Tag */}
                    <span
                      className={`text-[8px] sm:text-[9px] px-1.5 py-0.2 rounded font-mono font-semibold ${
                        isActive
                          ? 'bg-black/35 text-white'
                          : 'bg-white/10 text-emerald-400 group-hover/btn:bg-white/20'
                      }`}
                    >
                      {zone.yield}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Technical Map Legend in Bottom Left */}
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 pointer-events-none bg-black/80 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-porsche-red" />
              <span className="text-[9px] font-mono font-bold tracking-widest text-white uppercase">UAE INVESTMENT CARTOGRAPHY</span>
            </div>
            <div className="flex items-center gap-3 text-[8px] font-mono text-white/40">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-0.5 bg-white inline-block" /> White: Shore & Arterials
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-porsche-red inline-block" /> Active Zone
              </span>
            </div>
          </div>

          {/* Map Revision Counter in Bottom Right */}
          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 pointer-events-none text-right">
            <span className="text-[8px] font-mono text-white/30 tracking-widest uppercase block">
              COORDINATES: {activeZone.coords.x}, {activeZone.coords.y}
            </span>
          </div>
        </div>

        {/* Zone Details Panel */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col bg-black/40 border border-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-md"
            >
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-porsche-red rounded-full animate-pulse" />
                  <span className="text-white/40 text-[10px] tracking-[0.4em] font-mono font-bold uppercase">
                    ZONE INTELLIGENCE REPORT
                  </span>
                </div>
                <span className="text-porsche-red text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 bg-porsche-red/10 border border-porsche-red/20 rounded">
                  {activeZone.yield} NET ROI
                </span>
              </div>

              {/* Zone Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-2 tracking-tight uppercase leading-[0.95]">
                {activeZone.name}
              </h3>
              <p className="text-porsche-red text-xs sm:text-sm font-technical uppercase tracking-[0.25em] mb-4">
                {activeZone.tagline}
              </p>

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light mb-6">
                {activeZone.description}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-3 gap-px bg-white/10 mb-6 border border-white/10 rounded-lg overflow-hidden">
                <div className="bg-black/80 p-4 text-center sm:text-left">
                  <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-technical font-bold block mb-1">
                    Yield Index
                  </span>
                  <span className="text-emerald-400 font-display font-black text-2xl sm:text-3xl tracking-tight">
                    {activeZone.yield}
                  </span>
                </div>
                <div className="bg-black/80 p-4 text-center sm:text-left">
                  <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-technical font-bold block mb-1">
                    Avg Price / Sqft
                  </span>
                  <span className="text-white font-display font-black text-lg sm:text-2xl tracking-tight">
                    {activeZone.pricePerSqft}
                  </span>
                </div>
                <div className="bg-black/80 p-4 text-center sm:text-left">
                  <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-technical font-bold block mb-1">
                    Key Enclaves
                  </span>
                  <span className="text-white font-display font-black text-2xl sm:text-3xl tracking-tight">
                    {activeZone.areas.length}
                  </span>
                </div>
              </div>

              {/* Sub-Districts Chips */}
              <div className="mb-6">
                <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-technical font-bold block mb-2.5">
                  Prime Sub-Communities
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeZone.areas.map((sub, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80 text-[11px] font-technical uppercase tracking-wider rounded"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
                <motion.a
                  href="#property-types"
                  onClick={() => onSearch?.(activeZone.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-3.5 bg-porsche-red text-white text-xs tracking-[0.3em] font-technical font-bold uppercase rounded-lg shadow-[0_0_20px_rgba(213,0,28,0.4)] hover:bg-red-700 transition-colors"
                >
                  <span>Explore {activeZone.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <motion.a
                  href={`https://wa.me/971529178630?text=${encodeURIComponent(
                    `Hello Rock Deals, I would like to inquire about premium off-plan investment deals in ${activeZone.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs tracking-wider font-technical uppercase rounded-lg text-center transition-colors"
                >
                  WhatsApp Broker
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const PROPERTIES: PropertyItem[] = [
  { 
    id: 1, 
    title: 'Luxury Palm Villa | Dubai Best Deal', 
    category: 'Luxury Villas', 
    price: 'AED 45,000,000', 
    rawPrice: 45000000,
    location: 'Palm Jumeirah', 
    developer: 'Nakheel / Bespoke Arch',
    type: 'Signature Beachfront Villa',
    bedrooms: '6 Beds',
    bathrooms: '7 Baths',
    builtUpArea: '10,500 sq.ft',
    pricePerSqFt: 'AED 4,285 / sq.ft',
    handover: 'Ready to Move',
    paymentPlan: 'Cash or 80/20 Mortgage',
    estimatedROI: '7.8% - 9.2%',
    amenities: ['Private Beach Access', 'Infinity Pool', 'Smart Home Tech', 'Private Marina Berth', 'Maid & Driver Quarters'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 2, 
    title: 'Skyline Penthouse | High ROI Investment', 
    category: 'Penthouses', 
    price: 'AED 28,500,000', 
    rawPrice: 28500000,
    location: 'Downtown Dubai', 
    developer: 'Emaar Properties',
    type: 'Duplex Sky Penthouse',
    bedrooms: '4 Beds',
    bathrooms: '5 Baths',
    builtUpArea: '5,800 sq.ft',
    pricePerSqFt: 'AED 4,913 / sq.ft',
    handover: 'Ready to Move',
    paymentPlan: 'Cash or 75/25 Mortgage',
    estimatedROI: '8.4% - 10.5%',
    amenities: ['Burj Khalifa Views', 'Private Sky Pool', 'Concierge & Valet', 'Private Elevator', 'Wine Cellar'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    title: 'Marina Edge | Apartments for Sale in Dubai', 
    category: 'Apartments', 
    price: 'AED 4,200,000', 
    rawPrice: 4200000,
    location: 'Dubai Marina', 
    developer: 'Select Group',
    type: 'Waterfront Marina Apartment',
    bedrooms: '2 Beds',
    bathrooms: '3 Baths',
    builtUpArea: '1,450 sq.ft',
    pricePerSqFt: 'AED 2,896 / sq.ft',
    handover: 'Ready to Move',
    paymentPlan: 'Cash or 80/20 Bank Finance',
    estimatedROI: '8.8% - 10.2%',
    amenities: ['Full Marina Views', 'Infinity Pool', 'State-of-the-Art Gym', 'Yacht Club Proximity', 'Covered Parking'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 4, 
    title: 'Desert Rose | Villas for Sale in Dubai', 
    category: 'Townhouses', 
    price: 'AED 3,800,000', 
    rawPrice: 3800000,
    location: 'Arabian Ranches', 
    developer: 'Emaar Properties',
    type: 'Contemporary Family Townhouse',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    builtUpArea: '2,800 sq.ft',
    pricePerSqFt: 'AED 1,357 / sq.ft',
    handover: 'Ready to Move',
    paymentPlan: 'Flexible Payment / Mortgage',
    estimatedROI: '8.1% - 9.6%',
    amenities: ['Championship Golf Proximity', 'Community Swimming Pool', 'Tennis & Padel Courts', 'Children Play Park', 'Private Garden'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 5, 
    title: 'Seascape by Emaar | Mina Rashid', 
    category: 'Off-Plan', 
    price: 'AED 1,725,000', 
    rawPrice: 1725000,
    location: 'Mina Rashid, Dubai', 
    developer: 'Emaar Properties',
    type: 'Waterfront Yachting Apartment',
    bedrooms: '1-2 Beds',
    bathrooms: '2 Baths',
    builtUpArea: '880 sq.ft',
    pricePerSqFt: 'AED 1,960 / sq.ft',
    handover: 'Q4 2026',
    paymentPlan: '80/20 on Handover',
    estimatedROI: '9.0% - 11.4%',
    amenities: ['500m Venetian Canal Pool', 'Yacht Marina Berths', 'Pedestrian Promenade', 'Fitness Center', 'Retail Boulevard'],
    image: 'https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-78a4e28fc555b514.jpg' 
  },
  { 
    id: 6, 
    title: 'Orla Dorchester by Omniyat', 
    category: 'Off-Plan', 
    price: 'AED 57,230,250', 
    rawPrice: 57230250,
    location: 'Palm Jumeirah', 
    developer: 'Omniyat',
    type: 'Ultra-Luxury Managed Sky Palace',
    bedrooms: '4-5 Beds',
    bathrooms: '6 Baths',
    builtUpArea: '8,200 sq.ft',
    pricePerSqFt: 'AED 6,979 / sq.ft',
    handover: 'Q4 2026',
    paymentPlan: '50/50 Handover Scheme',
    estimatedROI: '7.2% - 8.9%',
    amenities: ['Dorchester Collection Hospitality', 'Private Beach Club', 'Indoor Lap Pool', 'Helipad Access', 'Private Cigar Lounge'],
    image: 'https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-0d728347c6b28328.jpg' 
  },
  { 
    id: 7, 
    title: 'Franck Muller Aeternitas Tower', 
    category: 'Off-Plan', 
    price: 'AED 3,480,000', 
    rawPrice: 3480000,
    location: 'Dubai Marina', 
    developer: 'London Gate',
    type: 'World Tallest Branded Clocktower Residence',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    builtUpArea: '1,280 sq.ft',
    pricePerSqFt: 'AED 2,718 / sq.ft',
    handover: 'Q2 2027',
    paymentPlan: '1% Monthly (40/60 Scheme)',
    estimatedROI: '9.4% - 11.8%',
    amenities: ['Franck Muller Clock Tower', 'Sky Zen Garden', 'Private Cinema', 'Valet Parking', 'Padel Tennis Court'],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 8, 
    title: 'Moonstone Interiors by Missoni', 
    category: 'Off-Plan', 
    price: 'AED 3,216,777', 
    rawPrice: 3216777,
    location: 'Al Marjan Island', 
    developer: 'Durar Group',
    type: 'Italian Designer Beach Residence',
    bedrooms: '2 Beds',
    bathrooms: '3 Baths',
    builtUpArea: '1,520 sq.ft',
    pricePerSqFt: 'AED 2,116 / sq.ft',
    handover: 'Q4 2026',
    paymentPlan: '60/40 Plan',
    estimatedROI: '9.8% - 12.5%',
    amenities: ['Direct Wynn Casino Proximity', 'Private White Sand Beach', 'Missoni Italian Interiors', 'Infinity Sunset Pool', 'Wellness Spa'],
    image: 'https://elist-solz.s3.ap-south-1.amazonaws.com/projects/moonstone-interiors-by-missoni/images/moonstone-interiors-by-missoni-image-fa154d494200d610.jpg' 
  },
  { 
    id: 9, 
    title: 'District One West Phase 1 by Nakheel', 
    category: 'Off-Plan', 
    price: 'AED 7,960,000', 
    rawPrice: 7960000,
    location: 'MBR City District One', 
    developer: 'Nakheel',
    type: 'Crystal Lagoon Luxury Villa',
    bedrooms: '4-5 Beds',
    bathrooms: '5 Baths',
    builtUpArea: '4,600 sq.ft',
    pricePerSqFt: 'AED 1,730 / sq.ft',
    handover: 'Q1 2027',
    paymentPlan: '80/20 Direct Developer',
    estimatedROI: '8.2% - 9.8%',
    amenities: ['Crystal Swimmable Lagoon', '8.4km Cycling Track', 'Clubhouse & Lagoon Beach', '24/7 Gated Security', 'Community School'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 10, 
    title: 'Almaan 101 by MN Vision', 
    category: 'Off-Plan', 
    price: 'AED 799,000', 
    rawPrice: 799000,
    location: 'JVC, Dubai', 
    developer: 'MN Vision',
    type: 'High Yield Boutique Apartment',
    bedrooms: 'Studio - 1 Bed',
    bathrooms: '1-2 Baths',
    builtUpArea: '560 sq.ft',
    pricePerSqFt: 'AED 1,426 / sq.ft',
    handover: 'Q3 2026',
    paymentPlan: '1% Monthly Payment Plan',
    estimatedROI: '10.2% - 12.8%',
    amenities: ['Rooftop Swimming Pool', 'Smart Home Automation', 'Equipped Gymnasium', 'Boutique Lobby', 'High Rental Demand'],
    image: 'https://elist-solz.s3.ap-south-1.amazonaws.com/projects/almaan-101/images/almaan-101-image-afeeb1c57c58c004.jpg' 
  },
  { 
    id: 11, 
    title: 'Amazonia Residence by Palladium', 
    category: 'Off-Plan', 
    price: 'AED 940,000', 
    rawPrice: 940000,
    location: 'Al Jaddaf, Dubai', 
    developer: 'Palladium Developments',
    type: 'Biophilic Urban Residence',
    bedrooms: '1 Bed',
    bathrooms: '1.5 Baths',
    builtUpArea: '720 sq.ft',
    pricePerSqFt: 'AED 1,305 / sq.ft',
    handover: 'Q4 2026',
    paymentPlan: '60/40 Payment Plan',
    estimatedROI: '9.6% - 11.5%',
    amenities: ['Vertical Tropical Gardens', 'Hydrotherapy Pool', 'Co-working Business Lounge', 'Direct Metro Connectivity', 'Sky Jogging Track'],
    image: 'https://elist-solz.s3.ap-south-1.amazonaws.com/projects/amazonia-residence/images/amazonia-residence-image-7874b31b39f0ea29.jpg' 
  },
  { 
    id: 12, 
    title: 'Ocean Pearl by Samana', 
    category: 'Off-Plan', 
    price: 'AED 3,940,444', 
    rawPrice: 3940444,
    location: 'Dubai Islands', 
    developer: 'Samana Developers',
    type: 'Private Pool Island Apartment',
    bedrooms: '2-3 Beds',
    bathrooms: '3 Baths',
    builtUpArea: '1,890 sq.ft',
    pricePerSqFt: 'AED 2,084 / sq.ft',
    handover: 'Q4 2027',
    paymentPlan: '1% Monthly for 80 Months',
    estimatedROI: '9.5% - 12.0%',
    amenities: ['Private Balcony Plunge Pool', 'Island Beachfront Access', 'Outdoor Cinema', 'Steam & Sauna Rooms', 'Kids Splash Park'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 13, 
    title: 'Modern Creek | Ready to Move Property', 
    category: 'Ready to Move', 
    price: 'AED 2,100,000', 
    rawPrice: 2100000,
    location: 'Dubai Creek Harbour', 
    developer: 'Emaar Properties',
    type: 'Modern Creek Park Apartment',
    bedrooms: '1-2 Beds',
    bathrooms: '2 Baths',
    builtUpArea: '1,050 sq.ft',
    pricePerSqFt: 'AED 2,000 / sq.ft',
    handover: 'Ready to Move',
    paymentPlan: 'Cash or Mortgage',
    estimatedROI: '8.6% - 10.1%',
    amenities: ['Creek Marina Boardwalk', 'Creek Beach Access', 'Infinity Pool', 'Central Park Views', 'Supermarket & Cafes'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 14, 
    title: 'Azure Waterfront | Dubai Distress Deals', 
    category: 'Luxury Villas', 
    price: 'AED 32,000,000', 
    rawPrice: 32000000,
    location: 'Jumeirah Bay', 
    developer: 'Meraas',
    type: 'Waterfront Distress Mansion',
    bedrooms: '5 Beds',
    bathrooms: '6 Baths',
    builtUpArea: '8,500 sq.ft',
    pricePerSqFt: 'AED 3,764 / sq.ft',
    handover: 'Ready to Move',
    paymentPlan: 'Immediate Cash Settlement',
    estimatedROI: '8.0% - 9.8%',
    amenities: ['Private Mooring Jetty', 'Direct Open Sea Views', 'Private Cinema & Spa', 'Basement 4-Car Garage', 'Smart Automation'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 15, 
    title: 'Sobha Seahaven Sky Edition | Dubai Harbour', 
    category: 'Penthouses', 
    price: 'AED 21,500,000', 
    rawPrice: 21500000,
    location: 'Dubai Harbour', 
    developer: 'Sobha Realty',
    type: 'Ultra-Luxury Sky Residence',
    bedrooms: '4-5 Beds',
    bathrooms: '6 Baths',
    builtUpArea: '5,800 sq.ft',
    pricePerSqFt: 'AED 3,706 / sq.ft',
    handover: 'Q4 2026',
    paymentPlan: '80/20 Payment Scheme',
    estimatedROI: '8.4% - 10.2%',
    amenities: ['360° Cruise Terminal Views', 'Private Infinity Sky Pool', 'Superyacht Berths', 'Valet & Concierge', 'Executive Lounge'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 16, 
    title: 'Palm Jebel Ali Beach Mansions | Frond Luxury', 
    category: 'Luxury Villas', 
    price: 'AED 38,000,000', 
    rawPrice: 3800000,
    location: 'Palm Jebel Ali', 
    developer: 'Nakheel',
    type: 'Private Frond Beach Mansion',
    bedrooms: '6-7 Beds',
    bathrooms: '8 Baths',
    builtUpArea: '11,200 sq.ft',
    pricePerSqFt: 'AED 3,392 / sq.ft',
    handover: 'Q3 2027',
    paymentPlan: '60/40 Plan',
    estimatedROI: '7.8% - 9.5%',
    amenities: ['Double Private Beachfront', 'Private Sunset Deck', 'Elevator to All Floors', 'Rooftop Solarium', 'Smart Home AI Integration'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 17, 
    title: 'Bulgari Lighthouse | Jumeira Bay Island', 
    category: 'Penthouses', 
    price: 'AED 72,000,000', 
    rawPrice: 72000000,
    location: 'Jumeira Bay Island', 
    developer: 'Meraas / Bulgari',
    type: 'Bespoke Island Sky Palace',
    bedrooms: '5 Beds',
    bathrooms: '7 Baths',
    builtUpArea: '9,450 sq.ft',
    pricePerSqFt: 'AED 7,619 / sq.ft',
    handover: 'Q2 2027',
    paymentPlan: '70/30 Handover',
    estimatedROI: '6.5% - 8.2%',
    amenities: ['Bulgari Resort Privileges', 'Private Island Marina', 'Dedicated Butler Team', 'Private Heated Pool', 'Private Yacht Slip'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 18, 
    title: 'Creek Waters 2 | Dubai Creek Harbour', 
    category: 'Apartments', 
    price: 'AED 3,650,000', 
    rawPrice: 3650000,
    location: 'Dubai Creek Harbour', 
    developer: 'Emaar Properties',
    type: 'Waterfront Panoramic Residence',
    bedrooms: '2-3 Beds',
    bathrooms: '3 Baths',
    builtUpArea: '1,850 sq.ft',
    pricePerSqFt: 'AED 1,972 / sq.ft',
    handover: 'Q1 2027',
    paymentPlan: '80/20 with 10% Down',
    estimatedROI: '8.9% - 11.2%',
    amenities: ['Unobstructed Skyline Views', 'Resort-Style Infinity Pool', 'Direct Island Park Access', 'Concierge & Valet', 'State-of-the-Art Gym'],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 19, 
    title: 'DAMAC Lagoons Morocco Cluster | Mediterranean Living', 
    category: 'Townhouses', 
    price: 'AED 2,990,000', 
    rawPrice: 2990000,
    location: 'DAMAC Lagoons', 
    developer: 'DAMAC Properties',
    type: 'Mediterranean Lagoon Townhouse',
    bedrooms: '4-5 Beds',
    bathrooms: '5 Baths',
    builtUpArea: '2,650 sq.ft',
    pricePerSqFt: 'AED 1,128 / sq.ft',
    handover: 'Q4 2026',
    paymentPlan: '1% Monthly Payment Plan',
    estimatedROI: '9.2% - 11.8%',
    amenities: ['Crystal Blue Swimmable Lagoons', 'Moroccan Spa & Hammam', 'Private Floating Amphitheatre', 'Kids Water Park', 'Sandy Beaches'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 20, 
    title: 'One Za\'abeel The Residences | Ready Cantilever Landmark', 
    category: 'Ready to Move', 
    price: 'AED 12,800,000', 
    rawPrice: 12800000,
    location: 'Za\'abeel, Downtown Corridor', 
    developer: 'Ithra Dubai',
    type: 'Cantilever Dual-Tower Residence',
    bedrooms: '3 Beds',
    bathrooms: '4 Baths',
    builtUpArea: '3,200 sq.ft',
    pricePerSqFt: 'AED 4,000 / sq.ft',
    handover: 'Ready to Move',
    paymentPlan: '100% Cash or 25% + Mortgage',
    estimatedROI: '7.5% - 9.0%',
    amenities: ['The Link Cantilever Sky Deck', 'Michelin Star Dining Access', 'Infinity Sky Pool', 'Direct DIFC Connectivity', 'One&Only Resort Access'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 21, 
    title: 'Kempinski Marina Residences | Canal Front', 
    category: 'Apartments', 
    price: 'AED 5,450,000', 
    rawPrice: 5450000,
    location: 'Dubai Marina', 
    developer: 'ABA Group / Kempinski',
    type: 'Branded 5-Star Serviced Suites',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    builtUpArea: '2,200 sq.ft',
    pricePerSqFt: 'AED 2,477 / sq.ft',
    handover: 'Q3 2027',
    paymentPlan: '50/50 Payment Scheme',
    estimatedROI: '8.7% - 10.5%',
    amenities: ['5-Star Kempinski Hotel Concierge', 'Marina Water Taxi Access', 'Zen Gardens & Padel Courts', 'Private Chef Services', 'Panoramic Balcony'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 22, 
    title: 'The Oasis by Emaar | Palmier Luxury Villa', 
    category: 'Luxury Villas', 
    price: 'AED 18,900,000', 
    rawPrice: 18900000,
    location: 'The Oasis, Dubai', 
    developer: 'Emaar Properties',
    type: 'Private Water Sanctuary Villa',
    bedrooms: '5 Beds',
    bathrooms: '6 Baths',
    builtUpArea: '7,900 sq.ft',
    pricePerSqFt: 'AED 2,392 / sq.ft',
    handover: 'Q2 2028',
    paymentPlan: '80/20 Direct Developer',
    estimatedROI: '7.8% - 9.6%',
    amenities: ['Swimmable Water Canals', 'Private Gated Compound', 'Wellness Center & Spa', 'Jogging & Cycling Trails', 'International Golf Course Nearby'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800' 
  },
];

const COMMUNITIES = [
  {
    id: 'jvc',
    name: 'Jumeirah Village Circle',
    tagline: 'Family-Centric Urban Living',
    description: 'Jumeirah Village Circle (JVC) is one of Dubai\'s most popular family-friendly communities. Developed by Nakheel, it offers a serene lifestyle with a mix of modern apartments, villas, and townhouses surrounded by lush greenery and over 30 landscaped parks.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    roi: '7.5% - 8.2%',
    avgPrice: '1,200 AED/sqft',
    highlights: [
      'Over 30 Landscaped Parks',
      'Circle Mall Shopping Hub',
      'Family-Oriented Atmosphere',
      'High Rental Demand'
    ],
    amenities: [
      { name: 'Education', detail: 'JSS International School, Sunmarke School' },
      { name: 'Healthcare', detail: 'Right Health JVC, Magnum Family Medical Center' },
      { name: 'Retail', detail: 'Circle Mall, Spinneys, Choithrams' },
      { name: 'Leisure', detail: 'Five JVC Hotel, Community Parks, Fitness Centers' }
    ],
    connectivity: [
      { point: 'Dubai Marina', time: '15 Mins' },
      { point: 'Downtown Dubai', time: '20 Mins' },
      { point: 'DXB Airport', time: '30 Mins' }
    ]
  },
  {
    id: 'downtown',
    name: 'Downtown Dubai',
    tagline: 'The Center of Now',
    description: 'Home to the iconic Burj Khalifa and Dubai Mall, Downtown Dubai is the city\'s most prestigious square kilometer. It offers an unparalleled urban lifestyle with luxury high-rises, world-class dining, and the spectacular Dubai Fountain.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop',
    roi: '5.5% - 6.5%',
    avgPrice: '2,800 AED/sqft',
    highlights: [
      'Burj Khalifa & Dubai Mall',
      'Dubai Opera District',
      'Premium Luxury Living',
      'Iconic Landmark Views'
    ],
    amenities: [
      { name: 'Education', detail: 'Hartland International, Dubai Modern High' },
      { name: 'Healthcare', detail: 'Mediclinic Dubai Mall, Emirates Hospital' },
      { name: 'Retail', detail: 'The Dubai Mall, Souk Al Bahar' },
      { name: 'Leisure', detail: 'Burj Park, Fountain Shows, Fine Dining' }
    ],
    connectivity: [
      { point: 'Dubai Marina', time: '20 Mins' },
      { point: 'DXB Airport', time: '15 Mins' },
      { point: 'DIFC', time: '5 Mins' }
    ]
  },
  {
    id: 'marina',
    name: 'Dubai Marina',
    tagline: 'Waterfront Sophistication',
    description: 'Dubai Marina is a stunning man-made canal city, famous for its glittering skyline and vibrant waterfront lifestyle. It\'s a top choice for professionals and expats seeking high-rise living with immediate access to the beach and Marina Walk.',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=2070&auto=format&fit=crop',
    roi: '6.8% - 7.4%',
    avgPrice: '1,900 AED/sqft',
    highlights: [
      '7km Waterfront Promenade',
      'Marina Mall & Yacht Club',
      'Proximity to JBR Beach',
      'Vibrant Nightlife'
    ],
    amenities: [
      { name: 'Education', detail: 'Emirates International School' },
      { name: 'Healthcare', detail: 'Marina Medical Center, King\'s College' },
      { name: 'Retail', detail: 'Dubai Marina Mall, Waitrose' },
      { name: 'Leisure', detail: 'Yacht Club, Skydiving, Beach Clubs' }
    ],
    connectivity: [
      { point: 'Downtown Dubai', time: '20 Mins' },
      { point: 'Palm Jumeirah', time: '10 Mins' },
      { point: 'DWC Airport', time: '25 Mins' }
    ]
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    tagline: 'The Corporate & Residential Hub',
    description: 'Strategically located next to Downtown, Business Bay is a fast-evolving district that blends commercial power with luxury residential living. With the Dubai Canal flowing through it, it offers unique waterfront views and high-end amenities.',
    image: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=2070&auto=format&fit=crop',
    roi: '6.5% - 7.2%',
    avgPrice: '1,750 AED/sqft',
    highlights: [
      'Dubai Canal Waterfront',
      'Proximity to DIFC & Downtown',
      'Modern Architectural Icons',
      'High Capital Appreciation'
    ],
    amenities: [
      { name: 'Education', detail: 'Dubai International School' },
      { name: 'Healthcare', detail: 'Emirates Hospital, Aster Clinic' },
      { name: 'Retail', detail: 'Bay Avenue Mall, Executive Towers' },
      { name: 'Leisure', detail: 'Canal Walk, La Perle, Luxury Hotels' }
    ],
    connectivity: [
      { point: 'Downtown Dubai', time: '5 Mins' },
      { point: 'DXB Airport', time: '15 Mins' },
      { point: 'Jumeirah Beach', time: '10 Mins' }
    ]
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    tagline: 'The Eighth Wonder of the World',
    description: 'Palm Jumeirah is the world\'s largest man-made island and a global icon of luxury. It features ultra-luxury villas, high-end apartments, and some of the world\'s finest hotels, including Atlantis The Royal. It offers a truly unique beachfront lifestyle.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    roi: '4.5% - 5.5%',
    avgPrice: '4,500 AED/sqft',
    highlights: [
      'Iconic Palm-Shaped Island',
      'Private Beach Access',
      'World-Class Luxury Resorts',
      'High Capital Appreciation'
    ],
    amenities: [
      { name: 'Education', detail: 'Asya\'s Nursery, Redwood Montessori' },
      { name: 'Healthcare', detail: 'Al Das Medical Clinic, Emirates Hospital' },
      { name: 'Retail', detail: 'Nakheel Mall, The Pointe' },
      { name: 'Leisure', detail: 'Atlantis, Aquaventure, Beach Clubs' }
    ],
    connectivity: [
      { point: 'Dubai Marina', time: '10 Mins' },
      { point: 'Downtown Dubai', time: '20 Mins' },
      { point: 'DXB Airport', time: '30 Mins' }
    ]
  },
  {
    id: 'creek-harbour',
    name: 'Dubai Creek Harbour',
    tagline: 'The Future of Dubai',
    description: 'Dubai Creek Harbour is a massive waterfront development that blends modern living with nature. Home to the Ras Al Khor Wildlife Sanctuary and the future Creek Tower, it offers a sustainable and smart urban environment with stunning skyline views.',
    image: 'https://images.unsplash.com/photo-1600607687940-47a0f9259d4b?q=80&w=2070&auto=format&fit=crop',
    roi: '6.2% - 7.0%',
    avgPrice: '1,850 AED/sqft',
    highlights: [
      'Ras Al Khor Wildlife Sanctuary',
      'Creek Marina & Yacht Club',
      'Future Iconic Creek Tower',
      'Sustainable Urban Design'
    ],
    amenities: [
      { name: 'Education', detail: 'Swiss International Scientific School' },
      { name: 'Healthcare', detail: 'Mediclinic, Aster Clinic' },
      { name: 'Retail', detail: 'Dubai Square (Future), Creek Marina Retail' },
      { name: 'Leisure', detail: 'Viewing Point, Central Park, Yacht Club' }
    ],
    connectivity: [
      { point: 'Downtown Dubai', time: '10 Mins' },
      { point: 'DXB Airport', time: '15 Mins' },
      { point: 'Dubai Marina', time: '25 Mins' }
    ]
  },
  {
    id: 'dubai-hills',
    name: 'Dubai Hills Estate',
    tagline: 'The Green Heart of Dubai',
    description: 'Dubai Hills Estate is a master-planned community centered around an 18-hole championship golf course. It offers a mix of luxury villas, townhouses, and apartments, along with a massive central park and the Dubai Hills Mall.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop',
    roi: '6.5% - 7.5%',
    avgPrice: '1,650 AED/sqft',
    highlights: [
      'Championship Golf Course',
      'Dubai Hills Mall',
      '1.4 Million Sqm Central Park',
      'Top International Schools'
    ],
    amenities: [
      { name: 'Education', detail: 'GEMS Wellington Academy, GEMS New Millennium' },
      { name: 'Healthcare', detail: 'King\'s College Hospital London' },
      { name: 'Retail', detail: 'Dubai Hills Mall' },
      { name: 'Leisure', detail: 'Golf Club, Splash Park, Ice Rink' }
    ],
    connectivity: [
      { point: 'Downtown Dubai', time: '15 Mins' },
      { point: 'Dubai Marina', time: '15 Mins' },
      { point: 'DXB Airport', time: '20 Mins' }
    ]
  },
  {
    id: 'palm-jebel-ali',
    name: 'Palm Jebel Ali',
    tagline: 'The Future of Island Living',
    description: 'Palm Jebel Ali is the next frontier of luxury in Dubai. Twice the size of Palm Jumeirah, this mega-project will feature over 80 hotels and resorts, pristine beaches, and ultra-luxury villas. It is set to become a global destination for waterfront living.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop',
    roi: '7.0% - 8.5%',
    avgPrice: '3,200 AED/sqft',
    highlights: [
      'Twice the Size of Palm Jumeirah',
      '110km of New Coastline',
      '80+ Hotels & Resorts',
      'Ultra-Luxury Signature Villas'
    ],
    amenities: [
      { name: 'Education', detail: 'Planned International Schools' },
      { name: 'Healthcare', detail: 'Premium Medical Centers' },
      { name: 'Retail', detail: 'Luxury Malls & Boutiques' },
      { name: 'Leisure', detail: 'Theme Parks, Marinas, Beach Clubs' }
    ],
    connectivity: [
      { point: 'Dubai Marina', time: '15 Mins' },
      { point: 'DWC Airport', time: '15 Mins' },
      { point: 'Downtown Dubai', time: '30 Mins' }
    ]
  },
  {
    id: 'dubai-south',
    name: 'Dubai South',
    tagline: 'The City of You',
    description: 'Dubai South is a massive 145 sqkm city-within-a-city, home to the Al Maktoum International Airport and the Expo City Dubai. It is designed to be a sustainable urban hub with a focus on logistics, aviation, and high-quality residential living.',
    image: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=2070&auto=format&fit=crop',
    roi: '7.5% - 9.0%',
    avgPrice: '950 AED/sqft',
    highlights: [
      'Home to Al Maktoum Airport',
      'Expo City Dubai Proximity',
      'Future Global Logistics Hub',
      'High Rental Yields'
    ],
    amenities: [
      { name: 'Education', detail: 'Dove Green Private School' },
      { name: 'Healthcare', detail: 'NMC Royal Hospital' },
      { name: 'Retail', detail: 'Dubai South Mall (Planned)' },
      { name: 'Leisure', detail: 'Expo City, Golf Courses, Parks' }
    ],
    connectivity: [
      { point: 'DWC Airport', time: '5 Mins' },
      { point: 'Dubai Marina', time: '20 Mins' },
      { point: 'Downtown Dubai', time: '35 Mins' }
    ]
  },
  {
    id: 'arabian-ranches',
    name: 'Arabian Ranches III',
    tagline: 'The Ultimate Family Destination',
    description: 'Arabian Ranches III is a premium gated community designed for family living. It offers a wide range of townhouses and villas with private gardens, surrounded by lush green parks and world-class amenities.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    roi: '5.8% - 6.5%',
    avgPrice: '1,450 AED/sqft',
    highlights: [
      'Gated Family Community',
      'Central Park & Sports Facilities',
      'Lazy River & Clubhouse',
      'High Capital Appreciation'
    ],
    amenities: [
      { name: 'Education', detail: 'Ranches Primary School, JESS' },
      { name: 'Healthcare', detail: 'Aster Clinic, Mediclinic' },
      { name: 'Retail', detail: 'The Ranches Souk' },
      { name: 'Leisure', detail: 'Golf Club, Polo Club, Parks' }
    ],
    connectivity: [
      { point: 'Downtown Dubai', time: '20 Mins' },
      { point: 'DXB Airport', time: '25 Mins' },
      { point: 'Global Village', time: '5 Mins' }
    ]
  },
  {
    id: 'tilal-al-ghaf',
    name: 'Tilal Al Ghaf',
    tagline: 'Resort Living Reimagined',
    description: 'Tilal Al Ghaf is a flagship mixed-use community by Majid Al Futtaim. Centered around a stunning crystal lagoon (Lagoon Al Ghaf), it offers luxury villas and townhouses with a focus on wellness and outdoor living.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop',
    roi: '6.5% - 7.2%',
    avgPrice: '1,800 AED/sqft',
    highlights: [
      'Crystal Lagoon & Sandy Beaches',
      'Majid Al Futtaim Quality',
      'Wellness-Focused Design',
      'Premium Luxury Villas'
    ],
    amenities: [
      { name: 'Education', detail: 'Royal Grammar School Guildford' },
      { name: 'Healthcare', detail: 'Burjeel Hospital, Mediclinic' },
      { name: 'Retail', detail: 'City Centre Me\'aisem' },
      { name: 'Leisure', detail: 'Beach Club, Water Sports, Parks' }
    ],
    connectivity: [
      { point: 'Dubai Marina', time: '15 Mins' },
      { point: 'Downtown Dubai', time: '20 Mins' },
      { point: 'DXB Airport', time: '30 Mins' }
    ]
  },
  {
    id: 'mbr-city',
    name: 'MBR City (Meydan)',
    tagline: 'The Heart of Modern Dubai',
    description: 'Mohammed Bin Rashid City (MBR City) is one of the largest mixed-use developments in Dubai. Home to the Meydan Racecourse and the future Meydan One Mall, it offers luxury villas and apartments in a prime location.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    roi: '6.8% - 7.5%',
    avgPrice: '1,950 AED/sqft',
    highlights: [
      'Meydan Racecourse & Grandstand',
      'Future Meydan One Mall',
      'Crystal Lagoons & Parks',
      'Ultra-Luxury Mansions'
    ],
    amenities: [
      { name: 'Education', detail: 'North London Collegiate School' },
      { name: 'Healthcare', detail: 'Emirates Hospital, Mediclinic' },
      { name: 'Retail', detail: 'Meydan One Mall (Planned)' },
      { name: 'Leisure', detail: 'Golf Course, Tennis Academy, Canal' }
    ],
    connectivity: [
      { point: 'Downtown Dubai', time: '5 Mins' },
      { point: 'DXB Airport', time: '15 Mins' },
      { point: 'DIFC', time: '10 Mins' }
    ]
  },
  {
    id: 'jlt',
    name: 'Jumeirah Lake Towers',
    tagline: 'The Professional Lifestyle Hub',
    description: 'JLT is a vibrant community consisting of 80 towers built around three man-made lakes. It is a popular choice for professionals and families seeking high-rise living with a wide range of dining, retail, and leisure options.',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=2070&auto=format&fit=crop',
    roi: '7.2% - 8.0%',
    avgPrice: '1,400 AED/sqft',
    highlights: [
      'Vibrant Lakefront Living',
      'DMCC Free Zone Hub',
      'Over 600 Dining Outlets',
      'Excellent Metro Connectivity'
    ],
    amenities: [
      { name: 'Education', detail: 'Emirates International School' },
      { name: 'Healthcare', detail: 'Life Medical Center, Aster' },
      { name: 'Retail', detail: 'Marina Mall (Nearby), Spinneys' },
      { name: 'Leisure', detail: 'JLT Park, Fitness Centers, Bars' }
    ],
    connectivity: [
      { point: 'Dubai Marina', time: '5 Mins' },
      { point: 'Downtown Dubai', time: '20 Mins' },
      { point: 'DXB Airport', time: '30 Mins' }
    ]
  }
];

const AreaGuide = ({ onBack }: { onBack: () => void }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCommunity = COMMUNITIES.find(c => c.id === selectedId);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-porsche-red">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 md:px-12 lg:px-24 py-6 flex items-center justify-between">
          <button 
            onClick={() => selectedId ? setSelectedId(null) : onBack()}
            className="group flex items-center gap-3 text-white/40 hover:text-porsche-red transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[12px] font-black tracking-[0.3em] uppercase">
              {selectedId ? 'Back to Communities' : 'Return Home'}
            </span>
          </button>
          <div className="flex items-baseline gap-1">
            <span className="text-white font-display font-black text-2xl tracking-tighter">ROCK</span>
            <span className="text-white/40 font-display font-light text-2xl tracking-tighter">DEALS</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedId ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-12 md:mb-16">
                <p className="text-porsche-red text-[12px] tracking-[0.5em] uppercase font-black mb-6">Area Guide</p>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-[1.1] uppercase">
                  Explore Dubai<br />
                  <span className="text-porsche-red">Communities.</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {COMMUNITIES.map((community) => (
                  <motion.div
                    key={community.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedId(community.id)}
                    className="group relative h-[350px] md:h-[400px] rounded-3xl md:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl"
                  >
                    <img 
                      src={community.image} 
                      alt={community.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                      <p className="text-porsche-red text-[10px] font-black tracking-[0.4em] uppercase mb-2">{community.tagline}</p>
                      <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">{community.name}</h3>
                      <div className="flex items-center gap-6 md:gap-8">
                        <div>
                          <p className="text-white/40 text-[8px] font-black tracking-widest uppercase mb-1">Avg ROI</p>
                          <p className="text-white font-technical font-bold text-base md:text-lg">{community.roi}</p>
                        </div>
                        <div>
                          <p className="text-white/40 text-[8px] font-black tracking-widest uppercase mb-1">Price/Sqft</p>
                          <p className="text-white font-technical font-bold text-base md:text-lg">{community.avgPrice}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="space-y-16"
            >
              {/* Hero */}
              <div className="relative h-[50vh] md:h-[60vh] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                <SmartImage 
                  src={selectedCommunity?.image} 
                  alt={selectedCommunity?.name || 'Community'} 
                  fallbackCategory="skyscraper"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                  <p className="text-porsche-red text-[10px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-4">{selectedCommunity?.tagline}</p>
                  <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-white tracking-tighter leading-none uppercase">
                    {selectedCommunity?.name}<span className="text-porsche-red">.</span>
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 space-y-16">
                  {/* Overview */}
                  <div>
                    <h3 className="text-porsche-red text-[12px] tracking-[0.4em] uppercase font-black mb-8">Overview</h3>
                    <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed">
                      {selectedCommunity?.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedCommunity?.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-porsche-red/20 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-porsche-red" />
                        <span className="text-white font-technical font-bold text-xs uppercase tracking-widest">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-porsche-red text-[12px] tracking-[0.4em] uppercase font-black mb-8">Key Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {selectedCommunity?.amenities.map((a, i) => (
                        <div key={i} className="space-y-2">
                          <p className="text-white/20 text-[10px] font-black tracking-widest uppercase">{a.name}</p>
                          <p className="text-white font-technical font-bold text-sm">{a.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-12">
                  {/* Stats Card */}
                  <div className="bg-white/5 p-6 md:p-10 rounded-[2.5rem] border border-white/5">
                    <div className="space-y-8">
                      <div>
                        <p className="text-white/20 text-[10px] font-black tracking-widest uppercase mb-2">Investment Potential</p>
                        <p className="text-porsche-red font-display font-black text-4xl">{selectedCommunity?.roi}</p>
                        <p className="text-white/40 text-[10px] font-light mt-1">Average Annual Rental Yield</p>
                      </div>
                      <div className="pt-8 border-t border-white/5">
                        <p className="text-white/20 text-[10px] font-black tracking-widest uppercase mb-2">Market Entry</p>
                        <p className="text-white font-display font-black text-3xl">{selectedCommunity?.avgPrice}</p>
                        <p className="text-white/40 text-[10px] font-light mt-1">Average Price per Square Foot</p>
                      </div>
                    </div>
                  </div>

                  {/* Connectivity */}
                  <div className="bg-porsche-red p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-porsche-red/10">
                    <h4 className="text-white text-[12px] tracking-[0.3em] uppercase font-black mb-8">Connectivity</h4>
                    <div className="space-y-6">
                      {selectedCommunity?.connectivity.map((c, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-white/60 text-[10px] font-black tracking-widest uppercase">{c.point}</span>
                          <span className="text-white font-technical font-bold text-sm">{c.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};


const DevelopersView = ({ onBack, onEnquire }: { onBack: () => void; onEnquire: () => void }) => {
  const [subView, setSubView] = useState<'list' | 'projects' | 'details'>('list');
  const [selectedDevId, setSelectedDevId] = useState<number | null>(null);
  const [selectedProjId, setSelectedProjId] = useState<number | null>(null);

  // Filter states
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterPrice, setFilterPrice] = useState('All');
  const [filterHandover, setFilterHandover] = useState('All');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  // Search state
  const [projectSearch, setProjectSearch] = useState('');

  const selectedDeveloper = DEVELOPERS.find(d => d.id === selectedDevId);
  const selectedProject = PROJECTS.find(p => p.id === selectedProjId);

  const filteredProjects = PROJECTS.filter(p => {
    if (selectedDevId && p.developerId !== selectedDevId) return false;
    if (filterLocation !== 'All' && p.location !== filterLocation) return false;
    if (filterType !== 'All' && p.type !== filterType) return false;
    
    // Search filter
    if (projectSearch && !p.name.toLowerCase().includes(projectSearch.toLowerCase()) && !p.location.toLowerCase().includes(projectSearch.toLowerCase())) return false;

    // Simple price filter logic for demo
    if (filterPrice !== 'All') {
      const priceVal = parseInt(p.price.replace(/[^0-9]/g, ''));
      if (filterPrice === 'Under 2M' && priceVal >= 2000000) return false;
      if (filterPrice === '2M - 5M' && (priceVal < 2000000 || priceVal > 5000000)) return false;
      if (filterPrice === 'Above 5M' && priceVal <= 5000000) return false;
    }
    if (filterHandover !== 'All' && !p.handover.includes(filterHandover)) return false;
    return true;
  });

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const locations = Array.from(new Set(PROJECTS.map(p => p.location)));
  const propertyTypes = Array.from(new Set(PROJECTS.map(p => p.type)));
  const handoverYears = Array.from(new Set(PROJECTS.map(p => p.handover.split(' ').pop())));

  const handleDevClick = (id: number) => {
    setSelectedDevId(id);
    setSubView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjClick = (id: number) => {
    setSelectedProjId(id);
    setSubView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setFilterLocation('All');
    setFilterType('All');
    setFilterPrice('All');
    setFilterHandover('All');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-dark selection:text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[60] bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="px-4 md:px-12 lg:px-16 py-3 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-12">
            <button 
              onClick={() => {
                if (subView === 'details') setSubView('projects');
                else if (subView === 'projects') {
                  setSubView('list');
                  setSelectedDevId(null);
                }
                else onBack();
              }}
              className="group flex items-center gap-2 md:gap-3 text-dark/40 hover:text-porsche-red transition-colors"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[11px] md:text-[12px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
                {subView === 'list' ? 'Return Home' : subView === 'projects' ? 'Back to Developers' : 'Back to Projects'}
              </span>
            </button>
            <div className="flex items-baseline gap-1">
              <span className="text-dark font-display font-black text-xl md:text-2xl tracking-tighter">ROCK</span>
              <span className="text-dark/40 font-display font-light text-xl md:text-2xl tracking-tighter">DEALS</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="https://wa.me/971529178630" target="_blank" rel="noreferrer" className="text-[12px] font-black tracking-[0.3em] uppercase hover:text-porsche-red transition-colors">WhatsApp</a>
            <button 
              onClick={onEnquire}
              className="bg-dark text-white px-6 py-2.5 text-[12px] font-black tracking-[0.3em] uppercase hover:bg-porsche-red transition-all"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20 md:pt-32 pb-12 md:pb-24">
        <AnimatePresence mode="wait">
          {subView === 'list' && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
            >
              <div className="mb-8 md:mb-12">
                <p className="text-porsche-red text-[11px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-4 md:mb-6">Industry Leaders</p>
                <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black text-dark tracking-tighter leading-none">
                  DUBAI<br />
                  <span className="text-porsche-red">DEVELOPERS.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                {DEVELOPERS.map((dev) => (
                  <motion.div
                    key={dev.id}
                    whileHover={{ y: -10 }}
                    className="group bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 hover:border-porsche-red/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer flex flex-col"
                    onClick={() => handleDevClick(dev.id)}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden mb-4 md:mb-6 bg-white p-4 border border-gray-50 shadow-sm group-hover:shadow-md transition-all duration-500 flex items-center justify-center">
                      <img 
                        src={dev.logo} 
                        alt={dev.name} 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-dark mb-3 md:mb-4 uppercase tracking-tight">
                      {dev.name}
                      <span className="text-porsche-red">.</span>
                    </h3>
                    <p className="text-porsche-red text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase mb-4">{dev.tagline}</p>
                    <p className="text-dark/40 text-sm font-light leading-relaxed mb-8 md:mb-10 line-clamp-3">
                      {dev.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 text-dark/30 text-[11px] font-black tracking-widest uppercase">
                        <Layers className="w-3 h-3" />
                        <span>{dev.projectCount} Projects</span>
                      </div>
                      <div className="flex items-center gap-3 text-porsche-red text-[11px] font-black tracking-[0.3em] uppercase group-hover:gap-5 transition-all">
                        <span>View Projects</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {subView === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
            >
              <div className="mb-10 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                  <p className="text-porsche-red text-[11px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-4 md:mb-6">
                    {selectedDeveloper ? selectedDeveloper.name : 'All Projects'}
                  </p>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-dark tracking-tighter leading-none uppercase">
                    Featured<br />
                    <span className="text-porsche-red">Projects.</span>
                  </h2>
                </div>
                
                <div className="flex flex-col gap-6 w-full lg:w-auto">
                  {/* Search Bar */}
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/20 group-focus-within:text-porsche-red transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Search projects or locations..."
                      value={projectSearch}
                      onChange={(e) => {
                        setProjectSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full lg:w-[400px] bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-6 text-[12px] font-black tracking-widest uppercase outline-none focus:border-porsche-red/30 transition-all"
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <select 
                      value={filterLocation}
                      onChange={(e) => {
                        setFilterLocation(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 text-[12px] font-black tracking-widest uppercase outline-none focus:border-porsche-red/30 transition-all"
                    >
                      <option value="All">Location: All</option>
                      {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                    <select 
                      value={filterType}
                      onChange={(e) => {
                        setFilterType(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 text-[12px] font-black tracking-widest uppercase outline-none focus:border-porsche-red/30 transition-all"
                    >
                      <option value="All">Type: All</option>
                      {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                    <select 
                      value={filterPrice}
                      onChange={(e) => {
                        setFilterPrice(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 text-[12px] font-black tracking-widest uppercase outline-none focus:border-porsche-red/30 transition-all"
                    >
                      <option value="All">Price: All</option>
                      <option value="Under 2M">Under 2M</option>
                      <option value="2M - 5M">2M - 5M</option>
                      <option value="Above 5M">Above 5M</option>
                    </select>
                    <select 
                      value={filterHandover}
                      onChange={(e) => {
                        setFilterHandover(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 text-[12px] font-black tracking-widest uppercase outline-none focus:border-porsche-red/30 transition-all"
                    >
                      <option value="All">Handover: All</option>
                      {handoverYears.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                    <button 
                      onClick={() => {
                        resetFilters();
                        setProjectSearch('');
                        setCurrentPage(1);
                      }}
                      className="bg-dark text-white rounded-lg px-4 py-2.5 text-[12px] font-black tracking-widest uppercase hover:bg-porsche-red transition-all"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              {currentProjects.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {currentProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ y: -10 }}
                      className="group bg-white rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-porsche-red/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 cursor-pointer flex flex-col"
                      onClick={() => handleProjClick(project.id)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={project.heroImage} 
                          alt={project.name} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 md:top-6 md:left-6">
                          <span className="bg-white/90 backdrop-blur-md text-dark text-[8px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-sm">
                            {project.type}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex items-center gap-2 text-white text-[11px] font-black tracking-widest uppercase">
                            <ImageIcon className="w-3 h-3" />
                            <span>View Gallery</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-10 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-porsche-red text-[8px] font-black tracking-widest uppercase mb-3">
                          <MapPin className="w-3 h-3" />
                          <span>{project.location}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-black text-dark mb-4 md:mb-6 uppercase tracking-tight group-hover:text-porsche-red transition-colors">
                          {project.name}
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 py-4 md:py-6 border-y border-gray-50">
                          <div>
                            <p className="text-dark/30 text-[8px] font-black tracking-widest uppercase mb-1">Starting Price</p>
                            <p className="text-dark font-technical font-bold text-xs md:text-sm">{project.price}</p>
                          </div>
                          <div>
                            <p className="text-dark/30 text-[8px] font-black tracking-widest uppercase mb-1">Handover</p>
                            <p className="text-dark font-technical font-bold text-xs md:text-sm">{project.handover}</p>
                          </div>
                        </div>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2 text-dark/40 text-[10px] md:text-[11px] font-black tracking-widest uppercase">
                            <Wallet className="w-3 h-3" />
                            <span>{project.paymentPlan}</span>
                          </div>
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-porsche-red group-hover:border-porsche-red transition-all duration-500">
                            <ArrowRight className="w-4 h-4 text-dark/40 group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-20 flex items-center justify-center gap-4">
                    <button 
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-porsche-red hover:text-porsche-red'}`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`w-12 h-12 rounded-full text-[12px] font-black transition-all ${currentPage === number ? 'bg-porsche-red text-white shadow-lg shadow-porsche-red/20' : 'hover:bg-gray-50 text-dark/40'}`}
                        >
                          {number}
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:border-porsche-red hover:text-porsche-red'}`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </>
            ) : (
                <div className="py-16 text-center border-2 border-dashed border-gray-100 rounded-[3rem]">
                  <Search className="w-12 h-12 text-dark/10 mx-auto mb-6" />
                  <p className="text-dark/30 text-xl font-light tracking-widest uppercase">No projects match your filters.</p>
                  <button onClick={resetFilters} className="mt-8 text-porsche-red text-[12px] font-black tracking-[0.3em] uppercase hover:underline">Clear all filters</button>
                </div>
              )}
            </motion.div>
          )}

          {subView === 'details' && selectedProject && (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24"
            >
              {/* Hero Section */}
              <div className="relative h-[50vh] md:h-[80vh] rounded-3xl md:rounded-[3rem] overflow-hidden mb-8 md:mb-16 shadow-2xl">
                <SmartImage 
                  src={selectedProject.heroImage} 
                  alt={selectedProject.name} 
                  fallbackCategory={selectedProject.type === 'Villa' ? 'villa' : selectedProject.location.includes('Harbour') || selectedProject.location.includes('Marina') ? 'waterfront' : 'skyscraper'}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 md:bottom-24 left-6 md:left-16 right-6 md:right-16">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                    <div>
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <span className="bg-porsche-red text-white text-[10px] md:text-[11px] font-black px-4 md:px-5 py-1.5 md:py-2 rounded-full tracking-[0.2em] md:tracking-[0.3em] uppercase">
                          {selectedProject.type}
                        </span>
                        <div className="flex items-center gap-2 text-white/60 text-[11px] md:text-[12px] font-black tracking-widest uppercase">
                          <MapPin className="w-4 h-4 text-porsche-red" />
                          <span>{selectedProject.location}</span>
                        </div>
                      </div>
                      <h1 className="text-3xl sm:text-5xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter leading-none uppercase mb-4">
                        {selectedProject.name}
                        <span className="text-porsche-red">.</span>
                      </h1>
                      <p className="text-white/60 text-sm md:text-xl font-light tracking-widest uppercase">
                        By {DEVELOPERS.find(d => d.id === selectedProject.developerId)?.name}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 md:gap-4">
                      <button 
                        onClick={onEnquire}
                        className="flex-1 md:flex-none bg-white text-dark px-6 md:px-12 py-4 md:py-5 text-[11px] md:text-[12px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-porsche-red hover:text-white transition-all duration-500 shadow-xl"
                      >
                        Enquire Now
                      </button>
                      <a 
                        href="https://wa.me/971529178630" 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-green-500 text-white p-4 md:p-5 rounded-full hover:bg-green-600 transition-all shadow-xl flex items-center justify-center"
                      >
                        <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                {/* Left Column: Info & Overview */}
                <div className="lg:col-span-8">
                  {/* Key Info Box */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-3xl md:rounded-[2rem] overflow-hidden mb-12 md:mb-16 shadow-sm">
                    {[
                      { label: 'Starting Price', value: selectedProject.price, icon: DollarSign },
                      { label: 'Handover Date', value: selectedProject.handover, icon: Calendar },
                      { label: 'Payment Plan', value: selectedProject.paymentPlan, icon: Wallet },
                      { label: 'Property Type', value: selectedProject.type, icon: Home }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-6 md:p-10 flex flex-col items-center text-center group hover:bg-gray-50 transition-colors">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-porsche-red mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                        <p className="text-dark/30 text-[8px] font-black tracking-widest uppercase mb-2">{item.label}</p>
                        <p className="text-dark font-technical font-bold text-xs md:text-base">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Overview */}
                  <div className="mb-12 md:mb-16">
                    <p className="text-porsche-red text-[12px] tracking-[0.5em] uppercase font-black mb-8">Project Overview</p>
                    <p className="text-dark/60 text-xl md:text-2xl font-light leading-relaxed mb-12">
                      {selectedProject.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProject.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-porsche-red/10 transition-all">
                          <CheckCircle2 className="w-5 h-5 text-porsche-red flex-shrink-0" />
                          <span className="text-dark font-technical font-bold text-xs uppercase tracking-widest">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-12 md:mb-16">
                    <p className="text-porsche-red text-[12px] tracking-[0.5em] uppercase font-black mb-12">World-Class Amenities</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      {selectedProject.amenities.map((amenity, i) => (
                        <div key={i} className="flex flex-col gap-4 group">
                          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-porsche-red group-hover:text-white transition-all duration-500">
                            <Layout className="w-5 h-5" />
                          </div>
                          <span className="text-dark font-technical font-bold text-[12px] uppercase tracking-widest">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Plan Breakdown */}
                  {selectedProject.paymentPlanBreakdown && (
                    <div className="mb-12 md:mb-16">
                      <p className="text-porsche-red text-[12px] tracking-[0.5em] uppercase font-black mb-8 md:mb-12">Payment Plan Breakdown</p>
                      <div className="space-y-3 md:space-y-4">
                        {selectedProject.paymentPlanBreakdown.map((plan, i) => (
                          <div key={i} className="flex items-center justify-between p-5 md:p-8 bg-gray-50 rounded-2xl group hover:bg-dark hover:text-white transition-all duration-500">
                            <span className="text-dark/60 group-hover:text-white/60 font-technical font-bold text-[10px] md:text-xs uppercase tracking-widest leading-tight pr-4">{plan.milestone}</span>
                            <span className="text-dark group-hover:text-porsche-red font-display font-black text-xl md:text-2xl whitespace-nowrap">{plan.percentage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Gallery & CTA */}
                <div className="lg:col-span-4">
                  <div className="sticky top-32 space-y-12">
                    {/* Gallery Preview */}
                    <div>
                      <p className="text-porsche-red text-[12px] tracking-[0.5em] uppercase font-black mb-8">Gallery</p>
                      <div className="grid grid-cols-1 gap-6">
                        {selectedProject.gallery.map((img, i) => (
                          <div key={i} className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
                            <SmartImage 
                              src={img} 
                              alt="Gallery" 
                              fallbackCategory={selectedProject.type === 'Villa' ? 'villa' : 'waterfront'}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                              containerClassName="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Maximize className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Side CTA */}
                    <div className="bg-dark p-10 md:p-12 rounded-[3rem] text-center shadow-2xl">
                      <p className="text-porsche-red text-[11px] tracking-[0.5em] uppercase font-black mb-6">Interested?</p>
                      <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter mb-8">Start Your Journey<span className="text-porsche-red">.</span></h3>
                      <div className="space-y-4">
                        <button 
                          onClick={onEnquire}
                          className="w-full bg-porsche-red text-white py-5 text-[12px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-dark transition-all duration-500"
                        >
                          Enquire Now
                        </button>
                        <button className="w-full bg-white/10 text-white py-5 text-[12px] font-black tracking-[0.3em] uppercase hover:bg-white/20 transition-all duration-500">
                          Download Brochure
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

const PreApprovalForm = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    salary: '',
    bank: '',
    company: '',
    otherIncome: '',
    employmentType: 'Salaried',
    residencyStatus: 'Resident'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Mortgage Pre-Approval Request - ${formData.fullName}`;
    const body = `
Pre-Approval Application Details:
--------------------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Mobile: ${formData.mobile}
Monthly Salary: ${formData.salary} AED
Bank Name: ${formData.bank}
Company Name: ${formData.company}
Other Monthly Income: ${formData.otherIncome || 'None'}
Employment Type: ${formData.employmentType}
Residency Status: ${formData.residencyStatus}

This request was generated from the Rock Deals Smart Hub.
    `;
    
    window.location.href = `mailto:info@rock-deals.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
  };

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(val);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-porsche-red text-white flex items-center justify-center mx-auto mb-12">
            <CreditCard className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-display font-black text-dark uppercase tracking-tighter mb-6">Application Sent.</h2>
          <p className="text-dark/50 text-lg font-light mb-12 leading-relaxed">
            Your pre-approval request has been submitted. Our banking specialists will contact you within 24 hours to finalize your assessment.
          </p>
          <button 
            onClick={onBack}
            className="bg-dark text-white px-12 py-6 text-[12px] tracking-[0.4em] uppercase font-black hover:bg-porsche-red transition-all duration-500"
          >
            Return to Hub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-dark">
      {/* Header */}
      <header className="px-6 md:px-8 lg:px-24 py-4 md:py-8 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-xl z-[100]">
        <div className="flex items-baseline gap-1">
          <span className="text-dark font-display font-black text-xl md:text-2xl tracking-tighter">ROCK</span>
          <span className="text-dark/40 font-display font-light text-xl md:text-2xl tracking-tighter">DEALS</span>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 md:gap-3 text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-black hover:text-porsche-red transition-colors min-h-[44px]"
        >
          <X className="w-4 h-4" /> <span className="hidden sm:inline">Cancel Application</span><span className="sm:hidden">Cancel</span>
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-8 py-8 md:py-16">
        <div className="mb-12">
          <p className="text-porsche-red text-[12px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-black mb-6">Mortgage Intelligence</p>
          <h1 className="text-4xl md:text-8xl font-display font-black text-dark tracking-tighter leading-none uppercase">
            Free Pre-<br />
            <span className="text-porsche-red">Approval.</span>
          </h1>
          <p className="mt-8 text-dark/40 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Secure your financing before you browse. Our experts work with top UAE banks to get you the best rates and terms.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {/* Personal Info */}
          <div className="space-y-8">
            <h3 className="text-[12px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-black text-dark/20 border-b border-gray-100 pb-4">Personal Information</h3>
            
            <div className="space-y-4">
              <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">Full Name (As per Passport)</label>
              <input 
                required
                type="text" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-0 text-xl font-technical font-bold focus:border-porsche-red outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-0 text-lg font-technical font-bold focus:border-porsche-red outline-none transition-all"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">Mobile Number</label>
                <input 
                  required
                  type="tel" 
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-0 text-lg font-technical font-bold focus:border-porsche-red outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">UAE Residency Status</label>
              <div className="flex gap-4">
                {['Resident', 'Non-Resident'].map((status) => (
                  <button 
                    key={status}
                    type="button"
                    onClick={() => setFormData({...formData, residencyStatus: status})}
                    className={`flex-1 py-4 border-2 transition-all font-technical font-bold text-[11px] tracking-widest uppercase ${formData.residencyStatus === status ? 'border-porsche-red bg-porsche-red text-white' : 'border-gray-100 hover:border-dark/10'}`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Income Info */}
          <div className="space-y-8">
            <h3 className="text-[12px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-black text-dark/20 border-b border-gray-100 pb-4">Income Details</h3>
            
            <div className="space-y-4">
              <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">Employment Type</label>
              <div className="flex gap-4">
                {['Salaried', 'Self-Employed'].map((type) => (
                  <button 
                    key={type}
                    type="button"
                    onClick={() => setFormData({...formData, employmentType: type})}
                    className={`flex-1 py-4 border-2 transition-all font-technical font-bold text-[11px] tracking-widest uppercase ${formData.employmentType === type ? 'border-porsche-red bg-porsche-red text-white' : 'border-gray-100 hover:border-dark/10'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">Monthly Salary / Income (AED)</label>
              <div className="relative">
                <input 
                  required
                  type="number" 
                  value={formData.salary}
                  onChange={(e) => setFormData({...formData, salary: e.target.value})}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-0 text-xl font-technical font-bold focus:border-porsche-red outline-none transition-all"
                />
                <div className="absolute right-0 bottom-4 text-dark/20 font-technical font-bold">AED</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">Company Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-0 text-lg font-technical font-bold focus:border-porsche-red outline-none transition-all"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">Primary Bank</label>
                <input 
                  required
                  type="text" 
                  value={formData.bank}
                  onChange={(e) => setFormData({...formData, bank: e.target.value})}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-0 text-lg font-technical font-bold focus:border-porsche-red outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[12px] tracking-[0.1em] md:tracking-[0.3em] uppercase font-black text-dark/40">Other Monthly Income (Optional)</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={formData.otherIncome}
                  onChange={(e) => setFormData({...formData, otherIncome: e.target.value})}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-0 text-lg font-technical font-bold focus:border-porsche-red outline-none transition-all"
                />
                <div className="absolute right-0 bottom-4 text-dark/20 font-technical font-bold">AED</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 pt-12 flex flex-col items-center">
            <button 
              type="submit"
              className="w-full max-w-md bg-porsche-red text-white py-5 font-black tracking-[0.3em] uppercase text-[12px] hover:bg-dark transition-all duration-500 shadow-[0_15px_30px_rgba(213,0,28,0.2)]"
            >
              Request Pre-Approval Assessment
            </button>
            <p className="mt-8 text-center text-[11px] text-dark/30 tracking-widest uppercase font-black">
              By submitting, you agree to our financial privacy terms and banking data protocols.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'calculator' | 'roi-calculator' | 'developers' | 'pre-approval' | 'area-guide' | 'blog' | 'off-plan' | 'new-launches'>('home');
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [offPlanInitialSearch, setOffPlanInitialSearch] = useState('');
  const [showNewsPopup, setShowNewsPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Properties');
  const [showAllProperties, setShowAllProperties] = useState(false);
  const [gmpQuotaExceeded, setGmpQuotaExceeded] = useState(false);

  useEffect(() => {
    const onQuota = () => setGmpQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', onQuota);
    return () => window.removeEventListener('gmp-quota-exceeded', onQuota);
  }, []);

  // Deterministic daily rotation seed based on calendar date so top 8-10 listings rotate fresh every single day
  const dailyRotatedProperties = useMemo(() => {
    const today = new Date();
    const daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const offset = daySeed % PROPERTIES.length;
    return [...PROPERTIES.slice(offset), ...PROPERTIES.slice(0, offset)];
  }, []);

  const displayProperties = useMemo(() => {
    const filtered = dailyRotatedProperties.filter(
      p => activeFilter === 'All Properties' || p.category === activeFilter
    );
    if (!showAllProperties && filtered.length > 9) {
      return filtered.slice(0, 9);
    }
    return filtered;
  }, [dailyRotatedProperties, activeFilter, showAllProperties]);
  
  // Compare Properties State (Max 3 units side-by-side)
  const [compareList, setCompareList] = useState<number[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareToast, setCompareToast] = useState<string | null>(null);

  const toggleCompare = (id: number) => {
    setCompareList(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 3) {
        setCompareToast('Maximum 3 properties can be compared simultaneously.');
        setTimeout(() => setCompareToast(null), 3500);
        return prev;
      }
      return [...prev, id];
    });
  };

  const removeCompare = (id: number) => {
    setCompareList(prev => prev.filter(item => item !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const addCompare = (id: number) => {
    if (compareList.length < 3 && !compareList.includes(id)) {
      setCompareList(prev => [...prev, id]);
    }
  };

  const selectedCompareProperties = PROPERTIES.filter(p => compareList.includes(p.id));

  useEffect(() => {
    // Check if shared article ID exists in URL query params
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const articleId = params.get('article');
      if (articleId) {
        const idNum = parseInt(articleId, 10);
        if (!isNaN(idNum) && BLOG_POSTS.some(p => p.id === idNum)) {
          setSelectedBlogId(idNum);
          setView('blog');
        }
      }
      if (params.get('view') === 'offplan' || params.get('view') === 'off-plan') {
        setView('off-plan');
      }
      if (params.get('view') === 'launches' || params.get('view') === 'new-launches') {
        setView('new-launches');
      }
    }

    const isDismissed = sessionStorage.getItem('news-popup-dismissed');
    if (isDismissed !== 'true' && view !== 'blog' && view !== 'off-plan' && view !== 'new-launches') {
      const timer = setTimeout(() => {
        setShowNewsPopup(true);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setShowNewsPopup(false);
    }
  }, [view]);

  // Search Bar State
  const [searchTab, setSearchTab] = useState('RENT');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchPrice, setSearchPrice] = useState({ min: '', max: '' });
  const [searchBeds, setSearchBeds] = useState({ beds: 0, baths: 0 });
  const [searchPropertyType, setSearchPropertyType] = useState('Property Type');
  const [searchFurnishStatus, setSearchFurnishStatus] = useState('Furnish Status');
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setActivePopover(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Enquiry Modal State
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', mobile: '' });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Property Enquiry from ${enquiryForm.name}`;
    const body = `
Enquiry Details:
----------------
Name: ${enquiryForm.name}
Email: ${enquiryForm.email}
Mobile: ${enquiryForm.mobile}

Search Criteria:
----------------
Type: ${searchTab}
Location: ${searchLocation || 'Not specified'}
Price: ${searchPrice.max || 'Not specified'} AED
Beds: ${searchBeds.beds === 0 ? 'Studio' : searchBeds.beds}
Baths: ${searchBeds.baths}
Property Type: ${searchPropertyType}
Furnish: ${searchFurnishStatus}
    `;
    
    window.location.href = `mailto:info@rock-deals.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsEnquiryModalOpen(false);
    setEnquiryForm({ name: '', email: '', mobile: '' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {view === 'calculator' ? (
        <PaymentCalculator onBack={() => setView('home')} />
      ) : view === 'roi-calculator' ? (
        <ROICalculator onBack={() => setView('home')} />
      ) : view === 'developers' ? (
        <DevelopersView onBack={() => setView('home')} onEnquire={() => setIsEnquiryModalOpen(true)} />
      ) : view === 'area-guide' ? (
        <AreaGuide onBack={() => setView('home')} />
      ) : view === 'pre-approval' ? (
        <PreApprovalForm onBack={() => setView('home')} />
      ) : view === 'blog' ? (
        <BlogView 
          onBack={() => {
            setView('home');
            setSelectedBlogId(null);
          }} 
          onEnquire={() => setIsEnquiryModalOpen(true)} 
          initialPostId={selectedBlogId}
        />
      ) : view === 'new-launches' ? (
        <NewLaunchesView
          onBack={() => setView('home')}
          onEnquire={(projectName) => {
            setIsEnquiryModalOpen(true);
            if (projectName) {
              setEnquiryForm(prev => ({
                ...prev,
                name: prev.name || '',
                email: prev.email || '',
                mobile: prev.mobile || ''
              }));
            }
          }}
          onOpenCalculator={() => setView('calculator')}
        />
      ) : view === 'off-plan' ? (
        <OffPlanView
          onBack={() => setView('home')}
          onEnquire={(projectName) => {
            setIsEnquiryModalOpen(true);
            if (projectName) {
              setEnquiryForm(prev => ({
                ...prev,
                name: prev.name || '',
                email: prev.email || '',
                mobile: prev.mobile || ''
              }));
            }
          }}
          onOpenCalculator={() => setView('calculator')}
          initialSearch={offPlanInitialSearch}
        />
      ) : (
        <div className="min-h-screen bg-white selection:bg-dark selection:text-white">
          {/* Google Maps Platform Quota Defense Banner */}
          {gmpQuotaExceeded && (
            <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-[200] shadow-sm">
              <span>
                Google Maps Platform quota reached. If you are the app owner, visit{' '}
                <a
                  href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold text-amber-950 hover:text-amber-800"
                >
                  maps developer site
                </a>{' '}
                for instructions to update your account.
              </span>
            </div>
          )}

          {/* Header */}
          <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 h-[3px] bg-porsche-red z-[60]"
          style={{ 
            width: '0%',
            scaleX: 0,
            transformOrigin: 'left'
          }}
          animate={{ 
            scaleX: typeof window !== 'undefined' ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0
          }}
        />
        
        <div className="px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-500 gap-4 ${isScrolled ? 'h-[60px]' : 'h-[70px] md:h-[80px]'}`}>
            <a className="cursor-pointer group flex-shrink-0" href="/">
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1">
                  <span className={`${isScrolled ? 'text-dark text-xl' : 'text-white text-2xl'} font-display font-black tracking-tight transition-all duration-500`}>ROCK</span>
                  <span className={`font-display font-light tracking-tight transition-all duration-500 ${isScrolled ? 'text-dark/40 text-xl' : 'text-white/40 text-2xl'}`}>DEALS</span>
                </div>
              </div>
            </a>

            <div className="hidden lg:flex items-center justify-end flex-1">
              <div className={`flex items-center transition-all duration-500 ${isScrolled ? 'gap-6 xl:gap-10' : 'gap-8 xl:gap-12'}`}>
                {[
                  { name: 'Properties', href: '#property-types' },
                  { 
                    name: 'NEW LAUNCHES', 
                    onClick: () => setView('new-launches'),
                    badge: '41 LIVE',
                    isNewLaunch: true
                  },
                  { 
                    name: 'OFF PLAN', 
                    onClick: () => { setOffPlanInitialSearch(''); setView('off-plan'); },
                    badge: '36 PROJECTS',
                    isOffPlan: true
                  },
                  { name: 'Daily News', onClick: () => setView('blog') },
                  { name: 'Area Guide', onClick: () => setView('area-guide') },
                  { name: 'Developers', onClick: () => setView('developers') },
                  { name: 'ROI Calculator', onClick: () => setView('roi-calculator') },
                  { name: 'Map Radar', href: '#map' },
                  { name: 'Live Rates', href: '#market-rates' },
                  { name: 'Payment Plans', onClick: () => setView('calculator') },
                  { name: 'Enquire Now', onClick: () => setIsEnquiryModalOpen(true) },
                  { name: 'Contact', href: '#contact' }
                ].map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 tracking-[0.25em] uppercase font-black transition-all duration-300 cursor-pointer whitespace-nowrap border-b-2 py-2 ${
                      item.isNewLaunch
                        ? 'text-porsche-red border-porsche-red text-[12px] font-black'
                        : item.isOffPlan
                          ? isScrolled ? 'text-dark border-dark text-[11px] font-black' : 'text-white border-white/60 text-[12px] font-black'
                          : isScrolled ? 'text-dark text-[11px] border-transparent hover:text-porsche-red' : 'text-white text-[12px] border-transparent hover:text-porsche-red'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[7px] font-technical font-black bg-porsche-red text-white rounded-full tracking-wider animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            <button 
              className={`lg:hidden w-12 h-12 flex items-center justify-center cursor-pointer transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[200] p-6 md:p-10 flex flex-col"
            >
              <div className="flex justify-end mb-12">
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-dark"><X className="w-8 h-8" /></button>
              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                {[
                  { name: 'Properties', href: '#property-types' },
                  { name: 'NEW LAUNCHES (41 LIVE)', onClick: () => setView('new-launches'), highlight: true },
                  { name: 'OFF PLAN PROJECTS', onClick: () => { setOffPlanInitialSearch(''); setView('off-plan'); }, highlight: false },
                  { name: 'Daily News', onClick: () => setView('blog') },
                  { name: 'Developers', onClick: () => setView('developers') },
                  { name: 'ROI Calculator', onClick: () => setView('roi-calculator') },
                  { name: 'Google Maps Radar', href: '#map' },
                  { name: 'Live Rates (Gold & BTC)', href: '#market-rates' },
                  { name: 'Payment Plans', onClick: () => setView('calculator') },
                  { name: 'Enquire Now', onClick: () => setIsEnquiryModalOpen(true) },
                  { name: 'Features', href: '#features' },
                  { name: 'Contact', href: '#contact' }
                ].map((item, index) => (
                  <motion.a 
                    key={item.name} 
                    href={item.href} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }} 
                    className={`text-2xl md:text-3xl font-display font-black tracking-tight uppercase hover:text-porsche-red transition-colors flex items-center justify-between ${
                      item.highlight ? 'text-porsche-red' : 'text-dark'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.highlight && (
                      <span className="text-[10px] font-technical px-2.5 py-1 bg-porsche-red text-white rounded-full tracking-widest">
                        LIVE
                      </span>
                    )}
                  </motion.a>
                ))}
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="mt-8 md:mt-12 bg-porsche-red text-white px-8 py-5 text-[12px] font-black tracking-[0.3em] uppercase text-center shadow-[0_15px_30px_rgba(213,0,28,0.2)] active:scale-95 transition-all"
                >
                  Book Viewing
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-[88vh] sm:min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            alt="Luxury Dubai Skyline Real Estate" 
            className="w-full h-full object-cover object-center" 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/45"></div>
          
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:160px_160px]"></div>
          </div>
        </div>

        <div className="relative w-full px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-8 sm:pb-14 flex flex-col items-center text-center">
          <div className="max-w-5xl mb-4 sm:mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2.5 sm:gap-4 mb-3 sm:mb-5"
            >
              <div className="w-6 sm:w-12 h-[2px] bg-porsche-red"></div>
              <p className="text-white text-[9px] sm:text-[11px] md:text-[12px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-technical font-bold opacity-75">
                The New Standard of Luxury
              </p>
              <div className="w-6 sm:w-12 h-[2px] bg-porsche-red"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.12] mb-3 sm:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] uppercase text-center mx-auto text-balance"
            >
              <span className="text-[0.8em] sm:text-[0.85em] md:text-[0.88em] font-extrabold tracking-[0.03em] sm:tracking-[0.05em] inline-block align-baseline">Best Property Deals in</span>{' '}
              <span className="text-porsche-red glow-porsche tracking-normal sm:tracking-[0.02em] inline-block">Dubai.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-[9px] sm:text-xs font-light tracking-[0.2em] sm:tracking-[0.35em] uppercase max-w-sm sm:max-w-none mx-auto"
            >
              Buy Property in Dubai with 1% Payment Plans and Zero Commission
            </motion.p>
          </div>

          {/* Advanced Search Bar */}
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-4xl bg-black/35 backdrop-blur-3xl border border-white/15 rounded-2xl p-3 sm:p-4 md:p-5 shadow-[0_10px_50px_rgba(0,0,0,0.6)] relative z-10 group"
          >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-porsche-red/10 via-transparent to-porsche-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-2xl"></div>
            
            {/* Tabs - Single scrollable row on mobile for seamless thumb swiping */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1 mb-3 sm:mb-4 justify-start sm:justify-center relative z-10 -mx-1 px-1">
              {['RENT', 'BUY', 'NEW LAUNCHES', 'OFF PLAN', 'COMMERCIAL'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setSearchTab(tab);
                    if (tab === 'NEW LAUNCHES') {
                      setView('new-launches');
                    } else if (tab === 'OFF PLAN') {
                      setOffPlanInitialSearch(searchLocation);
                      setView('off-plan');
                    } else if (tab === 'BUY') {
                      setActiveFilter('All Properties');
                      setShowAllProperties(false);
                      const el = document.getElementById('property-types');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'RENT') {
                      setActiveFilter('Apartments');
                      setShowAllProperties(false);
                      const el = document.getElementById('property-types');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-[12px] md:text-[13px] font-technical font-bold tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 min-h-[44px] shrink-0 whitespace-nowrap ${
                    searchTab === tab 
                      ? 'bg-porsche-red text-white shadow-[0_0_15px_rgba(213,0,28,0.5)]' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Inputs Grid - Uniform height and clear inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-2 relative z-10">
              {/* Location Input */}
              <div className="relative lg:col-span-3">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-porsche-red pointer-events-none" />
                <input 
                  type="text"
                  placeholder="Search Location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full h-11 sm:h-12 bg-white/10 border border-white/15 rounded-xl pl-10 pr-3 text-white text-[13px] sm:text-sm font-technical tracking-wider focus:outline-none focus:border-porsche-red transition-all placeholder:text-white/40"
                />
              </div>

              {/* Price Input */}
              <div className="relative lg:col-span-2">
                <div className="relative h-11 sm:h-12">
                  <input 
                    type="text"
                    placeholder="Price (AED)"
                    value={searchPrice.max}
                    onChange={(e) => setSearchPrice({...searchPrice, max: e.target.value.replace(/[^0-9]/g, '')})}
                    className="w-full h-full bg-white/10 border border-white/15 rounded-xl px-3.5 pr-10 text-white text-[13px] sm:text-sm font-technical tracking-wider focus:outline-none focus:border-porsche-red transition-all placeholder:text-white/40"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-white/40 pointer-events-none">AED</div>
                </div>
              </div>

              {/* Beds & Baths Dropdown */}
              <div className="relative lg:col-span-2">
                <button 
                  onClick={() => setActivePopover(activePopover === 'beds' ? null : 'beds')}
                  className="w-full h-11 sm:h-12 bg-white/10 border border-white/15 rounded-xl px-3.5 text-white text-[13px] sm:text-sm font-technical tracking-wider flex items-center justify-between hover:bg-white/15 transition-all whitespace-nowrap overflow-hidden"
                >
                  <span className="truncate">
                    {searchBeds.beds === 0 && searchBeds.baths === 0 ? 'Beds & Baths' : 
                     searchBeds.beds === 0 ? `Studio / ${searchBeds.baths}Ba` : 
                     `${searchBeds.beds}B / ${searchBeds.baths}Ba`}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform shrink-0 ml-1.5 ${activePopover === 'beds' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activePopover === 'beds' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 md:left-auto md:right-0 mt-3 bg-black/95 backdrop-blur-3xl border border-white/15 rounded-2xl p-5 z-[60] shadow-2xl min-w-[280px] md:min-w-[320px]"
                    >
                      <div className="space-y-5">
                        <div>
                          <p className="text-white/50 text-[11px] font-technical font-bold tracking-widest uppercase mb-2.5">Bedrooms</p>
                          <div className="flex flex-wrap gap-1.5">
                            {['ST', 1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                              <button 
                                key={n}
                                onClick={() => setSearchBeds({...searchBeds, beds: n === 'ST' ? 0 : Number(n)})}
                                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-[11px] font-technical font-bold transition-all ${((n === 'ST' && searchBeds.beds === 0) || (typeof n === 'number' && searchBeds.beds === n)) ? 'bg-porsche-red text-white shadow-[0_0_15px_rgba(213,0,28,0.4)]' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-white/50 text-[11px] font-technical font-bold tracking-widest uppercase mb-2.5">Bathrooms</p>
                          <div className="flex flex-wrap gap-1.5">
                            {[1, 2, 3, 4, 5, 6].map(n => (
                              <button 
                                key={n}
                                onClick={() => setSearchBeds({...searchBeds, baths: n})}
                                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-[11px] font-technical font-bold transition-all ${searchBeds.baths === n ? 'bg-porsche-red text-white shadow-[0_0_15px_rgba(213,0,28,0.4)]' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <button 
                            onClick={() => { setSearchBeds({beds: 0, baths: 0}); setActivePopover(null); }}
                            className="flex-1 py-2.5 bg-white/10 text-[11px] font-technical font-bold text-white/50 uppercase tracking-widest hover:bg-white/20 transition-all rounded-xl"
                          >
                            Reset
                          </button>
                          <button 
                            onClick={() => setActivePopover(null)}
                            className="flex-1 py-2.5 bg-porsche-red text-[11px] font-technical font-bold text-white uppercase tracking-widest hover:bg-porsche-red/80 transition-all rounded-xl shadow-[0_0_15px_rgba(213,0,28,0.4)]"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Property Type Dropdown */}
              <div className="relative lg:col-span-2">
                <button 
                  onClick={() => setActivePopover(activePopover === 'type' ? null : 'type')}
                  className="w-full h-11 sm:h-12 bg-white/10 border border-white/15 rounded-xl px-3.5 text-white text-[13px] sm:text-sm font-technical tracking-wider flex items-center justify-between hover:bg-white/15 transition-all whitespace-nowrap overflow-hidden"
                >
                  <span className="truncate">{searchPropertyType}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform shrink-0 ml-1.5 ${activePopover === 'type' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activePopover === 'type' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 md:left-auto md:right-0 mt-3 bg-black/95 backdrop-blur-3xl border border-white/15 rounded-2xl p-2 z-[60] shadow-2xl min-w-[200px]"
                    >
                      {['Studio', 'Apartment', 'Townhouse', 'Villa', 'Hotel Apartments'].map(type => (
                        <button 
                          key={type}
                          onClick={() => { setSearchPropertyType(type); setActivePopover(null); }}
                          className="w-full text-left px-4 py-2.5 text-[11px] font-technical font-bold tracking-widest uppercase text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                        >
                          {type}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Furnish Status Dropdown */}
              <div className="relative lg:col-span-1">
                <button 
                  onClick={() => setActivePopover(activePopover === 'furnish' ? null : 'furnish')}
                  className="w-full h-11 sm:h-12 bg-white/10 border border-white/15 rounded-xl px-3.5 text-white text-[13px] sm:text-sm font-technical tracking-wider flex items-center justify-between hover:bg-white/15 transition-all whitespace-nowrap overflow-hidden"
                >
                  <span className="truncate">{searchFurnishStatus === 'Furnish Status' ? 'Furnish' : searchFurnishStatus}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform shrink-0 ml-1.5 ${activePopover === 'furnish' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activePopover === 'furnish' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 md:left-auto md:right-0 mt-3 bg-black/95 backdrop-blur-3xl border border-white/15 rounded-2xl p-2 z-[60] shadow-2xl min-w-[200px]"
                    >
                      {['Furnished', 'Fully Furnished', 'Semi Furnished', 'Vacant'].map(status => (
                        <button 
                          key={status}
                          onClick={() => { setSearchFurnishStatus(status); setActivePopover(null); }}
                          className="w-full text-left px-4 py-2.5 text-[11px] font-technical font-bold tracking-widest uppercase text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                        >
                          {status}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Enquiry / Off-Plan Button */}
              <button 
                onClick={() => {
                  if (searchTab === 'NEW LAUNCHES') {
                    setView('new-launches');
                  } else if (searchTab === 'OFF PLAN') {
                    setOffPlanInitialSearch(searchLocation);
                    setView('off-plan');
                  } else {
                    setIsEnquiryModalOpen(true);
                  }
                }}
                className="lg:col-span-2 h-11 sm:h-12 bg-porsche-red text-white rounded-xl px-4 text-[12px] font-technical font-bold tracking-[0.2em] uppercase hover:bg-porsche-red/90 transition-all shadow-[0_0_20px_rgba(213,0,28,0.4)] active:scale-95 flex items-center justify-center gap-1.5"
              >
                {searchTab === 'NEW LAUNCHES' ? 'New Launches' : searchTab === 'OFF PLAN' ? 'View Off-Plan' : 'Submit Enquiry'}
              </button>
            </div>

            {/* Daily Fresh Curated Shortcuts - 8 to 10 daily fresh listings */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mt-3 pt-3 border-t border-white/10 text-xs relative z-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-white/70 font-technical text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                  Today&apos;s Fresh Curation (8–10 Daily Rotated Units)
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('All Properties');
                    setShowAllProperties(false);
                    const el = document.getElementById('property-types');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-2.5 sm:px-3 py-1 bg-white/10 hover:bg-porsche-red hover:text-white border border-white/15 rounded-full text-white/90 text-[10px] font-technical uppercase tracking-wider transition-all flex items-center gap-1 shadow-sm active:scale-95"
                >
                  <Flame className="w-3 h-3 text-porsche-red" />
                  <span>Fresh 9 Today</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('Luxury Villas');
                    setShowAllProperties(false);
                    const el = document.getElementById('property-types');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-2.5 sm:px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full text-white/80 hover:text-white text-[10px] font-technical uppercase tracking-wider transition-all active:scale-95"
                >
                  <span>Villas Top 8</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('Apartments');
                    setShowAllProperties(false);
                    const el = document.getElementById('property-types');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-2.5 sm:px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full text-white/80 hover:text-white text-[10px] font-technical uppercase tracking-wider transition-all active:scale-95"
                >
                  <span>Waterfront 8</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setView('new-launches');
                  }}
                  className="px-2.5 sm:px-3 py-1 bg-porsche-red/80 hover:bg-porsche-red border border-porsche-red rounded-full text-white text-[10px] font-technical font-bold uppercase tracking-wider transition-all flex items-center gap-1 active:scale-95"
                >
                  <Zap className="w-3 h-3 text-white" />
                  <span>New Launches</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section 
        id="filters" 
        className={`px-3 sm:px-6 md:px-8 lg:px-16 py-2.5 sm:py-3.5 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky z-40 transition-all duration-300 ${isScrolled ? 'top-[56px] sm:top-[60px] shadow-md' : 'top-[56px] sm:top-[70px] md:top-[80px] shadow-sm'}`}
      >
        <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar -mx-4 px-4">
          <div className="flex items-center justify-start md:justify-center gap-3 min-w-max">
            {['All Properties', 'New Launches', 'Off-Plan', 'Luxury Villas', 'Apartments', 'Townhouses', 'Ready to Move', 'Developers'].map((filter) => (
              <button 
                key={filter} 
                onClick={() => {
                  if (filter === 'Developers') {
                    setView('developers');
                  } else if (filter === 'New Launches') {
                    setView('new-launches');
                  } else if (filter === 'Off-Plan') {
                    setOffPlanInitialSearch('');
                    setView('off-plan');
                  } else {
                    setActiveFilter(filter);
                  }
                }}
                className={`group flex items-center gap-2 rounded-full border font-black tracking-[0.2em] uppercase transition-all duration-500 shadow-sm hover:shadow-md whitespace-nowrap min-h-[40px] md:min-h-0
                  ${filter === 'Developers' || filter === 'Off-Plan' || filter === 'New Launches'
                    ? 'bg-porsche-red text-white border-porsche-red shadow-[0_0_15px_rgba(213,0,28,0.3)]' 
                    : activeFilter === filter 
                      ? 'bg-dark text-white border-dark' 
                      : 'bg-white text-dark border-gray-100 hover:bg-gray-50'
                  } 
                  ${isScrolled ? 'px-4 py-2 md:py-1.5 text-[10px] md:text-[9px]' : 'px-5 py-2.5 md:py-2 text-[11px] md:text-[10px]'}`}
              >
                <span className={`rounded-full transition-all duration-300 
                  ${filter === 'Developers' || filter === 'New Launches' || filter === 'Off-Plan'
                    ? 'bg-white scale-125' 
                    : activeFilter === filter 
                      ? 'bg-white scale-125' 
                      : 'bg-porsche-red group-hover:scale-125'
                  } 
                  ${isScrolled ? 'w-1 h-1' : 'w-1.5 h-1.5'}`}
                ></span>
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-4 sm:px-8 lg:px-24 py-10 sm:py-16 md:py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 md:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <div className="w-8 sm:w-12 h-[1px] bg-porsche-red"></div>
              <span className="text-porsche-red text-[10px] sm:text-[12px] tracking-[0.35em] uppercase font-black">Philosophy</span>
            </motion.div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-dark leading-[0.95] mb-5 sm:mb-8 md:mb-12 tracking-tighter">
              DUBAI<br />
              <span className="text-porsche-red">REAL ESTATE</span><br />
              DEALS.
            </h2>
            <p className="text-dark/60 text-sm sm:text-base md:text-xl leading-relaxed font-light max-w-xl mb-6 sm:mb-8 md:mb-12">
              Rock Deals specializes in Dubai distress deals, off-plan properties, and high ROI investments. We provide a comprehensive Dubai property investment guide to help you find the cheapest property in Dubai with the best payment plans.
            </p>
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 sm:gap-4 text-dark text-[11px] sm:text-[12px] font-black tracking-[0.35em] uppercase group min-h-[44px]"
            >
              Learn Our Method <ArrowRight className="w-4 h-4 text-porsche-red group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
          <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {[
              { label: 'Legal Transparency', value: '100%' },
              { label: 'Expert Support', value: '24/7' },
              { label: 'Smart Analytics', value: 'AI' },
              { label: 'Verified Listings', value: 'DLD' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 sm:p-8 md:p-12 hover:bg-gray-50 transition-colors group">
                <div className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-dark mb-1 sm:mb-3 group-hover:text-porsche-red transition-colors">{stat.value}</div>
                <div className="text-dark/40 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Section (Filtered Grid) */}
      <section id="property-types" className="px-4 sm:px-8 lg:px-24 py-10 sm:py-16 md:py-24 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-14 md:mb-20 gap-6 md:gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3 sm:mb-5">
              <span className="w-8 h-[2px] bg-porsche-red"></span>
              <p className="text-porsche-red text-[10px] sm:text-[12px] tracking-[0.3em] sm:tracking-[0.45em] uppercase font-black flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>
                  {showAllProperties
                    ? `Full Portfolio • All ${PROPERTIES.length} Verified Properties`
                    : `Daily Fresh Curation • ${displayProperties.length} Handpicked Units • Rotates Every 24H`}
                </span>
              </p>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display font-black text-dark tracking-tighter leading-[0.8]">
              FEATURED<br />
              <span className="text-porsche-red">LISTINGS.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-dark/50 text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-light text-left md:text-right">
              {showAllProperties
                ? `Browsing full inventory of ${PROPERTIES.length} verified UAE properties. Select up to 3 units to compare side-by-side.`
                : `Showing today's ${displayProperties.length} curated luxury residences, rotated fresh every 24 hours to keep the interface fast and lightweight.`
              }
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {PROPERTIES.filter(p => activeFilter === 'All Properties' || p.category === activeFilter).length > 9 && (
                <button
                  onClick={() => setShowAllProperties(!showAllProperties)}
                  className="px-4 py-2 rounded-full border border-dark/20 text-dark hover:border-porsche-red hover:text-porsche-red text-[11px] font-technical font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  {showAllProperties ? 'Show Daily Top 9' : `View All (${PROPERTIES.filter(p => activeFilter === 'All Properties' || p.category === activeFilter).length})`}
                </button>
              )}
              {compareList.length > 0 && (
                <button
                  onClick={() => setIsCompareModalOpen(true)}
                  className="px-4 py-2 bg-dark hover:bg-porsche-red text-white text-[11px] font-technical uppercase font-bold tracking-wider flex items-center gap-2 shadow-lg transition-colors rounded-full"
                >
                  <Layers className="w-3.5 h-3.5 text-porsche-red" />
                  <span>Compare ({compareList.length}/3)</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {displayProperties.map((prop) => (
              <motion.div 
                layout
                key={prop.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative aspect-[3/2] rounded-3xl md:rounded-[2rem] overflow-hidden bg-gray-100 cursor-pointer transition-all duration-300 ${
                  compareList.includes(prop.id) ? 'ring-4 ring-porsche-red shadow-2xl' : ''
                }`}
              >
                <img 
                  src={prop.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt={prop.title}
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 sm:top-6 left-5 sm:left-7 z-10">
                  <span className="text-white/80 text-[11px] sm:text-[12px] font-black tracking-[0.25em] uppercase bg-dark/60 backdrop-blur-md px-2.5 py-1">
                    {prop.category}
                  </span>
                </div>

                {/* Compare Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleCompare(prop.id);
                  }}
                  className={`absolute top-4 sm:top-6 right-5 sm:right-7 z-20 px-3 py-1.5 rounded-full text-[10px] font-technical uppercase font-bold tracking-wider flex items-center gap-1.5 backdrop-blur-md transition-all shadow-md ${
                    compareList.includes(prop.id)
                      ? 'bg-porsche-red text-white ring-2 ring-white/60 shadow-[0_0_15px_rgba(213,0,28,0.5)]'
                      : 'bg-black/65 text-white/90 hover:bg-black/90 hover:text-white border border-white/20'
                  }`}
                  title={compareList.includes(prop.id) ? 'Remove from comparison' : 'Add to side-by-side comparison (max 3)'}
                >
                  <Layers className={`w-3.5 h-3.5 ${compareList.includes(prop.id) ? 'text-white' : 'text-porsche-red'}`} />
                  <span>{compareList.includes(prop.id) ? 'Comparing' : '+ Compare'}</span>
                </button>

                {/* Content Overlay */}
                <div className="absolute bottom-6 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 flex items-center justify-between pointer-events-none">
                  <div className="flex flex-col max-w-[80%]">
                    <p className="text-[10px] font-technical uppercase tracking-widest text-white/60 mb-0.5">
                      {prop.developer}
                    </p>
                    <h3 className="text-white font-technical font-bold text-lg sm:text-2xl tracking-tight uppercase flex items-center line-clamp-1">
                      {prop.title}
                      <span className="text-porsche-red ml-1">.</span>
                    </h3>
                    <p className="text-white/70 text-[11px] sm:text-[12px] tracking-[0.15em] uppercase font-medium mt-1 truncate">
                      {prop.location} — <span className="text-porsche-red font-bold">{prop.price}</span> ({prop.builtUpArea})
                    </p>
                  </div>
                  
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 shrink-0">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-dark transition-colors" />
                  </div>
                </div>

                {prop.category === 'Off-Plan' ? (
                  <button 
                    onClick={() => {
                      const cleanSearch = prop.title.split('|')[0].replace('by', '').trim();
                      setOffPlanInitialSearch(cleanSearch);
                      setView('off-plan');
                    }}
                    className="absolute inset-0 z-10 w-full h-full text-transparent cursor-pointer"
                    aria-label={`View ${prop.title}`}
                  />
                ) : (
                  <button 
                    onClick={() => {
                      setIsEnquiryModalOpen(true);
                    }}
                    className="absolute inset-0 z-10 w-full h-full text-transparent cursor-pointer"
                    aria-label={`Enquire about ${prop.title}`}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {displayProperties.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-dark/20 text-xl font-light tracking-widest uppercase">No properties found in this category.</p>
          </div>
        )}

        {/* View All / Collapse Control to maintain lightweight feel */}
        {!showAllProperties && PROPERTIES.filter(p => activeFilter === 'All Properties' || p.category === activeFilter).length > 9 && (
          <div className="mt-12 sm:mt-16 text-center flex flex-col items-center justify-center gap-3">
            <button
              onClick={() => setShowAllProperties(true)}
              className="px-8 py-4 bg-dark hover:bg-porsche-red text-white text-[11px] sm:text-xs font-technical font-bold tracking-[0.25em] uppercase rounded-xl transition-all shadow-xl hover:shadow-[0_0_25px_rgba(213,0,28,0.4)] flex items-center gap-3 group active:scale-95"
            >
              <span>Explore All {PROPERTIES.filter(p => activeFilter === 'All Properties' || p.category === activeFilter).length} Available Listings</span>
              <ArrowRight className="w-4 h-4 text-porsche-red group-hover:text-white transition-colors group-hover:translate-x-1" />
            </button>
            <p className="text-dark/40 text-[11px] font-technical uppercase tracking-widest">
              Daily Curation rotates automatically every 24 hours to keep options fresh
            </p>
          </div>
        )}

        {showAllProperties && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={() => {
                setShowAllProperties(false);
                const el = document.getElementById('property-types');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-dark text-xs font-technical font-bold tracking-[0.2em] uppercase rounded-xl transition-all active:scale-95"
            >
              Collapse to Today&apos;s Top 9 Daily Fresh Deals
            </button>
          </div>
        )}
      </section>

      {/* Features Grid */}
      <section id="features" className="px-4 sm:px-8 lg:px-24 py-10 sm:py-16 md:py-20 bg-gray-50/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-8 md:gap-12">
          <div className="max-w-2xl">
            <p className="text-porsche-red text-[10px] sm:text-[12px] tracking-[0.4em] sm:tracking-[0.5em] uppercase font-black mb-3 sm:mb-5">Innovation</p>
            <h2 className="text-3xl sm:text-6xl md:text-8xl font-display font-black text-dark tracking-tighter leading-[0.9]">
              THE<br />SMART HUB.
            </h2>
          </div>
          <p className="text-dark/40 text-xs sm:text-sm md:text-base max-w-md font-light leading-relaxed">
            Experience the Dubai property market through the lens of high-performance technology. Find the best off-plan projects in Dubai and new launch projects with high ROI.
          </p>
        </div>

        {/* New Launches VIP Banner */}
        <div 
          onClick={() => setView('new-launches')}
          className="mb-6 sm:mb-8 p-4 sm:p-6 md:p-8 bg-dark text-white border-l-4 border-porsche-red flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 cursor-pointer hover:bg-black transition-colors group shadow-xl"
        >
          <div className="flex items-center gap-3.5 sm:gap-5">
            <div className="w-11 h-11 sm:w-14 sm:h-14 bg-porsche-red/10 border border-porsche-red/30 flex items-center justify-center shrink-0 text-porsche-red group-hover:bg-porsche-red group-hover:text-white transition-all">
              <Flame className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-porsche-red text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest">
                  LIVE REGISTRY
                </span>
                <span className="text-[10px] sm:text-[11px] font-technical uppercase tracking-widest text-white/50">
                  41 Newly Unveiled Developments
                </span>
              </div>
              <h3 className="text-base sm:text-xl md:text-2xl font-display font-black uppercase tracking-tight text-white group-hover:text-porsche-red transition-colors">
                Dubai & Abu Dhabi Master Developer New Launches
              </h3>
              <p className="text-[11px] sm:text-xs text-white/60 font-light mt-0.5">
                Direct access to Nakheel Palm Springs, Binghatti Starfall, DAMAC Chelsea, and 38+ brand-new pre-construction releases.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-porsche-red text-[11px] sm:text-xs font-black tracking-widest uppercase shrink-0 group-hover:translate-x-1 transition-transform">
            <span>Explore 41 Launches</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          <FeatureCard 
            icon={CreditCard} 
            title="Free Pre-Approval" 
            description="Get a complimentary mortgage pre-approval from our banking partners — know your budget before you browse."
            badge="100% Free"
            onClick={() => setView('pre-approval')}
          />
          <FeatureCard 
            icon={Calculator} 
            title="ROI Calculator" 
            description="Instantly calculate rental yield, capital appreciation, and break-even timelines on any property."
            badge="Free Tool"
            onClick={() => setView('roi-calculator')}
          />
          <FeatureCard 
            icon={Newspaper} 
            title="Daily Market News" 
            description="Read daily market alerts, regulatory updates, transactional briefs, and off-plan investment news."
            badge="Updated Daily"
            onClick={() => setView('blog')}
          />
          <FeatureCard 
            icon={HandCoins} 
            title="Payment Plans" 
            description="Access flexible 5–10 year payment plans directly from the UAE's top developers."
            badge="50+ Plans"
            onClick={() => setView('calculator')}
          />
        </div>
      </section>

      {/* The Journey - Mapped Blueprint */}
      <section id="journey" className="px-4 sm:px-8 lg:px-24 py-10 sm:py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block border border-dark/10 px-4 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 mb-4 sm:mb-8 md:mb-12"
            >
              <span className="text-dark text-[10px] sm:text-[12px] md:text-[13px] tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.8em] uppercase font-black">Technical_Process_Flow</span>
            </motion.div>
            <h2 className="text-4xl sm:text-6xl md:text-[8rem] lg:text-[11rem] font-display font-black text-dark tracking-tighter leading-none">
              THE<br />
              <span className="text-porsche-red">JOURNEY.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal Connecting Line (The Track) */}
            <div className="absolute top-[104px] left-0 right-0 h-[1px] bg-gray-100 hidden lg:block">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full bg-dark/10 origin-left"
              />
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                className="h-full bg-porsche-red w-1/4 absolute top-0 left-0 shadow-[0_0_15px_rgba(213,0,28,0.3)]"
              />
            </div>

            <div className="relative z-10 flex flex-row overflow-x-auto lg:overflow-x-visible no-scrollbar gap-5 sm:gap-8 lg:gap-0 pb-8 sm:pb-16 lg:pb-0 snap-x snap-mandatory">
              <div className="snap-center">
                <JourneyStep 
                  number="01" 
                  title="Browse & Shortlist" 
                  description="Search our verified listings and save your favourites to a personal collection using our smart filtering engine." 
                  index={0}
                />
              </div>
              <div className="snap-center">
                <JourneyStep 
                  number="02" 
                  title="Consult Our Experts" 
                  description="Speak to a dedicated consultant who knows your target market inside out, providing data-backed investment advice." 
                  index={1}
                />
              </div>
              <div className="snap-center">
                <JourneyStep 
                  number="03" 
                  title="Virtual or In-Person Tour" 
                  description="Experience the property before committing — remotely via 4K virtual tours or in person with private transport." 
                  index={2}
                />
              </div>
              <div className="snap-center">
                <JourneyStep 
                  number="04" 
                  title="Secure the Deal" 
                  description="We handle all legal, financial, and DLD registration steps end to end, ensuring a seamless ownership transfer." 
                  index={3}
                />
              </div>
            </div>

            {/* Final Marker */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="flex flex-col items-center mt-12 sm:mt-20 md:mt-32"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-porsche-red rotate-45 mb-4 sm:mb-8 shadow-[0_0_30px_rgba(213,0,28,0.4)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rotate-45"></div>
              </div>
              <span className="text-dark font-display font-black text-[10px] sm:text-[11px] tracking-[0.4em] sm:tracking-[0.6em] uppercase">Destination Reached</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Area Guide Section - Google Maps Platform Interactive Dubai Radar */}
      <section id="map" className="px-4 sm:px-8 lg:px-24 py-10 sm:py-16 md:py-24 bg-dark">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-20">
          <div className="max-w-3xl">
            <p className="text-porsche-red text-[10px] sm:text-[12px] tracking-[0.4em] sm:tracking-[0.5em] uppercase font-black mb-3 sm:mb-5">Google Maps Platform Intelligence</p>
            <h2 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display font-black text-white tracking-tighter leading-[0.85]">
              ZONE<br />
              <span className="text-porsche-red">EXPLORER.</span>
            </h2>
          </div>
          <p className="text-white/50 text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-light">
            Navigate the most prestigious investment zones in the UAE powered by Google Maps Platform. Interactive markers, satellite imagery, real-time yields, and off-plan project insights.
          </p>
        </div>
        
        <GoogleMapsDubai onSearchZone={(filter) => setActiveFilter(filter)} />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 pb-16 sm:pb-0">
        {/* Live Window for Rate of Gold & Bitcoin in Rock Deals Luxury Theme */}
        <div id="market-rates">
          <LiveRatesWindow />
        </div>

        <div className="px-4 sm:px-8 lg:px-24 py-10 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
            <div className="md:col-span-4">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-dark font-display font-black text-3xl md:text-4xl tracking-tighter">ROCK</span>
                <span className="text-dark/40 font-display font-light text-3xl md:text-4xl tracking-tighter">DEALS</span>
              </div>
              <p className="text-porsche-red text-[11px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-8 md:mb-12">
                A DEAL FOR EVERYONE
              </p>
              <p className="text-dark/50 text-sm md:text-base leading-relaxed mb-8 max-w-xs font-light">
                Redefining luxury real estate in the UAE. Find Dubai real estate deals, luxury properties in Dubai, and apartments for sale in Dubai with zero commission.
              </p>
              <div className="mb-8 md:mb-12 space-y-4">
                <a href="tel:+971529178630" className="flex items-center gap-4 group min-h-[44px]">
                  <div className="w-10 h-10 rounded-full border border-dark/5 flex items-center justify-center group-hover:bg-porsche-red group-hover:border-porsche-red transition-all duration-500">
                    <Phone className="w-4 h-4 text-dark/40 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-dark font-technical font-bold text-[16px] tracking-tight group-hover:text-porsche-red transition-colors">+971 529178630</span>
                </a>
                <a href="mailto:info@rock-deals.com" className="flex items-center gap-4 group min-h-[44px]">
                  <div className="w-10 h-10 rounded-full border border-dark/5 flex items-center justify-center group-hover:bg-porsche-red group-hover:border-porsche-red transition-all duration-500">
                    <Mail className="w-4 h-4 text-dark/40 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-dark font-[Arial] font-bold text-[14px] tracking-tight group-hover:text-porsche-red transition-colors uppercase">info@rock-deals.com</span>
                </a>
              </div>
              <div className="flex items-center gap-6 md:gap-8">
                {[
                  { Icon: Instagram, href: 'https://www.instagram.com/rockdeals.ae/' },
                  { Icon: Facebook, href: 'https://www.facebook.com/people/Rock-Deals/61574389357052' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/rock-deals-b826103b5/' },
                  { Icon: Phone, href: 'tel:+971529178630' },
                  { Icon: Twitter, href: '#' }
                ].map(({ Icon, href }, i) => (
                  <a 
                    key={i} 
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-dark/20 hover:text-porsche-red transition-all duration-300 cursor-pointer hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-dark text-[12px] tracking-[0.4em] uppercase font-black mb-10">Explore</h4>
              <ul className="space-y-5">
                {[
                  { name: 'Properties', href: '#property-types' },
                  { name: 'Google Maps Radar', href: '#map' },
                  { name: 'Live Rates (Gold & BTC)', href: '#market-rates' },
                  { name: 'Area Guide', onClick: () => setView('area-guide') },
                  { name: 'Developers', onClick: () => setView('developers') },
                  { name: 'Gallery', href: '#property-types' },
                  { name: 'Features', href: '#features' },
                  { name: 'Contact', href: '#contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        if (item.onClick) {
                          e.preventDefault();
                          item.onClick();
                        }
                      }}
                      className="text-dark/40 text-sm hover:text-porsche-red transition-colors font-light cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-dark text-[12px] tracking-[0.4em] uppercase font-black mb-10">Property Types</h4>
              <ul className="space-y-5">
                {['New Launches', 'Off-Plan', 'Luxury Villas', 'Penthouses', 'Apartments', 'Townhouses'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#property-types"
                      onClick={(e) => {
                        if (item === 'New Launches') {
                          e.preventDefault();
                          setView('new-launches');
                        } else if (item === 'Off-Plan') {
                          e.preventDefault();
                          setOffPlanInitialSearch('');
                          setView('off-plan');
                        } else {
                          setActiveFilter(item);
                        }
                      }}
                      className="text-dark/40 text-sm hover:text-porsche-red transition-colors font-light cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-dark text-[12px] tracking-[0.4em] uppercase font-black mb-10">Newsletter</h4>
              <p className="text-dark/40 text-sm mb-8 font-light leading-relaxed">Stay updated with exclusive property launches and market intelligence.</p>
              <div className="flex border-b border-dark/10 pb-4 group focus-within:border-porsche-red transition-colors">
                <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none text-sm w-full placeholder:text-dark/20" />
                <button className="text-dark/20 group-focus-within:text-porsche-red hover:text-porsche-red transition-colors"><ArrowRight className="w-6 h-6" /></button>
              </div>
            </div>
          </div>

          {/* Executive Brand Signature - Centered below email address space with dual dividers */}
          <div className="mt-16 sm:mt-24 pt-10 sm:pt-14 pb-8 sm:pb-12 border-t border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="max-w-[260px] sm:max-w-[320px] md:max-w-[360px] w-full px-4">
              <img 
                src="/assets/rock-deals-signature.png" 
                alt="Rock Deals Executive Signature" 
                className="w-full h-auto object-contain mx-auto transition-all duration-300 opacity-90 hover:opacity-100 select-none"
                loading="lazy"
              />
            </div>
          </div>

          <div className="pt-8 sm:pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
            <p className="text-dark/20 text-[12px] tracking-widest uppercase font-black">© 2026 Rock Deals Real Estate. All Rights Reserved.</p>
            <div className="flex items-center gap-12">
              {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
                <a key={item} className="text-dark/20 text-[12px] tracking-widest uppercase font-black hover:text-dark transition-colors cursor-pointer">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )}

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isEnquiryModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEnquiryModalOpen(false)}
              className="absolute inset-0 bg-dark/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-porsche-red/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-porsche-red text-[11px] tracking-[0.4em] uppercase font-black mb-2">Enquiry Form</p>
                    <h3 className="text-3xl font-display font-black text-dark uppercase tracking-tight">Submit Details<span className="text-porsche-red">.</span></h3>
                  </div>
                  <button 
                    onClick={() => setIsEnquiryModalOpen(false)}
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-dark/20 hover:text-porsche-red transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleEnquirySubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase text-dark/40 mb-3 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-porsche-red" />
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name"
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 text-dark text-xs font-technical tracking-widest focus:outline-none focus:border-porsche-red/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase text-dark/40 mb-3 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-porsche-red" />
                      <input 
                        required
                        type="email" 
                        placeholder="email@example.com"
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 text-dark text-xs font-technical tracking-widest focus:outline-none focus:border-porsche-red/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase text-dark/40 mb-3 ml-1">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-porsche-red" />
                      <input 
                        required
                        type="tel" 
                        placeholder="+971 00 000 0000"
                        value={enquiryForm.mobile}
                        onChange={(e) => setEnquiryForm({...enquiryForm, mobile: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 text-dark text-xs font-technical tracking-widest focus:outline-none focus:border-porsche-red/50 transition-all"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-dark text-white rounded-2xl py-5 text-[12px] font-black tracking-[0.4em] uppercase hover:bg-porsche-red transition-all shadow-xl hover:shadow-porsche-red/20 active:scale-95 mt-4"
                  >
                    Send Enquiry Now
                  </button>

                  <div className="relative py-4 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <span className="relative bg-white px-4 text-[8px] font-black tracking-widest uppercase text-dark/20">or</span>
                  </div>

                  <a 
                    href="https://wa.me/971529178630"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] text-white rounded-2xl py-5 text-[12px] font-black tracking-[0.4em] uppercase hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                  
                  <p className="text-center text-[8px] text-dark/20 uppercase tracking-widest font-bold mt-4">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        )}

        {showNewsPopup && BLOG_POSTS[0] && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-[150] w-[calc(100vw-24px)] sm:w-[380px] bg-dark text-white p-4 sm:p-5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-none overflow-hidden group cursor-pointer"
            onClick={() => {
              setSelectedBlogId(BLOG_POSTS[0].id);
              setView('blog');
              setShowNewsPopup(false);
              sessionStorage.setItem('news-popup-dismissed', 'true');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Top red Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-porsche-red" />
            
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-porsche-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-porsche-red"></span>
                </span>
                <span className="text-[9px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-black text-white/50">
                  Live Market Alert • {BLOG_POSTS[0].date}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNewsPopup(false);
                  sessionStorage.setItem('news-popup-dismissed', 'true');
                }}
                className="text-white/40 hover:text-porsche-red p-1 transition-colors hover:bg-white/5"
                aria-label="Dismiss news alert"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <h4 className="text-sm font-display font-black uppercase tracking-tight leading-snug group-hover:text-porsche-red transition-colors duration-300 mb-1.5 line-clamp-2">
              {BLOG_POSTS[0].title}
            </h4>
            
            <p className="text-white/60 text-xs font-light leading-relaxed mb-2.5 line-clamp-2">
              {BLOG_POSTS[0].summary}
            </p>

            {/* Social Media Share Actions in Daily News Popup */}
            <div 
              className="py-1.5 px-3 mb-2.5 bg-white/[0.04] border border-white/5 flex items-center justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <SocialShare
                title={BLOG_POSTS[0].title}
                summary={BLOG_POSTS[0].summary}
                url={typeof window !== 'undefined' ? `${window.location.origin}?article=${BLOG_POSTS[0].id}` : undefined}
                variant="compact"
                theme="dark"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] tracking-widest uppercase font-black text-porsche-red group-hover:translate-x-1 transition-transform duration-300">
              <span>Read Full Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Thumb-Zone Navigation Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-[120] bg-dark/95 backdrop-blur-2xl border-t border-white/10 px-2 py-1.5 flex items-center justify-around shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
        <button 
          onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 transition-colors ${view === 'home' ? 'text-porsche-red' : 'text-white/50 hover:text-white'}`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] font-technical uppercase tracking-wider font-bold">Home</span>
        </button>
        <button 
          onClick={() => { setView('new-launches'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 transition-colors ${view === 'new-launches' ? 'text-porsche-red' : 'text-white/50 hover:text-white'}`}
        >
          <Zap className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] font-technical uppercase tracking-wider font-bold">Launches</span>
        </button>
        <button 
          onClick={() => { setOffPlanInitialSearch(''); setView('off-plan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 transition-colors ${view === 'off-plan' ? 'text-porsche-red' : 'text-white/50 hover:text-white'}`}
        >
          <Building2 className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] font-technical uppercase tracking-wider font-bold">Off-Plan</span>
        </button>
        <button 
          onClick={() => { setView('calculator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 transition-colors ${view === 'calculator' ? 'text-porsche-red' : 'text-white/50 hover:text-white'}`}
        >
          <Calculator className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] font-technical uppercase tracking-wider font-bold">Finance</span>
        </button>
        <a 
          href="https://wa.me/971529178630?text=Hello%20Rock%20Deals%20VIP%20Desk,%20I%20am%20interested%20in%20Dubai%20properties"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-white/50 hover:text-porsche-red transition-colors"
        >
          <Phone className="w-4 h-4 mb-0.5 text-porsche-red" />
          <span className="text-[9px] font-technical uppercase tracking-wider font-bold">VIP Desk</span>
        </a>
      </nav>

      {/* Toast Notification for Max 3 Properties */}
      <AnimatePresence>
        {compareToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-20 left-1/2 z-[250] bg-dark text-white px-5 py-3 border border-porsche-red/60 shadow-2xl flex items-center gap-2.5 text-xs font-technical font-bold uppercase tracking-wider rounded-none"
          >
            <Layers className="w-4 h-4 text-porsche-red shrink-0" />
            <span>{compareToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Property Comparison Dock */}
      <PropertyCompareBar
        selectedProperties={selectedCompareProperties}
        onRemove={removeCompare}
        onClear={clearCompare}
        onOpenModal={() => setIsCompareModalOpen(true)}
      />

      {/* Detailed Side-by-Side Property Comparison Modal */}
      <PropertyCompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        properties={selectedCompareProperties}
        allProperties={PROPERTIES}
        onRemove={removeCompare}
        onAdd={addCompare}
        onClear={clearCompare}
        onEnquire={(propertyTitle) => {
          setIsCompareModalOpen(false);
          setIsEnquiryModalOpen(true);
        }}
      />
    </>
  );
}
