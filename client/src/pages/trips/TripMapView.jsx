import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, X, ChevronRight, Shield, Star, Navigation, Bookmark } from "lucide-react";
import TopAppBar from "../../components/shared/TopAppBar";

const PHOTOS = {
  patwon: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?auto=format&fit=crop&w=480&q=80',
  gadisar: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=480&q=80',
};

const ACTIVITIES = [
  { time:'09:00 AM', name:'Patwon Ki Haveli', active:false },
  { time:'11:30 AM', name:'Lunch at Trilogy Café', active:true },
  { time:'02:00 PM', name:'Nathmal Ki Haveli', active:false },
  { time:'04:30 PM', name:'Gadisar Lake', active:false },
  { time:'07:00 PM', name:'1st Gate Home Fusion', active:false },
];

const TOGGLES = [
  { label:'Activities', color:'#E8640C' },
  { label:'Hospitals', color:'#C0392B' },
  { label:'Guardians', color:'#2D6A4F' },
  { label:'Hidden Gems', color:'#F0A500' },
  { label:'Route', color:'#E8640C' },
];

export default function TripMapView() {
  const [activeDay, setActiveDay] = useState(2);
  const [selected, setSelected] = useState(null);
  const [showGuardian, setShowGuardian] = useState(false);
  const [toggles, setToggles] = useState([true,true,true,false,false]);
  const [highlighted, setHighlighted] = useState(1);

  const toggle = (i) => setToggles(p => p.map((v,j) => j===i ? !v : v));

  return (
    <div className="h-screen flex flex-col bg-[#FFF8F0]">
      <TopAppBar variant="logo" />

      {/* Map Area */}
      <div className="flex-1 relative">
        {/* Map placeholder */}
        <div className="absolute inset-0 bg-[#FEF3E2]" style={{backgroundImage:'radial-gradient(circle at 2px 2px, rgba(232,100,12,0.08) 1px, transparent 0)', backgroundSize:'24px 24px'}}>
          {/* Simulated pins */}
          <div className="absolute top-[30%] left-[40%]"><div className="w-[12px] h-[12px] rounded-full bg-[#E8640C] border-2 border-white shadow-md" /></div>
          <div className="absolute top-[45%] left-[55%]"><div className="w-[12px] h-[12px] rounded-full bg-[#E8640C] border-2 border-white shadow-md" /></div>
          <div className="absolute top-[35%] left-[60%]"><div className="w-[12px] h-[12px] rounded-full bg-[#C0392B] border-2 border-white shadow-md" /></div>
          <div className="absolute top-[50%] left-[35%]"><div className="w-[12px] h-[12px] rounded-full bg-[#2D6A4F] border-2 border-white shadow-md cursor-pointer" onClick={() => setShowGuardian(true)} /></div>
          <div className="absolute top-[25%] left-[50%]"><div className="w-[12px] h-[12px] rounded-full bg-[#F0A500] border-2 border-white shadow-md" /></div>
        </div>

        {/* Map Controls — Top Right */}
        <div className="absolute top-[16px] right-[16px] bg-white border border-[#E8D5B7] rounded-[12px] p-[8px] shadow-[0_4px_16px_rgba(30,20,16,0.12)] flex flex-col gap-[6px] z-20">
          {TOGGLES.map((t,i) => (
            <button key={t.label} onClick={() => toggle(i)} title={t.label} className={`w-[36px] h-[36px] rounded-[8px] flex items-center justify-center transition-colors ${toggles[i] ? '' : 'border border-[#E8D5B7]'}`} style={toggles[i] ? {background:`${t.color}22`} : {}}>
              <div className="w-[10px] h-[10px] rounded-full" style={{background: t.color}} />
            </button>
          ))}
        </div>

        {/* Left Panel — Activity List */}
        <div className="absolute top-[16px] left-[16px] w-[340px] bg-white border border-[#E8D5B7] rounded-[16px] shadow-[0_8px_24px_rgba(30,20,16,0.14)] z-20 max-h-[calc(100vh-104px)] overflow-y-auto">
          {/* Header */}
          <div className="px-[20px] py-[16px] border-b border-[#E8D5B7]">
            <p className="font-mono-dm text-[10px] text-[#B09880] uppercase tracking-[2px]">Jaisalmer Trip — Day 2</p>
            <div className="mt-[10px] flex gap-[6px]">
              {[1,2,3,4,5].map(d => (
                <button key={d} onClick={() => setActiveDay(d)} className={`h-[28px] px-[16px] rounded-[100px] font-cabinet font-medium text-[12px] transition-colors ${activeDay === d ? 'bg-[#E8640C] text-white' : 'bg-[#FEF3E2] text-[#6B4F3A]'}`}>D{d}</button>
              ))}
            </div>
          </div>
          {/* Activity Rows */}
          {ACTIVITIES.map((a,i) => (
            <button key={i} onClick={() => { setHighlighted(i); setSelected(i===0 ? 'patwon' : i===3 ? 'gadisar' : null); }} className={`w-full px-[20px] py-[12px] border-b border-[#F5EDE0] flex items-center gap-[12px] text-left hover:bg-[#FEF3E2] transition-colors ${highlighted === i ? 'bg-[#FEF3E2] border-l-[3px] border-l-[#E8640C]' : ''}`}>
              <div className={`w-[12px] h-[12px] rounded-full shrink-0 ${a.active ? 'bg-[#E8640C]' : 'bg-[#E8D5B7]'}`} />
              <div className="flex-1 min-w-0">
                <p className="font-mono-dm text-[10px] text-[#B09880]">{a.time}</p>
                <p className="font-cabinet font-semibold text-[14px] text-[#1E1410] truncate">{a.name}</p>
              </div>
              <ChevronRight size={14} className="text-[#B09880] shrink-0" />
            </button>
          ))}
        </div>

        {/* Activity Detail Card — Bottom Center */}
        {selected && (
          <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 w-[480px] bg-white border border-[#E8D5B7] rounded-[14px] shadow-[0_8px_32px_rgba(30,20,16,0.16)] overflow-hidden z-30">
            <button onClick={() => setSelected(null)} className="absolute top-[12px] right-[12px] z-10 w-[28px] h-[28px] rounded-full bg-white/80 flex items-center justify-center"><X size={14} className="text-[#B09880]" /></button>
            <img src={selected === 'patwon' ? PHOTOS.patwon : PHOTOS.gadisar} alt="Location" className="w-full h-[120px] object-cover" />
            <div className="p-[16px]">
              <div className="flex items-center gap-[8px]">
                <span className="font-mono-dm text-[10px] text-[#B09880]">{selected === 'patwon' ? '09:00 AM' : '04:30 PM'}</span>
                <span className="px-[6px] py-[2px] rounded bg-[#FEF3E2] border border-[#E8D5B7] font-mono-dm text-[9px] text-[#6B4F3A]">Heritage</span>
              </div>
              <h3 className="font-cabinet font-bold text-[18px] text-[#1E1410] mt-[6px]">{selected === 'patwon' ? 'Patwon Ki Haveli' : 'Gadisar Lake'}</h3>
              <p className="font-jakarta text-[13px] text-[#6B4F3A] line-clamp-2 mt-[6px]">{selected === 'patwon' ? 'A complex of five interconnected havelis with intricate golden sandstone carvings.' : 'A man-made reservoir built in the 14th century with camel rides and sunset views.'}</p>
              <div className="mt-[12px] flex gap-[10px]">
                <button className="flex-1 h-[40px] rounded-[10px] border-[1.5px] border-[#E8640C] text-[#E8640C] font-cabinet font-semibold text-[13px] flex items-center justify-center gap-[6px]"><Navigation size={14} /> Get Directions</button>
                <button className="flex-1 h-[40px] rounded-[10px] bg-[#E8640C] text-white font-cabinet font-semibold text-[13px] flex items-center justify-center gap-[6px]"><Bookmark size={14} /> Add to Saved</button>
              </div>
            </div>
          </div>
        )}

        {/* Guardian Card — Bottom Right */}
        {showGuardian && (
          <div className="absolute bottom-[24px] right-[24px] w-[320px] bg-white border border-[rgba(45,106,79,0.30)] rounded-[14px] p-[16px] shadow-[0_8px_24px_rgba(30,20,16,0.14)] z-30">
            <button onClick={() => setShowGuardian(false)} className="absolute top-[12px] right-[12px] w-[24px] h-[24px] rounded-full bg-[#F5EDE0] flex items-center justify-center"><X size={12} className="text-[#B09880]" /></button>
            <p className="font-mono-dm text-[10px] text-[#2D6A4F] uppercase tracking-[2px]">Verified Guardian</p>
            <div className="mt-[12px] flex items-center gap-[12px]">
              <div className="w-[44px] h-[44px] rounded-full bg-[rgba(45,106,79,0.10)] flex items-center justify-center shrink-0"><span className="font-cabinet font-semibold text-[16px] text-[#2D6A4F]">AG</span></div>
              <div>
                <p className="font-cabinet font-semibold text-[15px] text-[#1E1410]">Anjali Gupta</p>
                <div className="flex items-center gap-[4px] mt-[2px]">
                  {[1,2,3].map(s => <Star key={s} size={10} className="text-[#F0A500]" fill="currentColor" />)}
                  <span className="font-mono-dm text-[10px] text-[#6B4F3A] ml-[4px]">4.9</span>
                  <span className="font-mono-dm text-[10px] text-[#4ADE80] ml-[8px]">Available now</span>
                </div>
              </div>
            </div>
            <div className="mt-[10px] flex flex-col gap-[4px]">
              <span className="font-mono-dm text-[10px] text-[#6B4F3A]">Speaks: Hindi, English</span>
              <span className="font-mono-dm text-[10px] text-[#6B4F3A]">Response time: &lt; 5 min</span>
            </div>
            <button className="mt-[12px] w-full h-[42px] rounded-[10px] bg-[#2D6A4F] text-white font-cabinet font-semibold text-[13px] flex items-center justify-center gap-[6px]"><Shield size={14} /> Request Guardian</button>
          </div>
        )}
      </div>
    </div>
  );
}
