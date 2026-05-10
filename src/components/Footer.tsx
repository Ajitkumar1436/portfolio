export function Footer() {
  return (
    <footer className="py-8 bg-black/60 border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          Designed & Built by <span className="text-white font-medium">Ajit</span>
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
