import { verify } from 'jsonwebtoken'
import { ENV } from '../config/environment'
import { Context } from '../context'
import { Token } from '../types/auth'

export function getUserId(context: Context) {
  const authHeader = context.req['Authorization'] as string

  if (authHeader) {
    const token = authHeader.replace('Bearer ', '')
    const verifiedToken = verify(token, ENV.JWT) as Token
    return verifiedToken && Number(verifiedToken.userId)
  }
}
