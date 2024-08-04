import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerCenter">
        <h1>We Build Digital Product For Your Success</h1>
        <div className="headerBtns">
          <button>Get Started</button>
          <button>Watch Demo</button>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}
export default Header;
