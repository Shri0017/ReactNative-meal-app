class Meal{
        constructor(id, categoryId, title,affordabilty, complexity,imageUrl, duration,ingradiants,steps,isGluteenFree, isVegan,isVegetarian,isLactoseFree )
            {
                this.id =id; 
                this.categoryId=categoryId; 
                this.title=title;
                this.affordabilty=affordabilty; 
                this.complexity=complexity;
                this.imageUrl=imageUrl ;
                this.duration=duration;
                this.ingradiants=ingradiants;
                this.steps=steps,isGluteenFree; 
                this.isVegan=isVegan;
                this.isVegetarian=isVegetarian;
                this.isLactoseFree=isLactoseFree;
            }
}
export default Meal;