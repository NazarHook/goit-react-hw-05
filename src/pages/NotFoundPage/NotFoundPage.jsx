import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Sorry there is no such page!!</p>
      <p>
        Please visit our <Link to="/">home page</Link>
      </p>
    </div>
  );
}