import "./ProductSpecsTable.css";

export default function ProductSpecsTable({ rows }) {
  return (
    <div className="specs-table">
      {rows.map(([label, value]) => (
        <div className="specs-row" key={label}>
          <span className="specs-label">{label}</span>
          <span className="specs-value">{value}</span>
        </div>
      ))}
    </div>
  );
}
