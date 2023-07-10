const Images = [
  { image: require("../assets/Products/blue.png") },
  { image: require("../assets/Products/brown.png") },
  { image: require("../assets/Products/green.png") },
  { image: require("../assets/Products/red.png") },
];

export const markers = [
  {
    coordinate: {
      latitude: 0.375977,
      longitude: 32.636538,
    },
    title: "First Agent",
    description: "Arrival in 10 minutes",
    image: Images[0].image,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      latitude: 0.355877,
      longitude: 33.686538,
    },
    title: "Second Agent",
    description: "Arrival in 20 minutes",
    image: Images[1].image,
    rating: 4,
    reviews: 98,
  },
  {
    coordinate: {
      latitude: 0.325877,
      longitude: 33.666538,
    },
    title: "Third Agent",
    description: "Arrival in 20 minutes",
    image: Images[1].image,
    rating: 4,
    reviews: 98,
  },
  {
    coordinate: {
      latitude: 0.315877,
      longitude: 33.616538,
    },
    title: "Fourth Agent",
    description: "Arrival in 20 minutes",
    image: Images[1].image,
    rating: 4,
    reviews: 98,
  },
  {
    coordinate: {
      latitude: 0.305877,
      longitude: 33.656538,
    },
    title: "Fifth Agent",
    description: "Arrival in 20 minutes",
    image: Images[1].image,
    rating: 4,
    reviews: 98,
  },
];

export const mapStandardStyle = [
  {
    elementType: "Labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
