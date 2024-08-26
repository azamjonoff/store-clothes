// features
import { useEffect } from "react";
import { getData } from "../features/clothesSlice";

// redux
import { useDispatch, useSelector } from "react-redux";

// rrd
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const { clothes } = useSelector((state) => state.clothes);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <section className="mt-3">
      <div className="container">
        <h1 className="text-3xl text-center mt-10 mb-5 font-bold">
          Welcome to <span className="text-orange-700">clothes store</span>
        </h1>
        <ul className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mb-10">
          {clothes &&
            clothes.map((cloth) => {
              return (
                <li key={cloth.id}>
                  <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-lg">
                    <img
                      alt=""
                      src={cloth.image}
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        {cloth.name}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        {cloth.description}
                      </p>

                      <Link
                        to={`/singleProduct/${cloth.id}`}
                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                      >
                        Find out more
                        <span
                          aria-hidden="true"
                          className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                        >
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default Home;
