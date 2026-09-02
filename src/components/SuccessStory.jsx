import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./SuccessStory.css";

const logos = ["Studio Loom", "Coastal & Co.", "Velora", "Hammond Goods", "Brightlane"];

export default function SuccessStory() {
  return (
    <section className="success-story">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">Case study</div>
            <h2>
              Success <span className="accent-word">Stories</span>
            </h2>
          </div>
        </div>

        <div className="success-story-body">
          <div className="success-story-text">
            <span className="badge badge-teal">B2B Suite</span>
            <h3>Northfield Supply Co.</h3>
            <p>
              A wholesale hardware distributor was running buyer quotes over email and spreadsheets.
              After switching to the B2B Suite, company accounts, tiered pricing and a built-in quote
              workflow replaced the back-and-forth — turnaround on a quote request went from two days
              to about two hours.
            </p>
            <Link to="/extensions/b2b-suite" className="success-story-link">
              See the extension used <Icon name="arrowRight" size={14} />
            </Link>
          </div>
          <div className="success-story-visual" aria-hidden="true">
            <Icon name="briefcase" size={30} className="success-story-visual-icon" />
            <div className="success-story-stat">
              <span className="success-story-stat-value mono">2 hrs</span>
              <span className="success-story-stat-label">avg. quote turnaround — down from 2 days</span>
            </div>
          </div>
        </div>

        <div className="success-story-logos">
          {logos.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
