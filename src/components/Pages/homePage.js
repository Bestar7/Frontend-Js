


/**
 * 
 * Render the HomePage
 */
 let test=`<div class="container">
 <div id="home" class="flex-column flex-center">
     <h1> ZE QUESTION</h1>
     <a href="/register.html" class="btn"> Creer une compte</a>
     <div id="form">
         <label id="email"> </label>
         <input type="email" placeholder ="email" name="email" type="text"/>
         <label id="password" ></label>
         <input type="password" placeholder="Mot de passe " name="password"/>
         <a href="/login.html" class="btn"> Se connecter</a>
 
     </div> 
     <div id="newSalon">
     <a class="nav-link" href="#" data-uri="/salon">Creer salon</a>     </div>
      <div id="joinSalon">
          <label id="codesalon" > Rejoindre un salon : </label>
         <input type = "text" placeholder="code salon" name="codeSalon"/>
         <a href="/joinsalon.html" class="btn"> Joindre salon</a>
         </div>
     </div> 
 </div>
 </div>`;
 const HomePage = () => { 
    const pageDiv = document.querySelector("#page");

     // Deal with your NewPage content here
  pageDiv.innerHTML = test;
  // create a login form
  const submit = document.createElement("input");
  submit.value = "Go back to Salon from Homepage";
  // Example on how to use Bootstrap to style a Button
  submit.className = "btn btn-secondary mt-3";
  // Example on how to add an event handler : when the button is clicked, redirect
  // to the HomePage
  submit.addEventListener("click", () => {
    Redirect("/");
  });
  pageDiv.appendChild(submit);
  };
  
  export default HomePage;
  