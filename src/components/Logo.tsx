import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 170 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <g  className={invert ? 'fill-white' : 'fill-neutral-950'}>
      <path d="M56.1,24.8c-0.7,0.3-2.2,0.7-4.2,0.7c-5.6,0-8.5-3.5-8.5-8.1c0-5.5,3.9-8.6,8.8-8.6c1.9,0,3.3,0.4,4,0.7l-0.7,2.9
		c-0.7-0.3-1.8-0.6-3.1-0.6c-2.9,0-5.2,1.8-5.2,5.4c0,3.2,1.9,5.3,5.2,5.3c1.1,0,2.3-0.2,3-0.5L56.1,24.8z"/>
	<path d="M69.5,19.2c0,4.3-3,6.3-6.2,6.3c-3.4,0-6.1-2.3-6.1-6c0-3.8,2.5-6.2,6.3-6.2C67.1,13.2,69.5,15.7,69.5,19.2z M61,19.4
		c0,2,0.8,3.5,2.4,3.5c1.4,0,2.3-1.4,2.3-3.5c0-1.8-0.7-3.5-2.3-3.5C61.7,15.8,61,17.6,61,19.4z"/>
	<path d="M83.2,8.2v13.5c0,1.3,0,2.7,0.1,3.5h-3.2l-0.2-1.7h0c-0.7,1.3-2.2,2-3.7,2c-2.8,0-5-2.4-5-6c0-4,2.4-6.2,5.3-6.2
		c1.4,0,2.6,0.5,3.1,1.3h0V8.2H83.2z M79.6,18.5c0-0.2,0-0.5,0-0.6c-0.2-1-1-1.8-2.1-1.8c-1.7,0-2.5,1.5-2.5,3.3c0,2,1,3.2,2.5,3.2
		c1.1,0,1.9-0.7,2.1-1.8c0.1-0.3,0.1-0.5,0.1-0.8V18.5z"/>
	<path d="M89,20.5c0.1,1.5,1.6,2.2,3.3,2.2c1.2,0,2.3-0.2,3.2-0.5l0.5,2.5c-1.2,0.5-2.7,0.7-4.2,0.7c-4,0-6.3-2.3-6.3-6
		c0-3,1.8-6.3,5.9-6.3c3.8,0,5.2,3,5.2,5.9c0,0.6-0.1,1.2-0.1,1.4H89z M93.3,18c0-0.9-0.4-2.4-2.1-2.4c-1.5,0-2.2,1.4-2.3,2.4H93.3z
		"/>
	<path d="M99,9.1h9.9v3h-6.2v3.7h5.8v3h-5.8v6.5H99V9.1z"/>
	<path d="M114.8,10.2c0,1-0.8,1.8-2,1.8c-1.2,0-1.9-0.8-1.9-1.8c0-1.1,0.7-1.8,1.9-1.8C114,8.4,114.7,9.2,114.8,10.2z M111,25.2
		V13.5h3.6v11.7H111z"/>
	<path d="M120.4,20.5c0.1,1.5,1.6,2.2,3.3,2.2c1.2,0,2.3-0.2,3.2-0.5l0.5,2.5c-1.2,0.5-2.7,0.7-4.2,0.7c-4,0-6.3-2.3-6.3-6
		c0-3,1.8-6.3,5.9-6.3c3.8,0,5.2,3,5.2,5.9c0,0.6-0.1,1.2-0.1,1.4H120.4z M124.7,18c0-0.9-0.4-2.4-2.1-2.4c-1.5,0-2.2,1.4-2.3,2.4
		H124.7z"/>
	<path d="M130.2,8.2h3.6v17h-3.6V8.2z"/>
	<path d="M148.2,8.2v13.5c0,1.3,0,2.7,0.1,3.5h-3.2l-0.2-1.7h0c-0.7,1.3-2.2,2-3.7,2c-2.8,0-5-2.4-5-6c0-4,2.4-6.2,5.3-6.2
		c1.4,0,2.6,0.5,3.1,1.3h0V8.2H148.2z M144.6,18.5c0-0.2,0-0.5,0-0.6c-0.2-1-1-1.8-2.1-1.8c-1.7,0-2.5,1.5-2.5,3.3
		c0,2,1,3.2,2.5,3.2c1.1,0,1.9-0.7,2.1-1.8c0.1-0.3,0.1-0.5,0.1-0.8V18.5z"/>
</g>
    </svg>
  )
}
