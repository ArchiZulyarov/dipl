import './recipes-list.scss';
import RecipeCard from "../recipe-card/recipe-card";
import {useSelector} from "react-redux";
import React from 'react';
const RecipesList =  () => {
    // let recipes = useSelector(state => state.recipesInfo.recipes);
    const [recipes, setRecipes] = React.useState([])
    const [rec, setRec] = React.useState(useSelector(state => state.recipesInfo.recipes))

  React.useEffect(() => {
    rec.then(r => {
        setRecipes(r)
        console.log(recipes)
    })
  })



return        <ul className="recipes-list">
              {

                  recipes.map((recipe, idx) =>
                      <RecipeCard
                          key={idx}
                          data={recipe}
                      />
                  )
              }
             </ul>

};

export default RecipesList;
