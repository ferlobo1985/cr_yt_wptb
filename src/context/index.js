import React,{ Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
        const { players } = this.state;

        if(players.length < 2){
            //// show toast
            toast.error("You need more than one player",{
                position:toast.POSITION.TOP_LEFT,
                autoClose:2000
            })
        } else {
            this.setState({
                stage:2
            },()=> {
                setTimeout(()=>{
                console.log('the loser is blah')
                },2000)
            })
        }

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
                <ToastContainer/>
            </>
        )
    }

}

export {
    MyContext,
    MyProvider
}