"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { WhatsappButton } from "../../components/WhatsappButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import Image from "next/image";

interface ProductDetailsClientProps {
  product: any;
}

const ProductDetailsClient = ({ product }: ProductDetailsClientProps) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("products");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isProduct={true}
      />

      <main className="flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8">
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <AspectRatio ratio={4 / 3} className="relative">
                  <Image
                    src={product.images?.[activeImage] ?? "/uploads/logo.png"}
                    alt={product.name}
                    title={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`w-full h-full transition-transform duration-300 bg-white p-2 ${
                      product.category === "molds"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                  />
                </AspectRatio>
              </div>

              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image: string, index: number) => (
                    <div
                      key={index}
                      className={`border rounded-md overflow-hidden relative cursor-pointer ${
                        index === activeImage ? "ring-2 ring-blue-600" : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <AspectRatio ratio={1 / 1} className="relative">
                        <Image
                          src={image}
                          fill
                          alt={`${product.name} view ${index + 1}`}
                          className={`w-full h-full ${
                            product.category === "molds"
                              ? "object-contain"
                              : "object-cover"
                          }`}
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                {product.description}
              </p>

              {(product as any).variants &&
                (product as any).variants.length > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Available Variants
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {(product as any).variants.map((v: any, idx: number) => (
                        <div key={idx} className="p-3 border rounded bg-white">
                          <div className="font-medium">
                            {v.kvt ?? v.name ?? `Variant ${idx + 1}`}
                          </div>
                          <div className="text-sm text-gray-700">
                            Production: {v.production ?? v.capacity ?? "N/A"}
                          </div>
                          <div className="text-sm text-gray-700">
                            Power: {v.power ?? v.power ?? "N/A"}
                          </div>
                          <div className="text-sm text-gray-700">
                            Price: {v.price ?? "Contact"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {(product as any).specs && (
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Specifications
                  </h3>
                  <p className="text-blue-700">{(product as any).specs}</p>
                </div>
              )}

              {(product as any).features && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Key Features
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {(product as any).features.map(
                      (feature: any, index: number) => (
                        <li key={index} className="text-gray-700">
                          {feature}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg"
                onClick={() => {
                  const phoneNumber = "9879277425";
                  const message = `Hello, I'm interested in the ${product.name}.`;
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message,
                  )}`;
                  window.open(url, "_blank");
                }}
              >
                Contact for Pricing and Availability
              </Button>
            </div>
          </div>

          {(product as any).specTable && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>

              <div className="space-y-8">
                {(product as any).specTable.map(
                  (section: any, sectionIndex: number) => (
                    <div
                      key={sectionIndex}
                      className="overflow-hidden rounded-lg border shadow"
                    >
                      <div className="bg-blue-600 text-white px-6 py-3">
                        <h3 className="text-lg font-semibold">
                          {section.category}
                        </h3>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-1/3">Parameter</TableHead>
                            <TableHead>Specification</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {section.specs.map((spec: any, specIndex: number) => (
                            <TableRow key={specIndex}>
                              <TableCell className="font-medium">
                                {spec.name}
                              </TableCell>
                              <TableCell>{spec.value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
};

export default ProductDetailsClient;
