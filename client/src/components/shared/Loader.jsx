import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = ({ size = 48, className = '' }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen w-full bg-background ${className}`}>
      <Loader2 size={size} className="animate-spin text-saffron" />
    </div>
  );
};

export default Loader;
