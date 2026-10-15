import SimpleIcon from './SimpleIcon.jsx';
import './provider-mark.css';

export default function ProviderMark({ provider, size = 18 }) {
  const mark = provider.icon;
  const hasVector = Boolean(mark?.path);
  return (
    <span className={`provider-mark provider-mark-${provider.id}`} style={{ '--provider-color': provider.color }} title={provider.name}>
      {hasVector ? (
        <SimpleIcon icon={mark} title={provider.name} size={size} className="provider-mark-vector" />
      ) : (
        <span className="provider-mark-fallback" role="img" aria-label={provider.name}>{provider.symbol || provider.name.slice(0, 2)}</span>
      )}
    </span>
  );
}
