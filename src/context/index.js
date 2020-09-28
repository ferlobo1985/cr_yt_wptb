import React,{ Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        stage:1,
        players:[],
        result:''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState,props)=>({
            players: [
                ...prevState.players,
                name
            ]
        }));
    }

    removePlayerHalder = (idx) => {
        let newArray = this.state.players; // create a copy
        newArray.splice(idx,1); // remove by position 

        this.setState({ players:newArray })
    }

    nextHandler = () =>{ 

    }


    render(){
        return(
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayerHalder,
                    next: this.nextHandler
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }

}

export {
    MyContext,
    MyProvider
}