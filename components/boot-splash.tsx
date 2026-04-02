export function BootSplash() {
  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_40%)]" />
      <div className="relative flex flex-col items-center gap-6">
        <img
          src="/Deenitv-Transparent-logo.png"
          alt="Deeni.tv"
          className="w-[min(86vw,560px)] select-none drop-shadow-[0_18px_48px_rgba(0,0,0,0.5)]"
          draggable="false"
        />
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70 sm:text-base">
            Deeni.tv
          </p>
          <p className="text-sm text-white/80 sm:text-base">
            Loading your spiritual TV experience
          </p>
        </div>
      </div>
    </div>
  )
}