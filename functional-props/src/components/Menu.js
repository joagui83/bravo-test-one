import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
        <div>
            <ul>
                {this.props.menu.map(value => {
                    return(
                        <li>
                            <button onClick={ () => this.props.fillPlate(value)}>
                                {value}
                            </button>
                        </li>)
                    })
                }
        </ul>
            </div>
        );
    }
}

export default Menu;