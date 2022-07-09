import Avatar from './Avatar'
import CoverImage from './CoverImage'
import Link from 'next/link'

export default function PostCard({ title, coverImage, date, excerpt, author, slug }: any) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='flex flex-col overflow-hidden rounded-md border border-zinc-700 shadow-lg transition-colors duration-200 hover:border-hover'>
        <div className='flex-shrink-0'>
          <CoverImage title={title} responsiveImage={coverImage.responsiveImage} slug={slug} />
        </div>
        <div className='flex flex-1 flex-col justify-between border-t border-zinc-700 bg-[url("/services-pattern.webp")] p-6 mix-blend-screen'>
          <div className='flex-1'>
            <div className='mt-2 block'>
              <p className='text-xl font-semibold text-hover'>{title}</p>
              <p className='mt-3 text-base text-zinc-300'>{excerpt}</p>
            </div>
          </div>
          <div className='mt-6 flex items-center'>
            <div className='flex-shrink-0'>
              <span>
                <Avatar date={date} name={author.name} picture={author.picture} />
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
