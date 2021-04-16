import React from "react";
import "./covid.style.css";

export const Data = [
  {
    titleAccordion: <p className="text-underline">Entrée en Grèce</p>,
    answer: (
      <div>
        <p>
          Le voyageur est prié de remplir le formulaire en ligne (PLF) sur
          <a href="http://travel.gov.gr" target="_blank" rel="noreferrer">
            {" "}
            http://travel.gov.gr
          </a>{" "}
          (peu importe le type de transport utilisé) au plus tard 24 heures
          avant son arrivée et de se présenter à l’embarquement avec
          l’attestation et le code QR reçus par e-mail.
        </p>
        <p className="bold-text">
          Une amende administrative de 500 euros sera infligée aux personnes
          entrant sur le territoire grec sans avoir rempli le formulaire PLF.
        </p>
        <p>
          En cas d’arrivée par voie aérienne et terrestre, depuis le 17/08/20,
          chaque voyageur est prié de présenter un certificat
          <span className="a-underline">rédigé en anglais </span>
          avec un résultat négatif d’un test moléculaire pour le coronavirus
          (test PCR) réalisé dans les 72 heures avant son arrivée (par voie
          aérienne ou terrestre).
        </p>
        <p>
          Tous les voyageurs arrivant sur le sol grec se verront imposer une
          quarantaine de 7 jours. Depuis le 18 décembre 2020, la plupart des
          voyageurs entrant sur le sol grec seront soumis à un test rapide
          antigénique. Après la réalisation de ce test aléatoire, les visiteurs
          sont libres de rejoindre leur destination finale mais doivent s’isoler
          pendant 24 heures..
        </p>
        <p>
          Si le résultat du test est positif, vous serez mis en confinement
          (quarantaine) dans un des hôtels réquisitionnés par les autorités
          grecques pendant une période de 14 jours minimum. Vous ne serez pas
          autorisés à sortir de votre chambre d’hôtel et vous ne pourrez pas
          être rapatriés. De plus, dans le cas où vous seriez une personne ayant
          été en contact avec une personne testée ‘positive’, vous serez
          également mis en quarantaine pour une période minimum de 7 jours. La
          fin de la mise en quarantaine (résultat positif ou cas de contact avec
          une personne testée positive) ne sera autorisée qu’après la
          réalisation d’un nouveau test dont le résultat devra être négatif. Il
          n’est pas possible de contester les résultats de ces tests.
        </p>
        <ul>
          <p className="text-list">Transport aérien</p>
          <p>
            Les vols internationaux sont autorisés depuis/vers tous les
            aéroports en Grèce.
          </p>
          <p className="text-direction-right">
            Toute personne voyageant par voie aérienne en provenance de Belgique
            et entrant sur le territoire grec devra obligatoirement présenter
            <span className="a-underline">
              un certificat rédigé en anglais reprenant le résultat négatif d'un
              test moléculaire (PCR)
            </span>
            pour le coronavirus qui aura été effectué au maximum 72 heures avant
            son arrivée en Grèce.
          </p>
          <p className="text-list">Transport terrestre</p>
          <p className="text-direction-right">
            Aux frontières terrestres, l'entrée est autorisée aux visiteurs
            (sous conditions strictes, notamment, un test réalisé dans les 72
            heures avant le passage à la frontière) via les postes frontières
            énumérés sur le site officiel grec du PLF (
            <a href="https://travel.gov.gr/#/" target="_blank" rel="noreferrer">
              https://travel.gov.gr/#/
            </a>
            ).
          </p>
          <p className="text-list">Transport maritime: </p>
          <p className="text-direction-right">
            Depuis le 9 novembre 2020, les arrivées par la mer sont interdites.
          </p>
        </ul>
      </div>
    ),
  },
  {
    titleAccordion: <p className="text-underline">Déplacements en Grèce</p>,
    answer: (
      <div>
        <p className="text-list">
          Tous les déplacements en Grèce entre régions sont interdits sauf pour:
        </p>
        <ul className="list-number">
          <li>Retour au lieu de résidence principale</li>
          <li>
            Réunion de membres de famille (au sens de famille nucléaire) (entre
            époux, avec les enfants)
          </li>
          <li>Raisons professionnelles</li>
          <li>Raisons de santé</li>
        </ul>
        <p>
          Aucune attestation spécifique n’est demandée mais les personnes
          intéressées devront prouver la raison du déplacement par tous les
          moyens possibles (certificat/lettre de l’employeur. certificat
          médical, factures/attestation fiscales,…)
        </p>
        <p>
          En ce qui concerne les petits déplacements quotidiens ET essentiels,
          voir la page officielle: (
          <a href="https://forma.gov.gr/en/" target="_blank" rel="noreferrer">
            https://forma.gov.gr/en/
          </a>
          ).
        </p>
      </div>
    ),
  },
  {
    titleAccordion: <p className="text-underline">Sortie du territoire grec</p>,
    answer: (
      <div>
        <p>
          Pour la sortie du territoire grec, les ressortissants grecs ainsi que
          les résidents permanents doivent remplir un formulaire PLF qui se
          trouve sur le site{" "}
          <a href="http://travel.gov.gr" target="_blank" rel="noreferrer">
            http://travel.gov.gr
          </a>
          .
        </p>
        <p>
          Pour les belges de passage (touristes, personnes qui n’ont pas de
          résidence permanente/officielle en Grèce) qui sont en Grèce et qui
          désirent rentrer en Belgique, aucune attestation n’est exigée pour
          rejoindre le lieu de départ MAIS la preuve de la résidence en Belgique
          et une copie du ticket d’avion ou de bateau seront exigés.
        </p>
        <p>
          En Belgique, le SPF Santé publique a mis en ligne un site consacré au
          Coronavirus et aux conditions de voyage:
          <a href="www.info-coronavirus.be/fr" target="_blank" rel="noreferrer">
            {" "}
            www.info-coronavirus.be/fr
          </a>
          .
          <span className="a-underline">
            Les personnes qui se rendent ou rentrent en Belgique trouveront sur
            ce site toutes les informations utiles concernant les mesures à
            suivre et les conditions à respecter avant leur départ et à
            l’arrivée sur le territoire belge.
          </span>
        </p>
        <p>
          Si vous quittez le territoire grec et que vous vous rendez dans un
          pays autre que la Belgique, vous devez contacter les autorités du pays
          concerné (ambassade, consulat, …) pour connaître les conditions de
          voyage vers ce pays.
        </p>
      </div>
    ),
  },
  {
    titleAccordion: <p className="text-underline">Compétence</p>,
    answer: (
      <div>
        <p>
          Il est important de signaler que seules les autorités grecques et
          leurs ambassades et consulats à l’étranger sont compétents pour donner
          des informations officielles concernant les conditions d‘accès au
          territoire grec. Les renseignements repris ici sont donnés à titre
          purement informatif. Vous pouvez aussi consulter le site
          <a href="http://travel.gov.gr" target="_blank" rel="noreferrer">
            {" "}
            http://travel.gov.gr
          </a>
          , le site du
          <span className="a-underline">
            {" "}
            Ministère grec des Affaires étrangères
          </span>{" "}
          qui reprend des liens utiles, et le site web du{" "}
          <span className="a-underline">
            Service National de Santé Publique
          </span>{" "}
          (EODY).
        </p>
        <p>
          Les personnes qui rencontreraient des problèmes techniques lors de
          l’enregistrement en ligne sur le site{" "}
          <a href="http://travel.gov.gr" target="_blank" rel="noreferrer">
            http://travel.gov.gr
          </a>{" "}
          (pas de QR code reçu, …) ou qui auraient des questions sur la façon de
          remplir ce formulaire ou sur les modalités de réalisation du test PCR
          doivent contacter les autorités grecques compétentes mentionnées
          ci-dessus et/ou l’Ambassade de Grèce à Bruxelles (Tel. : 00 32 2 545
          55 00-1 / Numéro d’urgence : 00 32 478 54 61 01 / Courriel :{" "}
          <a href="mailto:gremb.bru@mfa.gr">gremb.bru@mfa.gr</a>) ainsi que le
          secrétariat général de la Protection civile grecque (Tel. : 00 30 210
          33 59 002-3 / Courriel: <a href="mailto:info@gscp.gr">info@gscp.gr</a>
          ).
        </p>
        <p>
          Si vous vous trouvez en Grèce, vous pouvez appeler le numéro 1520.
        </p>
        <p>
          En cas d'urgence, les personnes concernées peuvent contacter
          l’Ambassade ou s’adresser aux autorités locales (au numéro d’urgence
          1135 - uniquement joignable depuis la Grèce) pour assistance.
        </p>
      </div>
    ),
  },
];


