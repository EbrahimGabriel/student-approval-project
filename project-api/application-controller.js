import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/project')

const Application = mongoose.model('Application', {
	status: String,
	step: Number,
	remarks: {
		remark: String,
		date: Date,
		commenter: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		stepgiven: Number
	},
	studentsubmission: {
		link: String,
		date: Date,
		stepgiven: Number
	}
});

const getApplications = async (req, res) => {
	const applications = await Application.find({});
	res.send(applications)
}

const addApplication = async (req, res) => {
	const { status, step, studentsubmission } = req.body

	const newApplication = new Application({ status, step, remarks:[], studentsubmission})

	const result = await newApplication.save()

	if (result._id) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
}

//add edit functionality later on
//
//-------------------------------

//might be edit to closed status instead, for now just delete it
const deleteApplication = async (req, res) => {
	const { _id } = req.body

	const result = await Application.deleteOne({ _id })

	if (result.deletedCount == 1) {
		res.send({ success: true })
	} else { 
		res.send({ success: false })
	}
}

export { getApplications, addApplication, deleteApplication };