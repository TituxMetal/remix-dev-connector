type PageLayoutProps = {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className='flex min-h-screen flex-col'>
      <div className='flex flex-col items-center justify-center bg-primary/80 py-4'>Menu</div>
      <section className='m-auto w-full flex-grow p-1 sm:w-9/12 sm:p-2'>{children}</section>
      <div className='flex justify-center bg-primary/80 py-4'>
        <p className='text-lg'>Created with love by TuxiMetal</p>
      </div>
    </main>
  )
}

export default PageLayout
