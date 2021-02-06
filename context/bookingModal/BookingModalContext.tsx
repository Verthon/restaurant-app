import { createContext } from 'react';

import { Props } from './BookingModalContext.types';

export const BookingModalContext = createContext<Props>({showModal: false, toggleModal: () => {}});