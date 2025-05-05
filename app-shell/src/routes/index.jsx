import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <ul>
      <li>
        <Link to="/remote_1">Remote_1</Link>
      </li>
      <li>
        <Link to="/remote_2">Remote_2</Link>
      </li>
    </ul>
  );
}
