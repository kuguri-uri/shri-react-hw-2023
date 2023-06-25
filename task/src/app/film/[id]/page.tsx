import Comments from "@/components/Comments";
import FilmDescr from "@/components/FilmDescr";

export default function Film({ params }: { params: { id: string } }) {
  const filmId = params.id;

  return (
    <div className="flex flex-col gap-6">
      <FilmDescr filmId={filmId} />
      <Comments filmId={filmId} />
    </div>
  );
}
