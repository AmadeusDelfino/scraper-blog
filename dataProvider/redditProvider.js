const Parser = require('rss-parser')
const parser = new Parser()

module.exports = {
    getFeed: async () => {
        const feed = await parser.parseURL('https://www.reddit.com/.rss')
        let items = {
            total: 0,
            posts: feed.items.map(item => {
                return {
                    title: item.title,
                    link: item.link,
                    publicationDate: item.pubDate,
                    creator: item.creator
                }
            })
        }
        items.total = items.posts.length

        return items;
    }
}