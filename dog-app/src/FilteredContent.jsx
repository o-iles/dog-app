import React, { Component } from 'react';
import List from './List';
import {ToggleButtonGroup,ToggleButton} from 'react-bootstrap';

class FilteredContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			apt: 0,
			barks: 0,
			quiet: 0,
			drools: 0,
			kids: 0,
			items: this.props.items,
		};

		this.sortContent = this.sortContent.bind(this);
	}


	changeOptions = (values) => {
		this.setState({apt: values.includes("apt")}) //if apt is checked, state will be 1
		this.setState({barks: values.includes("barkers")}) //if barks is checked, state will be 1
		this.setState({quiet: values.includes("quiet")}) //if quiet is checked, state will be 1
		this.setState({drools: values.includes("droolers")})
		this.setState({kids: values.includes("kidfriendly")})
	}

	filterItem = (item) => {
		return(
			(item.apt===this.state.apt || this.state.apt===0) &&
			(item.barks===this.state.barks || this.state.barks===0) &&
			(item.quiet===this.state.quiet || this.state.quiet===0) &&
			(item.drools===this.state.drools || this.state.drools===0) &&
			(item.kids===this.state.kids || this.state.kids===0)
			)
	}


	sortContent = (value)  => {
		if (value.includes("sortSize")) {
			this.setState({items: this.state.items.sort((a, b) => a.size - b.size)});
		} if (value.includes("sortAZ")){
			this.setState({items: this.state.items.sort((a,b) => {
				if(a.name<b.name) return -1;
				if(a.name>b.name) return 1;
				return 0; }
			)});
		}
	}

	render() {

		return(

			<div>

				<div class="button-area">

					<div class = "button-bar">
					<ToggleButtonGroup bsSize = "small" type="checkbox" onChange = {this.changeOptions} class="toggle-buttons">
						<ToggleButton value ={"apt"}> Adapts to Apartments Well</ToggleButton>
						<ToggleButton value ={"barkers"}> Tends to Bark </ToggleButton>
						<ToggleButton value ={"quiet"}> Pretty Quiet </ToggleButton>
						<ToggleButton value = {"droolers"}> Tends to Drool </ToggleButton>
						<ToggleButton value = {"kidfriendly"}> Especially Kid Friendly </ToggleButton>
					</ToggleButtonGroup>
					</div>

					<br />
					<ToggleButtonGroup bsSize="small" type="radio" name = "sortOptions" onChange = {this.sortContent} class="sort">
						<ToggleButton value={"sortAZ"}>Sort A to Z</ToggleButton>
						<ToggleButton value={"sortSize"}>Sort by Size</ToggleButton>
					</ToggleButtonGroup>

				</div>
					<div className="filter-content">
							<List items = {this.state.items.filter(this.filterItem)} />
					</div>

			</div>

			)
	}
}

export default FilteredContent;
