
// T A S K   1 : PETS CATEGORY BUTTON SET UP

//showing all pet Categories from api

const loadAllPetsCategoriesFromApi = async() =>{
   const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
   const data= await response.json()
   displayAllPetsCategoriesFromApi(data.categories)
}


//pet category button
const displayAllPetsCategoriesFromApi = (data) =>{
    const petCategoryButtonContainer = document.getElementById('all-pet-categories')
    


   data.forEach(onePet =>{
    const div = document.createElement('div')

    div.innerHTML=`
    
    <button id="btn-${onePet.category}" onclick="ActiveButton('btn-${onePet.category}');"    class="gap-4 border btn btn-wide btn-lg bg-transparent shadow-none all-pet-category-btn">
    
    <div class="h-10 w-10"> 
    <img class="h-full w-full" src="${onePet.category_icon}" />
    </div> 
    <span class="text-xl font-extrabold interFont">${onePet.category}</span> 
   
    </button>
    `
    petCategoryButtonContainer.appendChild(div)
   })
}



//active button features
async function ActiveButton(buttonName){
    // removing active button features from all buttons
    const allButton = document.getElementsByClassName('all-pet-category-btn')
    for(const oneButton of allButton){
        oneButton.classList.add('border')
        oneButton.classList.remove('bg-[rgb(14,122,129)]', 'bg-opacity-10' ,'rounded-full','border-[#0E7A811A]')
    }

    // adding active button features to clicked button
    document.getElementById(buttonName).classList.add('bg-[rgb(14,122,129)]', 'bg-opacity-10' ,'rounded-full','border-[#0E7A811A]')
    document.getElementById(buttonName).classList.remove('border')
}


loadAllPetsCategoriesFromApi()






//  T A S K   2 : ADD AND SHOW ALL PET CARDS TO pets-card-container 

const loadAllPetsFromApi = async() =>{

const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
const data = await response.json()
displayAndMakeCardOfAllPetsFromApi(data.pets)
}


function displayAndMakeCardOfAllPetsFromApi(allPetsArray){

const petsCardContainer = document.getElementById('pets-card-container')
allPetsArray.forEach((onePet)=>{
console.log(onePet.gender)
})
}




loadAllPetsFromApi()