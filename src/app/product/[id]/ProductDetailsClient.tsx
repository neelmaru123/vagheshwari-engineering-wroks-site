"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { WhatsappButton } from "../../components/WhatsappButton";
import Image from "next/image";
import Link from "next/link";
import RelatedProducts from "@/components/RelatedProducts";

interface ProductDetailsClientProps {
  product: any;
}

const getTechnicalSpecs = (product: any) => {
  if (product.specTable && product.specTable.length > 0) {
    const combinedSpecs: { name: string; value: string }[] = [];
    product.specTable.forEach((cat: any) => {
      if (Array.isArray(cat.specs)) {
        cat.specs.forEach((s: any) => combinedSpecs.push(s));
      }
    });
    if (combinedSpecs.length > 0) return combinedSpecs;
  }

  switch (product.category) {
    case "fully-automatic":
      return [
        { name: "Production Capacity", value: "10,000 – 20,000 Bricks / Day (8 Hours)" },
        { name: "Hydraulic Pressing Force", value: "100 – 120 Tons" },
        { name: "Total Power Requirement", value: "25 HP – 35 HP (3-Phase)" },
        { name: "Brick Dimensions", value: "230 x 110 x 75 mm (Standard 9x4x3 inch)" },
        { name: "Control System", value: "PLC Automatic Control Panel with HMI Touchscreen" },
        { name: "Mould Cycle Speed", value: "12 – 15 Seconds per stroke" },
        { name: "Compatible Raw Materials", value: "Fly Ash, Sand, Lime, Gypsum, Cement, Stone Dust" },
        { name: "Overall Machine Weight", value: "Approx. 6,500 kg" },
        { name: "Dimensions (L x W x H)", value: "4.5m x 2.2m x 2.8m" },
      ];
    case "semi-automatic":
      return [
        { name: "Production Capacity", value: "4,000 – 8,000 Bricks / Day (8 Hours)" },
        { name: "Hydraulic Pressing Force", value: "60 – 80 Tons" },
        { name: "Total Power Requirement", value: "12 HP – 15 HP (3-Phase)" },
        { name: "Brick Dimensions", value: "230 x 110 x 75 mm (Standard 9x4x3 inch)" },
        { name: "Control System", value: "Semi-Automatic Hand Lever Operation" },
        { name: "Mould Cycle Speed", value: "18 – 22 Seconds per stroke" },
        { name: "Compatible Raw Materials", value: "Fly Ash, Quarry Dust, Cement, River Sand" },
        { name: "Overall Machine Weight", value: "Approx. 3,800 kg" },
        { name: "Dimensions (L x W x H)", value: "3.2m x 1.8m x 2.2m" },
      ];
    case "clay-machine":
      return [
        { name: "Production Capacity", value: "6,000 – 12,000 Bricks / Day" },
        { name: "Hydraulic Pressing Force", value: "80 – 100 Tons" },
        { name: "Total Power Requirement", value: "15 HP – 20 HP (3-Phase)" },
        { name: "Brick Dimensions", value: "Customizable Clay Die Sizes" },
        { name: "Control System", value: "PLC Hydro-Mechanical Control" },
        { name: "Mould Cycle Speed", value: "12 – 15 Seconds" },
        { name: "Raw Material Compatibility", value: "Clay, Terracotta Blend, Mud, Shale" },
        { name: "Overall Machine Weight", value: "Approx. 4,200 kg" },
        { name: "Dimensions (L x W x H)", value: "3.5m x 2.0m x 2.4m" },
      ];
    case "auxiliary":
      return [
        { name: "Motor Power", value: "2.0 HP Heavy-Duty Vibratory Motor" },
        { name: "Surface Area", value: "2000 mm x 1000 mm" },
        { name: "Frame Structure", value: "Heavy Channel Reinforced Steel" },
        { name: "Vibration Frequency", value: "2880 RPM" },
        { name: "Overall Machine Weight", value: "Approx. 350 kg" },
        { name: "Application", value: "Paver Block & Concrete Compaction" },
      ];
    case "molds":
      return [
        { name: "Material", value: "High-Density Industrial Rubber" },
        { name: "Expected Lifespan", value: "1000+ Production Cycles" },
        { name: "Available Patterns", value: "Zig-Zag, Hexagon, I-Shape, Dumble, Cover Block" },
        { name: "Demolding Method", value: "Manual Fast Release" },
        { name: "Chemical Resistance", value: "Acid, Alkali & UV Resistant" },
      ];
    default:
      return [
        { name: "Production Capacity", value: "High-Capacity Industrial Output" },
        { name: "Power System", value: "Heavy Duty Electric / Hydraulic" },
        { name: "Manufacturing Location", value: "Morbi, Gujarat, India" },
        { name: "Warranty", value: "1 Year Manufacturer Warranty" },
      ];
  }
};

const getFaqs = (product: any) => {
  return [
    {
      question: `What is the daily production capacity of the ${product.name}?`,
      answer: `The production capacity of the ${product.name} depends on shift duration and raw material mix, producing between 4,000 to 20,000 high-density bricks or blocks per 8-hour shift. Our hydraulic pressing and high-frequency vibration system ensure rapid cycle times without compromising structural strength.`
    },
    {
      question: `What maintenance schedule is recommended for this machine?`,
      answer: `Daily maintenance involves wiping down die molds and checking hydraulic oil levels. We recommend inspecting hydraulic filters, tightening electrical connections, and lubricating mechanical pivots monthly. Full hydraulic fluid changes should be performed every 1,000 working hours or bi-annually.`
    },
    {
      question: `What warranty and technical support does Vagheshwari Engineering provide?`,
      answer: `Vagheshwari Engineering Works provides a full 1-Year Manufacturer Warranty covering structural and hydraulic components. We also offer on-site technician installation, operator training, rapid spare parts dispatch, and lifelong phone/video engineering support directly from Morbi, Gujarat.`
    },
    {
      question: `Which raw materials can be processed by this machine?`,
      answer: `This machine is engineered to work efficiently with a wide range of raw materials including fly ash, stone dust, river sand, cement, lime, and crushed quarry aggregates. The exact mixing ratio can be optimized depending on locally available materials in your region.`
    }
  ];
};

