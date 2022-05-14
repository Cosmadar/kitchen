import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shard/ingredient';
import { Recipe } from 'src/app/shard/recipe';
import { IngredientService } from 'src/app/shard/Serices/ingredient.service';
import { RecipeService } from 'src/app/shard/Serices/recipe.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass']
})
export class KitchenComponent implements OnInit {
 ingredents!:Ingredient[];
 recipes!:Recipe[];
  constructor(
    private recipeService: RecipeService,
    private ingredientService:IngredientService
  ) { }

  ngOnInit(): void {
    this.ingredents=this.ingredientService.ingredients;
    this.recipes=this.recipeService.recipes;
    console.log(this.recipes,this.ingredents);

  }
  bakeRecipe(recepi:Recipe){
    let selectRecipe:Recipe;
    for(let i=0;i<this.recipes.length;i++)
    { if(this.recipes[i].id==recepi.id){
      selectRecipe=this.recipes[i];
      selectRecipe.amount++;
      selectRecipe.neededIngredients.forEach(ingr=>ingr.amount--)
    }
    }
  }
}
