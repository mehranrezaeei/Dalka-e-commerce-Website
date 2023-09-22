import picMen1_1 from "../images/productsImage/Men/pic-man-1-1.jpg";
import picMen1_2 from "../images/productsImage/Men/pic-man-1-2.jpg";
import picMen1_3 from "../images/productsImage/Men/pic-man-1-3.jpg";

import picMen2_1 from "../images/productsImage/Men/pic-man-2-1.jpg";
import picMen2_2 from "../images/productsImage/Men/pic-man-2-2.jpg";
import picMen2_3 from "../images/productsImage/Men/pic-man-2-3.jpg";

import picMen3_1 from "../images/productsImage/Men/pic-man-3-1.jpg";
import picMen3_2 from "../images/productsImage/Men/pic-man-3-2.jpg";
import picMen3_3 from "../images/productsImage/Men/pic-man-3-3.jpg";

import picMen4_1 from "../images/productsImage/Men/pic-man-4-1.jpg";
import picMen4_2 from "../images/productsImage/Men/pic-man-4-2.jpg";
import picMen4_3 from "../images/productsImage/Men/pic-man-4-3.jpg";

import picMen5_1 from "../images/productsImage/Men/pic-man-5-1.jpg";
import picMen5_2 from "../images/productsImage/Men/pic-man-5-2.jpg";
import picMen5_3 from "../images/productsImage/Men/pic-man-5-3.jpg";

import picMen6_1 from "../images/productsImage/Men/pic-man-6-1.jpg";
import picMen6_2 from "../images/productsImage/Men/pic-man-6-2.jpg";
import picMen6_3 from "../images/productsImage/Men/pic-man-6-3.jpg";

import picMen7_1 from "../images/productsImage/Men/pic-man-7-1.jpg";
import picMen7_2 from "../images/productsImage/Men/pic-man-7-2.jpg";
import picMen7_3 from "../images/productsImage/Men/pic-man-7-3.jpg";

import picMen8_1 from "../images/productsImage/Men/pic-man-8-1.jpg";
import picMen8_2 from "../images/productsImage/Men/pic-man-8-2.jpg";
import picMen8_3 from "../images/productsImage/Men/pic-man-8-3.jpg";

export const footerData = [
  ["Services", "Men", "Women", "Kids"],
  ["About", "About Us", "Contact", "Sign in"],
  ["Legal", "Terms & Conditions", "Privacy Policy", "Terms of use"],
];

export const ProductsData = {
  Man: [
    {
      id: 1,
      name: "DENIM JACKET WITH FAUX SHEARLING",
      price: 65.95,
      category: "jacket",
      productRating: 4.5,
      colors: ["red-800", "blue-800", "white"],
      productSize: ["2xl", "xl", "lg", "m"],
      productImages: {
        main: picMen1_1,
        otherImages: [picMen1_2, picMen1_3],
      },
      description:
        "Denim jacket lined with faux shearling. Lapel collar and long sleeves with buttoned cuffs. Flap pockets on the chest and hip welt pockets. Faded effect. Button-up front.",
    },
    {
      id: 2,
      name: "HOODED BOMBER JACKET",
      price: 69.95,
      category: "jacket",
      productRating: 4.3,
      colors: ["black", "blue-800", "green-800"],
      productSize: ["2xl", "sm", "lg", "m"],
      productImages: {
        main: picMen2_1,
        otherImages: [picMen2_2, picMen2_3],
      },
      description:
        "Varsity jacket with a hood in the collar. Long sleeves with elasticated cuffs. Jetted pockets at the hip and inside pocket detail. Contrast patches and embroidery on the front and back. Ribbed trims. Snap-button front.",
    },
    {
      id: 3,
      name: "FAUX LEATHER JACKET",
      price: 65.95,
      category: "jacket",
      productRating: 4,
      colors: ["black", "blue-800", "green-800"],
      productSize: ["2xl", "sm", "lg", "m"],
      productImages: {
        main: picMen3_1,
        otherImages: [picMen3_2, picMen3_3],
      },
      description:
        "Jacket made of faux leather fabric. Lapel collar with snap-button details. Long sleeves with zip cuffs. Front zip pockets on the chest and hip. Inside pocket. Asymmetric metal zip-up front.",
    },
    {
      id: 4,
      name: "SWEATSHIRT WITH ZIP COLLAR AND SLOGANS",
      price: 45.95,
      category: "sweatshirt",
      productRating: 3.9,
      colors: ["black", "blue-800", "gray-800"],
      productSize: ["2xl", "sm", "lg", "m"],
      productImages: {
        main: picMen5_1,
        otherImages: [picMen5_2, picMen5_3],
      },
      description:
        "Loose-fitting faded sweatshirt with a high neck and front zip fastening. Long sleeves. Contrast prints on the front and back. Ribbed trims.",
    },
    {
      id: 5,
      name: "SWEATSHIRT WITH CONTRAST EMBROIDERY",
      price: 39.95,
      category: "sweatshirt",
      productRating: 4.2,
      colors: ["black", "blue-800", "green-800"],
      productSize: ["2xl", "sm", "lg", "m"],
      productImages: {
        main: picMen4_1,
        otherImages: [picMen4_2, picMen4_3],
      },
      description:
        "Round neck sweatshirt with long sleeves. Contrast embroidery on the front and back. Ribbed trims.",
    },
    {
      id: 6,
      name: "SLIM FIT JEANS",
      price: 29.95,
      category: "jeans",
      productRating: 4.6,
      colors: ["black", "blue-700"],
      productSize: ["2xl", "sm", "lg", "m"],
      productImages: {
        main: picMen6_1,
        otherImages: [picMen6_2, picMen6_3],
      },
      description:
        "Slim fit jeans. Five pockets. Faded effect. Front zip fly and button fastening.",
    },
    {
      id: 7,
      name: "RIPPED SKINNY JEANS",
      price: 45.95,
      category: "jeans",
      productRating: 4.6,
      colors: ["black", "blue-700"],
      productSize: ["2xl", "sm", "lg", "m"],
      productImages: {
        main: picMen7_1,
        otherImages: [picMen7_2, picMen7_3],
      },
      description:
        "Skinny fit jeans. Five pockets. Faded and ripped effect on the legs. Front zip fly and button fastening.",
    },
    {
      id: 8,
      name: "SLOGAN PRINT T-SHIRT",
      price: 22.95,
      category: "t-shirt",
      productRating: 4.6,
      colors: ["black", "blue-800", "red-800"],
      productSize: ["2xl", "sm", "lg", "m"],
      productImages: {
        main: picMen8_1,
        otherImages: [picMen8_2, picMen8_3],
      },
      description:
        "T-shirt with a round neck and short sleeves. Contrast slogan print on the print.",
    },
  ],
};
