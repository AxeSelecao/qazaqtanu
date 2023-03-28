import { useParams } from "react-router-dom";

export function Topic1() {
  const { id } = useParams();
  console.log(id);
  return (
    <div style={{ paddingTop: 300, paddingLeft: 500 }}>
      <h1>Topic {id}</h1>
    </div>
  );
}
