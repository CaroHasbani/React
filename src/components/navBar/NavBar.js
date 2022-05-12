/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./style.css"
const navbar= () =>{
  return (
    <> <header className="header">
    
    <a href="#" className="logo"></a>
 
    <input className="side-menu" type="checkbox" id="side-menu"/>
    <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
   
    <nav className="nav">
        <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Empresa</a> </li>
            <li><a href="#"><div className="tooltip carrito"><span className="tooltiptext">
              </span></div> </a></li>
        </ul>
    </nav>
</header>

    </>
  );
}
export default navbar;