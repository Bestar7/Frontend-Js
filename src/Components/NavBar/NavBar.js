// When using Bootstrap to style components, the CSS is imported in index.js
// However, the JS has still to be loaded for each Bootstrap's component that needs it.
// Here, because our JS component 'Navbar' has the same name as Navbar Bootstrap's component
// we change the name of the imported Bootstrap's 'Navbar' component
import { Navbar as BootstrapNavbar} from "bootstrap";
import { getSession } from "../Utils/Session.js";

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector("#navbarWrapper");
  
  let debut = 
  `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">`;
  let fin = 
  ` </div>
  </nav>`;

  let brand = 
  `<a class="navbar-brand" href="#" data-uri="/">Ze Question</a>`;

  let item1 = 
  `<li class="nav-item">
    <a class="nav-link" href="#" data-uri="/salon">Creer Salon</a>
  </li>`;
  let item2 = 
  `<li class="nav-item">
    <a class="nav-link" href="#" data-uri="/questionPage">Questions</a>
  </li>`;
  let items = 
  `<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      `+item1+item2+`                          
    </ul>
  </div>`;
  let profile = 
  `<span class="navbar-text">
    `+getSession().username+`
  </span>`;


  if (!getSession())
    navbarWrapper.innerHTML = debut+brand+items+fin;
  else
    navbarWrapper.innerHTML = debut+brand+items+profile+fin;
};

export default Navbar;