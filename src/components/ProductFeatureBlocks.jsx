import Icon from "./Icon";
import "./ProductFeatureBlocks.css";

export default function ProductFeatureBlocks({ blocks }) {
  return (
    <div className="feature-blocks">
      {blocks.map((block, i) => (
        <div className={`feature-block ${i % 2 === 1 ? "is-reversed" : ""}`} key={block.heading}>
          <div className="feature-block-text">
            <h3>{block.heading}</h3>
            <p>{block.description}</p>
            <ul>
              {block.bullets.map((b) => (
                <li key={b}>
                  <Icon name="check" size={15} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="feature-block-media" style={{ background: block.color }} />
        </div>
      ))}
    </div>
  );
}
