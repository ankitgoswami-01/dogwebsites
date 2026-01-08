import Footer from "../componets/Footer";
import Header from "../componets/Header";


export default function MainLayout({ children }) {
  return (
    <div className="layout-grid">
      <header className="layout-header">
        <Header />
      </header>

      <main className="layout-content ">
        {children}
      </main>

      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
}
