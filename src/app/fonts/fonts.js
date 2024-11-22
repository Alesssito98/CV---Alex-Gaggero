import localFont from 'next/font/local'

export const britannic = localFont({
  src: [
    {
      path: './Britannic-Bold-Regular.woff',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-britannic',
  display: 'swap'
})

export const ebrima = localFont({
  src: [
    {
      path: './ebrima.woff',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-ebrima',
  display: 'swap'
})

