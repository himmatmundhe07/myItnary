import React from 'react';
import TopAppBar from '../../components/shared/TopAppBar';
import { Phone, AlertTriangle, Shield, MapPin } from 'lucide-react';

export default function SOSDashboard() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <TopAppBar variant="back" title="SOS Emergency" />
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col items-center">
        <div className="w-32 h-32 bg-[#C0392B]/10 rounded-full flex items-center justify-center animate-pulse">
          <AlertTriangle size={64} className="text-[#C0392B]" />
        </div>
        <h1 className="mt-8 font-display font-bold text-4xl text-[#1E1410] text-center">Emergency Response</h1>
        <p className="mt-4 text-[#6B4F3A] text-center max-w-md">Pressing the button below will share your live location with your emergency contacts and local authorities.</p>

        <button className="mt-12 w-64 h-64 rounded-full bg-[#C0392B] text-white flex flex-col items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 transition-all">
          <Phone size={48} />
          <span className="font-cabinet font-bold text-2xl tracking-widest">SEND SOS</span>
        </button>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          <div className="p-6 bg-white border border-[#E8D5B7] rounded-2xl flex items-center gap-4">
            <Phone className="text-[#C0392B]" />
            <div>
              <p className="text-xs text-[#B09880] uppercase">Police</p>
              <p className="font-cabinet font-bold text-xl">100 / 112</p>
            </div>
          </div>
          <div className="p-6 bg-white border border-[#E8D5B7] rounded-2xl flex items-center gap-4">
            <Shield className="text-[#2D6A4F]" />
            <div>
              <p className="text-xs text-[#B09880] uppercase">Tourist Helpline</p>
              <p className="font-cabinet font-bold text-xl">1363</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
