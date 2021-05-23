import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'

const name = require ('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            headerText: 'Name It',
            headerExpanded:true,
            suggestedNames: [],

        };
    }
 
    // state = {
    //     headerText: 'This is a cool app!',
    //     headerExpanded : true ,

    // }


    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded:!inputText,
            suggestedNames: inputText ? name(inputText):[],
        });

    
        this.setState({headerExpanded: inputText.length > 0 ? false : true});
    }



    render() {
         return (
            <div>
            
            <Header 
                headerExpanded = {this.state.headerExpanded}
                headTitle = {this.state.headerText}
          />  
             <SearchBox onInputChange={this.handleInputChange}/>
             <ResultContainer suggestedNames ={this.state.suggestedNames}/>
            
            </div>

        );
    }
}

export default App;

//  function App(){
//       return <h1> This is my functional Component</h1>
//                 }
