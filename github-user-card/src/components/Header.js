import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding: 15px;
    border-bottom: 3px solid grey;
    background: #f4e3c1;
`

class Header extends React.Component{
    render(){
        return(
            <Head>
                <h1>This is GitHub UserCard App!</h1>
            </Head>
        )
    }
}

export default Header