import { useState } from 'react';
import { COMPANY_DATA, COMPANY_DATA_TYPE } from '../../constants/companyData';

export const useCompanyData = () => {
  const [companyData, setCompanyData] = useState<COMPANY_DATA_TYPE>(COMPANY_DATA)
  return {
    companyData,
    setCompanyData
  }
};