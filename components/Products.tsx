import { Item } from "@/Types";
import { addToCart } from "../redux/shopperSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();
  console.log(productData);
  return (
    <div className="flex items-center justify-center py-6 px-4">
      <div className="grid lg:grid-cols-4 sm:grid-row-1 gap-4">
        {productData.map((item: Item) => (
          <div
            key={item._id}
            className="border-[1px] border-gray-200 mb-6 group bg-slate-100"
          >
            <div className="w-full h-[350px] overflow-hidden p-1">
              <Image
                className="w-full h-full object-contain scale-100 group-hover:scale-100 duration-300"
                width={300}
                height={250}
                src={item.image}
                alt="itemImage"
              />
            </div>
            <div className="px-2 py-4 flex flex-col justify-center">
              <div className="flex justify-between py-2">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: item._id,
                        title: item.title,
                        description: item.description,
                        oldPrice: item.oldPrice,
                        price: item.price,
                        brand: item.brand,
                        image: item.image,
                        category: item.category,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-20 h-9 bg-blue-600 text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300"
                >
                  <span>
                    <GoPlus />
                  </span>
                  Add{" "}
                </button>
                <Link
                  href={{
                    pathname: `product/${item._id}`,
                    query: {
                      _id: item._id,
                      title: item.title,
                      description: item.description,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      brand: item.brand,
                      image: item.image,
                      isNew: item.isNew,
                      category: item.category,
                    },
                  }}
                >
                  <button className="w-20 h-9 bg-white border-[1px] border-black text-black rounded-full flex gap-1 items-center justify-center hover:bg-black hover:text-white duration-300">
                    <span>
                      <GoPlus />
                    </span>
                    Details{" "}
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-serif text-lg text-green-700 font-semibold">
                  Now ${item.price}
                </p>
                <p className="text-gray-500 line-through decoration-[1px]">
                  ${item.oldPrice}
                </p>
              </div>
              <p className="font-serif text-lg font-semibold py-2">
                {item.title.substring(0, 25)}
              </p>
              <p className="text-base text-zinc-500">
                {item.description.substring(0, 80)}
              </p>
              <div className="flex text-sm gap-1 mt-2 items-center">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <p>25</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
