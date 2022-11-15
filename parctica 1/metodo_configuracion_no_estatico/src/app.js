import React,{Component} from "react";
import "./index.css";
import Table from "./table";
import Form from "./Form";

class App extends Component{

    state={
        characters:[]
    }

    removerCharacter=(index)=>{
        const {characters}=this.state;
        
        this.setState({
            characters:characters.filter((character,i)=>{
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
      }
      

    render(){
        const {characters}=this.state;
        
        return (
           <div className="App">
                <h1>Hello world</h1>
                <br></br>
                <Table charactersData={characters} removeCharacter={this.removerCharacter} />
                <Form handleSubmit={this.handleSubmit} />
           </div> 
        )
    }
}

export default App;