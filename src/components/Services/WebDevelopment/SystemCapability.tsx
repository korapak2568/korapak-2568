export type SystemCapabilityItem = {
  title: string;
  description: string;
  layer: string;
  tone: string;
};

export default function SystemCapability({
  items,
}: {
  items: SystemCapabilityItem[];
}) {
  return (
    <div
      className="system-capability system-capability__grid"
      aria-label="System Capability"
    >
      {items.map((item, index) => (
        <article
          className={`system-capability__card system-capability__card--${item.tone}`}
          key={item.title}
        >
          <div className="system-capability__meta">
            <div className="system-capability__index">
              {String(index + 1).padStart(2, "0")}
            </div>
            <span>{item.layer}</span>
          </div>

          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
