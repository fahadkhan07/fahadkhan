import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function PageHeader({ title, subtitle, centered = true, className }: PageHeaderProps) {
  return (
    <section className="bg-navy-950 text-white py-20 lg:py-28">
      <div className={cn('section-container', className)}>
        <div className={cn(centered && 'text-center')}>
          <div className={cn('gold-rule mb-6', centered && 'mx-auto')} />
          <h1 className="heading-xl text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed text-balance mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
