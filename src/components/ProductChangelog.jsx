import "./ProductChangelog.css";

export default function ProductChangelog({ entries }) {
  return (
    <div className="changelog-list">
      {entries.map((entry) => (
        <div className="changelog-entry" key={entry.version}>
          <span className="changelog-version mono">v{entry.version}</span>
          <p>{entry.notes}</p>
        </div>
      ))}
    </div>
  );
}
