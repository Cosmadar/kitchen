import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[]=[
   { id: 1,
    amount: 7,
    name: "Tort de fructe",
    neededIngredients:[
      {
        id: 1,
        amount: 4,
        name: "Capsuni"
      },
      {
        id: 2,
        amount: 1,
        name: "Lapte"
      },
      {
        id: 3,
        amount: 1,
        name: "Faina"
      },
      {
        id: 4,
        amount: 4,
        name: "Oua"
      },
    ]
  },
  { id: 2,
    amount: 2,
    name: "Tort de Ciocolata",
    neededIngredients:[
      {
        id: 5,
        amount: 4,
        name: "Ciocolata"
      },
      {
        id: 2,
        amount: 1,
        name: "Lapte"
      },
      {
        id: 3,
        amount: 1,
        name: "Faina"
      },
      {
        id: 4,
        amount: 4,
        name: "Oua"
      },
    ]
  },
  { id: 3,
    amount: 7,
    name: "Placinta cu branza",
    neededIngredients:[
      {
        id: 6,
        amount: 2,
        name: "Branza"
      },
      {
        id: 2,
        amount: 1,
        name: "Lapte"
      },
      {
        id: 3,
        amount: 1,
        name: "Faina"
      },
      {
        id: 4,
        amount: 4,
        name: "Oua"
      },
    ]
  },
  ]

  constructor() { }
}
