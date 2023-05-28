import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/project')

const UserRequest = mongoose.model('UserRequest', {
	fname: String,
	mname: String,
	lname: String,
	snumber: String,
	usertype: String,
	email: String,
	password: String, //very secure!
	applications: [{type: mongoose.Schema.Types.ObjectId, ref: 'Application'}], //idk lol
	adviser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    approved: Boolean
});

const getUserRequests = async (req, res) => {
	const userRequests = await UserRequest.find({});
	res.send(userRequests)
}

const addUserRequest = async (req, res) => {
	const { fname, mname, lname, snumber, usertype, email, password } = req.body

	const newUserRequest = new UserRequest({ fname, mname, lname, snumber, usertype, email, password, applications:[], adviser:null, approved:null })

	const result = await newUserRequest.save()

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
const deleteUserRequest = async (req, res) => {
	const { _id } = req.body

	const result = await UserRequest.deleteOne({ _id })

	if (result.deletedCount == 1) {
		res.send({ success: true })
	} else { 
		res.send({ success: false })
	}
}

export { getUserRequests, addUserRequest, deleteUserRequest };