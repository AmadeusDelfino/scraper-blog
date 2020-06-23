const dataProvider = require('../dataProvider/redditProvider')

module.exports = {
    getTop1Posts: async () => {
        let feed = await dataProvider.getFeed()
        feed.posts = feed.posts.slice(0, 1)
        feed.total = feed.posts.length

        return feed
    },
    getTop3Posts: async () => {
        let feed = await dataProvider.getFeed()
        feed.posts = feed.posts.slice(0, 3)
        feed.total = feed.posts.length

        return feed
    },
    getTop10Posts: async () => {
        let feed = await dataProvider.getFeed()
        feed.posts = feed.posts.slice(0, 10)
        feed.total = feed.posts.length

        return feed
    }
}