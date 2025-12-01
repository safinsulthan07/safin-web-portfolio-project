import '../components/navbar.css';
type NavbarProps = {
  setCurrentPage: (page: string) => void;
};

function Navbar({ setCurrentPage }: NavbarProps) {
  return (
    <nav className="Navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h2>Safin</h2>
      </div>
      <div className="nav-links">
        <button onClick={() => setCurrentPage('Home')}>Home</button>
        <button onClick={() => setCurrentPage('About')}>About</button>
        <button onClick={() => setCurrentPage('Contact')}>Contact</button>
        <button onClick={() => setCurrentPage('Feedback')}>Feedback</button>
      </div>
    </nav>
  );
}
export default Navbar;
