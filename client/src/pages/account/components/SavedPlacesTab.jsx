import React, { useState, useRef, useEffect } from "react";
import { Bookmark, MapPin, Plus, ArrowRight, ChevronDown } from "lucide-react";

const SAMPLE_TRIPS = [
  { id: 1, name: "Jaisalmer Explorer", dates: "May 10–15", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=100&q=80" },
  { id: 2, name: "Coorg Escape", dates: "May 28–31", img: "https://images.unsplash.com/photo-1600000000000-000000000000?auto=format&fit=crop&w=100&q=80" } // placeholder
];

const PLACES_DATA = [
  {
    id: 1,
    name: "Ranakpur Jain Temple",
    location: "Sadri, Rajasthan",
    desc: "One of the most spectacular temples in India with 1,444 uniquely carved marble pillars.",
    vibes: ["Heritage", "Spiritual"],
    date: "May 9",
    category: "Hidden Gems",
    img: "https://images.unsplash.com/photo-1588691509377-ecf83656c071?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Majuli Island",
    location: "Assam, Northeast India",
    desc: "The world's largest river island, home to Vaishnavite monasteries and Mising tribal culture.",
    vibes: ["Sacred", "Vanishing"],
    date: "May 7",
    category: "Hidden Gems",
    img: "https://images.unsplash.com/photo-1605389658253-3d0d8dae7786?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Tungnath Temple, Chopta",
    location: "Uttarakhand",
    desc: "The highest Shiva temple in the world, accessible via a 3.5 km forest trek from Chopta.",
    vibes: ["Spiritual", "Mountains"],
    date: "May 5",
    category: "Hidden Gems",
    img: "https://images.unsplash.com/photo-1623910271032-47407e3a35a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Raniji ki Baori",
    location: "Bundi, Rajasthan",
    desc: "An 18th-century stepwell with intricate sculptures of gods and apsaras, largely unknown to tourists.",
    vibes: ["Architecture", "Offbeat"],
    date: "Apr 28",
    category: "Hidden Gems",
    img: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Ziro Valley",
    location: "Arunachal Pradesh",
    desc: "A UNESCO World Heritage Site candidate known for the Apatani tribe and the Ziro Music Festival.",
    vibes: ["Tribal", "Nature"],
    date: "Apr 22",
    category: "Hidden Gems",
    img: "https://images.unsplash.com/photo-1531200424560-63ce71d198bf?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Pottery Workshop with Local Artisan",
    location: "Jaipur, Rajasthan",
    desc: "A hands-on pottery experience with a third-generation Jaipur artisan — 3 hours, ₹1,200.",
    vibes: ["Workshop", "Cultural"],
    date: "Apr 18",
    category: "Experiences",
    img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&q=80"
  }
];

const CATEGORIES = ["All", "Hidden Gems", "Experiences", "Healthcare", "Restaurants", "Hotels"];

function AddToTripDropdown({ onClose }) {
  const ref = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div ref={ref} className="absolute left-0 mt-[8px] w-[220px] bg-white border border-[#E8D5B7] rounded-[10px] shadow-[0_8px_24px_rgba(30,20,16,0.12)] py-[8px] z-50">
      <div className="px-[12px] pb-[8px]">
        <span className="font-mono-dm text-[10px] text-[#B09880] uppercase tracking-[1px]">ADD TO WHICH TRIP?</span>
      </div>
      <div className="h-[1px] bg-[#E8D5B7] w-full" />
      
      {SAMPLE_TRIPS.map(trip => (
        <button key={trip.id} onClick={onClose} className="w-full h-[44px] px-[16px] flex items-center hover:bg-[#FEF3E2] transition-colors group">
          <img src={trip.img} alt={trip.name} className="w-[36px] h-[36px] rounded-[6px] object-cover shrink-0" />
          <div className="ml-[10px] flex-1 text-left">
            <p className="font-cabinet font-semibold text-[13px] text-[#1E1410] leading-tight truncate">{trip.name}</p>
            <p className="font-mono-dm text-[10px] text-[#B09880] mt-[2px]">{trip.dates}</p>
          </div>
          <Plus size={16} className="text-[#B09880] group-hover:text-[#E8640C]" />
        </button>
      ))}

      <button onClick={onClose} className="w-full pt-[10px] pb-[4px] px-[16px] flex items-center justify-center gap-[4px] group mt-[4px]">
        <Plus size={14} className="text-[#E8640C]" />
        <span className="font-cabinet font-medium text-[13px] text-[#E8640C] group-hover:underline">Create New Trip</span>
      </button>
    </div>
  );
}

