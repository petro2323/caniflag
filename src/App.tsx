import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main' ;
import Privacy from './pages/Privacy' ;
import Terms from './pages/Terms' ;
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;