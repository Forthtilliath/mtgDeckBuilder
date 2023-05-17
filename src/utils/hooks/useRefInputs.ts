import React, { LegacyRef } from 'react'
import { useRef } from 'react'

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

type TInput<T> = T extends HTMLInputElement
  ? HTMLInputElement
  : T extends HTMLTextAreaElement
  ? HTMLTextAreaElement
  : T extends HTMLSelectElement
  ? HTMLSelectElement
  : never

// On utilise un générique pour pouvoir convertir le tableau en union type, sinon on a un string
export function useRefInputs<T extends string>(inputs: ReadonlyArray<T>) {
  // Type correspondant à un objet ayant pour key les noms des inputs et en valeur, soit l'input, soit null
  type TInputs = Record<T, FormElement | null>

  // Génération de l'objet avec des valeurs null
  const initialState = inputs.reduce(
    (obj, input: T) => ({ ...obj, [input]: null }),
    {}
  ) as TInputs

  const inputsRef = useRef<TInputs>(initialState)

  // Setter pour affecter plus facilement les refs des inputs à notre objet ref
  const setRef =
    <TElement extends FormElement>(
      key: T
    ): React.RefCallback<TInput<TElement>> =>
    (ref: TInput<TElement>) => {
      if (inputs.includes(key)) inputsRef.current[key] = ref
    }

  // On retourne les inputs et le setter, de la même manière qu'un useState
  // Le `as const` permet de lier la valeur à l'index donné
  // C'est à dire, index 0 = inputsRef, index 1 = setRef
  return [inputsRef, setRef] as const
}
