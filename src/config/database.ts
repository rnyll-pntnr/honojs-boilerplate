import { connect } from 'mongoose'
import type { PinoLogger } from '../utils/logger'

export const dbConfig = async (logger: PinoLogger) => {
    try {
        return await connect(`${process.env.DB_STRING}/${process.env.DB_NAME}`, {
            authSource: 'admin',
            user: process.env.DB_USER,
            pass: process.env.DB_PASS
        })
        .then(() => {
            logger.info('Database connected successfully')
        })
    } catch (error) {
        logger.info(`Database connection error: ${error}`)
        process.exit(1)   
    }
    
}