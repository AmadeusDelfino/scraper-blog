let express = require('express');
let router = express.Router();
const controller = require('../controllers/ScraperController')


router.get('/top1', controller.getFirstPost)
router.get('/top3', controller.getTop3Posts)
router.get('/top10', controller.getTop10Posts)

module.exports = router;
