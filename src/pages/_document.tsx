import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      className='overflow-x-hidden scroll-smooth bg-zinc-900 bg-[url("/main-pattern.webp")] font-sans text-white'
      lang='fr'
    >
      <Head>
        <meta
          name='description'
          content='Jane Do est une agence de communication spécialisée dans l’industrie musicale et le développement de la communication artistique. Que ce soit sur vos réseaux ou auprès des professionnels, nous concevons une stratégie adaptée à vos moyens Nos services sont les suivants : Communication: Pochettes, Publications sur les réseaux sociaux (RS), Bannières RS, Flyers, Cartes de visite, Affiches… Communication digitale : Gestion des RS, Stratégie de communication, Calendrier de publication, Campagne AdsRelations Presse : Dossier & Communiqué de presse, Organisation d’événements, Gestion et envoi d’e-mailsBooking & Démarchage : Recherche et démarchage auprès des bookeurs et des salles pour les premières partiesMarketing hors média : Street marketing (distribution de flyers, stickers…), Réflexion évènementielle de votre projet Interviews & Podcast : Promotion de votre musique et de vos projets : Interviews sur les RS, Podcasts en streaming. Jane Do, c’est une équipe qui vous offre ses compétences à 360. De la communication, à la vidéo en passant par la gestion de vos stratégies médias, nous voulons vous offrir la possibilité de déléguer n’importe quelle partie de votre projet. Nos valeurs comme L’écoute, la proximité avec les artistes, l’inclusivité et la personnalisation seront les mots d’ordre pour chacun des projets que vous nous confiez !'
        />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
