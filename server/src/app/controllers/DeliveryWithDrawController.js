import * as Yup from 'yup';
import { parseISO, isAfter, isBefore, setHours } from 'date-fns';

import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';

class DeliveryWithDrawController {
	async update(req, res) {
		const schema = Yup.object().shape({
			start_date: Yup.date().required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'validation fails' });
		}

		const { deliverymanId, deliveryId } = req.params;

		/*
		 * Check if delivery man exists
		 */
		const deliveryman = await Deliveryman.findByPk(deliverymanId);

		if (!deliveryman) {
			return res.status(400).json({ error: 'Delivery man does not exists' });
		}

		/*
		 * Check if delivery exists
		 */
		const delivery = await Delivery.findByPk(deliveryId);

		if (!delivery) {
			return res.status(400).json({ error: 'Delivery does not exists' });
		}

		const { count } = await Delivery.findAndCountAll({
			where: {
				deliveryman_id: deliverymanId,
				start_date: null,
				signature_id: null,
			},
		});

		if (count === 5) {
			return res
				.status(400)
				.json({ error: 'Maximum number of withdrawals reached' });
		}

		const { start_date } = req.body;
		const start_date_ISO = parseISO(start_date);

		if (
			isBefore(start_date_ISO, setHours(new Date(), 8)) ||
			isAfter(start_date_ISO, setHours(new Date(), 18))
		) {
			return res.status(400).json({ error: 'Invalid time' });
		}

		await delivery.update({ start_date });

		return res.json({});
	}
}

export default new DeliveryWithDrawController();
