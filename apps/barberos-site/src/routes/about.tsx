import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: 'Barberos — À propos' }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>À propos</h1>

      <h4>Une équipe de développement passionnée 🔥</h4>

      <p>
        Dans la sphère professionnelle du développement d’applications Web complexes depuis plus de 15 ans, notre équipe a acquis une solide
        expertise dans la conception d’applications performantes et résiliantes ainsi que dans leur exploitation. En bout de chaîne, notre
        équipe maîtrise aussi la conception d’applications clientes riches en front-end, adaptés aux usages actuels (ordinateur, tablette,
        smartphone).
      </p>

      <p>
        Pour les applications complexes, notre équipe exploite aussi les processus d’industrialisation à travers le montage d’usine
        logicielle (intégration continue, vérification automatique de qualité, déploiement continu).
      </p>

      <p>
        Notre équipe ayant le goût du challenge, nous recherchons toujours la meilleure solution pour résoudre des problèmes dans votre
        logique métier.
      </p>
    </>
  );
}
