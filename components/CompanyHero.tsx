export default function CompanyHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-24 pt-44">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A trusted logistics partner with over 15 years of experience, dedicated to delivering 
            excellence in transportation and supply chain solutions worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}
