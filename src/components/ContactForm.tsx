import { Switch } from '@headlessui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { ContactFormData } from 'interfaces/contact'
import Link from 'next/link'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { selectContact, toggleAgreed } from 'slices/contact'
import { sendMail } from 'thunks/contact.api'
import * as yup from 'yup'

const schema = yup
  .object({
    firstName: yup.string().required().max(50),
    lastName: yup.string().required().max(50),
    email: yup.string().email().required(),
    phone: yup.string().required().length(10),
    message: yup.string().required().max(500),
    aggreed: yup.bool().oneOf([true]),
  })
  .required()

function ContactForm() {
  const contact = useAppSelector(selectContact)
  const agreedButton = useRef(null)
  const dispatch = useAppDispatch()

  const form = useForm<ContactFormData>({
    defaultValues: contact.formData,
    resolver: yupResolver(schema),
  })

  return (
    <form
      onSubmit={form.handleSubmit((formData) => {
        if (contact.formData.agreed) {
          dispatch(sendMail(formData)).then(() => {
            form.reset()
            dispatch(toggleAgreed())
          })
        } else {
          const agreedButtonElement: any = agreedButton.current
          agreedButtonElement.focus()
        }
      })}
      className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
    >
      <div>
        <label htmlFor='firstName' className='block text-sm font-medium '>
          Prénom
        </label>
        <div className='mt-1'>
          <input
            {...form.register('firstName')}
            type='text'
            name='firstName'
            id='firstName'
            autoComplete='given-name'
            className='block w-full border-zinc-300 bg-zinc-800 py-3 px-4 shadow-sm focus:border-hover focus:ring-hover '
          />
        </div>
      </div>
      <div>
        <label htmlFor='lastName' className='block text-sm font-medium '>
          Nom
        </label>
        <div className='mt-1'>
          <input
            {...form.register('lastName')}
            type='text'
            name='lastName'
            id='lastName'
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
            {...form.register('email')}
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            className='block w-full border-zinc-300 bg-zinc-800 py-3 px-4 shadow-sm focus:border-hover focus:ring-hover '
          />
        </div>
      </div>
      <div className='sm:col-span-2'>
        <label htmlFor='phone' className='block text-sm font-medium '>
          Téléphone
        </label>
        <div className='relative mt-1 shadow-sm'>
          <input
            {...form.register('phone')}
            type='text'
            name='phone'
            id='phone'
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
            {...form.register('message')}
            id='message'
            name='message'
            rows={4}
            className='block w-full border border-zinc-300 bg-zinc-800 py-3 px-4 shadow-sm focus:border-hover focus:ring-hover '
            defaultValue={contact.formData.message}
          />
        </div>
      </div>
      <div className='sm:col-span-2'>
        <div className='flex items-start'>
          <div className='flex-shrink-0'>
            <Switch
              {...form.register('agreed')}
              name='agreed'
              ref={agreedButton}
              value={String(contact.formData.agreed)}
              checked={contact.formData.agreed}
              onChange={() => {
                dispatch(toggleAgreed())
                form.setValue('agreed', !contact.formData.agreed)
              }}
              className={clsx(
                contact.formData.agreed ? 'bg-hover' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2'
              )}
            >
              <span className='sr-only'>Accepter les politiques</span>
              <span
                aria-hidden='true'
                className={clsx(
                  contact.formData.agreed ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <div className='ml-3'>
            <p className='text-base text-zinc-400'>
              En sélectionnant ceci, vous acceptez les&nbsp;
              <Link href='/privacy-policy'>
                <a className='font-medium text-hover underline'>politiques de confidentialité</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className='sm:col-span-2'>
        <button
          type='submit'
          className='inline-flex w-full items-center justify-center border border-transparent border-zinc-100 px-6 py-3 font-display text-base font-semibold  uppercase text-white  shadow-sm hover:border-hover hover:text-hover  focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2 disabled:bg-red-500'
        >
          Envoyer
        </button>
      </div>
    </form>
  )
}

export default ContactForm
