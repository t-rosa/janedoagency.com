import Image from 'next/image'
import Date from './Date'

export default function Avatar({ name, picture, date }: any) {
  return (
    <div className='flex items-center'>
      <div className='relative mr-4 h-12 w-12'>
        <Image src={picture.url} layout='fill' className='rounded-full' alt={name} />
      </div>
      <div>
        <div className='text-xl font-bold'>{name}</div>
        <Date dateString={date} />
      </div>
    </div>
  )
}
