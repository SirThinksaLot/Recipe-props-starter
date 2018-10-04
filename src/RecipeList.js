import React,{Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css'

class RecipeList extends Component{
	static defaultProps = {
		recipes : [
		{
			title:"ChickenKabab",
			instructions:"Heat the chicken on a skewer in coal oven",
			ingredients:['chicken','chicken masala','spices'],
			img:'ChickenKabab.jpg'
		},
		{
			title:"FishFry",
			instructions:"Cook the fish in a frying pan",
			ingredients:['fish','fish masala','spices'],
			img:'FishFry.jpg'
		},
		{
			title:"MuttonCurry",
			instructions:"Cook the mutton on a skewer in coal oven",
			ingredients:['mutton','mutton masala','spices'],
			img:'MuttonCurry.jpg'
		}
		]
	}
		static propTypes = {
			recipes:PropTypes.arrayOf(PropTypes.object).isRequired
		}
	render(){
		const recipes = this.props.recipes.map((r,index) =>(
			<Recipe key = {index} {...r} />
			));
			return (
				<div className="recipe-list">
					{recipes}
				</div>
				)
	}
}

export default RecipeList;