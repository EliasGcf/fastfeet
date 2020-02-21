import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import File from '../models/File';

class DeliveryFinishController {
	async update(req, res) {
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
		const delivery = await Delivery.findOne({
			where: {
				id: deliveryId,
				start_date: { [Op.not]: null },
				signature_id: null,
			},
		});

		if (!delivery) {
			return res.status(400).json({ error: 'Delivery does not exists' });
		}

		const { signature_id } = req.body;

		const signatureImage = await File.findByPk(signature_id);

		if (!signatureImage) {
			return res.status(400).json({ error: 'Signature image does not exists' });
		}

		await delivery.update({
			end_date: new Date(),
			signature_id,
			status: 'ENTREGUE',
		});

		return res.json({});
	}
}

export default new DeliveryFinishController();
