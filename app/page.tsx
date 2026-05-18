export default function LaInvencibleNG() {
  const lots = [
    {
      title: '120 Terneros Angus',
      category: 'Invernada',
      weight: '180 kg',
      location: 'Casilda, Santa Fe',
      image:
        'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: '85 Novillitos',
      category: 'Consumo',
      weight: '320 kg',
      location: 'Sur de Santa Fe',
      image:
        'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: '60 Vaquillonas',
      category: 'Cría',
      weight: '290 kg',
      location: 'Córdoba',
      image:
        'https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="La Invencible"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                LA INVENCIBLE
              </h1>
              <p className="text-sm text-slate-500 tracking-wide uppercase">
                Negocios Ganaderos
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#inicio" className="hover:text-red-700 transition">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-red-700 transition">
              Servicios
            </a>
            <a href="#lotes" className="hover:text-red-700 transition">
              Lotes
            </a>
            <a href="#contacto" className="hover:text-red-700 transition">
              Contacto
            </a>
          </nav>

          <a
            href="https://wa.me/5493464564564"
            target="_blank"
            className="bg-red-700 hover:bg-red-800 transition text-white px-5 py-3 rounded-2xl shadow-lg font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden pt-32"
      >
        <div className="absolute inset-0">
          <img
            src="/images/portada.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-slate-300 text-sm mb-5">
              Compra y venta de hacienda
            </p>

            <h2 className="text-6xl font-black leading-tight text-white mb-8">
              Negocios ganaderos con confianza y seriedad.
            </h2>

            <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl">
              En La Invencible conectamos productores y compradores mediante
              operaciones transparentes, ágiles y profesionales en el mercado
              ganadero argentino.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://wa.me/5493464564564"
                target="_blank"
                className="bg-red-700 hover:bg-red-800 transition text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl"
              >
                Consultar por WhatsApp
              </a>

              <a
                href="#lotes"
                className="bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition text-white px-8 py-4 rounded-2xl text-lg"
              >
                Ver lotes
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 shadow-2xl max-w-md">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="uppercase tracking-[0.25em] text-red-700 text-sm mb-4 font-semibold">
              Servicios
            </p>

            <h3 className="text-5xl font-black text-slate-900 mb-6">
              Soluciones comerciales para el sector ganadero
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed">
              Operamos con productores, feedlots y compradores brindando
              seguimiento personalizado, confianza y rapidez en cada negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Consignación de Hacienda',
                desc:
                  'Operaciones comerciales seguras y seguimiento profesional de principio a fin.',
              },
              {
                title: 'Compra y Venta',
                desc:
                  'Búsqueda y colocación estratégica de lotes según mercado y oportunidad.',
              },
              {
                title: 'Asesoramiento Comercial',
                desc:
                  'Análisis de mercado, relaciones compra/venta y oportunidades ganaderas.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-[32px] p-10 shadow-sm hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-700/10 flex items-center justify-center mb-8">
                  <div className="w-7 h-7 rounded-full bg-red-700" />
                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-5">
                  {service.title}
                </h4>

                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOTES */}
      <section id="lotes" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="uppercase tracking-[0.25em] text-red-700 text-sm mb-4 font-semibold">
                Hacienda Disponible
              </p>

              <h3 className="text-5xl font-black text-slate-900 mb-4">
                Lotes destacados
              </h3>

              <p className="text-slate-600 text-lg max-w-2xl">
                Publicación profesional de lotes de invernada, cría y consumo.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {lots.map((lot, index) => (
              <div
                key={index}
                className="rounded-[36px] overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={lot.image}
                    alt={lot.title}
                    className="h-72 w-full object-cover"
                  />

                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-slate-800 shadow">
                    {lot.category}
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-3xl font-bold text-slate-900 mb-6">
                    {lot.title}
                  </h4>

                  <div className="space-y-3 text-slate-600 text-lg">
                    <p>
                      <span className="font-semibold text-slate-900">Kilos:</span>{' '}
                      {lot.weight}
                    </p>

                    <p>
                      <span className="font-semibold text-slate-900">
                        Ubicación:
                      </span>{' '}
                      {lot.location}
                    </p>
                  </div>

                  <a
                    href="https://wa.me/5493464564564"
                    target="_blank"
                    className="inline-block mt-8 bg-red-700 hover:bg-red-800 transition text-white px-6 py-4 rounded-2xl font-semibold"
                  >
                    Consultar lote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-slate-950 text-white py-28 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1600&auto=format&fit=crop"
            alt="Campo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.25em] text-red-500 text-sm mb-5 font-semibold">
            La Invencible
          </p>

          <h3 className="text-5xl font-black mb-8 leading-tight">
            Confianza, relaciones y profesionalismo en cada operación.
          </h3>

          <p className="text-slate-300 text-xl leading-relaxed max-w-4xl mx-auto">
            Construimos relaciones comerciales sólidas con productores,
            compradores y operadores del mercado ganadero argentino,
            priorizando transparencia, cumplimiento y seriedad en cada negocio.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-red-700 text-sm mb-4 font-semibold">
              Contacto
            </p>

            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight">
              Estamos listos para ayudarte en tu próximo negocio.
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Consultanos por compra y venta de hacienda, consignación,
              oportunidades comerciales y disponibilidad de lotes.
            </p>

            <div className="space-y-5 text-lg text-slate-700">
              <p>
                <span className="font-bold text-slate-900">WhatsApp:</span>{' '}
                +54 9 3464 564564
              </p>

              <p>
                <span className="font-bold text-slate-900">Instagram:</span>{' '}
                @lainvencibleng
              </p>

              <p>
                <span className="font-bold text-slate-900">Facebook:</span>{' '}
                La Invencible Negocios Ganaderos
              </p>

              <p>
                <span className="font-bold text-slate-900">Ubicación:</span>{' '}
                Casilda, Santa Fe
              </p>

              <p>
                <span className="font-bold text-slate-900">Dirección:</span>{' '}
                San Juan 2503, Piso 2 Oficina B
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-xl">
            <h4 className="text-3xl font-black text-slate-900 mb-8">
              Contacto rápido
            </h4>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-700"
              />

              <input
                type="text"
                placeholder="Teléfono"
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-700"
              />

              <textarea
                placeholder="Escribí tu consulta"
                rows={5}
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-700"
              />

              <button className="w-full bg-red-700 hover:bg-red-800 transition text-white py-4 rounded-2xl text-lg font-semibold shadow-lg">
                Enviar consulta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h5 className="font-black text-slate-900 tracking-tight text-xl">
                LA INVENCIBLE
              </h5>
              <p className="text-slate-500 text-sm uppercase tracking-wide">
                Negocios Ganaderos
              </p>
            </div>
          </div>

          <p className="text-slate-500 text-sm text-center lg:text-right">
            © 2026 La Invencible Negocios Ganaderos — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

