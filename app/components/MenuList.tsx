type MenuItem = {
  name: string;
  note: string;
  price: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

const groups: MenuGroup[] = [
  {
    title: "Espresso",
    items: [
      { name: "Espresso", note: "double shot", price: "3.50" },
      { name: "Cortado", note: "equal parts, no foam", price: "4.50" },
      { name: "Flat White", note: "ristretto, steamed whole milk", price: "5.00" },
      { name: "Cappuccino", note: "dry, dusted with cocoa", price: "4.75" },
    ],
  },
  {
    title: "Drip & Filter",
    items: [
      { name: "House Drip", note: "changes weekly, ask what's on", price: "3.00" },
      { name: "Pour Over", note: "single origin, brewed to order", price: "5.50" },
      { name: "Cold Brew", note: "steeped eighteen hours", price: "4.50" },
    ],
  },
  {
    title: "From the Oven",
    items: [
      { name: "Brown Butter Croissant", note: "baked next door, daily", price: "4.25" },
      { name: "Olive Oil Cake", note: "orange zest, almond", price: "4.00" },
      { name: "Sourdough Toast", note: "cultured butter, flake salt", price: "5.00" },
    ],
  },
];

export default function MenuList() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-14">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-center font-[family-name:var(--font-display)] text-2xl italic text-ember">
            {group.title}
          </h3>
          <ul className="mt-7 flex flex-col gap-5">
            {group.items.map((item) => (
              <li key={item.name} className="flex items-baseline gap-3">
                <div className="flex flex-col">
                  <span className="text-paper">{item.name}</span>
                  <span className="text-xs text-muted">{item.note}</span>
                </div>
                <span
                  aria-hidden="true"
                  className="mb-1 h-0 flex-1 border-b border-dotted border-line"
                />
                <span className="shrink-0 font-mono text-sm text-muted">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
