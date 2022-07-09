import clsx from 'clsx'
import { EXAMPLE_PATH } from 'lib/constants'

export default function Alert({ preview }: any) {
  return (
    <div
      className={clsx('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <div className='py-2 text-center text-sm'>
        {preview && (
          <>
            Cette page est en mode preview.{' '}
            <a
              href='/api/exit-preview'
              className='underline transition-colors duration-200 hover:text-hover'
            >
              Cliquez ici
            </a>{' '}
            pour quitter le mode preview.
          </>
        )}
      </div>
    </div>
  )
}
