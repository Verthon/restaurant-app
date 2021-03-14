import { COMPANY_DATA_TYPE } from "../../constants/companyData"

export type State = {
  companyData: COMPANY_DATA_TYPE
}

export type Props = {
  children: React.ReactNode
}
