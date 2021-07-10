import React from 'react'
import styled from 'styled-components'

const UserCard = styled.div`
    width: 80%;
    margin: 15px auto;
    border: 2px solid grey;
    border-radius: 3px;
    background: lightgrey;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
`

const Image = styled.img`
    margin: 15px 15px 0 15px;
    border: 4px solid lightgrey;
    border-radius: 50%;
    max-width: 30%;
    height: auto;
    object-fit: cover;
    `
const Graph = styled.div`
    width: 100%;
    padding: 0 0 15px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    background:lightgrey;
`

const Details = styled.div`
    margin: 2% auto;
    background: lightgrey;
    padding: 10px;
    width: 85%;
    border: 1px solid grey;
    text-align: center;
`
const Graphimg = styled.img`
    max-width: 95%;
    height: auto;
`
const Top = styled.div`
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    background: grey;
    padding-bottom: 15px;
`
const Topdetails = styled.div`
    
    width: 80%;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
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
                    <Top>
                        <Image src={this.props.userData.avatar_url} />
                        <Topdetails>
                            <Details>{this.props.userData.login}</Details>
                            <Details>Company: {this.props.userData.company}</Details>
                            <Details>Location: {this.props.userData.location}</Details>
                            <Details>Followers: {this.props.userData.followers}</Details>
                            <Details><a href={this.props.userData.html_url}> Github </a></Details>
                        </Topdetails>
                    </Top>
                    <Graph>
                        <h2>Contributions</h2>
                        <Graphimg src={graph}/>
                    </Graph>
                </UserCard>
                
            </>: "no user found"
        )   

        
            
        
    }
}

export default User