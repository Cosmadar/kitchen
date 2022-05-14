import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shard/ingredient';
import { IngredientService } from 'src/app/shard/Serices/ingredient.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.sass']
})
export class DepositComponent implements OnInit {
  ingridients!: Ingredient[];

  constructor(private IngredientServices:IngredientService) { }

  ngOnInit(): void {
    this.ingridients=this.IngredientServices.ingredients;
    console.log(this.ingridients)
  }

}
