import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredients:Ingredient[]=[
    {
      id: 1,
      amount: 20,
      name: "Capsuni"
    },
    {
      id: 2,
      amount: 10,
      name: "Lapte"
    },
    {
      id: 3,
      amount: 10,
      name: "Faina"
    },
    {
      id: 4,
      amount: 35,
      name: "Oua"
    },
    {
      id: 5,
      amount: 25,
      name: "Ciocolata"
    },
    {
      id: 6,
      amount: 40,
      name: "Branza"
    },
  ]

  constructor() { }
}
