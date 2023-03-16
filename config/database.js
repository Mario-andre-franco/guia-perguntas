const {Pool} = require('pg')
const dotenv = require('dotenv')
const Sequelize = require('sequelize')
dotenv.config()

const connection = new Sequelize('postgres','postgres',process.env.DATABASE_PASS, {
    host:'localhost',
    dialect: 'postgres'
})

module.exports = connection;