let form = document.getElementById("formulaire");
let valeurInput = document.getElementById("valueInput");
let ville = ""
let meteo = []
const API_KEY = "a0e300c65a961d94165e4f0a3b284336"



const fetchMeteo = async () => {
    const APIURI = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${ville}`;
    meteo = await fetch (APIURI).then((Response) => Response.json())
    console.log(meteo.current.temperature);
} 

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    ville = valeurInput.value;
    fetchMeteo()
// Si la ville ne contient pas 3 lettre tu n'execute pas la fonction,

if (ville.length > 2) {
    fetchMeteo()
    
} else {
   
   result.innerHTML = 
   ` <div class="alert alert-danger" role="alert">
 Nom de la ville trop court!!!
</div> `
    
}

}
) 