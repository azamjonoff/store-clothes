// rrd
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//
import { getData } from "../features/clothesSlice";

function SingleProduct({ params }) {
  const dispatch = useDispatch();
  const { clothes } = useSelector((state) => state.clothes);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const { id } = useParams(params);

  return (
    <section>
      <div className="container my-20">
        {clothes &&
          clothes.map((cloth) => {
            if (cloth.id == id) {
              return (
                <div
                  key={cloth.id}
                  className="grid md:grid-cols-2 sm:grid-cols-1 gap-16"
                >
                  <img
                    src={cloth.image}
                    alt={cloth.name}
                    className="shadow-md hover:shadow-lg"
                  />
                  <div>
                    <h2 className="text-xl font-semibold my-5 tracking-wide">
                      Category: {cloth.category}
                    </h2>
                    <h3 className="text-lg font-medium">
                      <span className="font-semibold">
                        Information this cloth:
                      </span>{" "}
                      {cloth.description}
                    </h3>
                    <h1 className="text-3xl font-bold my-4">{cloth.name}</h1>
                    <h3 className="text-2xl font-semibold">
                      Price: ${cloth.price}
                    </h3>
                    <h4 className="text-xl mt-3 font-semibold flex items-center gap-4">
                      InStock:{" "}
                      {cloth.inStock ? (
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png"
                          width={50}
                          height={50}
                        />
                      ) : (
                        <img
                          src="https://media.istockphoto.com/id/1131230925/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B8%D1%82%D1%8C-%D0%B7%D0%BD%D0%B0%D0%BA%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9-%D0%BA%D1%80%D0%B5%D1%81%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=612x612&w=0&k=20&c=s7YsIAKS7fZwQSyKoXV_5e0DJWcGlZwzOEgYryPc3fc="
                          width={50}
                          height={50}
                        />
                      )}
                    </h4>
                    <h3 className="my-4 font-medium text-xl">
                      Sizes: {cloth.size}
                    </h3>
                    <div className="flex gap-3 items-center">
                      <h3 className="text-2xl font-semibold">Colors:</h3>
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: cloth.color }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </section>
  );
}

export default SingleProduct;
