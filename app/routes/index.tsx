import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

import { PageLayout } from '~/components/PageLayout'
import { Button } from '~/components/UI/Button'
import { Lead } from '~/components/UI/Lead'
import { Wrapper } from '~/components/UI/Wrapper'

export const meta: MetaFunction = () => [{ title: 'Remix Dev Connector' }]

const IndexPage = () => {
  return (
    <PageLayout fullWidth>
      <div className='h-full w-full'>
        <div className='h-full w-full rounded-lg bg-black/20'>
          <div className='m-auto flex h-full w-full flex-col items-center justify-center text-center sm:w-4/5 lg:w-3/5'>
            <Lead.Title size='large' position='center'>
              Dev Connector
            </Lead.Title>
            <Lead.Subtitle size='large'>
              Create a developer profile/portfolio, share posts and get help from other developpers
            </Lead.Subtitle>
            <Wrapper direction='row' position='center' spacing='sm'>
              <Button variant='info' size='large'>
                <Link to='/register'>Register</Link>
              </Button>
              <Button variant='success' size='large'>
                <Link to='/login'>Login</Link>
              </Button>
            </Wrapper>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default IndexPage
