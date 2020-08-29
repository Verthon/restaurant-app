import {COMPANY_DATA_TYPE} from '../../constants/companyData';

export type Props = {
  companyData: COMPANY_DATA_TYPE,
  setCompanyData: () => void | React.Dispatch<React.SetStateAction<COMPANY_DATA_TYPE>>
}