import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',11)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing:Ingredient){
    this.ingredients.push(ing)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]){
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
