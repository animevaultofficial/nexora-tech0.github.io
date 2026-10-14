export default function SimpleIcon({ icon, title, size = 18, className = '' }) {
  if (!icon?.path) return null;
  return <svg
    className={className}
    width={size}
    height={size}
    viewBox={`0 0 ${icon?.viewBox?.width || 24} ${icon?.viewBox?.height || 24}`}
    role="img"
    aria-label={title}
    focusable="false"
  >
    <path fill="currentColor" d={icon.path}/>
  </svg>;
}
