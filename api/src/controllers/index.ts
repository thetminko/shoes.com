import { Router } from 'express';
import { sampleController } from './SampleController';

const allRouter: Router = Router();
allRouter.use(sampleController);

const apiController: Router = Router();
apiController.use('/api', allRouter);

export { apiController };
