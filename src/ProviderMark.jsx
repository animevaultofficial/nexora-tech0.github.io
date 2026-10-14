import SimpleIcon from './SimpleIcon.jsx';
import './provider-mark.css';

export default function ProviderMark({ provider, size = 18 }) {
  return <span className="provider-mark" style={{ '--provider-color': provider.color }} title={provider.name}>
    {provider.icon
      ? <SimpleIcon icon={provider.icon} title={provider.name} size={size}/>
      : <span className="provider-mark-fallback" aria-hidden="true">{provider.symbol}</span>}
  </span>;
}
