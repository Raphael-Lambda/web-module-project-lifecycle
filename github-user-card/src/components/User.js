import React from 'react'
import styled from 'styled-components'

const UserCard = styled.div`
    width: 25%;
    margin: 15px auto;
    border: 2px solid grey;
    border-radius: 3px;
    background: #e8980d;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
`

const Image = styled.img`
    margin: auto;
    border: 4px solid grey;
    border-radius: 50%;
    max-width: 95%;
    height: auto;
    `
const Graph = styled.div`
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
`

const Details = styled.div`
    margin: 2% auto;
    background: #e0b970;
    padding: 5px;
    width: 85%;
    border: 1px solid grey;
    text-align: center;
    
`

class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const graph = `https://grass-graph.moshimo.works/images/${this.props.userData.login}.png`
        return(this.props.userData? 
            <>
                <UserCard>
                    <Image src={this.props.userData.avatar_url} />
                    <Details>{this.props.userData.login}</Details>
                    <Details>Company: {this.props.userData.company}</Details>
                    <Details>Location: {this.props.userData.location}</Details>
                    <Details>Followers: {this.props.userData.followers}</Details>
                    <Details><a href={this.props.userData.html_url}> Github </a></Details>
                </UserCard>
                <Graph>
                    <h2>Contributions</h2>
                    <img src={graph}/>
                </Graph>
            </>: "no user found"
        )   

        
            
        
    }
}

export default User