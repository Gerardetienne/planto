import { ComponentType, FunctionComponent, MouseEvent, PropsWithChildren, ReactNode, forwardRef, useRef, useState } from "react"
// GUide => https://grafikart.fr/tutoriels/ts-react-types-2042

// --------------------------FunctionComponent--------------------------
type Props = {
    start: number
  }

  //FunctionComponent, ce type peut être intéréssant pour des retour de composant HTML (composant react)
  // Important on n'aura plus besoin de specifier {start}: Props, lorsqu'on utilise le type Utilitaire FunctionComponent<Props> => le retour doit etre un retour type JSX

  const Counter: FunctionComponent<Props> = ({start}) => {
    return <div>Hello World</div>
  } 


  // il y a une erreur car il ne return pas de jSX
  //@ts-ignore
  const CounterTest: FunctionComponent<Props> = ({start}) => {
    return new Date()
  } 



  // ------------------------PropsWithChildren----------------------------
  //Si votre composant peut recevoir des enfants, alors vous pouvez utiliser le type PropsWithChildren

  type Props1 = PropsWithChildren<{
    start?: number
  }>

const Counter1 = ({start = 0, children}: Props1) => {
    return <div>
        <h2>Slaut</h2>
        {children}

        <p>Numero : {start}</p>
    </div>
}


  // ------------------------useRef----------------------------

  type Props2 = PropsWithChildren<{
    start?: number
  }>

const Counter2 = ({start = 0, children}: Props2) => {

    const [n, setN] = useState<number>(start)

    const Incre = () => setN(v => v + 1)

    // il faut specifier un valeur null pardefaut ,important il est utiliser uniquement pour le Button Sinon ça va renvoyer des erreur
    const ref = useRef<HTMLButtonElement>(null)

    return <div>
        <h2>Slaut</h2>
        {children}

        <p>Numero : {n}</p>


  <button ref={ref} onClick={Incre} className="bg-primary">Increment</button>
  
  {/* pour le onClick de react ,on utilise le mouseEvent export fucntion click  */}
  <button ref={ref} onClick={ClickHere} className="bg-secondary">Increment</button>

    </div>
}

const ClickHere = (e: MouseEvent) => {
   e.preventDefault()
   return alert('ok')
}




  // ------------------------ForwardseRef----------------------------
  // passer le ref vers un argument d'un function 
  // ReactNode, permet de représenter un noeud (un morceau de JSX, une chaine, null ou undefined)
// JSX.IntrinsicElements est un type interne qui permet de représenter tous les éléments HTML acceptés par React. On peut par exemple utiliser keyof JSX.IntrinsicElements si on veut qu'une props accepte un tag HTML (h, a, p, b, strong etc ..).
// ComponentType<Props> représente un composant (une fonction ou une class) qui pourra être utilisé comme élément JSX. On peut ajouter un générique pour définir les props qui sont attendues


  type Props3 = PropsWithChildren<{
    start?: number
    title?: ReactNode
    titleTag?:  keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren> // attendre un composant qui a des enfants => ComponentType<PropsWithChildren>
  }>

  //<HTMLButtonElement, Props3> ==> les elements attendu dans l'argument, utiliser pour typé le ref et le props, attention l'order est inverssé

  export const Counter3 = forwardRef<HTMLButtonElement, Props3>(({start = 0, children, title="Gerard", titleTag:Title = 'h1'}, ref) => {
    const [n, setN] = useState<number>(start)
    const Incre = () => setN(v => v + 1)
    
    return <div>
    <h2>{title}</h2>
    {children}

    <p>Numero : {n}</p>
<button ref={ref} onClick={Incre} className="bg-primary">Increment</button>

{/* pour le onClick de react ,on utilise le mouseEvent export fucntion click  */}
<button ref={ref} onClick={ClickHere} className="bg-secondary">Increment</button>

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