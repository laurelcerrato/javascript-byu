//Get Cat Facts and images
let btn= document.querySelector("button");

async function getCat(){
    const resp = await fetch("https://api.thecatapi.com/v1/images/search");
    if (resp.ok){
    const data =  await resp.json();
    showdataCat(data[0].url);
    }
}

function showdataCat(catimage){
    document.getElementById("cats").innerHTML = `
    <img src="${catimage}" alt="cat">
    `
}
async function getfact(){
    const resp = await fetch("https://catfact.ninja/fact");
    if (resp.ok) {
        const data =  await resp.json();
    showfactCat(data.fact);
    }
}

function showfactCat(catfact){
    document.getElementById("catFact").innerHTML = `
    <h3>Did you know?</h3> 
    <p style="padding:10px;">${catfact}<p> 
    `
}

btn.addEventListener("click",()=>{
    getfact();});

btn.addEventListener("click",()=>{
    getCat();});