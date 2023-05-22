
let country=document.getElementById("inp-word");
let search=document.getElementById("search-btn");
let result = document.getElementById("result");
let error=document.getElementById("error");
console.log(country.value);
const findallcountry=async()=>{
    try{
        const response=await fetch("https://restcountries.com/v2/all");
        const data= await response.json();
         const restcountries=await data;
          return restcountries;
    }catch(err){
            console.log(err)
    }
};
// checking the first letter 
const isUpperCase = (string) => /^[A-Z]*$/.test(string);

// find the country details based on the country name
const find_one_country=async()=>{
try{
const countrys=await findallcountry();
let  value=country.value.toString();
value=value.split("");
const upper=isUpperCase(value[0])
if(!upper){
alert("your first letter should be upper case")
}
for(let i=0;i<countrys.length;i++){
 if(countrys[i].name==country.value){
  return   result.innerHTML=`  <div class="word">
 <h3>${countrys[i].name}</h3>
 </div>
<p class="word-meaning"> population:${countrys[i].population}</p>
<p class="word-example">Region:${countrys[i].region}</p>
<p class="word-example">Region:${countrys[i].demonym}</p>`
 }
}
return result.innerHTML = `<h3 class=error>not available</h3>`
}catch(err){
  result.innerHTML = `<h3 class=error>${err}</h3>`;
}
}
search.addEventListener("click",find_one_country)