const ProductDetailsClient = ({ product }: ProductDetailsClientProps) => {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [product.id]);

  const specsList = getTechnicalSpecs(product);
  const faqsList = getFaqs(product);

  return (
    <>
      <Navbar isProduct={true} />

      <main className="flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-12 md:py-8">
          <Button
            asChild
            variant="outline"
            className="mb-6 flex items-center gap-2 w-fit"
          >
            <Link href="/#products">
              <ArrowLeft size={16} />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden shadow-md bg-white">
                <div style={{ position: "relative", width: "100%", paddingBottom: "75%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={activeImage}
                    src={product.images?.[activeImage] ?? "/uploads/logo.png"}
                    alt={product.name}
                    title={product.name}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    className={`p-2 ${product.category === "molds"
                      ? "object-contain"
                      : "object-cover"
                      }`}
                  />
                </div>
              </div>

              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image: string, index: number) => (
                    <div
                      key={index}
                      role="button"
                      tabIndex={0}
                      aria-label={`View image ${index + 1}`}
                      className={`border rounded-md overflow-hidden cursor-pointer transition-all ${index === activeImage
                          ? "ring-2 ring-blue-600 border-blue-600"
                          : "opacity-60 hover:opacity-100"
                        }`}
                      onClick={() => setActiveImage(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveImage(index);
                        }
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className={`w-full aspect-square p-1 ${product.category === "molds"
                          ? "object-contain"
                          : "object-cover"
                          }`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
                {product.longDescription ?? product.description}
              </p>

              {(product as any).variants &&
                (product as any).variants.length > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      Available Variants
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(product as any).variants.map((v: any, idx: number) => (
                        <div key={idx} className="p-3.5 border rounded-md bg-white shadow-sm">
                          <div className="font-bold text-slate-900 text-base mb-1">
                            {v.kvt ?? v.name ?? `Variant ${idx + 1}`}
                          </div>
                          <div className="text-sm text-slate-700">
                            <strong>Production:</strong> {v.production ?? v.capacity ?? "N/A"}
                          </div>
                          <div className="text-sm text-slate-700">
                            <strong>Power:</strong> {v.power ?? v.power ?? "N/A"}
                          </div>
                          <div className="text-sm text-slate-700 font-semibold text-blue-700">
                            Price: {v.price ?? "Contact for Quote"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {(product as any).features && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Key Features & Advantages
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {(product as any).features.map(
                      (feature: any, index: number) => (
                        <li key={index} className="text-base text-slate-700 leading-relaxed">
                          {feature}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg text-base sm:text-lg shadow"
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

          {/* In-depth Product Overview Section for SEO & Engagement */}
          <section className="mt-12 border-t pt-8 space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Product Description
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              The <strong>{product.name}</strong> manufactured by <strong>Vagheshwari Engineering Works</strong> in Morbi, Gujarat, represents industry-leading engineering in industrial brick and block machinery. Specially designed to meet the demands of modern construction projects across India, this machine combines heavy-duty hydraulic pressing power with high-frequency compaction technology to yield dense, durable bricks and paver blocks with outstanding compressive strength.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Brick manufacturing units require equipment that delivers reliable performance, minimizes raw material wastage, and operates seamlessly under continuous production schedules. Built using heavy structural steel channels, precision hydraulic manifolds, and top-tier electric motors, our machines withstand harsh industrial conditions while maintaining low power consumption and high cost efficiency per brick produced.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Whether processing fly ash, stone dust, quarry sand, cement, or clay mixes, the {product.name} ensures precise dimensional accuracy, smooth surface finishing, and uniform density across all production batches. Vagheshwari Engineering provides complete plant setup assistance, custom die design, on-site technician training, and prompt spare parts dispatch directly from Morbi.
            </p>
          </section>

          {/* Technical Specifications Section */}
          <section className="mt-12 border-t pt-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm sm:text-base">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th scope="col" className="px-5 sm:px-6 py-3.5 font-bold text-base sm:text-lg">
                      Parameter
                    </th>
                    <th scope="col" className="px-5 sm:px-6 py-3.5 font-bold text-base sm:text-lg">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {specsList.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-5 sm:px-6 py-3.5 font-bold text-slate-900">
                        {spec.name}
                      </td>
                      <td className="px-5 sm:px-6 py-3.5 text-slate-700 font-medium">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Frequently Asked Questions Section */}
          <section className="mt-12 border-t pt-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqsList.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-slate-200 rounded-lg bg-slate-50 p-4 sm:p-5 transition-all duration-200"
                >
                  <summary className="font-bold text-base sm:text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{faq.question}</span>
                    <span className="text-blue-600 font-bold text-xl group-open:rotate-180 transition-transform duration-200 shrink-0">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 text-base text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <RelatedProducts currentProductId={product.id} />
      <Footer />
      <WhatsappButton />
    </>
  );
};

export default ProductDetailsClient;
