import { Component,OnInit } from '@angular/core';
import {FoodService} from  '../services/food/food.service'
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{  
  ratingValue: number = 1
  stars : any[] = []; 
  foods:Food[] = [];
  chosenMod: string = "";
  checcked: boolean = true ;
  //injetando FoodService no Componente Home
constructor(private foodService:FoodService, private route:ActivatedRoute){}   
   


ngOnInit(): void {
  //adicionando propriedade food no componente home, usando a função getAll dentro do ngOnInit

  this.route.params.subscribe(params =>{
    if(params.searchTerm)
 this.foods = this.foodService.getAllFoodsByTag(params.searchTerm);
  else if(params.tag)
  this.foods = this.foodService.getAllFoodsByTag(params.tag);
    else 
  this.foods = this.foodService.getAll();
  })

}


//   modo(){
//     let checkboxElement = document.querySelector("igc-rating"); // Selecionar o elemento do checkbox

//     if (checkboxElement !== null) {
//       let checkboxValue = checkboxElement.value; // Obter o valor do checkbox
//       return checkboxValue;
//     } else {
//       return null; // Retorna null caso o elemento não seja encontrado
//     }
// }
}