export default function LaInvencibleNG() {
  const lots = [
    {
      title: 'PROXIMAMENTE',
      category: 'Invernada',
      weight: '0 Kg',
      location: 'PROXIMAMENTE',
      image: '/images/angusinvernada.jpg', 
    },
    {
      title: 'PROXIMAMENTE',
      category: 'Terneros',
      weight: '0 Kg',
      location: 'PROXIMAMENTE',
      image: '/images/angusternero1.jpg',
    },
    {
      title: 'PROXIMAMENTE',
      category: 'Vaca Faena',
      weight: '0 Kg',
      location: 'PROXIMAMENTE',
      image: '/images/angusfaena.jpg',  
    },
  ]

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* HEADER */}
<header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="La Invencible"
className="w-16 h-16 object-cover rounded-full shadow-lg"
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

<div className="flex items-center gap-3">
  <a
    href="https://wa.me/5493464621366"
    target="_blank"
    rel="noopener noreferrer"
className="bg-[#25D366] hover:bg-[#1ebe5d] transition text-white px-5 py-3 rounded-2xl shadow-lg font-semibold tracking-wide"
  >
    WhatsApp
  </a>

  <a
    href="https://instagram.com/lainvencibleng"
    target="_blank"
    rel="noopener noreferrer"
className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 transition text-white px-5 py-3 rounded-2xl shadow-lg font-bold tracking-wide"
  >
    Instagram
  </a>

  <a
    href="https://facebook.com/lainvencibleng"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-2xl shadow-lg font-semibold"
  >
    Facebook
  </a>
</div>

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
              Negocios ganaderos con transparencia y seriedad.
            </h2>

            <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl">
              En La Invencible conectamos productores y compradores y propiciamos
              operaciones transparentes, ágiles y profesionales en el mercado
              ganadero argentino.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://wa.me/5493464621366"
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
              Soluciones comerciales para el sector ganadero.
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed">
              Operamos con productores, feedlots, frigoríficos y compradores brindando
              seguimiento personalizado, transparencia y rapidez en cada negocio.
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
                Selección especial.
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
                    href="https://wa.me/5493464621366"
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
{/* PROXIMOS REMATES */}
<section className="py-24 bg-slate-100">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.25em] text-red-700 text-sm mb-4 font-semibold">
        Eventos
      </p>

      <h3 className="text-5xl font-black text-slate-900">
        Próximos Remates
      </h3>
    </div>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* FERIA TOTORAS */}
      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200">
        <img
          src="/images/rematetotoras.png"
          alt="Remate 1"
          className="w-full h-72 object-contain"
        />

        <div className="p-8">
          <p className="text-red-700 font-bold mb-3">
            Martes 19/5 10 am.
          </p>

          <h4 className="text-3xl font-black text-slate-900 mb-3">
            Gordos y conserva.
          </h4>

          <p className="text-slate-600 text-lg">
            Totoras / Fisico y online.
          </p>
        </div>
      </div>

      {/* FERIA PROVIDENCIA */}
      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200">
        <img
          src="/images/remateprovidencia.png"
          alt="Remate 2"
          className="w-full h-72 object-contain"
        />

        <div className="p-8">
          <p className="text-red-700 font-bold mb-3">
            Miercoles 20/5 10 am.
          </p>

          <h4 className="text-3xl font-black text-slate-900 mb-3">
            Gordos, conserva e invernada.
          </h4>

          <p className="text-slate-600 text-lg">
            Providencia / Fisico y online.
          </p>
        </div>
      </div>

      {/* FERIA CAÑADA ROSQUIN */}
      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200">
        <img
          src="/images/rematecanadarosquin.png"
          alt="Remate 3"
          className="w-full h-72 object-contain"
        />

        <div className="p-8">
          <p className="text-red-700 font-bold mb-3">
            Jueves 21/5 10 am.
          </p>

          <h4 className="text-3xl font-black text-slate-900 mb-3">
           Gordos, conserva e invernada.
          </h4>

          <p className="text-slate-600 text-lg">
            Cañada Rosquin / Fisico y online.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* ABOUT */}
      <section className="bg-slate-950 text-white py-28 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/portada.jpg"
            alt="Campo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.25em] text-red-500 text-sm mb-5 font-semibold">
            La Invencible
          </p>

          <h3 className="text-5xl font-black mb-8 leading-tight">
            Confianza, transparencia y profesionalismo en cada operación.
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
                +5493464621366
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

  <div className="mb-8 flex flex-col items-center">
    <img
      src="/images/qr.png"
      alt="QR WhatsApp"
      className="w-40 h-40 object-contain rounded-2xl shadow-lg"
    />

    <img
      src="/images/whatsapp.png"
      alt="WhatsApp"
      className="w-44 mt-4 object-contain"
    />

    <p className="text-sm text-slate-500 mt-4 text-center">
      Escaneá el código para hablar por WhatsApp
    </p>
  </div>

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

  <a
    href="https://wa.me/5493464621366"
    target="_blank"
    className="block text-center w-full bg-red-700 hover:bg-red-800 transition text-white py-4 rounded-2xl text-lg font-semibold shadow-lg"
  >
    Enviar consulta
  </a>
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
className="w-16 h-16 object-cover rounded-full shadow-lg"
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

