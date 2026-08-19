export default function Header({ titulo, descripcion }) {
  return (
    <header className="p-4 bg-light border-bottom">
      <div className="container">
        <h1>{titulo}</h1>
        <p className="text-muted">{descripcion}</p>
      </div>
    </header>
  );
}