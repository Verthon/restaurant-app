import React, { useReducer, useState } from 'react';

import Admin from './Admin';
import { apiReducer, apiInitialState } from '../../reducers/apiReducer';

export const AdminContainer = () => {
  const [state, dispatch] = useReducer(apiReducer, apiInitialState)
  const [bookingDetail, setBookingDetail] = useState<any>({ id: '', data: {} })
  const [bookings, setBookings] = useState([])
  const [showModal, setShowModal] = useState(false)
  return (
    <Admin />
  );
};