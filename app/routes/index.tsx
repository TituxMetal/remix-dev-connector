import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Remix Dev Connector' }]

const IndexPage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center space-y-4'>
      <h1 className='text-2xl font-bold text-sky-400'>Remix Dev Connector</h1>
      <p>This is a simple example of a Remix app that uses the Remix Dev</p>
    </main>
  )
}

export default IndexPage
