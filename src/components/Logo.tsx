interface Props {
  withText?: boolean
}

function Pictogram() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='duration-500 hover:rotate-[360deg]'
      width='61'
      height='61'
    >
      <path
        className='fill-white'
        d='M32.5 16v9.1a5.7 5.7 0 0 1 0 10.8v5c5-1 8.6-5.3 8.6-10.4v-23Zm0 0v9.1a5.7 5.7 0 0 1 0 10.8v5c5-1 8.6-5.3 8.6-10.4v-23Zm-2-16a30.5 30.5 0 1 0 0 61 30.5 30.5 0 0 0 0-61Zm11 30.5c0 5.4-4 10-9.3 10.8a10.8 10.8 0 0 1-21.4-3.5l9-9a11 11 0 0 0 3.6 9.8c2.3 2 5.5 3 8.6 2.6l.1-1.7V36a5.7 5.7 0 1 1 0-11v-8.7H14.3l9-9h18.2Zm-9-5.4a5.7 5.7 0 0 1 0 10.8v5c5-1 8.6-5.3 8.6-10.4v-23L32.5 16Zm0-9v9a5.7 5.7 0 0 1 0 10.8v5c5-1 8.6-5.3 8.6-10.4v-23Zm0 0'
      />
      <title>Pictogramme Jane Do</title>
    </svg>
  )
}

function Text() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='102' height='21' viewBox='0 0 101 21'>
      <path
        className='fill-white'
        d='M9.7 13.6c0 5.4-2.4 7.3-7 7.3-1 0-1.8 0-2.7-.3V17l2 .2c2 0 3-1 3-3.3V1h4.5v12.5Zm16.1 3v3.9h-4V19c-1 1.2-2.6 2-5 2-4 0-5.5-2.5-5.5-4.7 0-3.8 3.2-4.8 7.3-4.8h3V11c0-1-.6-2-2.5-2-2 0-2.4.7-2.5 1.4h-4.7c.2-1.6 1.5-4.5 6.9-4.5 6 0 6.9 3 6.9 5.3v5.4Zm-4.2-2.3h-3c-2.2 0-3 .6-3 1.7 0 .9.7 1.8 2.3 1.8 2.4 0 3.7-1.2 3.7-3.3Zm6.9-4.5V6.5h4.2l.1 1.8c.8-1 2-2.2 4.6-2.2C41 6 43 8.3 43 11.9v8.7h-4.5v-8c0-1.7-.6-3-2.5-3-2 0-3 1.3-3 3.8v7h-4.5Zm20.7 4.8c0 1.8 1.5 3 3.5 3 1.6 0 2.5-.4 3-1.3H60c-.9 2.5-3 4.8-7.4 4.8-5.7 0-7.8-4-7.8-7.5 0-4 2.7-7.5 7.8-7.5C58 6 60 9.8 60 13.6v1Zm6.6-2.7c0-1-.7-2.7-3.1-2.7-2.4 0-3.3 1.2-3.5 2.7ZM83.2.1v20.4H79v-1.7c-.9 1-1.8 2-4.8 2-3.8 0-6.7-3-6.7-7.4 0-4.6 3.8-7.5 7.2-7.5 2.7 0 3.9 1 4.2 1.5V.1ZM72 13.4c0 2.3 1.2 4 3.6 4 2.4 0 3.4-1.6 3.4-4s-.9-4-3.4-4c-2.4 0-3.6 2-3.6 4Zm29.1 0c0 4.4-3 7.5-8.2 7.5-5.2 0-7.8-3.6-7.8-7.5S87.7 6 93 6c5.5 0 7.9 4 7.9 7.5Zm-11.5 0c0 2.3 1.2 4 3.4 4 2.3 0 3.6-1.7 3.6-4 0-2.2-1.2-4.2-3.6-4.2-2.3.2-3.4 2.1-3.4 4.4ZM65.6 4.6c0 1.3-.6 2.4-2 2.4s-2-1-2-2.4.6-2.4 2-2.4 2 1.2 2 2.4Zm0 0'
      />
      <title>Texte du pictogramme Jane Do</title>
    </svg>
  )
}

function Logo({ withText }: Props) {
  return (
    <div className='flex items-center gap-2'>
      <Pictogram />
      {withText && <Text />}
    </div>
  )
}

export default Logo
