import AuthForm from '@/components/AuthForm';

const SignUp = async ({ type }: { type:string }) => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp;