export default function TodoItem({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>삭제</button>
    </li>
  );
}
