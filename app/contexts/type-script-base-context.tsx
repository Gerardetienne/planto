import { useCounterCustom } from "@/basecontext-type/ContextProvider"
import { useCounter } from "@uidotdev/usehooks"
import { ComponentType, FunctionComponent, MouseEvent, PropsWithChildren, ReactNode, forwardRef, useRef, useState } from "react"
// GUide => https://grafikart.fr/tutoriels/ts-react-types-2042
// On utiliser directement le hook context dans \src\basecontext-type , puis n'oublie pas de mettre d'encapsuler vos contenu import { CounterProvider } from '@/basecontext-type/ContextProvider'; dans App


  type Props3 = PropsWithChildren<{
    start?: number
    title?: ReactNode
    titleTag?:  keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren> // attendre un composant qui a des enfants => ComponentType<PropsWithChildren>
  }>

  //<HTMLButtonElement, Props3> ==> les elements attendu dans l'argument, utiliser pour typé le ref et le props, attention l'order est inverssé
  const Counter3 = forwardRef<HTMLButtonElement, Props3>(({start = 0, children, title="Gerard", titleTag:Title = 'h1'}, ref) => {

    //on recupere directement ici les valeurs
    const {n, incr} = useCounterCustom()

    return <div>
    <h2>{title}</h2>
    {children}

    <p>Numero : {n}</p>
    <button ref={ref} onClick={incr} className="bg-primary">Increment</button>

</div>
  })

  // donner un nom a notre composant pour que react puis l'identifiarer
  Counter3.displayName = "Counter3"


const MyApp = () => {
  const Title = ({children}: PropsWithChildren) =>{
    return <h1>{children}</h1>
  }
  
  return(
<Counter3 title={<strong>New title node</strong> } titleTag={Title}>
  <div>
    My typeScript base
  </div>
</Counter3>
  )
}
export default MyApp 