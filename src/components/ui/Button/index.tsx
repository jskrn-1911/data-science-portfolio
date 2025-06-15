'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'simple' | 'primary'
  className?: string
  target?: '_blank' | '_self'
}

export default function Button({
  href,
  children,
  variant = 'simple',
  className,
  target = '_self',
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        'inline-flex items-center justify-center px-6 py-2 rounded-full transition-all text-sm font-medium',
        {
          'border border-white text-white bg-transparent hover:bg-white hover:text-black': variant === 'simple',
          'bg-black text-white hover:bg-gray-800': variant === 'primary',
        },
        className
      )}
    >
      {children}
    </Link>
  )
}
