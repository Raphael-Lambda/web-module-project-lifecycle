import React from 'react'
import axios from 'axios'

import Header from './components/Header'
import Form from './components/Form'
import User from './components/User'



class App extends React.Component{
    state = {
        user: '',
        userData: ''
    }

    fetchUser = (userName) => {
        axios.get(`https://api.github.com/users/${userName}`)
            .then(response => this.setState({
                ...this.state,
                user: '',
                userData: response.data})
            )
            .catch(error => {
                console.log(error);
                this.setState({
                    ...this.state,
                    userData: ''})
            })
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            user: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.fetchUser(this.state.user)
    }
            

    componentDidMount(){
        this.fetchUser('RaphaelHebert')
    }


    render(){
        return(
            <>
            <Header />
            <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} />
            <User userData={this.state.userData} />
            </>
        )
    }
}

export default App