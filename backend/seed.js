import { User } from "./model/user.js";
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/letterBox')
	.then(() => {
		console.log('Connection open');
	})
	.catch((error) => {
		console.log('Oh no, error.');
		console.log(error);
	})

const user = new User({
	username: 'Ramosz',
	email: 'ramos@gmail.com',
	password: 'ramosz'
})

user.save()
	.then(user => {
		console.log(user);
	})
	.catch(error => {
		console.log(error);
	})
