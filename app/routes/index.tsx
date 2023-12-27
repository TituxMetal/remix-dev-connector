import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

import PageLayout from '~/components/PageLayout'

export const meta: MetaFunction = () => [{ title: 'Remix Dev Connector' }]

const IndexPage = () => {
  return (
    <PageLayout>
      <div className='h-full w-full'>
        <div className='h-full w-full rounded-lg bg-black/20'>
          <div className='m-auto flex h-full w-full flex-col items-center justify-center text-center sm:w-4/5 lg:w-3/5'>
            <h1 className='py-2 text-center text-3xl sm:text-4xl md:text-5xl'>Dev Connector</h1>
            <p className='text-pretty py-2 text-center text-2xl sm:py-4'>
              Create a developer profile/portfolio, share posts and get help from other developpers
            </p>
            <div className='mb-8 flex w-full justify-evenly'>
              <Link
                className='cursor-pointer rounded-lg border-2 border-info/80 bg-info/40 px-8 py-4 text-center text-info transition duration-200 ease-in-out hover:bg-info/30 hover:text-info'
                to='/register'
              >
                Register
              </Link>
              <Link
                className='cursor-pointer rounded-lg border-2 border-success/80 bg-success/40 px-8 py-4 text-center text-success transition duration-200 ease-in-out hover:bg-success/30 hover:text-success'
                to='/login'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default IndexPage
