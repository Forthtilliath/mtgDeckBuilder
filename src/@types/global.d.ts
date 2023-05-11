import React from 'react'

declare global {
  // Le seul intéret c'est qu'on a plus besoin d'importer React pour l'utiliser
  /**
   * @example
   * // Exemple sans props
   * export function MyComponent({children}: PropsWithChildren) {
   *   // ...
   * }
   *
   * // Exemple avec des props
   * type Props = {
   *   active: boolean;
   * }
   * export function MyComponent({children}: PropsWithChildren<Props>) {
   *   // ...
   * }
   */
  type PropsWithChildren = React.PropsWithChildren

  /**
   * Récupère le type de retour d'une fonction qui retourne une promesse
   * @example
   * type Data = PromiseReturnType<typeof getCards>
   */
  type PromiseReturnType<T> = Awaited<ReturnType<T>>


  type Setter<T> = React.Dispatch<React.SetStateAction<T>>;
}
