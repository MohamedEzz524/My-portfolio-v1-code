import "./object.css";

export default function Object({ src, name, color, style }) {
  return (
    <div className="object" style={style}>
      <p style={{ color: color }}>{name}</p>
      <img style={{ display: "block" }} src={src} alt={name}></img>
    </div>
  );
}
