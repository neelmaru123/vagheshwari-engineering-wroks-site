import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="md:w-1/2 space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
              Premium{" "}
              <span className="text-blue-600">Hydraulic Brick Making</span>{" "}
              Machines
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-lg">
              Leading manufacturer of hydraulic fly ash brick machines, paver
              block making machines, clay bricks and tiles making machines and
              goods industrial lift. Advanced technology for efficient brick
              manufacturing with high productivity and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 md:py-6 px-4 md:px-6 rounded-md w-full sm:w-auto"
              >
                <Link href="#products">
                  Explore Products{" "}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 py-4 md:py-6 px-4 md:px-6 rounded-md w-full sm:w-auto"
              >
                <Link href="#contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/uploads/IMG_20230814_213624.jpg"
                alt="Hydraulic brick making machine by Vageshwari Engineering Works - High capacity automatic brick production equipment"
                width={600}
                height={500}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-16 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default HeroSection;
