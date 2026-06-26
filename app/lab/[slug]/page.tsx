import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, ShieldCheck, Globe, FileText, FlaskConical } from "lucide-react";

// Mirroring the data from the lab page and adding specific testing details.
const certsData = [
  { 
    title: "BIS Certification", 
    slug: "bis-certification", 
    desc: "Bureau of Indian Standards certified for material safety and quality.",
    details: [
      { label: "Status", value: "Verified & Active" },
      { label: "Testing Body", value: "Bureau of Indian Standards" },
      { label: "Material", value: "Food-grade PET" },
      { label: "Compliance", value: "IS 15410:2003" }
    ]
  },
  { 
    title: "FDA Approved", 
    slug: "fda-approved", 
    desc: "All materials touching water meet stringent US FDA food-contact standards.",
    details: [
      { label: "Status", value: "Verified & Active" },
      { label: "Standard", value: "FDA 21 CFR" },
      { label: "Safety", value: "Food Contact Safe" }
    ]
  },
  { 
    title: "ISO 9001:2015", 
    slug: "iso-9001-2015", 
    desc: "Manufactured in a certified facility ensuring consistent quality management.",
    details: [
      { label: "Status", value: "Verified & Active" },
      { label: "Standard", value: "ISO 9001:2015" },
      { label: "Scope", value: "Quality Management Systems" }
    ]
  },
  { 
    title: "100% BPA-Free", 
    slug: "bpa-free", 
    desc: "Independently verified free of all Bisphenol compounds (BPA, BPS, BPF).",
    details: [
      { label: "Status", value: "Verified & Active" },
      { label: "BPA Level", value: "Not Detected (ND)" },
      { label: "Testing", value: "Third-party Lab" }
    ]
  },
  { 
    title: "FSSAI Compliant", 
    slug: "fssai-compliant", 
    desc: "Meets all Food Safety and Standards Authority of India requirements.",
    details: [
      { label: "Status", value: "Verified & Active" },
      { label: "Authority", value: "FSSAI" },
      { label: "Category", value: "Packaged Drinking Water" }
    ]
  },
  { 
    title: "Heavy-Metal Free", 
    slug: "heavy-metal-free", 
    desc: "Spectrometry testing confirms zero presence of lead, cadmium, or mercury.",
    details: [
      { label: "Status", value: "Verified & Active" },
      { label: "Lead (Pb)", value: "Not Detected" },
      { label: "Mercury (Hg)", value: "Not Detected" },
      { label: "Cadmium (Cd)", value: "Not Detected" }
    ]
  }
];

export default async function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const cert = certsData.find(c => c.slug === resolvedParams.slug);

  if (!cert) {
    notFound();
  }

  return (
    <div className="bg-transparent min-h-screen pb-24">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#0a0a0a]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold rounded-full blur-[100px] opacity-10 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px] opacity-10 translate-y-1/4" />
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <Link href="/lab" className="inline-flex items-center text-gold hover:text-gold-light mb-8 transition-colors text-sm uppercase tracking-wider font-semibold">
            <ArrowLeft size={16} className="mr-2" /> Back to All Reports
          </Link>
          <h1 className="text-white mb-4 text-4xl md:text-5xl">{cert.title} Report</h1>
          <p className="text-gray-400 text-lg max-w-2xl">{cert.desc}</p>
        </div>
      </section>

      {/* Report Viewer Content */}
      <section className="container mx-auto px-6 max-w-5xl mt-16">
        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12">
          
          {/* Document Viewer (Placeholder) */}
          <div className="w-full md:w-2/3">
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl h-[600px] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50" />
               <FileText size={64} className="text-gray-300 mb-6 relative z-10" />
               <h3 className="text-xl text-gray-700 font-serif mb-2 relative z-10">Document Pending</h3>
               <p className="text-gray-500 max-w-xs relative z-10">The official PDF scan for {cert.title} will be embedded here once provided.</p>
               
               {/* Decorative watermark */}
               <div className="absolute -bottom-10 -right-10 opacity-5">
                 <ShieldCheck size={200} />
               </div>
            </div>
          </div>

          {/* Key Parameters */}
          <div className="w-full md:w-1/3 flex flex-col">
            <h3 className="text-2xl font-serif mb-6 text-gray-900 border-b border-gray-100 pb-4">Test Parameters</h3>
            <div className="flex-grow flex flex-col gap-6">
              {cert.details.map((detail, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">{detail.label}</span>
                  <span className="font-semibold text-gray-900">{detail.value}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-10 bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gold transition-colors flex items-center justify-center group">
              <Download size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" /> Download Original PDF
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
