import Bee from 'bee-queue';

import redisConfig from '../config/redis';

import CreationDeliveryMail from '../app/jobs/CreationDeliveryMail';
import CancelationDeliveryMail from '../app/jobs/CancelationDeliveryMail';

const jobs = [CreationDeliveryMail, CancelationDeliveryMail];

class Queue {
	constructor() {
		this.queues = {};

		this.init();
	}

	init() {
		jobs.forEach(({ key, handle }) => {
			this.queues[key] = {
				bee: new Bee(key, {
					redis: redisConfig,
				}),
				handle,
			};
		});
	}

	add(queue, job) {
		return this.queues[queue].bee.createJob(job).save();
	}

	hanleFailure(job, err) {
		console.log(`Queue ${job.queue.name}: FAILED`, err);
	}

	processQueue() {
		jobs.forEach(job => {
			const { bee, handle } = this.queues[job.key];

			bee.on('failed', this.hanleFailure).process(handle);
		});
	}
}

export default new Queue();
