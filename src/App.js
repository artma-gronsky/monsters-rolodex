import React, {Component} from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            searchFilter:'',
            monsters: [
                {
                    id: "id1",
                    name: "Frankenstain"
                },
                {
                    id: "id2",
                    name: "Dracula"
                },
                {
                    id: "id3",
                    name: "Zombie "
                }
            ]
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users=> this.setState({monsters: users}))
    }

    changeName() {
        this.setState({
            ...this.state,
        });
    }

    setSearchFilter(str){
        this.setState({
            ...this.state,
            searchFilter: str
        })
    }


    render() {
        const {monsters, searchFilter} = this.state;
        const filteredMonsters = monsters.filter(x => x.name.toLowerCase().includes(searchFilter.toLowerCase()));

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="Search monsters" handleChange={this.setSearchFilter.bind(this)}/>
                <CardList monsters={filteredMonsters}></CardList>
            </div>
        );
    }
}

export default App;
