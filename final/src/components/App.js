const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />;
      <Form />;
      <PackageList />;
      <Stats />;
    </div>
  );
}

function Logo() {
  return <h1> Far Away</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setDescription("");
    setQuantity(1);
  }

  return (
    <Form className="add-form" onsubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChanghe={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.Form({ length: 20 }, (_, i) => i + 1).map((num) => (
          <optipn value={num} key={num}>
            {num}
          </optipn>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChanghe={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </Form>
  );
}

function PackageList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.key} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through>" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      you have X item on your list, and you already packed X (X%)
    </footer>
  );
}
