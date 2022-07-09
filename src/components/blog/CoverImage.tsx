import { Image } from 'react-datocms'
import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  title: string
  responsiveImage: any
  slug: string
}

export default function CoverImage({ title, responsiveImage, slug }: Props) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Image de couverture pour ${title}`,
      }}
      className={clsx('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )

  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/blog/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
