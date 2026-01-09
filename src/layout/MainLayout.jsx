import Footer from "../componets/Footer";
import Header from "../componets/Header";


export default function MainLayout({ children }) {
  return (
    <div className="layout-grid">
      <header className="layout-header fixed top-0 left-0 w-full z-50 ">
        <Header />
      </header>

      <main className="layout-content  pt-[70px] ">
        {children}
      </main>

      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
}
