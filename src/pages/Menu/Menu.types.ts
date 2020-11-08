import { ApolloQueryResult } from "@apollo/client/core/types"
import { ApolloError } from "@apollo/client/errors"

export type Category = {
  id: number,
  name: string
}

export type Product = {
  id: number,
  name: string,
  price: number,
  description: string,
  category_id: number
  category: Category
}

export type Props = {
  isLoading: boolean,
  appetizers: Product[],
  desserts: Product[],
  mains: Product[],
  salads: Product[],
  error: ApolloError | undefined
  refetch: (variables?: Partial<Record<string, any>> | undefined) => Promise<ApolloQueryResult<any>>
}

export type Menu = Product[]