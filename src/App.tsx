import { useQuery } from "@tanstack/react-query";
import { fetchArtImages } from "./fetchArtImages";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["images"],
    queryFn: fetchArtImages,
  });

  if (isLoading) return "Loading...";

  if (error) return "Something went wrong!";

  return (
    <div>
      {data?.images.map((image) => (
        <p>{image.title}</p>
      ))}
    </div>
  );
}

export default App;
