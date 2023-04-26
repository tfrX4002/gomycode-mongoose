require('env').config({ path : './config/.env'})

const mongoose = require('mongoose')

const Connection = () => {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => 
                console.log(`server started on the port ${ process.env.PORT }`)
            )
            .catch(error => {
                console.log(error)
            })
    }

module.exports = Connection