import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  MapPin, 
  Filter, 
  Star, 
  ChevronRight, 
  Compass, 
  Camera, 
  Palmtree, 
  History, 
  Heart,
  Navigation2,
  Users,
  PlusCircle,
  Map,
  BookmarkPlus
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import TopAppBar from "../../components/shared/TopAppBar";
import BottomNav from "../../components/shared/BottomNav";

/* ============================================================
   Screen 27 — Travel Explore Hub (Hidden Gems & Experiences)
   Matches Landing Page Theme (bg-cream, text-charcoal, HSL colors)
   ============================================================ */

const FILTERS = ["Discover", "Community Spots", "Local Experiences"];

const EXPLORE_DATA = [
  { id: "ranakpur", name: "Ranakpur Temple", loc: "Sadri, Rajasthan", rating: 4.9, dist: "65 km", price: "Free", tags: ["Heritage"], image: "https://images.unsplash.com/photo-1597078804310-7dfe09d55fdc?auto=format&fit=crop&w=800&q=80", type: "Discover" },
  { id: "kumbhalgarh", name: "Kumbhalgarh Fort", loc: "Rajsamand, Rajasthan", rating: 4.8, dist: "85 km", price: "₹100", tags: ["Heritage"], image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80", type: "Discover" },
  { id: "badi-lake", name: "Badi Lake Sunrise Trek", loc: "Udaipur, Rajasthan", rating: 4.7, dist: "12 km", price: "Free", tags: ["Nature", "Trekking"], image: "https://images.unsplash.com/photo-1635338169116-f350ec719f9d?auto=format&fit=crop&w=800&q=80", type: "Community Spots", submittedBy: "Rahul V." },
  { id: "jaisamand", name: "Jaisamand Island Picnic", loc: "Udaipur, Rajasthan", rating: 4.6, dist: "48 km", price: "Free", tags: ["Nature"], image: "https://images.unsplash.com/photo-1627845347271-e945c7110e53?auto=format&fit=crop&w=800&q=80", type: "Community Spots", submittedBy: "Anita D." },
  { id: "pottery-class", name: "Traditional Pottery Making", loc: "Shilpgram, Udaipur", rating: 4.9, dist: "5 km", price: "₹500", tags: ["Art", "Activity"], image: "https://images.unsplash.com/photo-1615878414902-861614742e92?auto=format&fit=crop&w=800&q=80", type: "Local Experiences", duration: "2 Hours" },
  { id: "cooking-class", name: "Rajasthani Cooking Masterclass", loc: "Old City, Udaipur", rating: 4.8, dist: "2 km", price: "₹1200", tags: ["Food", "Activity"], image: "https://images.unsplash.com/photo-1590393961136-e01861993f41?auto=format&fit=crop&w=800&q=80", type: "Local Experiences", duration: "3 Hours" },
];
export default function HiddenGems() {
  const [activeFilter, setActiveFilter] = useState("Discover");
  const [savedGems, setSavedGems] = useState([]);

  const toggleSave = (e, id) => {
    e.preventDefault();
    if(savedGems.includes(id)) {
      setSavedGems(savedGems.filter(gemId => gemId !== id));
    } else {
      setSavedGems([...savedGems, id]);
    }
  };

  const filteredData = EXPLORE_DATA.filter(item => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-cream">
      <Helmet>
        <title>Discover Hidden Gems | My Itinerary - Explore Authentic India</title>
        <meta
          name="description"
          content="Uncover the unseen India. Discover verified hidden gems, community-submitted spots, and deeply local experiences in Rajasthan and beyond."
        />
        <meta
          name="keywords"
          content="hidden gems india, offbeat travel india, rajasthan tourism, local experiences, community travel spots"
        />
      </Helmet>

      <TopAppBar variant="logo" title="Travel & Explore" />

      <main className="pb-40 lg:pb-10 max-w-[1440px] mx-auto lg:px-8 lg:py-6">
        
        {/* Desktop Search & Hero Matching Landing Page Theme */}
        <div className="hidden lg:flex flex-col gap-4 mb-10 text-center items-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/20 mb-2">
             <Compass size={16} className="text-saffron" />
             <span className="text-saffron font-cabinet font-bold text-sm tracking-wide uppercase">Uncover The Unseen</span>
           </div>
           <h1 className="font-display font-bold text-[48px] text-charcoal leading-tight">Explore the Authentic India</h1>
           <p className="font-jakarta text-[18px] text-taupe max-w-[600px]">Discover safe, verified hidden gems, community-submitted spots, and deeply local experiences.</p>
           
           <div className="mt-8 flex items-center gap-4 w-full max-w-[700px] h-16 px-6 bg-white border-2 border-sand rounded-[24px] shadow-sm focus-within:border-saffron focus-within:shadow-saffron transition-all hover-aura">
             <Search size={24} className="text-taupe" />
             <input 
              type="text" 
              placeholder="Search gems, locations, or types..." 
              className="flex-1 bg-transparent font-jakarta text-[17px] text-charcoal placeholder:text-taupe/60 outline-none"
             />
             <div className="h-8 w-px bg-sand mx-2" />
             <button className="flex items-center gap-2 text-saffron font-cabinet font-bold text-[15px]">
               <MapPin size={20} /> Rajasthan
             </button>
           </div>
        </div>

        {/* Mobile Search Placeholder */}
        <div className="lg:hidden mx-5 mt-5">
           <h1 className="font-display font-bold text-[32px] text-charcoal">Travel</h1>
           <div className="mt-4 flex items-center gap-3 h-12 px-4 bg-white border border-sand rounded-[14px]">
             <Search size={18} className="text-taupe" />
             <input type="text" placeholder="Explore hidden gems..." className="flex-1 bg-transparent font-jakarta text-[14px] outline-none" />
           </div>
        </div>

        {/* Categories Bar */}
        <div className="mt-6 mx-5 lg:mx-0 flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 lg:mb-8 lg:justify-center border-b border-sand">
           {FILTERS.map(f => (
             <button 
              key={f} 
              onClick={() => setActiveFilter(f)}
              className={`shrink-0 h-10 lg:h-12 px-6 rounded-full font-cabinet font-bold text-[13px] lg:text-[14px] border-2 transition-all ${
                activeFilter === f ? "bg-saffron text-white border-transparent shadow-md" : "bg-white text-taupe border-sand hover:border-saffron"
              }`}
             >
               {f}
             </button>
           ))}
        </div>

        {/* Community Submission Banner */}
        {activeFilter === "Community Spots" && (
          <div className="mx-5 lg:mx-0 mb-8 rounded-[24px] bg-turmeric/10 border border-turmeric/30 p-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-turmeric flex items-center justify-center shrink-0 shadow-lg">
                <Users size={24} className="text-charcoal" />
              </div>
              <div>
                <h3 className="font-cabinet font-bold text-[20px] text-charcoal">Submit a Hidden Gem</h3>
                <p className="font-jakarta text-[14px] text-taupe mt-1">Know a secret spot? Add it to the community map with photos and details.</p>
              </div>
            </div>
            <button className="w-full lg:w-auto px-8 h-12 rounded-[14px] bg-charcoal text-cream font-cabinet font-bold flex items-center justify-center gap-2 hover:bg-charcoal/90 transition-colors">
              <PlusCircle size={20} /> Add Spot
            </button>
          </div>
        )}

        {/* Main Grid: Responsive Masonry-style */}
        <div className="mx-5 lg:mx-0">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
              {filteredData.map(item => {
                const isSaved = savedGems.includes(item.id);
                return (
                <Link key={item.id} to={`/explore/${item.id}`} className="group block rounded-[24px] overflow-hidden bg-white border border-sand shadow-sm hover:shadow-[0_12px_32px_rgba(30,20,16,0.1)] hover:border-saffron transition-all hover-aura">
                   <div className="relative h-60 lg:h-72 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.tags.map(t => <span key={t} className="px-3 py-1 rounded-full bg-charcoal/40 backdrop-blur-md border border-white/20 text-white font-mono-dm text-[10px] uppercase tracking-wider">{t}</span>)}
                      </div>
                      <button 
                        onClick={(e) => toggleSave(e, item.id)}
                        className={`absolute top-4 right-4 h-10 w-10 border border-white/30 rounded-full backdrop-blur-md flex items-center justify-center transition-colors ${
                          isSaved ? "bg-saffron text-white border-transparent shadow-md" : "bg-charcoal/30 text-white hover:bg-charcoal/50"
                        }`}
                      >
                         <BookmarkPlus size={18} className={isSaved ? "fill-current" : ""} />
                      </button>
                   </div>
                   <div className="p-5 lg:p-6">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="font-cabinet font-bold text-[20px] lg:text-[22px] text-charcoal group-hover:text-saffron transition-colors">{item.name}</h3>
                         <div className="flex items-center gap-1">
                            <Star size={16} className="text-turmeric fill-turmeric" />
                            <span className="font-cabinet font-bold text-[15px]">{item.rating}</span>
                         </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-taupe mb-4">
                         <MapPin size={16} />
                         <span className="font-jakarta text-[14px]">{item.loc}</span>
                         <span className="w-1 h-1 rounded-full bg-sand mx-1" />
                         <span className="font-mono-dm text-[12px]">{item.dist}</span>
                      </div>
                      
                      {item.type === "Community Spots" && (
                        <div className="mb-4 flex items-center gap-2 text-taupe bg-ivory p-2 rounded-lg border border-sand">
                          <Users size={14} className="text-saffron" />
                          <span className="font-jakarta text-[12px]">Submitted by <span className="font-bold text-charcoal">{item.submittedBy}</span></span>
                        </div>
                      )}

                      {item.type === "Local Experiences" && (
                        <div className="mb-4 flex items-center gap-2 text-taupe bg-ivory p-2 rounded-lg border border-sand">
                          <Compass size={14} className="text-saffron" />
                          <span className="font-jakarta text-[12px]">Duration: <span className="font-bold text-charcoal">{item.duration}</span></span>
                        </div>
                      )}
                      
                      <div className="pt-4 border-t border-sand flex justify-between items-center">
                         <div>
                            <p className="font-mono-dm text-[9px] uppercase tracking-wider text-taupe">Price</p>
                            <p className="font-cabinet font-bold text-[16px] text-charcoal">{item.price}</p>
                         </div>
                         <button className="h-10 px-5 rounded-full bg-cream border border-sand text-charcoal font-cabinet font-bold text-[13px] group-hover:bg-saffron group-hover:text-white group-hover:border-transparent transition-all flex items-center gap-2">
                           {isSaved ? "Saved to Trip" : "Save to Trip"}
                         </button>
                      </div>
                   </div>
                </Link>
                );
              })}
           </div>
        </div>

      </main>

      <BottomNav activeTab="/explore" />
    </div>
  );
}
