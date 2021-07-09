import React from 'react'
import styled from 'styled-components'

const NiceForm = styled.form`
    padding: 30px 30%;
    border: 2px dashed black;
    border-radius: 5px;
    margin: 15px auto;
`

class Form extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <NiceForm onSubmit={this.props.handleSubmit}>
                <input type='text' onChange={this.props.handleChange} value={this.props.user}/>
                <button> Search !</button>
            </NiceForm>
        )
    }
}

export default Form