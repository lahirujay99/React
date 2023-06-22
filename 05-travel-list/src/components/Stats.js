export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀</em>
      </p>
    );

  const nItems = items.length;
  const packed = items.filter((n) => n.packed === true).length;
  const percent = Math.round((packed / nItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent !== 100
          ? `💼 you have ${nItems} items in your list, and you already packed
          ${packed}(${percent} %)`
          : `You got everything, Ready to go ✈`}
      </em>
    </footer>
  );
}
