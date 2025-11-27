import type { StaticImageData } from 'next/image'
declare module '*.jpg' {
  const value: string | StaticImageData
  export default value
}
declare module '*.png' {
  const value: string | StaticImageData
  export default value
}
declare module '*.svg' {
  import * as React from 'react'
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default content
}
