import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider, LanguageRedirect } from "@/i18n/LanguageRoutes";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";


const App = () => (
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<LanguageRedirect />} />
          <Route
            path="/:lang"
            element={
              <LanguageProvider>
                <Index />
              </LanguageProvider>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
);

export default App;
