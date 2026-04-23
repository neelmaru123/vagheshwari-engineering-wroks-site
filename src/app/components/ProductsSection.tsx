import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { productCategories } from "../data/products-data";
import Link from "next/link";

const ProductsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hydraulic Brick Making Machines & Paver Block Making Machines
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of hydraulic brick making machines, paver block
            making machines, industrial goods lift and related equipment
            designed for efficiency and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productCategories.map((category: any) => (
            <article key={category.id} className="">
              <Card className="shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full">
                <CardContent className="p-0">
                  <AspectRatio ratio={4 / 3} className="relative bg-gray-100">
                    <Image
                      src={category.images?.[0] ?? "/uploads/logo.png"}
                      alt={`${category.name} - ${category.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover w-full h-full hover:scale-105 transition-transform duration-500 ${
                        category.category === "molds"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                    />
                  </AspectRatio>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-3">
                      {category.description}
                    </p>

                    <Link href={`/product/${category.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Button
            asChild
            className="mt-10 p-6 text-xl bg-blue-600 hover:bg-blue-700 text-white "
          >
            <a href="/uploads/Shree%20Vagheshvaree%20Engineering%20Works.pdf" target="_blank" rel="noopener noreferrer">
              View Catalogue
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
