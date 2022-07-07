import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
      <div>
        <label htmlFor='first-name' className='block text-sm font-medium '>
          Prénom
        </label>
        <div className='mt-1'>
          <input
            type='text'
            name='first-name'
            id='first-name'
            autoComplete='given-name'
            className='block w-full border-zinc-300 bg-zinc-800 py-3 px-4 shadow-sm focus:border-hover focus:ring-hover '
          />
        </div>
      </div>
      <div>
        <label htmlFor='last-name' className='block text-sm font-medium '>
          Nom
        </label>
        <div className='mt-1'>
          <input
            type='text'
            name='last-name'
            id='last-name'
            autoComplete='family-name'
            className='block w-full border-zinc-300 bg-zinc-800 py-3 px-4 shadow-sm focus:border-hover focus:ring-hover '
          />
        </div>
      </div>
      <div className='sm:col-span-2'>
        <label htmlFor='email' className='block text-sm font-medium '>
          Email
        </label>
        <div className='mt-1'>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            className='block w-full border-zinc-300 bg-zinc-800 py-3 px-4 shadow-sm focus:border-hover focus:ring-hover '
          />
        </div>
      </div>
      <div className='sm:col-span-2'>
        <label htmlFor='phone-number' className='block text-sm font-medium '>
          Téléphone
        </label>
        <div className='relative mt-1 shadow-sm'>
          <input
            type='text'
            name='phone-number'
            id='phone-number'
            autoComplete='tel'
            className='block w-full border-zinc-300 bg-zinc-800 py-3 px-4 focus:border-hover focus:ring-hover '
            placeholder='+33 6 10 20 30 40'
          />
        </div>
      </div>
      <div className='sm:col-span-2'>
        <label htmlFor='message' className='block text-sm font-medium '>
          Message
        </label>
        <div className='mt-1'>
          <textarea
            id='message'
            name='message'
            rows={4}
            className='block w-full border border-zinc-300 bg-zinc-800 py-3 px-4 shadow-sm focus:border-hover focus:ring-hover '
            defaultValue={''}
          />
        </div>
      </div>
      <div className='sm:col-span-2'>
        <div className='flex items-start'>
          <div className='flex-shrink-0'>
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={clsx(
                agreed ? 'bg-hover' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2'
              )}
            >
              <span className='sr-only'>Accepter les politiques</span>
              <span
                aria-hidden='true'
                className={clsx(
                  agreed ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <div className='ml-3'>
            <p className='text-base text-zinc-400'>
              En sélectionnant ceci, vous acceptez les{' '}
              <Link href='#'>
                <a className='font-medium text-hover underline'>politiques de confidentialité</a>
              </Link>{' '}
              et les{' '}
              <Link href='#'>
                <a className='font-medium text-hover underline'>politique relative aux cookies</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <div className='sm:col-span-2'>
        <button
          type='submit'
          className='inline-flex w-full items-center justify-center border border-transparent border-zinc-100 px-6 py-3 font-display text-base  font-semibold uppercase  text-white shadow-sm hover:border-hover  hover:text-hover focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2'
        >
          Envoyer
        </button>
      </div>
    </form>
  )
}

export default ContactForm
