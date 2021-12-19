function getSession () {
  let user = localStorage.getItem("user");
  if (user == null)
    return false;
  return JSON.parse(user);
};

function setSession (user) {
  localStorage.setItem("user", JSON.stringify(user));
};

export { setSession, getSession };
