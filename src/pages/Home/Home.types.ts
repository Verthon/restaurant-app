export type Props = {
  company: {
    contact: {
      name: string,
      email: string,
      phone: string,
    },
    hours: {
      weekdays: {
        days: string,
        time: string,
      },
      weekend: {
        days: string,
        time: string,
      },
    },
    location: {
      address: string,
      city: string,
      code: string,
      country: string,
      fulladdress: string,
      province: string,
    }, 
  },
  dotState: {
    dotValue: number,
    setDotValue: React.Dispatch<React.SetStateAction<number>>,
  },
  slidesState: {
    slides: JSX.Element[],
    setSlides: React.Dispatch<React.SetStateAction<JSX.Element[]>>
  }

}