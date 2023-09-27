export default function Project({ children, ...props }) {
  return (
    <li
      {...props}
    >
      {children}
    </li>
  );
}
