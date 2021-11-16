import { Client } from 'faunadb'

export const faunda = new Client({ secret: process.env.FAUNADB_KEY })