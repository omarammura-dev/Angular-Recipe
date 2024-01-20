import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService{

  recipeSelector = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('This is test Recipe','test desc', 'https://thebrilliantkitchen.com/wp-content/uploads/2023/02/Crockpot-Keto-Meatloaf-1.jpeg.webp',[new Ingredient('Mead',1),new Ingredient('French Fries',20)])
  ];

  constructor(private slService:ShoppingListService) {

  }
  getRecipes(){
    return this.recipes.slice();
  }


  addIngredientsToShoppingList(ingredients:Ingredient[])
  {
    this.slService.addIngredients(ingredients)
  }
}
