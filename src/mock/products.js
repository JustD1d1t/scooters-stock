import black from "@/assets/img/scooters/catalog/black.png";
import blueWhiteCustom from "@/assets/img/scooters/catalog/blue-white-custom.png";
import green2 from "@/assets/img/scooters/catalog/green-2.png";
import green from "@/assets/img/scooters/catalog/green.png";
import orange2 from "@/assets/img/scooters/catalog/orange-2.png";
import orange from "@/assets/img/scooters/catalog/orange.png";
import redIvory125cc from "@/assets/img/scooters/catalog/red-ivory-125cc.png";
import redWhite from "@/assets/img/scooters/catalog/red-white.png";
import RoyalAlloyGP200LCRed from "@/assets/img/scooters/catalog/Royal-Alloy-GP-200-LC-Red.png";
import UltraBlueIvory125cc from "@/assets/img/scooters/catalog/Ultra-Blue-Ivory-125cc.png";
import white2 from "@/assets/img/scooters/catalog/White-2.png";
import white from "@/assets/img/scooters/catalog/White.png";
export const products = [
  {
    name: "GT 50 AC",
    price: 3455.99,
    manufacturer: "Honda",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "50",
    wheelSize: "10",
    seats: "1",
    topSpeed: "30",
    id: 1,
    variants: [
      {
        variantId: 1,
        rating: 5,
        numberOfVotes: 10,
        color: "orange",
        image: orange,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae repellendus dolorum voluptate iure illo labore minus aut ducimus atque sapiente distinctio magni, vero doloremque error, ut dolorem odio eius iste omnis ab provident dignissimos culpa. Voluptate, magni iure possimus eius reiciendis accusantium pariatur itaque, ab ea natus quidem perspiciatis unde.",
        fastestDeliveryTime: "4-5 days",
        deliveryTime: {
          Asia: "4-5 days",
          Australia: "8-9 days",
          America: "9-11 days",
          Europe: "4-5 days",
        },
      },
      {
        variantId: 2,
        rating: 5,
        numberOfVotes: 15,
        color: "green",
        image: green,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus natus vero ab velit deserunt provident ullam placeat, nostrum minus dignissimos nam voluptatibus voluptatum minima repudiandae, fugiat exercitationem eveniet veritatis illum? Perspiciatis error nostrum quis. Fugiat.",
        fastestDeliveryTime: "1 week",
        deliveryTime: {
          Asia: "4-5 days",
          Australia: "8-9 days",
          America: "9-11 days",
          Europe: "4-5 days",
        },
      },
    ],
  },
  {
    name: "ARS 770S",
    price: 5499,
    manufacturer: "Forte",
    country: "China",
    powerType: "petrol",
    engineCapacity: "80",
    wheelSize: "10",
    seats: "1",
    topSpeed: "45",
    id: 2,
    variants: [
      {
        variantId: 3,
        rating: 5,
        numberOfVotes: 15,
        color: "black",
        image: black,
      },
      {
        variantId: 4,
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: redWhite,
      },
    ],
  },
  {
    name: "HY 888Y",
    price: 3799,
    manufacturer: "Moto Tech",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "100",
    wheelSize: "12",
    seats: "2",
    topSpeed: "35",
    id: 3,
    variants: [
      {
        variantId: 5,
        rating: 5,
        numberOfVotes: 15,
        color: "green",
        image: green2,
      },
      {
        variantId: 6,
        rating: 5,
        numberOfVotes: 15,
        color: "white",
        image: white,
      },
    ],
  },
  {
    name: "TG 300S LC",
    price: 3455.99,
    manufacturer: "Mustang",
    country: "China",
    powerType: "petrol",
    engineCapacity: "125",
    wheelSize: "12",
    seats: "2",
    topSpeed: "40",
    id: 4,
    variants: [
      {
        variantId: 7,
        rating: 5,
        numberOfVotes: 15,
        color: "white",
        image: white2,
      },
      {
        variantId: 8,
        rating: 5,
        numberOfVotes: 15,
        color: "orange",
        image: orange2,
      },
    ],
  },
  {
    name: "TG 125S LC",
    price: 9077,
    manufacturer: "Spark",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "150",
    wheelSize: "10",
    seats: "1",
    topSpeed: "50",
    id: 5,
    variants: [
      {
        variantId: 9,
        rating: 5,
        numberOfVotes: 15,
        color: "blue",
        image: blueWhiteCustom,
      },
      {
        variantId: 10,
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: redIvory125cc,
      },
    ],
  },
  {
    name: "GP 125 LC",
    price: 9899,
    manufacturer: "Suzuki",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "50",
    wheelSize: "12",
    seats: "2",
    topSpeed: "28",
    id: 6,
    variants: [
      {
        variantId: 11,
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: RoyalAlloyGP200LCRed,
      },
      {
        variantId: 12,
        rating: 5,
        numberOfVotes: 15,
        color: "blue",
        image: UltraBlueIvory125cc,
      },
    ],
  },
  {
    name: "GT 50 AC",
    price: 3455.99,
    manufacturer: "Viper",
    country: "China",
    powerType: "petrol",
    engineCapacity: "80",
    wheelSize: "10",
    seats: "2",
    topSpeed: "38",
    id: 7,
    variants: [
      {
        variantId: 13,
        rating: 5,
        numberOfVotes: 10,
        color: "orange",
        image: orange,
      },
      {
        variantId: 14,
        rating: 5,
        numberOfVotes: 15,
        color: "green",
        image: green,
      },
    ],
  },
  {
    name: "TG 300S LC",
    price: 3455.99,
    manufacturer: "Yamaha",
    country: "China",
    powerType: "electric",
    wheelSize: "10",
    seats: "2",
    topSpeed: "27",
    id: 10,
    variants: [
      {
        variantId: 19,
        rating: 5,
        numberOfVotes: 15,
        color: "white",
        image: white2,
      },
      {
        variantId: 20,
        rating: 5,
        numberOfVotes: 15,
        color: "orange",
        image: orange2,
      },
    ],
  },
  {
    name: "TG 125S LC",
    price: 9077,
    manufacturer: "Forte",
    country: "Japan",
    powerType: "electric",
    wheelSize: "12",
    seats: "2",
    topSpeed: "33",
    id: 11,
    variants: [
      {
        variantId: 21,
        rating: 5,
        numberOfVotes: 15,
        color: "blue",
        image: blueWhiteCustom,
      },
      {
        variantId: 22,
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: redIvory125cc,
      },
    ],
  },
  {
    name: "GP 125 LC",
    price: 9899,
    manufacturer: "Suzuki",
    country: "China",
    powerType: "electric",
    wheelSize: "10",
    seats: "1",
    topSpeed: "39",
    id: 12,
    variants: [
      {
        variantId: 23,
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: RoyalAlloyGP200LCRed,
      },
      {
        variantId: 24,
        rating: 5,
        numberOfVotes: 15,
        color: "blue",
        image: UltraBlueIvory125cc,
      },
    ],
  },
  {
    name: "ARS 770S",
    price: 5499,
    manufacturer: "Yiben",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "100",
    wheelSize: "12",
    seats: "2",
    topSpeed: "42",
    id: 8,
    variants: [
      {
        variantId: 15,
        rating: 5,
        numberOfVotes: 15,
        color: "black",
        image: black,
      },
      {
        variantId: 16,
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: redWhite,
      },
    ],
  },
];

