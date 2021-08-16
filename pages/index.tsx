import BarLayout from '../components/barLayout';

const Home = () => (
  <BarLayout>
    <h1>Conception d’applications et sites Web</h1>
    <p>Je crée et vous accompagne dans vos projets de création de sites Web, sites vitrines, landing pages, CRM, ERP.</p>

    <section className='offer-line'>
      <img src='/images/support.svg' />
      <div>
        <h4>
          Accompagnement <em>sur-mesure</em>
        </h4>
        <p>
          Parce que chaque besoin est unique, je vous accompagne dans votre projet durant toutes les phases de sa conception. Je vous
          apporte aussi mon expérience pour vous proposer la solution la plus adaptée possible. Je peux intervenir à tout moment dans votre
          chaîne de production, depuis les spécifications jusqu'à l'exploitation en production. En fonction du type de projet, il faut aussi
          parfois monter une usine logicielle, pouvant assurer déploiement (pour intégration continue ou déploiement continu), garantir une
          bonne maintenabilité de votre solution (outil de vérification de qualité, versionnage, revue d'équipe) et minimiser la dette
          technique.
        </p>
        <p>
          Par ailleurs, je vous accompagne sur l'audit de vos applications existantes sur des sujets comme des problèmes de performances, de
          sécurité ou de maintenabilité. Un audit permettra :
          <ul className='bar-list'>
            <li>une analyse de votre application et/ou de votre infrastructure ;</li>
            <li>des propositions d'axes de travail ;</li>
            <li>l'élaboration de solutions en fonction de vos choix et de vos capacités.</li>
          </ul>
        </p>
      </div>
    </section>

    <section className='offer-line offer-line-even'>
      <img src='/images/technology.svg' />
      <div>
        <h4>
          Transformation <em>numérique</em>
        </h4>
        <p>
          Dans un monde toujours plus connecté, que vous soyez une entreprise ou une association, vous avez besoin du numérique pour être
          visible ou pour être plus efficace dans votre métier. Le marché actuel attend des expériences numériques efficaces et une
          entreprise qui ne s'adapte pas à ce nouveau modèle de client numérique sera délaissée au profit d'une autre. Il faut donc choisir
          le changement technologique et non le subir.
        </p>
        <p>
          Je vous propose des solutions opérationnelles pour vous et vos collaborateurs. D'une part ces solutions vous permettront
          d'améliorer vos processus à travers par exemple de l'automatisation. D'autre part, elles peuvent enrichir l'expérience du client,
          en s'adaptant davantage à son besoin et en le fidélisant. Pour réussir sa transformation, il convient d'adopter une stratégie
          évolutive, basée sur des priorités. Nous pourrons donc rechercher ces points faibles et étudier les solutions à adopter.
        </p>
      </div>
    </section>

    <section className='offer-line'>
      <img src='/images/career.svg' />
      <div>
        <h4>
          Formations <em>techniques</em>
        </h4>
        <p>
          Je participe à la montée en compétences de vos équipes de développeurs, sur des sujets techniques orientés Développeur ou
          Opérationnels. En fonction du public, ces formations peuvent être à distance ou en présentiel. Les formations sont équilibrées
          entre théorie et travaux pratiques afin de permettre à vos collaborateurs d'être prêts et efficaces dès l'issue du temps accordé.
        </p>
      </div>
    </section>
  </BarLayout>
);

export default Home;
