import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";

function App() {
  useEffect(() => {
    document.title = "Breezee360 · Calm productivity that lasts";
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="breezee-theme">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
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
