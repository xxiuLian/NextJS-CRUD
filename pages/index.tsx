import { useRouter } from "next/router";
import Seo from "./Seo";
import Link from "next/link";
import { Movie } from "./type";

const API_KEY = process.env.API_KEY;

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  console.log(results);

  return (
    <div className="container">
      <Seo title="HOME" />
      {results?.map((movie: Movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              href={`/movies/${movie.original_title}/${movie.id}`}
              legacyBehavior
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  //여기 작성한 코드는 server에서만 돌아감 (not client)
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    //props라고 불리는 object return...key혹은property
    props: {
      results,
    },
  };
}
