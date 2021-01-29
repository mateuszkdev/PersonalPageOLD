import { Schema, model, connect } from 'mongoose'

const connectionUrl: string = `mongodb://localhost:27017/personalpage`

export const connection = () => connect(connectionUrl, {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
})
.then(() => console.log(`[Mongo]: Connected to database.`))

export const accountsSchema =  new Schema({
    ip: {
        type: String, unique: true, required: true
    },
    password: {
        type: String, required: true
    },
    user: {
        name: {
            type: String, required: true, unique: true
        },
        acc: {
            type: String, required: true
        }
    }
})

export const redirectsSchema = new Schema({
    name: {
        type: String, required: true, unique: true
    },
    redirect: {
        type: String, required: true
    }
})

export const accounts = model('accounts', accountsSchema)
export const redirects = model('redirects', redirectsSchema)