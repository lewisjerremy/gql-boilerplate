import { User } from '@prisma/client'

const now = new Date('2022-02-01T07:00:00.000Z')

export const userData: User[] = [
  {
    id: 1,
    name: 'Tim',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 2,
    name: 'Robert',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 3,
    name: 'John',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 4,
    name: 'Mark',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 5,
    name: 'Cam',
    createdAt: now,
    updatedAt: now,
  },
]
