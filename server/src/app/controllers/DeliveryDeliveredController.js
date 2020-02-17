import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliveryDeliveredController {
	async index(req, res) {
		const { id: deliverymanId } = req.params;

		const deliveryman = await Deliveryman.findByPk(deliverymanId);

		if (!deliveryman) {
			return res.status(400).json({ error: 'Delivery man does not exists' });
		}

		const deliveries = await Delivery.findAll({
			where: {
				signature_id: { [Op.not]: null },
			},
			attributes: [
				'id',
				'deliveryman_id',
				'product',
				'start_date',
				'end_date',
				'canceled_at',
			],
			include: [
				{
					model: Recipient,
					as: 'recipient',
					attributes: ['id', 'name'],
				},
				{
					model: File,
					as: 'signature',
					attributes: ['id', 'url', 'path'],
				},
			],
		});

		return res.json(deliveries);
	}
}

export default new DeliveryDeliveredController();
