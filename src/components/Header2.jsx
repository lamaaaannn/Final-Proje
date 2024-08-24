import "../styles/Header2.css";
function Header2({title,subtitle1,subtitle2}) {
  return (
    <div className="header2">
      <div className="headText">
        <h2>{title}</h2>
        <p>{subtitle1} {">"} {subtitle2} </p>
      </div>
    </div>
  );
}
export default Header2;
