import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: any) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className='text-md font-light text-zinc-300'>
      {format(date, 'dd/MM/yyyy')}
    </time>
  )
}
