import clsx from 'clsx'
import Link from 'next/link'

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
            Cette page est en mode preview.&nbsp;
            <Link href='/api/exit-preview'>
              <a className='underline transition-colors duration-200 hover:text-hover'>
                Cliquez ici
              </a>
            </Link>
            &nbsp; pour quitter le mode preview.
          </>
        )}
      </div>
    </div>
  )
}
