import clsx from 'clsx'
import bookingDemarchageLogo from 'images/home/logo/booking-demarchage.svg'
import communicationDigitaleLogo from 'images/home/logo/communication-digitale.svg'
import communicationGraphiqueLogo from 'images/home/logo/communication-graphique.svg'
import interviewPodcastLogo from 'images/home/logo/interview-podcast.svg'
import marketingHorsMediaLogo from 'images/home/logo/marketing-hors-media.svg'
import relationPresseLogo from 'images/home/logo/relation-presse.svg'
import Image from 'next/image'
import { Fragment, ReactNode } from 'react'

const SERVICES = [
  {
    id: 1,
    label: 'communication graphique',
    text: 'Pochettes, Publications sur les réseaux (RS) sociaux, Bannières RS, Flyers, Cartes de visite, affiches...',
    logo: communicationGraphiqueLogo,
  },
  {
    id: 2,
    label: 'communication digitale',
    text: 'Gestion des RS, Stratégie de communication, Calendrier de publication, Campagne Ads',
    logo: communicationDigitaleLogo,
  },
  {
    id: 3,
    label: 'relation presse',
    text: "Dossier & Communiqué de presse, Organisation d'événements, Gestion et envoi d'e-mails",
    logo: relationPresseLogo,
  },
  {
    id: 4,
    label: 'booking & démarchage',
    text: 'Recherche et démarchage auprès des bookeurs et des salles pour les premières parties',
    logo: bookingDemarchageLogo,
  },
  {
    id: 5,
    label: 'marketing hors média',
    text: 'Street marketing (distribution de flyers, stickers...), Réflexion évènementielle de votre projet',
    logo: marketingHorsMediaLogo,
  },
  {
    id: 6,
    label: 'interview & podcast',
    text: 'Promotion de votre musique et de vos projets : Interview sur les RS, Podcasts en streaming',
    logo: interviewPodcastLogo,
  },
]

function GlassContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('bg-gray-400 bg-opacity-10', className)}>{children}</div>
}

function Mobile() {
  return (
    <GlassContainer className='px-5 py-24 sm:hidden'>
      <ul className='grid gap-12'>
        {SERVICES.map((service) => (
          <Fragment key={service.id}>
            <li className='grid place-items-center gap-6'>
              <Image src={service.logo} alt={service.label} width={70} height={70} />
              <h2 className='mx-auto max-w-[16rem] text-center font-display text-3xl font-bold capitalize'>
                {service.label}
              </h2>
              <p className='max-w-[17rem] text-center text-lg'>{service.text}</p>
            </li>
            {service.id !== 6 && <div className='mx-auto h-14 w-[1px] bg-zinc-100' />}
          </Fragment>
        ))}
      </ul>
    </GlassContainer>
  )
}

function Tablet() {
  return (
    <GlassContainer className='-my-52 hidden py-24 px-5 sm:block xl:hidden'>
      <ul className='grid grid-cols-[auto_3rem_auto] place-items-center gap-12'>
        {SERVICES.map((service, index) => (
          <Fragment key={service.id}>
            <li className='flex flex-col items-center justify-items-center gap-6'>
              <Image src={service.logo} alt={service.label} height={45} width={45} />
              <h2 className='max-w-[12rem] text-center font-display text-2xl font-bold capitalize'>
                {service.label}
              </h2>
              <p className='max-w-[17rem] text-center'>{service.text}</p>
            </li>
            {index % 2 === 0 && <div className='h-[1px] w-14 bg-zinc-100' />}
          </Fragment>
        ))}
      </ul>
    </GlassContainer>
  )
}

function Desktop() {
  return (
    <GlassContainer className='-my-52 hidden p-10 xl:block'>
      <ul className='grid place-items-center gap-24'>
        <div className='col-[1/2] row-[1/3] h-[90%] w-20 border border-r-0' />
        {SERVICES.map((service) => (
          <li key={service.id} className='flex flex-col items-center justify-items-center gap-6'>
            <Image src={service.logo} alt={service.label} height={45} width={45} />
            <h2 className='max-w-[12rem] text-center font-display text-2xl font-bold capitalize'>
              {service.label}
            </h2>
            <p className='max-w-[15rem] text-center'>{service.text}</p>
          </li>
        ))}
        <div className='col-[5/6] row-[1/3] h-[90%] w-20 border border-l-0' />
      </ul>
    </GlassContainer>
  )
}

function ServicesSection() {
  return (
    <section>
      <Mobile />
      <Tablet />
      <Desktop />
    </section>
  )
}

export default ServicesSection
