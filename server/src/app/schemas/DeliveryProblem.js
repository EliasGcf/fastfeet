import mongoose from 'mongoose';

const DeliveryProblemSchema = new mongoose.Schema(
	{
		delivery_id: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('DeliveryProblem', DeliveryProblemSchema);
