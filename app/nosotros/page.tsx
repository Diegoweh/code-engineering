import VideoBanner from "@/components/VideoBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a CODE® Engineering, nuestra visión de diseño y el enfoque técnico con el que desarrollamos herramientas de completación para petróleo y gas.",
  openGraph: {
    title: "Nosotros | CODE® Engineering",
    description:
      "Diseñamos soluciones de completación enfocadas en confiabilidad, simplicidad operativa y desempeño en campo.",
    url: "/nosotros",
  },
};

const pillars = [
  {
    title: "Confiabilidad",
    description:
      "Con sistemas redundantes de accionamiento, lo cual permite que en el caso de que un sistema de accionamiento no opere, se puede activar el segundo sistema para garantizar una herramienta que realmente funcione ante cualquier circunstancia.",
  },
  {
    title: "Eficiencia",
    description:
      "Simplificamos al máximo los conceptos, de manera que además de evitar el incremento en costos también minimizamos los riesgos de falla, nuestras herramientas tienen un solo propósito, hacer el trabajo de manera exacta minimizando el riesgo de las fallas más comunes.",
  },
  {
    title: "Versatilidad",
    description:
      "Con un amplio margen de presiones y temperaturas, algunas de ellas con conceptos modulares, los cuales pueden ser integrados para tener mayores prestaciones.",
  },
];

const strengths = [
  "Nos enfocamos en corregir las fallas más comunes en las herramientas actuales.",
  "Mejoramos confiabilidad, eficiencia y versatilidad en cada diseño.",
  "Generamos nuevas herramientas respaldadas por nuestras propias patentes.",
  "Somos una empresa de ingeniería con ingenieros haciendo ingeniería.",
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <section className="px-6">
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <p className="text-orange-400 tracking-[0.28em] uppercase text-xs sm:text-sm font-adelle">
                Nosotros
              </p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 font-adelle">
                Una ingeniería en desarrollo continuo para crear diseños útiles, confiables y más eficientes para la industria de petróleo y gas.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl font-adelle">
                Solo eso nos llevará a tener las herramientas preferidas del mercado.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl font-adelle">
                De nada sirve repetir las mismas herramientas sin mejorar prestaciones, repitiendo una y otra
                vez el mismo tipo de falla. Aquí es donde innovamos.
              </p>
            </div>

            <div className="relative min-h-[320px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.28),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
              <div className="absolute inset-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-end">
                <div className="rounded-3xl border border-orange-400/20 bg-black/45 p-6 backdrop-blur-sm">
                  <p className="text-orange-300 text-xs uppercase tracking-[0.3em] font-adelle">
                    Enfoque
                  </p>
                  <p className="text-white text-2xl sm:text-3xl leading-snug mt-4 font-adelle">
                    Nuestro método de diseño es muy sencillo: corregir las fallas más comunes y convertirlas
                    en herramientas más confiables, más eficientes y más versátiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-7 sm:px-7 sm:py-8 backdrop-blur-sm"
            >
              <p className="text-orange-400 text-xs uppercase tracking-[0.28em] font-adelle">
                Pilar
              </p>
              <h2 className="text-white text-2xl mt-4 font-semibold font-adelle">{pillar.title}</h2>
              <p className="text-gray-300 leading-relaxed mt-4 font-adelle">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="rounded-3xl border border-white/10 bg-black/45 p-8 sm:p-10 backdrop-blur-sm">
            <p className="text-orange-400 text-xs uppercase tracking-[0.28em] font-adelle">
              Visión técnica
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-bold mt-4 font-adelle">
              Innovar donde otros repiten.
            </h2>
            <p className="text-gray-300 leading-relaxed mt-5 font-adelle">
              No repetimos las mismas soluciones arrastrando las mismas limitaciones. Diseñamos desde la
              ingeniería para mejorar prestaciones reales en campo y desarrollar herramientas útiles para la
              industria de petróleo y gas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-sm mb-12">
            <p className="text-orange-400 text-xs uppercase tracking-[0.28em] font-adelle">
              Lo que nos define
            </p>
            <div className="mt-6 space-y-4">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-black/25 px-5 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400" />
                  <p className="text-gray-200 leading-relaxed font-adelle">{strength}</p>
                </div>
              ))}
            </div>
            <p className="text-white text-lg sm:text-xl leading-relaxed mt-8 font-adelle">
              “…Somos lo que somos, una empresa de ingeniería con ingenieros haciendo ingeniería…”
            </p>
          </div>
        </div>
      </section>

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
    </main>
  );
}
