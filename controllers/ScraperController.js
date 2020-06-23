const service = require('../services/ScraperService')
const controller = {
    getFirstPost: async (request, response) => {
        response.send(await service.getTop1Posts())
    },
    getTop3Posts: async (request, response) => {
        response.send(await service.getTop3Posts())
    },
    getTop10Posts: async (request, response) => {
        response.send(await service.getTop10Posts())
    }
}

module.exports = controller