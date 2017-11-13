import React, { Component } from 'react';
import './App.css';

class List extends Component {
    renderList() {

        const items = this.props.items.map(item => {
            return (
            <li key={item.name}>
              <img src={item.pic} alt = {""}/>
              <div class = "text-field">
                <div class = "item-title">{item.name}</div>
                <div class = "item-desc">{item.desc}</div>
              </div>
              <br/>
            </li>
            )
        });

        return items;
    }

    render() {
        return (
            <ul class ="list-comps">
                {this.renderList()}
            </ul>
        );
    }
}

export default List;