const pageSize = 6;

export function getProductsData(offset, filters) {
  let productsToSend = [...products];
  if (filters && Object.keys(filters).length !== 0) {
    if (filters.manufacturer) {
      productsToSend = productsToSend.filter((product) =>
        filters.manufacturer.includes(product.manufacturer)
      );
    }
    if (filters.country) {
      productsToSend = productsToSend.filter((product) =>
        filters.country.includes(product.country)
      );
    }
    if (filters.powerType) {
      productsToSend = productsToSend.filter((product) =>
        filters.powerType.includes(product.powerType)
      );
    }
    if (filters.engineCapacity) {
      productsToSend = productsToSend.filter((product) =>
        filters.engineCapacity.includes(product.engineCapacity)
      );
    }
    if (filters.wheelSize) {
      productsToSend = productsToSend.filter((product) =>
        filters.wheelSize.includes(product.wheelSize)
      );
    }
    if (filters.seats) {
      productsToSend = productsToSend.filter((product) =>
        filters.seats.includes(product.seats)
      );
    }
  }

  let queryString = new URLSearchParams(filters).toString();
  let nextPageLink = queryString;
  let prevPageLink = queryString;
  if (!filters.offset) {
    if (offset) {
      nextPageLink += `&offset=${offset + pageSize}`;
      prevPageLink += `&offset=${offset - pageSize}`;
    } else {
      nextPageLink += `&offset=${pageSize}`;
    }
  }
  return {
    products: [...productsToSend].splice(offset, offset + pageSize),
    nextPageLink:
      offset + pageSize < productsToSend.length
        ? `/catalog?${nextPageLink}`
        : undefined,
    prevPageLink: offset === 0 ? undefined : `/catalog?${prevPageLink}`,
  };
}
