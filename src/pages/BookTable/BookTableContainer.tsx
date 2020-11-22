/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useCallback } from 'react';

import {BookTable} from './BookTable';
import { useHistory } from 'react-router-dom';
import { BookingDataContext } from '../../context/bookingData/BookingDataContext';
import { loadLocalStorageState, isDateCurrent, transformLocalStorageData, saveLocalStorageState } from '../../utils/helpers';
import { REVIEW_BOOKING } from '../../constants/routes';
import { useCompanyData } from '../../hooks/useCompanyData/useCompanyData';

export const BookTableContainer = () => {
  const history = useHistory()
  const { companyData } = useCompanyData()
  const { hours, location, contact } = companyData
  const bookingData = useContext(BookingDataContext)

  const handleLocalStorageRead = useCallback((data: any) => {
    if(bookingData?.setBooking) {
      bookingData.setBooking(transformLocalStorageData(data.booking))
    }
  }, [])

  const handleBookingSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveLocalStorageState({ booking: bookingData?.booking })
    history.push({ pathname: REVIEW_BOOKING })
  }

  useEffect(() => {
    const data = loadLocalStorageState('booking')
    if (data && isDateCurrent(data.booking.date)) {
      handleLocalStorageRead(data)
    }
  }, [handleLocalStorageRead])

  if(bookingData?.handleBookingChange && bookingData.handleDateChange) {
    return (
      <BookTable bookingData={{...bookingData}} company={{hours, location, contact}} onSubmit={handleBookingSubmit} />
    )
  }
  
  return (
    <div></div>
  );
};