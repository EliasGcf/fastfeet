import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			street: Yup.string().required(),
			number: Yup.number().required(),
			complement: Yup.string().required(),
			state: Yup.string().required(),
			city: Yup.string().required(),
			zip_code: Yup.string().required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'validation fails' });
		}

		const {
			name,
			street,
			number,
			complement,
			state,
			city,
			zip_code,
		} = req.body;

		const { id } = await Recipient.create({
			name,
			street,
			number,
			complement,
			state,
			city,
			zip_code,
		});

		return res.json({
			id,
			name,
			street,
			number,
			complement,
			state,
			city,
			zip_code,
		});
	}
}

export default new RecipientController();
