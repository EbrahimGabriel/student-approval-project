import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/project')

const User = mongoose.model('User', {
	fname: String,
	mname: String,
	lname: String,
	snumber: String,
	usertype: String,
	email: String,
	password: String, //very secure!
	applications: [{type: mongoose.Schema.Types.ObjectId, ref: 'Application'}], //idk lol
	adviser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const getUsers = async (req, res) => {
	const users = await User.find({});
	res.send(users)
}

const getUserByEmailPassword = async (req, res) => {
	const user = await User.findOne({ email: req.query.email, password: req.query.password })
	res.send(subject)
}

const addUser = async (req, res) => {
	const { fname, mname, lname, snumber, usertype, email, password } = req.body

	const newUser = new User({ fname, mname, lname, snumber, usertype, email, password, applications:[], adviser:null })

	const result = await newUser.save()

	if (result._id) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
}

//add edit functionality later on
//
//-------------------------------

//deletes using user id
const deleteUser = async (req, res) => {
	const { _id } = req.body

	const result = await User.deleteOne({ _id })

	if (result.deletedCount == 1) {
		res.send({ success: true })
	} else { 
		res.send({ success: false })
	}
}

export { getUsers, addUser, deleteUser, getUserByEmailPassword };