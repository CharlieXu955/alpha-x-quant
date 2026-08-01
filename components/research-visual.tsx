const bars = [42, 68, 51, 82, 62, 76, 57, 88, 69, 79, 64, 91];

export function ResearchVisual() {
  return (
    <div className="research-visual" aria-label="Abstract quantitative signal visualization">
      <div className="visual-header">
        <span>Research signal study</span>
        <span className="live-dot">Illustrative</span>
      </div>
      <div className="visual-body">
        <div className="axis-labels" aria-hidden="true">
          <span>+2σ</span>
          <span>0</span>
          <span>−2σ</span>
        </div>
        <div className="chart-field" aria-hidden="true">
          <div className="chart-midline" />
          <div className="signal-path">
            <i className="segment s1" />
            <i className="segment s2" />
            <i className="segment s3" />
            <i className="segment s4" />
            <i className="segment s5" />
            <i className="segment s6" />
            <i className="segment s7" />
          </div>
          <div className="chart-bars">
            {bars.map((height, index) => (
              <i style={{ height: `${height}%` }} key={`${height}-${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="visual-footer">
        <span>Signal</span>
        <span>Robustness</span>
        <span>Risk</span>
      </div>
      <p className="visual-caption">Abstract research visualization—not investment performance.</p>
    </div>
  );
}
