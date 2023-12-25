import type { ActionFunctionArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import * as React from 'react'

import { createNote } from '~/models'
import { requireUserId } from '~/services'

export const action = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request)

  const formData = await request.formData()
  const title = formData.get('title')
  const body = formData.get('body')

  if (typeof title !== 'string' || title.length === 0) {
    return json(
      { errors: { title: 'Title is required', body: null } },
      { status: 400 }
    )
  }

  if (typeof body !== 'string' || body.length === 0) {
    return json(
      { errors: { title: null, body: 'Body is required' } },
      { status: 400 }
    )
  }

  const note = await createNote({ title, body, userId })

  return redirect(`/notes/${note.id}`)
}

const NewNotePage = () => {
  const actionData = useActionData<typeof action>()
  const titleRef = React.useRef<HTMLInputElement>(null)
  const bodyRef = React.useRef<HTMLTextAreaElement>(null)

  /**
   * React hook that focuses the first input with a validation error
   * on render. This provides a better UX by focusing the invalid
   * input so the user can correct the error.
   */
  React.useEffect(() => {
    const focusElement = actionData?.errors?.title
      ? titleRef.current
      : actionData?.errors?.body
        ? bodyRef.current
        : null

    focusElement?.focus()
  }, [actionData])

  return (
    <Form
      method='post'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: '100%'
      }}
    >
      <div>
        <label className='flex w-full flex-col gap-1'>
          <span>Title: </span>
          <input
            ref={titleRef}
            name='title'
            className='flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose'
            aria-invalid={actionData?.errors?.title ? true : undefined}
            aria-errormessage={
              actionData?.errors?.title ? 'title-error' : undefined
            }
          />
        </label>
        {actionData?.errors?.title && (
          <div className='pt-1 text-red-700' id='title-error'>
            {actionData.errors.title}
          </div>
        )}
      </div>

      <div>
        <label className='flex w-full flex-col gap-1'>
          <span>Body: </span>
          <textarea
            ref={bodyRef}
            name='body'
            rows={8}
            className='w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6'
            aria-invalid={actionData?.errors?.body ? true : undefined}
            aria-errormessage={
              actionData?.errors?.body ? 'body-error' : undefined
            }
          />
        </label>
        {actionData?.errors?.body && (
          <div className='pt-1 text-red-700' id='body-error'>
            {actionData.errors.body}
          </div>
        )}
      </div>

      <div className='text-right'>
        <button
          type='submit'
          className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400'
        >
          Save
        </button>
      </div>
    </Form>
  )
}

export default NewNotePage
