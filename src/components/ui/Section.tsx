import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}

export default function Section({
  children,
  className,
  id,
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={twMerge('py-20 md:py-32 overflow-hidden', className)}>
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-6 md:px-12 max-w-7xl'}>
        {children}
      </div>
    </section>
  )
}
