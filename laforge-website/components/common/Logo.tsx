import Image from 'next/image'

interface LogoProps {
  variant?: 'primary' | 'lettermark'
  version?: '1' | '2'
  width?: number
  height?: number
  className?: string
}

export default function Logo({
  variant = 'primary',
  version = '2',
  width = 120,
  height = 120,
  className = '',
}: LogoProps) {
  const logoFile = variant === 'primary'
    ? `logo-primary-${version}.svg`
    : `lettermark-${version}.svg`

  return (
    <Image
      src={`/${logoFile}`}
      alt="La Forge Basketball Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}
