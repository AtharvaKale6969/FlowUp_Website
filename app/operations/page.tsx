import OperationsMap from "@/components/ui/OperationsMap";

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6 max-w-7xl mb-8 text-center">
        <span className="eyebrow block mb-4 text-gold">Our Reach</span>
        <h1 className="text-4xl md:text-5xl font-sans font-bold leading-tight text-gray-900 mb-4">
          Operations Map
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our distribution network across Maharashtra and Madhya Pradesh, centered around our Nagpur headquarters.
        </p>
      </div>
      
      <div className="w-full h-[80vh]">
        <OperationsMap />
      </div>
    </main>
  );
}
