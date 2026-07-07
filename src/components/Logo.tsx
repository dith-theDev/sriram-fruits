export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/sriram_fruits.png"
        alt="Sriram Fruits Logo"
        className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform hover:scale-105"
      />
    </div>
  );
}

export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/sriram_fruits.png"
        alt="Sriram Fruits Logo"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
