import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',11)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing:Ingredient){
    this.ingredients.push(ing)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
