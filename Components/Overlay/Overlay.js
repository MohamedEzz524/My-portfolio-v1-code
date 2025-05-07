import "./overlay.css";

export default function Overlay({ gradient }) {
  return (
    <div className="component-overlay" style={{ background: gradient }}></div>
  );
}
