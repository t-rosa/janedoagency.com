import { parseISO, format } from 'date-fns'

interface Props {
  dateString: string
}

export default function Date({ dateString }: Props) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className='text-md font-light text-zinc-300'>
      {format(date, 'dd/MM/yyyy')}
    </time>
  )
}
