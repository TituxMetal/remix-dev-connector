import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError
} from '@remix-run/react'
import invariant from 'tiny-invariant'

import { deleteNote, getNote } from '~/models'
import { requireUserId } from '~/services'

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request)
  invariant(params.noteId, 'noteId not found')

  const note = await getNote({ userId, id: params.noteId })
  if (!note) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ note })
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const userId = await requireUserId(request)
  invariant(params.noteId, 'noteId not found')

  await deleteNote({ userId, id: params.noteId })

  return redirect('/notes')
}

const NoteDetailsPage = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h3 className='text-2xl font-bold'>{data.note.title}</h3>
      <p className='py-6'>{data.note.body}</p>
      <hr className='my-4' />
      <Form method='post'>
        <button
          type='submit'
          className='rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400'
        >
          Delete
        </button>
      </Form>
    </div>
  )
}

export const ErrorBoundary = () => {
  const error = useRouteError()

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>
  }

  if (error.status === 404) {
    return <div>Note not found</div>
  }

  return <div>An unexpected error occurred: {error.statusText}</div>
}

export default NoteDetailsPage
