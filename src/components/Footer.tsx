import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import facebook from 'images/networks/facebook.svg'
import instagram from 'images/networks/instagram.svg'
import linkedin from 'images/networks/linkedin.svg'
import tiktok from 'images/networks/tiktok.svg'
import twitter from 'images/networks/twitter.svg'
import youtube from 'images/networks/youtube.svg'
import Image from 'next/future/image'
import Link from 'next/link'
import { selectNavigationMenu, synchronizeCurrentPage } from 'slices/navigation'
import Logo from './Logo'

const SERVICES = [
  {
    id: 1,
    label: 'communication graphique',
    url: '/services#graphical',
  },
  {
    id: 2,
    label: 'communication digitale',
    url: '/services#digital',
  },
  {
    id: 3,
    label: 'relation presse',
    url: '/services#press',
  },
  {
    id: 4,
    label: 'booking et démarchage',
    url: '/services#booking',
  },
  {
    id: 5,
    label: 'marketing hors média',
    url: '/services#maketing',
  },
  {
    id: 6,
    label: 'interview et podcast',
    url: '/services#interview',
  },
]

const CONDITIONS = [
  {
    id: 1,
    label: 'politique de confidentialité',
    url: '/privacy-policy',
  },
  {
    id: 2,
    label: 'formulaire de contact',
    url: '/contact',
  },
]

const SOCIALS = [
  {
    id: 1,
    label: 'Facebook',
    logo: facebook,
    url: 'https://www.facebook.com/JaneDoAgency ',
  },
  {
    id: 2,
    label: 'Instagram',
    logo: instagram,
    url: 'https://www.instagram.com/janedoagency/ ',
  },
  {
    id: 3,
    label: 'Linkedin',
    logo: linkedin,
    url: 'https://www.linkedin.com/company/jane-do-music/about/',
  },
  {
    id: 4,
    label: 'Tiktok',
    logo: tiktok,
    url: 'https://www.tiktok.com/@janedoagency',
  },
  {
    id: 5,
    label: 'Twitter',
    logo: twitter,
    url: 'https://twitter.com/jane_do_agency',
  },
  {
    id: 6,
    label: 'YouTube',
    logo: youtube,
    url: 'https://www.youtube.com/channel/UCTUWe0j646_xD5af1hyfAHQ',
  },
]
function Mobile() {
  const navigationMenu = useAppSelector(selectNavigationMenu)
  const dispatch = useAppDispatch()
  return (
    <div className='grid place-items-center gap-6 py-10 md:hidden'>
      <div>
        <h2 className='mb-3 text-2xl font-bold'>Services</h2>
        <nav>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link href={service.url}>
                  <a
                    onClick={() => {
                      dispatch(synchronizeCurrentPage(navigationMenu.at(1)))
                    }}
                    className='capitalize hover:text-hover'
                  >
                    {service.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <h2 className='mb-3 text-2xl font-bold'>Conditions générales</h2>
        <nav>
          <ul>
            {CONDITIONS.map((condition) => (
              <li key={condition.id}>
                <Link href={condition.url}>
                  <a
                    onClick={() => {
                      condition.id === 2 && dispatch(synchronizeCurrentPage(navigationMenu.at(4)))
                    }}
                    className='capitalize hover:text-hover'
                  >
                    {condition.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className='grid grid-cols-3 gap-3'>
            {SOCIALS.map((social) => (
              <li key={social.id}>
                <Link href={social.url}>
                  <a target='_blank' rel='noreferrer'>
                    <Image src={social.logo} alt={social.label} width={60} height={60} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a href='#'>
        <Logo />
      </a>
      <p className='text-gray-400'>&copy;2022 Jane Do - Tous droits réservés</p>
    </div>
  )
}

function Tablet() {
  const navigationMenu = useAppSelector(selectNavigationMenu)
  const dispatch = useAppDispatch()
  return (
    <div className='hidden grid-cols-2 place-items-center gap-6 py-10 md:grid lg:hidden'>
      <div>
        <h2 className='mb-3 text-2xl font-bold'>Services</h2>
        <nav>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link href={service.url}>
                  <a
                    onClick={() => {
                      dispatch(synchronizeCurrentPage(navigationMenu.at(1)))
                    }}
                    className='capitalize hover:text-hover'
                  >
                    {service.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='self-start'>
        <h2 className='mb-3 text-2xl font-bold'>Conditions générales</h2>
        <nav>
          <ul>
            {CONDITIONS.map((condition) => (
              <li key={condition.id}>
                <Link href={condition.url}>
                  <a
                    onClick={() => {
                      condition.id === 2 && dispatch(synchronizeCurrentPage(navigationMenu.at(4)))
                    }}
                    className='capitalize hover:text-hover'
                  >
                    {condition.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className='grid grid-cols-3 gap-3'>
            {SOCIALS.map((social) => (
              <li key={social.id}>
                <Link href={social.url}>
                  <a target='_blank' rel='noreferrer'>
                    <Image src={social.logo} alt={social.label} width={60} height={60} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a href='#'>
        <Logo />
      </a>
      <p className='col-span-2 text-gray-400'>&copy;2022 Jane Do - Tous droits réservés</p>
    </div>
  )
}
function Desktop() {
  const navigationMenu = useAppSelector(selectNavigationMenu)
  const dispatch = useAppDispatch()

  return (
    <div className='hidden grid-cols-4 place-items-center gap-6 py-10 lg:grid'>
      <div>
        <h2 className='mb-3 text-2xl font-bold'>Services</h2>
        <nav>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link href={service.url}>
                  <a
                    onClick={() => {
                      dispatch(synchronizeCurrentPage(navigationMenu.at(1)))
                    }}
                    className='capitalize hover:text-hover'
                  >
                    {service.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='self-start'>
        <h2 className='mb-3 text-2xl font-bold'>Conditions générales</h2>
        <nav>
          <ul>
            {CONDITIONS.map((condition) => (
              <li key={condition.id}>
                <Link href={condition.url}>
                  <a
                    onClick={() => {
                      condition.id === 2 && dispatch(synchronizeCurrentPage(navigationMenu.at(4)))
                    }}
                    className='capitalize hover:text-hover'
                  >
                    {condition.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='self-start'>
        <nav>
          <ul className='grid grid-cols-3 gap-3'>
            {SOCIALS.map((social) => (
              <li key={social.id}>
                <Link href={social.url}>
                  <a target='_blank' rel='noreferrer'>
                    <Image src={social.logo} alt={social.label} width={60} height={60} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <a href='#' className='self-start'>
        <Logo />
      </a>
      <p className='col-span-4 text-zinc-400'>&copy;2022 Jane Do - Tous droits réservés</p>
    </div>
  )
}
function Footer() {
  return (
    <footer className='border-t bg-zinc-900'>
      <Mobile />
      <Tablet />
      <Desktop />
    </footer>
  )
}

export default Footer
