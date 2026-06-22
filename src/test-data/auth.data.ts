
import { Accounts } from '@interfaces/user.interface'
import dotenv from 'dotenv'
dotenv.config()

export const accounts: Accounts = {
  standardUser: {
    username: process.env.STANDARD_USER || '',
    password: process.env.PASSWORD || '',
  },
  lockedOutUser: {
    username: process.env.LOCKED_OUT_USER || '',
    password: process.env.PASSWORD || '',
  },
}