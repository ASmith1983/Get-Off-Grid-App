const Trail = require('../models/trail')
const trailData = require('./trails.json')

Trail.deleteMany({})
    .then(()=> {
        return Trail.insertMany(trailData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })