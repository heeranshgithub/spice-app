export default function MetricsBanner() {
  const metrics = [
    { value: "+200M", label: "Lorem ipsum" },
    { value: "50K", label: "Lorem ipsum" },
    { value: "370k", label: "Lorem ipsum" },
    { value: "100+", label: "Lorem ipsum" },
  ]

  return (
    <div className="bg-gray-50 md:py-16 py-4 px-4 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Lorem Ipsum</h2>

        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