export const DataTitle = [
  {
    title: <h2 className="container">Coronavirus COVID-19</h2>,
  },
  {
    titlelione: (
      <ul className="title-list">
        <li>
          Actuellement, vous ne pouvez vous rendre à l'étranger que pour une
          raison essentielle. Plus d'informations sur les voyages essentiels sur
          <a href="http://www.info-coronavirus.be/fr/voyages" target="_blank" rel="noreferrer">
            {" "}
            http://www.info-coronavirus.be/fr/voyages
          </a>
          .
        </li>
        <li>
          Si vous vous déplacez à l'étranger pour un motif essentiel, nous vous
          conseillons de prendre en compte les avis suivants.
        </li>
      </ul>
    ),
  },
  {
    titleinfo: (
      <h4>
        INFO : le test Covid est obligatoire avant le départ. Plus
        d'informations ci-dessous.
      </h4>
    ),
  },
  {
    titleinfoone: (
      <div>
        <p className="bold-text">
          Il est possible de voyager en Grèce en respectant les conditions
          suivantes:
        </p>
        <p>
          Depuis le 24 octobre, le port du masque est imposé dans tous les lieux
          publics, tant en extérieur qu'à l'intérieur.
        </p>
        <p>
          Un couvre-feu a également été instauré dans tout le pays (21h00-5h00).
          En Attique, le couvre-feu a été allongé le week-end (18h00-5h00). Les
          mesures spécifiques varient en fonction de la{" "}
          <a href="https://covid19.gov.gr/covid-map" target="_blank" rel="noreferrer">
            classification épidémiologique
          </a>{" "}
          régionale.
        </p>
        <p>
          Tout le pays est officiellement en confinement. Les déplacements au
          sein des provinces doivent répondre à une des{" "}
          <a href="https://forma.gov.gr/en/" target="_blank" rel="noreferrer">
            6 raisons impératives
          </a>{" "}
          définies par les autorités helléniques.
        </p>
        <p>
          Les voyageurs sont également invités à suivre la situation dans les
          médias locaux, à suivre les consignes et à respecter toutes les
          mesures de prévention imposées par les autorités locales.
        </p>
      </div>
    ),
  },
];