import { BsApple, BsGooglePlay } from 'react-icons/bs';
import { MdOutlineDesktopMac } from 'react-icons/md';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Barberos — Portfolio',
};

export default function Page() {
  return (
    <>
    <h1>Portfolio</h1>

    <h4>BARberos — Mon bar à la maison 🍹</h4>
    <div>
      <p>
        BARberos permet de gérer son stock de boissons et d’offrir à ses amis un accueil digne d’un bar, avec le
        confort de la maison.{ ' ' }
      </p>
      <p>
        Tu ajoutes les différentes boissons que tu as chez toi. Tu mets à jour tes stocks. Invite ensuite tes proches
        en leur partageant
        le lien de ton bar ou en leur faisant scanner le QR code présent dans l’application. Ton bar est protégé par
        un code à 6 chiffres,
        il suffit de le partager à tes invités. Tes proches ont alors accès à la carte des boissons et voient en temps
        réel les boissons
        qu’ils peuvent commander (c’est-à-dire si le stock est suffisant). Ils commandent en quelques clics et tu
        visualises toutes les
        commandes. Une fois une commande validée, le stock est automatiquement mis à jour.{ ' ' }
      </p>
    </div>

    <p className="flex flex-col font-bold gap-2.5">
      <a className="undecorated flex items-center gap-2" href="https://bar.barberos.fr" target="_blank"
         rel="noreferrer">
        Présentation plus en détails de BARberos
      </a>
      <div className="flex items-center gap-5">
        <a className="undecorated flex items-center gap-2" href="https://app.bar.barberos.fr" target="_blank"
           rel="noreferrer">
          <MdOutlineDesktopMac /> Version navigateur
        </a>{ ' ' }
        <a
          className="undecorated flex items-center gap-2"
          href="https://apps.apple.com/us/app/barberos/id6451378965"
          target="_blank"
          rel="noreferrer"
        >
          <BsApple /> App Store
        </a>{ ' ' }
        <a
          className="undecorated flex items-center gap-2"
          href="https://play.google.com/store/apps/details?id=com.barberos.mobileApp"
          target="_blank"
          rel="noreferrer"
        >
          <BsGooglePlay /> Google Play
        </a>
      </div>
    </p>

    <h4 className="mt-12">Suivi Croissance — Suivi de croissance en toute simplicité 📈</h4>
    <p>
      Suivi Croissance est une application gratuite permettant de suivre facilement et rapidement la croissance de ses
      proches.
      L’application se base sur les mêmes courbes que celles présentes dans les carnets de santé. Les mesures suivies
      sont : le poids, la
      taille et le périmètre crânien. Suivi Croissance se charge de mesurer l’IMC pour le rapporter sur la courbe
      correspondante.
    </p>

    <p className="flex flex-col font-bold gap-2.5">
      <div className="flex items-center gap-5">
        <a className="undecorated flex items-center gap-2" href="https://suivi-croissance.barberos.fr" target="_blank"
           rel="noreferrer">
          <MdOutlineDesktopMac /> Version navigateur
        </a>
        <a
          className="undecorated flex items-center gap-2"
          href="https://apps.apple.com/us/app/suivi-croissance/id6464590208"
          target="_blank"
          rel="noreferrer"
        >
          <BsApple /> App Store
        </a>
        <a
          className="undecorated flex items-center gap-2"
          href="https://play.google.com/store/apps/details?id=com.growthtracker.mobileApp"
          target="_blank"
          rel="noreferrer"
        >
          <BsGooglePlay /> Google Play
        </a>
      </div>
    </p>

    <h4 className="mt-12">Geo Quiz — Deviens un expert en géographie 🌍</h4>
    <p>
      Geo Quiz est une application gratuite permettant de travailler sa géographie.
    </p>
    <p>
      L’application fonctionne sous forme de partie de 10 questions.
    </p>
    <p>
      Vous avez plusieurs modes de jeux :
    </p>
    <ul className="bar-list">
      <li>trouver la capitale à partir du nom du pays</li>
      <li>trouver le nom du pays à partir de sa capitale</li>
      <li>trouver le nom du pays à partir de son emplacement dans le monde</li>
      <li>trouver le drapeau à partir du nom du pays</li>
      <li>trouver le nom du pays à partir de son drapeau</li>
    </ul>

    <p>
      Plusieurs niveaux de difficulté sont possibles :
    </p>
    <ul className="bar-list">
      <li>facile : trouver la bonne réponse parmi quatre propositions</li>
      <li>difficile : écrire la réponse à l’aide du clavier</li>
    </ul>

    <p>
      Vous pouvez filtrer selon le continent que vous souhaitez travailler.
    </p>
    <ul className="bar-list">
      <li>choisir parmi Afrique, Amérique, Asie, Europe, Océanie</li>
      <li>choisir de travailler tous les continents en même temps</li>
    </ul>

    <p>
      Vous pouvez également réviser la géographie avec la liste des différents pays, avec leur capitale, leur drapeau et
      leur emplacement dans le monde.
    </p>

  <p className="flex flex-col font-bold gap-2.5">
    <div className="flex items-center gap-5">
          <a
            className="undecorated flex items-center gap-2"
            href="https://apps.apple.com/fr/app/geo-quiz/id6479363432"
            target="_blank"
            rel="noreferrer"
          >
            <BsApple /> App Store
          </a>
          <a
            className="undecorated flex items-center gap-2"
            href="https://play.google.com/store/apps/details?id=com.schooltrainer.mobileApp"
            target="_blank"
            rel="noreferrer"
          >
            <BsGooglePlay /> Google Play
          </a>
        </div>
      </p>
    </>
  );
}
