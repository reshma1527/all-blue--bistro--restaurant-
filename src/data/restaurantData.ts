export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'indian' | 'chinese' | 'italian';
  isVeg: boolean;
  isSpecial: boolean;
  spiceLevel: 1 | 2 | 3;
  description: string;
  pairing: string;
  originSea: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  imageUrl?: string;
  notes?: string;
}

export interface BountyReview {
  id: string;
  title: string;
  quote: string;
  character: string;
  bounty: string;
  stars: number;
  badgeColor: 'primary' | 'secondary' | 'tertiary' | 'gold';
}

export interface GalleonShowcase {
  id: string;
  title: string;
  routeTitle: string;
  description: string;
  accent: 'primary' | 'secondary' | 'tertiary';
  icon: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
}

export const GALLEON_SHOWCASES: GalleonShowcase[] = [
  {
    id: 'indian-feasts',
    title: 'Indian Maritime Feasts',
    routeTitle: 'Spice Route of Alabasta',
    description: 'Aromatic cloves, black cardamom, and Kashmiri saffron simmered over slow embers. Uncompromising royal indulgence.',
    accent: 'primary',
    icon: 'local_fire_department',
    tags: ['Shahi Biryani', 'Butter Chicken', 'Paneer Tikka', 'Masala Dosa'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxsbd--Z0hNWn08bSzfsNzL2AMXAXn5rK-s8lwed7J2fc0K6LgZYs_Pnntydvsgz4qe6G2gscd4LPonYX7eIvjO3S7zNLzLswrfQ1rJg8WT35BrGY1SjTN7gxSvJOHMnQXEzj0ioruhvIgxge67aDqD0hrEiW8mhvP552b5voFZqUpd2_8hzv2-7KQOnsXkKHp2kmtooDDqqqpVsLSniANoigcQncSPLZC8ujshf5aAX06WnvCbVb7zQ',
    imageAlt: 'Royal North Indian feast with saffron shahi dum biryani and butter chicken curry in copper vessels',
  },
  {
    id: 'chinese-dragon',
    title: 'Chinese Dragon Stir',
    routeTitle: 'Wok Masters of Wano',
    description: 'Seared in raging iron woks to seal breath-of-the-dragon wok-hei. Fiery Schezwan peppers, scallions, and crisp bamboo shoots.',
    accent: 'tertiary',
    icon: 'whatshot',
    tags: ['Hakka Noodles', 'Yang Chow Rice', 'Veg Manchurian', 'Spring Rolls'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEM-ZTnxY6LExyyM5rP2GLQA9RgR7buz2IkSIqXoJeqhP-KWQ6yVNeAuocA1bJdPJo_rT7QwworP0Ww9ogmUFjIYSt23yFg0Cn1CHn7BhuLpUe69mEE_Z4GsY2llDBnnGQF89DxtG3cz7sCf0nEaoLQ_mx0FoJ3Y7P-XKwjuWzNj74kq_lkUMJbIMQmyAuQeT4nPrikaUTbbT97XTn--NvEVziOMNb-kONiv4ih7E0UCLSO1BoT2CK5A',
    imageAlt: 'Vibrant Chinese wok stir fry dish served on a rustic pirate galleon dining table with rising steam',
  },
  {
    id: 'italian-classics',
    title: 'Italian Sea Classics',
    routeTitle: 'Water Seven Artisans',
    description: 'Stone hearth woodfired pies, freshly rolled tagliatelle, and black truffle emulsions crafted with olive oils from sun-kissed islands.',
    accent: 'secondary',
    icon: 'dinner_dining',
    tags: ['Woodfired Pizza', 'Truffle Pasta', 'Lasagna al Forno', 'Garlic Baguette'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXrM-94er6JFXRXn9gLTFbMtw6T3DC6Mt73akRd37NHuhe0lAp_dIF9L3XfVDLF7fGwxSahF5F7cAPtG9Ahu_yEzXQrAcHFNAFDlejp0woYTBXsd6A2ntCjRYcEfBcLT7hgMqpr2NdGe1m8z3gyOrtvtdrAzIs7BFM_YX1KTYr-zDCRI_j3kRFUUl-9AAUmEU4BIDzybMcvbgSVDQ6OY5y1vK1d-6gNRiyVf7_SJEkJqi0GZrFqB_H9w',
    imageAlt: 'Artisanal Italian woodfired pizza with charred crust alongside decadent seafood truffle fettuccine',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'biryani-01',
    name: 'Grand Fleet Royal Biryani',
    price: 380,
    category: 'indian',
    isVeg: false,
    isSpecial: true,
    spiceLevel: 2,
    description: 'Slow-cooked in sealed earthen clay with aged Basmati, rosewater, toasted saffron threads, and tender morsels.',
    pairing: 'Grand Line Spiced Mint Raita & Saffron Sharbat',
    originSea: 'Spice Waters of Alabasta',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_mVU7qcLG_vm7L8ZJ5eto2AykGB-ga-D4ocNVaGERrVP0kZ1YbwDiWIlH_v8p0GzlrKD8XzF8wU62JbIvwQg4TOo0Bzt45irM8Rktv95tiL4pTttGCzx9K_xkSfnpawfW6_Uzfseg1gxr27RKieX7coQGQRcZ08KsrofCmK2M-UJzmcwLeZQidsKry59eIX91Ok3DwivDu0d2c3woFyrjUgelQifFtGzmkbY6DlUzs8S506CIBBQHZA',
    imageAlt: 'Steaming copper handi filled with fragrant saffron dum biryani, spiced caramelised onions and mint',
  },
  {
    id: 'butter-chicken-02',
    name: "Sanji's Butter Chicken Feast",
    price: 420,
    category: 'indian',
    isVeg: false,
    isSpecial: true,
    spiceLevel: 1,
    description: 'Chargrilled chicken steeped in silky plum-tomato silk gravy with fenugreek leaves and farm butter.',
    pairing: 'Smoked Garlic Butter Naan & Cardamom Lassi',
    originSea: 'East Blue Baratie Secret',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx4NQf4040H_5eLvKSR1aEyRi0apPviBFZhoihsqsI-18Oe46IK6I6H5RXtIIofhanBwmjaRZnrlRll34ofBD9bFx5DpBwxBhfurnHE_2Pi9fDuqJ--3xoAP_njapyVkEJA5A1jXI9vTeO_hRyZmvY1kynB91CEZrAGBDQwRafIV3pHSDr5zFuNv6tY00RlPqrXbIoLaXZJTApLHMHC-YDG0u1siLDxoIO69dewabi-vyWn9Ae_NGTqA',
    imageAlt: 'Rich orange tandoori chicken tikka simmered in creamy makhani gravy with butter swirls',
  },
  {
    id: 'paneer-tikka-03',
    name: 'East Blue Paneer Tikka',
    price: 320,
    category: 'indian',
    isVeg: true,
    isSpecial: false,
    spiceLevel: 2,
    description: 'Hand-pressed cottage cheese cubes cured in mustard oil, ajwain spices, and smoked over charcoal coals.',
    pairing: 'Tangy Cilantro Chutney & Pickled Shallots',
    originSea: 'Alabasta Desert Oasis',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWaNqjJjBqCVKych7bXaISbeS1WE0oLhS0GZ9qyX47nZK7tvKPLhskPdRW_R34WAekmLfru1Os91lZIa_rMQ3RzW5AWLcGiXYXM_28CX_JUNeEz_e7SONo3N97ZhCaWMm4snkdftYjHFzcL7lktbNgBVxmCzi04aFyvBcSjyK0F_V4Oju7hRXM5fvXiF2UhgGvKRG2NNCPQXF4zNH-xtKD7Qv7Du58iulreRVJgrk4wTJzyeBYyqF01w',
    imageAlt: 'Skewers of chargrilled cottage cheese paneer cubes coated in vibrant spiced red tikka marinade',
  },
  {
    id: 'hakka-04',
    name: 'Red Leg Golden Hakka',
    price: 280,
    category: 'chinese',
    isVeg: true,
    isSpecial: false,
    spiceLevel: 1,
    description: 'Freshly pulled wheat noodles flashed over 800° dragon woks with crisp shredded greens and dark garlic soya.',
    pairing: 'Dragon Jasmine Tea & Chili Garlic Crunch',
    originSea: 'Wano Archipelago',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfYkVlk1XKA7x0AmkuwgHf-a85Abq_E48ND55PbRhjHB901dhpr3jO8LOJamh9kD5y2jlzcjrpIDDWAVpWt13WZScYQhJ1l-WTM9tFzwXS_oMQDsMjjxa7cB0_x9Z7xw5zR5uGxqiuqvRkSx78ABYe0T9u-45uFl1oiltPkUOQpZtZdIm9oQEceujgZi5MunTP2657zF0rCtBxKEfLXLdS9l4jxyXtbL2qt4g6oNi7F8SnUk00ex8rZQ',
    imageAlt: 'Steaming wok tossed thin noodles with julienned colorful vegetables and scallions in ceramic bowl',
  },
  {
    id: 'fried-rice-05',
    name: 'Dragon Wok Schezwan Rice',
    price: 290,
    category: 'chinese',
    isVeg: false,
    isSpecial: true,
    spiceLevel: 3,
    description: 'Spicy Wano-style pepper oil, crunchy baby corn, egg threads, and succulent sea morsels stir-fried to perfection.',
    pairing: 'Crispy Kimchi Radish & Plum Nectar',
    originSea: 'Wano Dragon Falls',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1MCncsx7PlrelwruqHcAngR8XIEPkjQwsTInmrKp_BJKBRKSj257FI8d8Fy8FA1IENBaweL4GE-NzrqKE2zBsaIFOYlyGfT7weS4RskL4Cwcu7lWS-sbb-jVPZxEc5YhvAqvaep72Y4TcNsQ9zkP-xz_N10iO2RDtGE_qofPAo2WUbRRf7IQoohPJlPNVHNCEknq6cLVQ2pqtjAiUjQzR5t225eTzMMFvwxY_QrBh52rwD5CqAqf6gA',
    imageAlt: 'Aromatic spicy red Schezwan fried rice loaded with sea morsels in heavy black iron wok',
  },
  {
    id: 'spring-rolls-06',
    name: 'Crispy Treasure Spring Rolls',
    price: 220,
    category: 'chinese',
    isVeg: true,
    isSpecial: false,
    spiceLevel: 1,
    description: 'Translucent golden wrapper loaded with spiced water chestnuts, glass noodles, and sweet chili nectar.',
    pairing: 'Sweet & Sour Plum Glaze',
    originSea: 'East Blue Harbor Ports',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGanRUda_oA863cWr4Y7EnirMMWfMICA7-pUZIeNIUEmGxRgMNZuRy1SdKe-yzQX9w7Ve4jH_Z6IqXhU5btHwurrzWt2OtWAiwmr_PYv0VQhG52REuvlEFzNZfqGv50LXiMdNhdO1WdBdyiIvYdgVLMem_2kIwtHjO-tIUqV7xluXDHlqyI2Lqi_i_Cc-DkYYgkY6aOYkkR7zSpv931-R2-C3_yHVGqno-rDXIt0GNQPDmUqHpDYY86Q',
    imageAlt: 'Golden brown deep fried crispy Asian spring rolls cut diagonally showing glass noodle stuffing',
  },
  {
    id: 'pizza-07',
    name: 'Quattro Formaggi Pizza',
    price: 490,
    category: 'italian',
    isVeg: true,
    isSpecial: true,
    spiceLevel: 1,
    description: 'Smoked Scamorza, Gorgonzola, aged Parmigiano, and whole Fior di Latte over sourdough fermented for 48 hours.',
    pairing: 'Wild Herb Olive Oil & Bubbly Grape Nectar',
    originSea: 'Water Seven Canals',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGgyhGBrB-cMgbTiZlJtD7hqOLYF0aMUGEN60ZpcQMt_K6i7Hcg0DdS-Oy0z1wMA-c9bkW4E8xpstLU7dUFBBLz3q-ab_3qxtXJWPNUcXjxTvDEt1XHNEVJeFU2kgOoG7y_S6-NlpggoXA1bmp_-c7TorJ8q8mjtz0A2sfcnNDeviQL3k4PKORsQrCVpV02vmVR4N6LfSXLQkZd_yxEGRpPvSMyaJtrKV4XbcKY5oiQRfRIfJTDJTv2A',
    imageAlt: 'Rustic 12 inch woodfired artisan Neapolitan pizza with blistered charred crust and four cheeses',
  },
  {
    id: 'pasta-08',
    name: 'Water Seven Truffle Pasta',
    price: 460,
    category: 'italian',
    isVeg: false,
    isSpecial: true,
    spiceLevel: 1,
    description: 'Artisan bronze-die fettuccine spun with sea calamari, tiger prawns, and wild Umbrian summer truffle butter.',
    pairing: 'Chilled Sparkling Citrus Spritz',
    originSea: 'Water Seven Aqua Laguna',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyloouTEvt8K36tHIAhDLQsfnDD6bi0MvGFucpHR2vZYuGom-N0iYrmFWFHMYvs1UcOHJ9XWQZP3Zwv3OecNF3rlykabVE_5CtDgA3ECtbN8PS9ICm_ZpCn4-jpGAk_BHw6FR16TIt4McahQ_CtOxt8YmbicQdj1i7s7PDR73LLHVdQxUlmWUQYERNPq8MF5wT9Vayrl12yJnlXrfmaBrQbY-3sq-oHCGCXaX33lZzMqyK21lOSj9W6A',
    imageAlt: 'Fettuccine pasta swirled in velvet black truffle and white wine cream reduction topped with prawns and calamari',
  },
  {
    id: 'garlic-bread-09',
    name: 'Baratie Classic Garlic Bread',
    price: 180,
    category: 'italian',
    isVeg: true,
    isSpecial: false,
    spiceLevel: 1,
    description: 'Stone-baked baguette soaked in confit roasted garlic puree, sea salt, oregano, and bubbling cheese crust.',
    pairing: 'Sun-ripened Tomato Basil Puree',
    originSea: 'Baratie Ocean Galley',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtVhZHWACTEwWHuHP1Mx7vtdKtAaBjJkrX55SOUjDmmdsT3rMoiAJlDKOxYBmMVJ5rpkT5rAZtH6QJpNkE8EEKSl4A2bOvWkZErU-1F1H5MBVQsKhxevUaCETRBMa9fPmiPOtY09H0mTHsq7GMfyCeI0W-ALeFUcoiwLG-U1T_kd94SgjQvW8_gd2GJO9GDEBQWv2_jp8jUBSbdmxLpK1Jse7nuWrSx1tKtoNViI7UUqcpRO-HgnNhTw',
    imageAlt: 'Crusty freshly baked French baguette loaf dripping with melted herb garlic butter and pulled mozzarella',
  },
];

export const BOUNTY_REVIEWS: BountyReview[] = [
  {
    id: 'nami',
    title: 'WANTED FOR GLUTTONY',
    quote: 'The Sanji Butter Chicken had me weeping into my bandana. Richer than a vault on Mariejois!',
    character: 'Navigator Nami',
    bounty: 'Bounty: 66,000,000 ฿',
    stars: 5,
    badgeColor: 'primary',
  },
  {
    id: 'zoro',
    title: 'WANTED FOR TASTE',
    quote: 'The Dragon Wok Hakka noodles arrived piping hot even amidst a sea storm. Pure fiery wok hei!',
    character: 'First Mate Zoro',
    bounty: 'Bounty: 320,000,000 ฿',
    stars: 5,
    badgeColor: 'secondary',
  },
  {
    id: 'luffy',
    title: 'CAPTAIN APPROVED',
    quote: 'Meat, cheese, and pizza that stretches three arms long! I ordered three platters all for myself!',
    character: 'Captain Straw Hat',
    bounty: 'Bounty: 3,000,000,000 ฿',
    stars: 5,
    badgeColor: 'tertiary',
  },
  {
    id: 'vivi',
    title: 'ROYAL CRITIC',
    quote: 'The Quattro Formaggi crust has that quintessential woodfired blister. Unrivaled culinary mastery.',
    character: 'Princess Vivi',
    bounty: 'Royal Emissary',
    stars: 5,
    badgeColor: 'gold',
  },
];
