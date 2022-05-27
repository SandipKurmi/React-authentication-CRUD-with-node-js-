/* import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

export default router; */

import express from 'express';
import userRoutes from './userRoute';
import productRoutes from './productRoute'


const router = express.Router();

userRoutes(router);
productRoutes(router)

export default router;
