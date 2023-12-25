import type { User, Note } from '@prisma/client'

import { prisma } from '~/lib'

export type { Note } from '@prisma/client'

export const getNote = ({
  id,
  userId
}: Pick<Note, 'id'> & {
  userId: User['id']
}) => {
  return prisma.note.findFirst({
    select: { id: true, body: true, title: true },
    where: { id, userId }
  })
}

export const getNoteListItems = ({ userId }: { userId: User['id'] }) => {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: 'desc' }
  })
}

export const createNote = ({
  body,
  title,
  userId
}: Pick<Note, 'body' | 'title'> & {
  userId: User['id']
}) => {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  })
}

export const deleteNote = ({
  id,
  userId
}: Pick<Note, 'id'> & { userId: User['id'] }) => {
  return prisma.note.deleteMany({
    where: { id, userId }
  })
}
