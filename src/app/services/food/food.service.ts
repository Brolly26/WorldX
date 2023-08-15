import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getAllFoodsByTag(tag:string) :Food[]{
 return tag == "All"? 
  this.getAll() :
  this.getAll().filter(food => food.tags?.includes(tag));

}

  getAll():Food[]{ //Função getAll para chamar  todas as images da comida para um array
    return[
      {
        id:1,
        name:'Açaí com recheio',
        price:14,
        cookTime:'10-20 min',
        favorite:false,
        origins:['', '300ML'],
        stars:4.9,
        imageUrl:'/assets/images/foods/acai1.jpg',
        tags: ['Açai','Açaí Recheado','Gelados']
      },
      {
        id:2,
        name:'Açaí Gourmet',
        price:11,
        cookTime:'10-20 min',
        favorite:false,
        origins:['300ML'],
        stars:4.5,
        imageUrl:'/assets/images/foods/acai2.jpg',
        tags: ['Açai','Açai Gourmet','Gelados']
      },
      {
        id:3,
        name:'Sorvete Gourmet',
        price:12,
        cookTime:'10-20 min',
        favorite:false,
        origins:['300ML'],
        stars:4.3,
        imageUrl:'/assets/images/foods/acai3.jpg',
        tags: ['Sorvete','Sorvete Gourmet','Gelados']
      },
      {
        id:4,
        name:'Açaí com recheio',
        price:12,
        cookTime:'10-20 min',
        favorite:false,
        origins:['300ML'],
        stars:4.1,
        imageUrl:'/assets/images/foods/acai4.jpg',
        tags: ['Açai','Açaí Recheado','Gelados']
      }, 
       {
        id:5,
        name:'Milkshake',
        price:11,
        cookTime:'10-20 min',
        favorite:false,
        origins:['300ML'],
        stars:4.0,
        imageUrl:'/assets/images/foods/acai5.jpg',
        tags: ['Milkshake','Milkshake Gourmet','Gelados']
      }, 
       {
        id:6,
        name:'Sorvete',
        price:11,
        cookTime:'10-20 min',
        favorite:false,
        origins:['300ML'],
        stars:4.5,
        imageUrl:'/assets/images/foods/acai6.jpg',
        tags: ['Sorvete','Sorvete Gourmet','Gelados']
      },
    ]
  }
}
