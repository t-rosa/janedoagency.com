import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Modal from './Modal'
import axios from 'axios'

const schema = z.object({
  firstName: z
    .string({
      required_error: 'Merci de renseigner votre prénom.',
      invalid_type_error: "Merci d'utiliser une chaine de caractères.",
    })
    .min(1)
    .max(50, 'Le prénom doit faire moins de 50 caractères.'),
  lastName: z
    .string({
      required_error: 'Merci de renseigner votre nom de famille.',
      invalid_type_error: "Merci d'utiliser une chaine de caractères.",
    })
    .min(1)
    .max(50, 'Le nom de famille doit faire moins de 50 caractères.'),
  email: z.string().email({
    message: 'Adresse e-mail invalide.',
  }),
  phone: z.string().length(10, 'Le numéro de téléphone doit faire exactement 10 caractères.'),
  message: z
    .string({
      required_error: 'Merci de renseigner un message.',
    })
    .min(1)
    .max(500, 'Le message ne peux pas contenir plus de 500 caractères.'),
})

function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('Email envoyé avec succès')
  const [type, setType] = useState<'success' | 'error' | 'info'>('success')
  const agreedButton = useRef(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    resolver: zodResolver(schema),
  })

  function onSubmit(data: any) {
    if (agreed) {
      axios
        .post('/api/contact', data)
        .then(() => {
          setType('success')
          setTitle('Email envoyé avec succès')
          setOpen(true)
          setAgreed(false)
          reset()
        })
        .catch((error) => {
          setType('error')
          setTitle("Il y a eu une érreur lors de l'envoi du mail")
          setOpen(true)
        })
    } else {
      const currentAgreedButton: any = agreedButton.current
      currentAgreedButton.focus()
    }
  }

  return (
    <>
      <Modal type={type} open={open} setOpen={setOpen} title={title} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
      >
        <div>
          <label htmlFor='firstName' className='block text-sm font-medium '>
            Prénom
          </label>
          <div className='mt-1'>
            <input
              {...register('firstName')}
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
              {...register('lastName')}
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
              {...register('email')}
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
              {...register('phone')}
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
              {...register('message')}
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
                ref={agreedButton}
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
            className='inline-flex w-full items-center justify-center border border-transparent border-zinc-100 px-6 py-3 font-display text-base  font-semibold uppercase  text-white shadow-sm hover:border-hover  hover:text-hover focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2'
          >
            Envoyer
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
