import Navbar from "../NavBar/NavBar.js";

function getSession () {
  let user = localStorage.getItem("user");
  if (user == null)
    return false;
  return JSON.parse(user);
};

function setSession (user) {
  localStorage.setItem("user", JSON.stringify(user));
  Navbar();
};

function resetSession(){
  localStorage.removeItem("user");
  Navbar();
}

export { setSession, getSession, resetSession };
