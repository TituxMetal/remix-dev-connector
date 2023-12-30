import { PageLayout } from '~/components/PageLayout'
import { Lead } from '~/components/UI/Lead'

const LoginPage = () => {
  return (
    <PageLayout>
      <Lead.Title position='center' size='large'>
        Login
      </Lead.Title>
      <Lead.Subtitle>
        Connect to your account and start building your developer portfolio
      </Lead.Subtitle>
    </PageLayout>
  )
}

export default LoginPage
