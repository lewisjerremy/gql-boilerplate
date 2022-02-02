import { prisma } from './config/prisma'
import { PrismaClient } from '@prisma/client'

type Request = Record<string, unknown>

export interface Context {
  prisma: PrismaClient
  req: Request
}

export function createContext(req: Request) {
  return {
    ...req,
    prisma,
  }
}
