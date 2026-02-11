import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BANNER_SHOWN_KEY = "mikple_update_banner_shown";

export function UpdateBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if banner has already been shown in this session
    const hasBeenShown = sessionStorage.getItem(BANNER_SHOWN_KEY);
    
    if (!hasBeenShown) {
      setIsVisible(true);
      // Mark banner as shown in this session
      sessionStorage.setItem(BANNER_SHOWN_KEY, "true");
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gold/90 to-gold/70 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <Sparkles className="h-5 w-5 text-white animate-pulse" />
          <div>
            <p className="text-white font-semibold text-sm sm:text-base">
              Nouveaux forfaits disponibles ! 🎉
            </p>
            <p className="text-white/90 text-xs sm:text-sm">
              Découvrez nos nouveaux plans adaptés à vos besoins
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsVisible(false);
              navigate("/forfaits");
            }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gold rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Voir les forfaits
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white"
            aria-label="Fermer la bannière"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Animated underline */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-white/40" />
    </div>
  );
}
