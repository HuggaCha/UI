import React, { Component } from 'react'

export class UserForm extends Component{

state ={
	step: 1,
	firstName: '', 
	lastName: '', 
	email: '', 
	occupation: '', 
	city: '',
	bio: ''
}

// Proceed to the next step 
nextStep = () =>{
	const { step } = this.state; 
	this.setState({
		step: step+1
	})
}

// Go back to prev state

prevStep = () =>{
	const { step } = this.state; 
	this.setState({
		step: step-1
	})
}
// Handle fields change 
handleChange = input => e =>{
	this.setState({[input]: event.target.value});
}

render(){
	const { step } = this.state; 
	const { firstName, lastName, email, occupation, city, bio} = this.state; 
	const values = {firstName, lastName, email}

	return (
		<div>

		</div>
 )
}

}

export default UserForm