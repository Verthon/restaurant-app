import { createContext } from "react"
import { COMPANY_DATA_TYPE } from "../../constants/companyData"
import { State } from "./CompanyDataContext.types"

export const CompanyDataStateContext = createContext<State | undefined>(undefined)
export const CompanyDataDispatchContext = createContext<
  React.Dispatch<React.SetStateAction<COMPANY_DATA_TYPE>> | undefined
>(undefined)
