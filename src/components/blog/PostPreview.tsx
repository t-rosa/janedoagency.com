import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'
import Link from 'next/link'

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }: any) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} responsiveImage={coverImage.responsiveImage} />
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link href={`/blog/${slug}`}>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
      <Avatar date={date} name={author.name} picture={author.picture} />
    </div>
  )
}
