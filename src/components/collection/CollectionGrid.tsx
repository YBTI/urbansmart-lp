import { ReactNode } from 'react'

interface CollectionGridProps {
  children: ReactNode
  className?: string
}

export default function CollectionGrid({ children, className = '' }: CollectionGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 ${className}`}>
      {children}
    </div>
  )
}
