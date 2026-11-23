import { Link } from '@tanstack/react-router';

const BarNotFound = () => (
  <>
    <h1>Page introuvable</h1>
    <p className="notice">La page que vous cherchez n’existe pas ou a été déplacée.</p>
    <p className="notice">
      <Link to="/">Retour à l’accueil</Link>
    </p>
  </>
);

export default BarNotFound;
