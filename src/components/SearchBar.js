import React,{Component} from 'react';

class SearchBar extends Component{
	state={term:''};

	onFormSubmit = (event) =>{
		event.preventDefault();
		//Call back from App
		this.props.onFormSubmit(this.state.term);
	}; 

	render(){
		return(
		<div className='search-bar ui segment'>
			<form className='ui form' onSubmit={this.onFormSubmit}>
				<div className='field'>
					<div className="black"><label> Video Search </label></div>
					<input type="text" value={this.state.term} placeholder="Search..." onChange={(e)=>this.setState({term:e.target.value})}/>
				</div>
			</form>
		</div>
		);
	}
}

export default SearchBar;