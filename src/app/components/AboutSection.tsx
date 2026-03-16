import Image from "next/image";
import { Building, Factory, Users, Truck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about our journey to becoming a trusted manufacturer of brick
            making machinery
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                src="/uploads/f11064c9-8c3f-4f37-a403-9031816d12f0.png"
                alt="Vageshwari Engineering Works Manufacturing Facility - State-of-the-art production center for hydraulic brick making machines"
                width={650}
                height={400}
                priority
                className="rounded-lg shadow-lg relative z-10 object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-6 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800">
              Our Legacy of Quality and Innovation
            </h3>
            <p className="text-gray-600">
              Established in 1995, Vageshwari Engineering Works has been at the
              forefront of brick making technology for over two decades. Our
              commitment to quality, innovation, and customer satisfaction has
              made us a trusted name in the industry.
            </p>
            <p className="text-gray-600">
              With a team of experienced engineers and technicians, we design
              and manufacture hydraulic brick making machines that combine
              efficiency, durability, and ease of use. Our machines are built to
              withstand the rigors of daily operation while delivering
              consistent quality bricks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Factory className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Quality Manufacturing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Built with precision engineering
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Expert Support</h4>
                  <p className="text-gray-600 text-sm">
                    Dedicated technical team
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Building className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Modern Facility</h4>
                  <p className="text-gray-600 text-sm">
                    State-of-the-art production
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Truck className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Nationwide Delivery
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Prompt shipping and setup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
