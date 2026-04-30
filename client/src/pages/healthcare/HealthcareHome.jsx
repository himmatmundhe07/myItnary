import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search, MapPin, Download, Phone, AlertTriangle, ChevronDown, X, Plus, ArrowRight, Stethoscope, Building2, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import TopAppBar from "../../components/shared/TopAppBar";
import DoctorCard from "./components/DoctorCard";
import HospitalCard, { PharmacyCard } from "./components/HospitalCard";
import { DOCTORS, HOSPITALS, PHARMACIES, SPECIALTIES } from "./data";

const TABS = ["Doctors", "Hospitals", "Pharmacies"];
const ACTIVE_FILTERS = ["General Physician", "English Speaking", "Open Now", "Within 5 km"];

export default function HealthcareHome() {
  const navigate = useNavigate();
  const { user: authUser } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("Doctors");
  const [activeSpecialty, setActiveSpecialty] = useState("General Physician");
  const [filters, setFilters] = useState(ACTIVE_FILTERS);
  const [searchVal, setSearchVal] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter(f => f !== filterToRemove));
  };

  const handleViewProfile = (doctor) => {
    navigate(`/healthcare/doctor/${doctor.id}`);
  };

  const handleBook = (doctor) => {
    navigate(`/healthcare/doctor/${doctor.id}?book=true`);
  };

  const handleViewHospital = (hospital) => {
    navigate(`/healthcare/hospital/${hospital.id}`);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] pb-[72px]">
      <Helmet>
        <title>Healthcare Hub | Find Doctors & Hospitals in India</title>
        <meta
          name="description"
          content="Access verified healthcare services across India. Find English-speaking doctors, hospitals, and pharmacies near your location with real-time safety advisories."
        />
        <meta
          name="keywords"
          content="doctor booking india, hospitals in india, travel healthcare, english speaking doctors india, medical emergency india"
        />
      </Helmet>

      {/* Nav with Health Profile link */}
      <header className="sticky top-0 z-50 bg-[rgba(255,248,240,0.80)] backdrop-blur-xl border-b border-[#E8D5B7]">
        <div className="flex items-center justify-between h-[72px] px-[48px] max-w-[1440px] mx-auto">
          <Link to="/home" className="flex items-center gap-[8px]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span className="font-display font-bold text-[20px] text-[#1E1410]">My Itinerary</span>
          </Link>
          <div className="hidden xl:flex w-[480px] h-[40px] bg-[#FEF3E2] border border-[#E8D5B7] rounded-[100px] items-center px-[16px] gap-[8px]">
            <Search size={16} className="text-[#B09880]" />
            <input type="text" placeholder="Search destinations..." className="bg-transparent outline-none w-full font-cabinet font-medium text-[14px] text-[#1E1410] placeholder:text-[#B09880]" />
          </div>
          <div className="flex items-center gap-[16px]">
            <Link to="/healthcare/profile" className="flex items-center gap-[6px] hover:opacity-80 transition-opacity">
              <Heart size={16} className="text-[#E8640C]" />
              <span className="font-cabinet font-medium text-[13px] text-[#6B4F3A]">My Health Profile</span>
            </Link>
            <button className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#F5EDE0] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E1410" strokeWidth="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
              <span className="absolute top-[8px] right-[8px] w-[8px] h-[8px] rounded-full bg-[#C0392B] border-2 border-[#FFF8F0]" />
            </button>
            <div className="w-[36px] h-[36px] rounded-full bg-[#FEF3E2] border-2 border-[#E8D5B7] flex items-center justify-center overflow-hidden">
              <span className="font-cabinet font-bold text-[14px] text-[#6B4F3A] uppercase">
                {(authUser?.fullName || authUser?.name || 'T')[0]}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-[24px] pt-[64px]">

        {/* ═══════ ZONE 1 — HERO + SEARCH + MAP ═══════ */}
        <div className="flex gap-[64px]">
          {/* Left — 600px */}
          <div className="w-[600px] shrink-0">
            <p className="font-mono-dm text-[11px] text-[#B09880] uppercase tracking-[2px]">Healthcare in India</p>
            <h1 className="font-display font-extrabold text-[44px] text-[#1E1410] leading-[1.1] mt-[12px]">
              Find a <span className="relative inline-block">trusted<svg className="absolute -bottom-[4px] left-0 w-full" height="8" viewBox="0 0 200 8" fill="none"><path d="M2 6c40-4 80-4 120-2s60 2 76 0" stroke="#E8640C" strokeWidth="2.5" strokeLinecap="round"/></svg></span> doctor.<br/>Wherever you are.
            </h1>
            <p className="font-jakarta text-[16px] text-[#6B4F3A] leading-[1.6] mt-[12px] max-w-[480px]">Verified doctors, real cost estimates, and English-speaking clinics — searchable by your current location across India.</p>

            {/* Search Input */}
            <div className="relative mt-[28px]">
              <div className={`relative h-[56px] w-full bg-white rounded-[12px] flex items-center shadow-[0_4px_16px_rgba(30,20,16,0.08)] transition-all ${searchFocused ? "border-[1.5px] border-[#E8640C] shadow-[0_0_0_4px_rgba(232,100,12,0.10)]" : "border-[1.5px] border-[#E8D5B7]"}`}>
                <Search size={20} className="absolute left-[16px] text-[#B09880]" />
                <input
                  type="text"
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  placeholder="Search doctors, hospitals, or clinics in Udaipur..."
                  className="w-full h-full pl-[56px] pr-[120px] bg-transparent outline-none font-jakarta text-[15px] text-[#1E1410] placeholder:text-[#B09880]"
                />
                <button className="absolute right-[8px] h-[28px] px-[12px] rounded-[8px] bg-[#E8640C] text-white font-cabinet font-semibold text-[12px] flex items-center gap-[4px]">
                  <MapPin size={12} /> Near Me
                </button>
              </div>

              {/* Search Dropdown */}
              {searchFocused && searchVal.length > 0 && (
                <div className="absolute top-[62px] left-0 w-full bg-white border border-[#E8D5B7] rounded-[12px] shadow-[0_8px_24px_rgba(30,20,16,0.12)] z-50 py-[8px]">
                  <p className="px-[12px] pt-[6px] font-mono-dm text-[10px] text-[#B09880] uppercase">Doctors</p>
                  {DOCTORS.slice(0,2).map(d => (
                    <div key={d.id} className="flex items-center gap-[10px] px-[16px] py-[8px] hover:bg-[#FEF3E2] cursor-pointer">
                      <img src={d.avatar} alt={`Doctor: ${d.name}, ${d.specialty}`} loading="lazy" className="w-[36px] h-[36px] rounded-full object-cover" />
                      <div className="flex-1 min-w-0"><p className="font-cabinet font-semibold text-[14px] text-[#1E1410]">{d.name}</p><p className="font-jakarta text-[12px] text-[#6B4F3A]">{d.specialty}</p></div>
                      <span className="font-mono-dm text-[11px] text-[#E8640C]">{d.distance}</span>
                    </div>
                  ))}
                  <div className="border-t border-[#F5EDE0] my-[4px]" />
                  <p className="px-[12px] pt-[6px] font-mono-dm text-[10px] text-[#B09880] uppercase">Hospitals</p>
                  {HOSPITALS.slice(0,1).map(h => (
                    <div key={h.id} className="flex items-center gap-[10px] px-[16px] py-[8px] hover:bg-[#FEF3E2] cursor-pointer">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#FEF3E2] flex items-center justify-center"><Building2 size={20} className="text-[#6B4F3A]" /></div>
                      <div className="flex-1 min-w-0"><p className="font-cabinet font-semibold text-[14px] text-[#1E1410]">{h.name}</p><p className="font-jakarta text-[12px] text-[#6B4F3A]">{h.specialty}</p></div>
                      <span className="font-mono-dm text-[11px] text-[#E8640C]">{h.distance}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tab Bar */}
            <div className="mt-[16px] flex gap-[8px]">
              {TABS.map(t => (
                <button key={t} onClick={() => setActiveTab(t)} className={`h-[40px] px-[20px] rounded-[100px] font-cabinet font-medium text-[13px] transition-colors ${activeTab === t ? "bg-[#E8640C] text-white" : "bg-white border border-[#E8D5B7] text-[#6B4F3A]"}`}>{t}</button>
              ))}
            </div>

            {/* Specialty Chips (Doctors tab) */}
            {activeTab === "Doctors" && (
              <div className="mt-[12px]">
                <p className="font-mono-dm text-[10px] text-[#B09880] uppercase">Find by Specialty</p>
                <div className="mt-[8px] flex gap-[8px] overflow-x-auto scrollbar-none pb-[4px]">
                  {SPECIALTIES.map(s => (
                    <button key={s} onClick={() => setActiveSpecialty(s)} className={`shrink-0 h-[36px] px-[16px] rounded-[100px] font-cabinet font-medium text-[13px] transition-colors ${activeSpecialty === s ? "bg-[#E8640C] text-white" : "bg-white border border-[#E8D5B7] text-[#1E1410]"}`}>{s}</button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — Map Preview */}
          <div className="flex-1 relative h-[440px] rounded-[16px] overflow-hidden border border-[#E8D5B7] shadow-[0_4px_16px_rgba(30,20,16,0.10)]">
            <div className="w-full h-full bg-[#E8D5B7] relative">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=60" alt="Healthcare services map showing doctors and hospitals in Udaipur" loading="lazy" className="w-full h-full object-cover opacity-60" />
              {/* Pins */}
              <div className="absolute top-[30%] left-[40%] w-[28px] h-[28px] rounded-full bg-[#E8640C] flex items-center justify-center shadow-lg"><Stethoscope size={14} className="text-white" /></div>
              <div className="absolute top-[50%] left-[60%] w-[28px] h-[28px] rounded-[6px] bg-[#C0392B] flex items-center justify-center shadow-lg"><Plus size={14} className="text-white" /></div>
              <div className="absolute top-[65%] left-[35%] w-[28px] h-[28px] rounded-full bg-[#F0A500] flex items-center justify-center shadow-lg"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12h6M12 9v6"/></svg></div>
              <div className="absolute top-[40%] left-[25%] w-[28px] h-[28px] rounded-full bg-[#E8640C] flex items-center justify-center shadow-lg"><Stethoscope size={14} className="text-white" /></div>
            </div>
            {/* Frosted Bottom Strip */}
            <div className="absolute bottom-0 left-0 w-full h-[64px] bg-[rgba(255,248,240,0.90)] backdrop-blur-[12px] border-t border-[rgba(232,213,183,0.50)] px-[20px] flex items-center justify-between">
              <div className="flex items-center gap-[20px]">
                <div className="flex flex-col items-center"><div className="flex items-center gap-[4px]"><Stethoscope size={14} className="text-[#E8640C]" /><span className="font-cabinet font-semibold text-[13px] text-[#1E1410]">18 Doctors</span></div><span className="font-mono-dm text-[10px] text-[#6B4F3A]">nearby</span></div>
                <div className="flex flex-col items-center"><div className="flex items-center gap-[4px]"><Plus size={14} className="text-[#C0392B]" /><span className="font-cabinet font-semibold text-[13px] text-[#1E1410]">4 Hospitals</span></div><span className="font-mono-dm text-[10px] text-[#6B4F3A]">nearby</span></div>
                <div className="flex flex-col items-center"><div className="flex items-center gap-[4px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F0A500" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12h6M12 9v6"/></svg><span className="font-cabinet font-semibold text-[13px] text-[#1E1410]">12 Pharmacies</span></div><span className="font-mono-dm text-[10px] text-[#6B4F3A]">nearby</span></div>
              </div>
              <button className="font-cabinet font-medium text-[13px] text-[#E8640C] flex items-center gap-[4px]">Open Full Map <ArrowRight size={14} /></button>
            </div>
          </div>
        </div>

        {/* ═══════ ZONE 2 — TRAVEL HEALTH ADVISORY ═══════ */}
        <div className="mt-[40px] bg-[#FEF3E2] border border-[#E8D5B7] rounded-[16px] px-[24px] py-[20px] flex items-center justify-between">
          <div>
            <p className="font-mono-dm text-[10px] text-[#E8640C] uppercase tracking-[2px]">Travel Health Advisory</p>
            <h3 className="font-cabinet font-bold text-[16px] text-[#1E1410] mt-[6px]">Traveling to Rajasthan?</h3>
            <p className="font-jakarta text-[14px] text-[#6B4F3A] leading-[1.5] mt-[4px] max-w-[640px]">Heat exhaustion is common in summer months. Carry ORS sachets. Stay hydrated. Avoid outdoor activity between 12 PM and 4 PM.</p>
          </div>
          <div className="flex flex-col gap-[8px] shrink-0">
            <button className="flex items-center gap-[6px] font-cabinet font-medium text-[13px] text-[#E8640C]"><Download size={14} /> Download Rajasthan Health Guide</button>
            <button className="flex items-center gap-[6px] font-cabinet font-medium text-[13px] text-[#C0392B]"><Phone size={14} className="text-[#C0392B]" /> Emergency Support Numbers</button>
          </div>
        </div>

        {/* ═══════ ZONE 3/4/5 — TAB CONTENT ═══════ */}
        <div className="mt-[32px]">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <p className="font-mono-dm text-[11px] text-[#B09880] uppercase tracking-[2px]">
              {activeTab === "Doctors" && "Verified Doctors Near You"}
              {activeTab === "Hospitals" && "Hospitals Near You"}
              {activeTab === "Pharmacies" && "Pharmacies Near You"}
            </p>
            <div className="flex items-center gap-[8px]">
              <span className="font-jakarta text-[13px] text-[#6B4F3A]">{activeTab === "Doctors" ? "18" : activeTab === "Hospitals" ? "4" : "12"} results</span>
              <span className="font-mono-dm text-[11px] text-[#6B4F3A]">Sort by</span>
              <span className="font-mono-dm text-[11px] text-[#1E1410] flex items-center gap-[4px]">Distance <ChevronDown size={12} /></span>
            </div>
          </div>

          {/* Active Filters (Doctors only) */}
          {activeTab === "Doctors" && (
            <div className="mt-[10px] flex gap-[8px] flex-wrap">
              {filters.map(f => (
                <span key={f} className="h-[30px] px-[12px] rounded-[100px] bg-[#FEF3E2] border border-[rgba(232,100,12,0.30)] font-cabinet font-medium text-[12px] text-[#E8640C] flex items-center gap-[6px]">
                  {f} <button onClick={() => removeFilter(f)}><X size={12} /></button>
                </span>
              ))}
              <button className="h-[30px] px-[12px] rounded-[100px] border border-dashed border-[#E8D5B7] font-cabinet font-medium text-[12px] text-[#B09880] flex items-center gap-[4px]"><Plus size={12} /> Add Filter</button>
            </div>
          )}

          {/* DOCTORS GRID */}
          {activeTab === "Doctors" && (
            <div className="mt-[16px] grid grid-cols-3 gap-[20px]">
              {DOCTORS.map(d => (
                <DoctorCard 
                  key={d.id} 
                  doctor={d} 
                  onViewProfile={() => handleViewProfile(d)}
                  onBook={() => handleBook(d)}
                />
              ))}
            </div>
          )}

          {/* HOSPITALS GRID */}
          {activeTab === "Hospitals" && (
            <div className="mt-[16px] grid grid-cols-2 gap-[20px]">
              {HOSPITALS.map(h => <HospitalCard key={h.id} hospital={h} onViewDetails={handleViewHospital} />)}
            </div>
          )}

          {/* PHARMACIES GRID */}
          {activeTab === "Pharmacies" && (
            <div className="mt-[16px] grid grid-cols-3 gap-[20px]">
              {PHARMACIES.map(p => <PharmacyCard key={p.id} pharmacy={p} />)}
            </div>
          )}

          {/* Load More */}
          {activeTab === "Doctors" && (
            <div className="mt-[24px] flex justify-center">
              <button className="h-[44px] px-[24px] rounded-[12px] bg-white border-[1.5px] border-[#E8D5B7] font-cabinet font-semibold text-[14px] text-[#6B4F3A]">Show 12 More Doctors</button>
            </div>
          )}
        </div>
      </div>

      {/* ═══════ ZONE 6 — EMERGENCY STRIP ═══════ */}
      <div className="fixed bottom-0 left-0 w-full h-[56px] bg-[#C0392B] z-50 px-[48px] flex items-center justify-between max-w-[1440px] mx-auto" style={{left:"50%",transform:"translateX(-50%)"}}>
        <div className="flex items-center gap-[8px]">
          <AlertTriangle size={18} className="text-white" />
          <span className="font-mono-dm text-[12px] text-white uppercase tracking-[1px]">Medical Emergency?</span>
        </div>
        <div className="flex items-center gap-[32px]">
          <span className="font-mono-dm text-[13px] text-white font-semibold">Ambulance: 102</span>
          <span className="font-mono-dm text-[13px] text-white font-semibold">National Emergency: 112</span>
          <span className="font-mono-dm text-[13px] text-white font-semibold">Tourist Helpline: 1363</span>
        </div>
        <button className="h-[36px] px-[16px] rounded-[12px] bg-white text-[#C0392B] font-cabinet font-bold text-[14px] flex items-center gap-[6px]"><Phone size={14} /> Call Emergency 112</button>
      </div>
    </div>
  );
}
