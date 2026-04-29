import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import Privacy from "@/pages/Privacy";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function App() {
  useEffect(() => {
    document.title = "Breezee360 — Calm Productivity App | Stay Consistent Without Burnout";
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="breezee-theme">
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast: "rounded-2xl border border-border bg-card text-card-foreground",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
