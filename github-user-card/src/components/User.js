import React from 'react'
import styled from 'styled-components'

const UserCard = styled.div`
    width: 25%;
    margin: 15px auto;
    border: 2px solid grey;
    border-radius: 3px;
    padding: 10px;
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

class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <UserCard>
                <Image src={this.props.userData.avatar_url} />
                <p>{this.props.userData.login}</p>
                <p>since: {this.props.userData.created_at.slice(0,10)}</p>
                <p>Company: {this.props.userData.company}</p>
                <p>Location: {this.props.userData.location}</p>
                <p>Followers: {this.props.userData.followers}</p>

                <a href={this.props.userData.html_url}> Github </a>
            </UserCard>
            <p>{JSON.stringify(this.props.userData)}</p>
            </>

        )
    }
}

export default User