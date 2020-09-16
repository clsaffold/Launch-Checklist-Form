// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
          const div = document.getElementById("missiontarget");
          div.missiontarget = `
          <h2>Mission Destination</h2> 
          <ol>
               <li>Name: ${json.name}</li>
               <li>Diameter: ${json.diameter}</li>
               <li>Star: ${json.star}</li>
               <li>Distance from Earth: ${json.distance}</li>
               <li>Number of Moons: ${json.moons}</li>
           </ol>
           <img src="${json.image}">
       `;
       return
      });
   });
});

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All Field Are Required");
         event.preventDefault();
         return
      };
   });