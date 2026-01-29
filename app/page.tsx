import Hero from "@/components/Hero";
import VideoBanner from "@/components/VideoBanner";
import ImageTextSection from "@/components/ImageTextSection";
import { ToolsShowcase } from "@/components/ToolsShowcase";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Contenido antes del banner para tener scroll */}
      <div className="md:h-[20dvh] h-[10dvh]">
        
      </div>

      <VideoBanner
        id="innovation"
        videoSrc="/video/banner-compressed.mp4"
        overlayOpacity={0.0}
        overlayColor="bg-black"
        height="screen"
        
        autoPlay={true}
      >
        {/* Agrega algún contenido para probar */}
        {/* <h1 className="text-white text-4xl">Título del Banner</h1> */}
      </VideoBanner>

      

      {/* Sección con imagen y texto */}
      <ImageTextSection
        id="about"
        imageSrc="/img/code.webp"
        imageAlt="Nuestra empresa"
        title="Simplificamos al  máximo los conceptos."
        description="Con sistemas redundantes de accionamiento, lo cual permite que en el caso de que un sistema de accionamiento no opere, se puede activar el segundo sistema para garantizar una herramienta que realmente funcione ante cualquier ciscunstancia."
        imagePosition="left"
        backgroundColor="bg-transparent"
        titleColor="text-white"
        descriptionColor="text-gray-300"
      />

      <ToolsShowcase />

      {/* Contenido después del banner */}
      <div style={{ height: '10vh' }}></div>
      

      
    </main>

  );
}
