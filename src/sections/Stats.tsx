import { useCounter } from '../hooks/useCounter'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { STATS } from '../data/content'

export function Stats() {
  const containerRef = useScrollReveal()

  return (
    <section id="stats" className="py-32 px-8 md:px-16 bg-primary border-b border-border-primary">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat) => {
            const { ref, value } = useCounter(stat.target || 0, 2)
            
            return (
              <div key={stat.id} className="flex flex-col border-l border-border-primary pl-8 relative group">
                <div className="absolute top-0 left-0 w-[1px] h-0 bg-accent-gold transition-all duration-1000 group-hover:h-full" />
                
                <div className="text-5xl md:text-6xl font-serif text-accent-gold mb-4">
                  {stat.display ? stat.display : (
                    <>
                      <span ref={ref}>{value}</span>
                      {stat.suffix}
                    </>
                  )}
                </div>
                
                <h3 className="text-text-primary text-lg tracking-wider uppercase mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-text-secondary text-sm">
                  {stat.sub}
                </p>
              </div>
            )
          })}
        </div>
        
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-serif text-text-primary leading-relaxed italic">
            "The Dubai Mall is not a shopping center. It is a city within a city, a global crossroads where commerce meets culture."
          </p>
        </div>
      </div>
    </section>
  )
}
