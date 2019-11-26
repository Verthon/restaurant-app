import { FETCH_MENU } from '../actions'

const initialState = {
  error: null,
  loading: true,
  appetizers: [
    {
      description: 'Refreshing traditional cucumber and garlic youghurt dip',
      name: 'Tzatziki',
      price: 390
    },
    {
      description: 'Pork, beef, mint, red wine, oregano, garic, onion',
      name: 'Keftedakia',
      price: 599
    },
    {
      description: 'carrots, yellow split peas, onion, garlic, pepper, cummin, mint',
      name: 'Favokeftedes',
      price: 600
    }
  ],
  desserts: [
    {
      description: 'Egg shaped dessert made from olive oil, honey, cognac, cinnamon, orange',
      name: 'Melomakarono',
      price: 500
    },
    {
      description: 'Custard pie with cream, honey, vanilla, cinammon, butter',
      name: 'Galaktoboureko',
      price: 690
    }
  ],
  salads: [
    {
      description: 'iceberg lettuce, pitted Kalamata olives, onion, roasted peppers',
      name: 'Pita special',
      price: 399
    },
    {
      description: 'tomato, sliced ​​cucumber, green pepper, sliced red onion, Kalamata olives and of course feta cheese',
      name: 'Greek salad',
      price: 500
    }
  ],
  maindishes: [
    {
      description: 'Layers of cooked aubergine slices alternating with a mixture of minced meat, in a tomato sauce, and covered with a thick béchamel sauce',
      name: 'Moussaka',
      price: 899
    },
    {
      description: 'Fresh lamb meat, rosemary, mustard, lemon, garlic, honey',
      name: 'Roasted Lamb',
      price: 799
    },
    {
      description: 'Chickpeas, lemon, olive, red onions, oregano, olive, bay leafs',
      name: 'Chickpea soup',
      price: 899
    },
    {
      description: 'Octopus, wine vinegar, shallots, garlic, red onions, olive oil, red wine, tomatoes',
      name: 'Octopus stifado',
      price: 1600
    }
  ]
}

export const fetchMenu = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