export default function SavedPlacesTab() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [places, setPlaces] = useState(PLACES_DATA);
  const [dropdownOpenId, setDropdownOpenId] = useState(null);

  const filteredPlaces = activeFilter === "All" 
    ? places 
    : places.filter(p => p.category === activeFilter);

  const removePlace = (id) => {
    setPlaces(prev => prev.filter(p => p.id !== id));
  };

  if (places.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-[64px]">
        <Bookmark size={40} className="text-[#E8D5B7] stroke-[1.5]" />
        <h3 className="font-cabinet font-semibold text-[18px] text-[#6B4F3A] mt-[12px]">No saved places yet</h3>
        <p className="font-jakarta text-[14px] text-[#B09880] text-center max-w-[360px] mt-[8px]">
          Bookmark places while exploring Hidden Gems, Community Spots, and Experiences.
        </p>
        <button className="mt-[16px] h-[44px] px-[24px] rounded-[10px] bg-[#FEF3E2] border border-[#E8D5B7] text-[#E8640C] font-cabinet font-semibold text-[14px] hover:bg-[#F5EDE0] transition-colors">
          Explore Hidden Gems
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-300">
      {/* Controls Row */}
      <div className="flex justify-between items-center mt-[16px]">
        <span className="font-jakarta text-[13px] text-[#B09880]">
          {filteredPlaces.length} places saved
        </span>
        <div className="flex items-center gap-[12px]">
          <button className="flex items-center gap-[4px] group">
            <span className="font-mono-dm text-[11px] text-[#6B4F3A] uppercase tracking-[1px] group-hover:text-[#1E1410]">All Types</span>
            <ChevronDown size={14} className="text-[#6B4F3A]" />
          </button>
          <button className="flex items-center gap-[4px] group">
            <span className="font-mono-dm text-[11px] text-[#6B4F3A] uppercase tracking-[1px] group-hover:text-[#1E1410]">Recently Saved</span>
            <ChevronDown size={14} className="text-[#6B4F3A]" />
          </button>
          <button className="font-cabinet font-medium text-[13px] text-[#B09880] hover:text-[#E8640C] transition-colors ml-[4px]">
            Select All
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-[8px] mt-[10px] overflow-x-auto no-scrollbar pb-[4px]">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`h-[32px] px-[14px] rounded-[100px] border transition-all font-cabinet font-medium text-[12px] shrink-0 ${
              activeFilter === cat 
                ? "bg-[#E8640C] text-white border-[#E8640C]" 
                : "bg-white text-[#6B4F3A] border-[#E8D5B7] hover:bg-[#FEF3E2]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[20px] mt-[16px]">
        {filteredPlaces.map(place => (
          <div key={place.id} className="bg-white border border-[#E8D5B7] rounded-[14px] overflow-hidden shadow-[0_2px_8px_rgba(30,20,16,0.07)] flex flex-col group transition-all duration-300">
            {/* Image */}
            <div className="relative w-full h-[160px]">
              <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
              {/* Bookmark */}
              <button 
                onClick={() => removePlace(place.id)}
                className="absolute top-[12px] right-[12px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.90)] shadow-sm flex items-center justify-center hover:bg-white transition-all group/bmk"
              >
                <Bookmark size={18} className="text-[#E8640C] fill-[#E8640C] group-hover/bmk:fill-transparent group-hover/bmk:text-[#B09880] transition-colors" />
              </button>
              {/* Badge */}
              <div className="absolute top-[12px] left-[12px] px-[10px] py-[4px] bg-[rgba(255,255,255,0.90)] backdrop-blur-md rounded-[6px] border border-[rgba(232,213,183,0.5)] font-mono-dm text-[9px] text-[#6B4F3A] uppercase tracking-[1px]">
                {place.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-[14px] flex-1 flex flex-col">
              <h4 className="font-cabinet font-semibold text-[15px] text-[#1E1410] leading-tight line-clamp-1">{place.name}</h4>
              <div className="flex items-center gap-[4px] mt-[4px]">
                <MapPin size={11} className="text-[#E8640C]" />
                <span className="font-mono-dm text-[10px] text-[#6B4F3A] uppercase truncate">{place.location}</span>
              </div>
              <p className="font-jakarta text-[13px] text-[#6B4F3A] mt-[8px] leading-[1.5] line-clamp-2 flex-1">
                {place.desc}
              </p>
              <div className="flex items-center gap-[6px] mt-[8px]">
                {place.vibes.map(vibe => (
                  <span key={vibe} className="px-[8px] py-[2px] bg-[#FAFAF8] border border-[#F5EDE0] rounded-[6px] font-mono-dm text-[9px] text-[#6B4F3A] uppercase tracking-[0.5px]">
                    {vibe}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-[#F5EDE0] w-full" />

            {/* Action Row */}
            <div className="px-[14px] pb-[10px] pt-[10px] flex items-center justify-between">
              <span className="font-mono-dm text-[10px] text-[#B09880] uppercase tracking-[0.5px]">Saved {place.date}</span>
              <div className="flex items-center gap-[8px] relative">
                <button 
                  onClick={() => setDropdownOpenId(dropdownOpenId === place.id ? null : place.id)}
                  className="flex items-center gap-[4px] hover:bg-[#FEF3E2] px-[6px] py-[4px] rounded-[6px] transition-colors"
                >
                  <Plus size={13} className="text-[#E8640C]" />
                  <span className="font-cabinet font-medium text-[13px] text-[#E8640C]">Add to Trip</span>
                </button>
                <button className="flex items-center gap-[4px] group/view hover:bg-[#FAFAF8] px-[6px] py-[4px] rounded-[6px] transition-colors">
                  <span className="font-cabinet font-medium text-[13px] text-[#6B4F3A] group-hover/view:text-[#1E1410]">View</span>
                  <ArrowRight size={13} className="text-[#6B4F3A] group-hover/view:translate-x-[2px] transition-transform" />
                </button>

                {dropdownOpenId === place.id && (
                  <AddToTripDropdown onClose={() => setDropdownOpenId(null)} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
