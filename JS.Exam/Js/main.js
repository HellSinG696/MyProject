
allMeal=[]
    

    

async function meal(){
var x= await fetch('https://www.themealdb.com/api/json/v1/1/random.php')

 var res =await x.json()
const y=res.meals[0]
return y


}




async function getMeals() {
    const mealPromises = [];
  
    for (var i = 0; i < 30; i++) {
      mealPromises.push(meal());
    }
    try {
        const resolvedMeals = await Promise.all(mealPromises);
        allMeal.push(...resolvedMeals);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    }
    
    getMeals();


        async function useMeal(i){

            await getMeals();

            return allMeal[i].strMealThumb



        }
   


        async function getMealName(i){

            await getMeals();

            return allMeal[i].strMeal



        }


async function displayMeals(){
    
    await getMeals();
cartona=""
for(var i=0;i<30;i++){

   var x=await useMeal(i)
    var y=await getMealName(i)


cartona+=`
<div class="col-md-3  ">

    
<div class="position-relative   my-3"><img class="img-fluid  rounded " src="${x}" alt="">
<div class="white-layer text-center">
<h3>${y}</h3>
</div>

</div>


</div>`

}


document.querySelector('.target').innerHTML= cartona


}

displayMeals()












$('.navbar-toggler').click(function(){

 $('ul').slideToggle(1000)
 $('.hey').animate({width:"100px"},1000)
 $('.navbar-toggler').hide(1000)
 $('.hi').show(1000)
 $('.layer').removeClass('justify-content-end').addClass('justify-content-center')

}
    )



$('.hi').click(function(){




        $('ul').slideToggle(1000)
        $('.hey').animate({width:"240px"},500)
        $('.navbar-toggler').show(200)
        $('.hi').hide(1000)
        $('.layer').removeClass('justify-content-center').addClass('justify-content-end')






    })


$('.img-fluid').hover(function(){


$('white-layer').CSS('display','')




}












)