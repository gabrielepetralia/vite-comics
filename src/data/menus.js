import { ref } from "vue";

const headerMenu = [
  {
    href: "#",
    text: "characters",
  },
  {
    href: "#",
    text: "comics",
  },
  {
    href: "#",
    text: "movies",
  },
  {
    href: "#",
    text: "tv",
  },
  {
    href: "#",
    text: "games",
  },
  {
    href: "#",
    text: "collectibles",
  },
  {
    href: "#",
    text: "videos",
  },
  {
    href: "#",
    text: "fans",
  },
  {
    href: "#",
    text: "news",
  },
  {
    href: "#",
    text: "shop",
  }
];

const ctaMenu = [
  {
    href: "#",
    icon: "buy-comics-digital-comics.png",
    text: "digital comics",
  },
  {
    href: "#",
    icon: "buy-comics-merchandise.png",
    text: "dc merchandise",
  },
  {
    href: "#",
    icon: "buy-comics-subscription.png",
    text: "subscription",
  },
  {
    href: "#",
    icon: "buy-comics-shop-locator.png",
    text: "comic shop locator",
  },
  {
    href: "#",
    icon: "buy-comics-dc-power-visa.svg",
    text: "dc power visa",
  }
];

const footerMenu = {
  dcComics : [
    "dc comics",
    {
    href: "#",
    text: "characters",
    },
    {
      href: "#",
      text: "comics",
    },
    {
      href: "#",
      text: "movies",
    },
    {
      href: "#",
      text: "tv",
    },
    {
      href: "#",
      text: "games",
    },
    {
      href: "#",
      text: "videos",
    },
    {
      href: "#",
      text: "news",
    }
  ],

  shop: [
    "shop",
    {
      href: "#",
      text: "Shop DC",
    },
    {
      href: "#",
      text: "Shop DC Collectibles",
    }
  ],

  dc: [
    "dc",
    {
      href: "#",
      text: "Terms Of Use",
    },
    {
      href: "#",
      text: "Privacy Policy (New)",
    },
    {
      href: "#",
      text: "Ad Choices",
    },
    {
      href: "#",
      text: "Advertising",
    },
    {
      href: "#",
      text: "Jobs",
    },
    {
      href: "#",
      text: "Subscriptions",
    },
    {
      href: "#",
      text: "Talent Workshops",
    },
    {
      href: "#",
      text: "CPSC Certificate",
    },
    {
      href: "#",
      text: "Rating",
    },
    {
      href: "#",
      text: "Shop Help",
    },
    {
      href: "#",
      text: "Contact Us",
    }
  ],

  sites: [
    "sites",
    {
      href: "#",
      text: "DC",
    },
    {
      href: "#",
      text: "Mad Magazine",
    },
    {
      href: "#",
      text: "DC Kids",
    },
    {
      href: "#",
      text: "DC Universe",
    },
    {
      href: "#",
      text: "DC Power Visa",
    }
  ]
}

const socialsMenu = [
  {
    href: "#",
    name: "Facebook",
    image: "footer-facebook.png",
  },
  {
    href: "#",
    name: "Twitter",
    image: "footer-twitter.png",
  },
  {
    href: "#",
    name: "YouTube",
    image: "footer-youtube.png",
  },
  {
    href: "#",
    name: "Pinterest",
    image: "footer-pinterest.png",
  },
  {
    href: "#",
    name: "Periscope",
    image: "footer-periscope.png",
  },
]


export { headerMenu , ctaMenu , footerMenu , socialsMenu }