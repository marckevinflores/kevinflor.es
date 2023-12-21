import tailwindConfig from '../../../tailwind.config';


export function TailwindSetSafeList(className: string[]){
  tailwindConfig.safelist = [...tailwindConfig.safelist, ...className]
}
