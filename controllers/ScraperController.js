const service = require('../services/ScraperService')
const controller = {
    getFirstPost: (request, response) => {
        const posts = service.getTop1Posts()
    },
    getTop3Posts: (request, response) => {
        const posts = service.getTop3Posts()
    },
    getTop10Posts: (request, response) => {
        const posts = service.getTop10Posts()
    }
}

module.exports = controller