import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, InformationCircleIcon, XIcon } from '@heroicons/react/outline'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { Fragment } from 'react'
import { closeModal, selectModal } from 'slices/modal'
import LoadingIcon from './LoadingIcon'

function Modal() {
  const modal = useAppSelector(selectModal)
  const dispatch = useAppDispatch()

  return (
    <Transition.Root show={modal.isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => dispatch(closeModal())}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden border bg-zinc-800 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                <div>
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full border bg-zinc-100'>
                    {modal.type === 'success' && (
                      <CheckIcon className='text-bold h-8 w-8 text-hover' aria-hidden='true' />
                    )}
                    {modal.type === 'error' && (
                      <XIcon className='text-bold h-8 w-8 text-hover' aria-hidden='true' />
                    )}
                    {modal.type === 'info' && (
                      <InformationCircleIcon
                        className='text-bold h-8 w-8 text-hover'
                        aria-hidden='true'
                      />
                    )}
                    {modal.type === 'loading' && <LoadingIcon />}
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title as='h3' className='text-lg font-medium leading-6'>
                      {modal.title}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>{modal.message}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center border px-4 py-2 font-display text-base font-bold  uppercase text-white shadow-sm hover:border-hover hover:text-hover sm:text-sm'
                    onClick={() => dispatch(closeModal())}
                  >
                    fermer
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Modal
