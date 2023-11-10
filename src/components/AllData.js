// Import Men's Images
import men_img1 from "../img/men/men_sneakers_1.jpg";
import men_img2 from "../img/men/men_running_shoes_1.jpeg";
import men_img3 from "../img/men/men_graphic_tee_1.jpg";
import men_img4 from "../img/men/men_slim_fit_jeans_1.jpeg";
import men_img5 from "../img/men/men_track_pants_1.jpg";
import men_img6 from "../img/men/men_cargo_shorts_1.webp";
import men_img7 from "../img/men/men_leather_loafers_1.webp";
import men_img8 from "../img/men/men_dress_shirt_1.jpg";
import men_img9 from "../img/men/men_outdoor_jacket_1.webp";
import men_img10 from "../img/men/men_explorer_watch_1.webp";

// Import Women's Images
import women_img1 from "../img/women/women_dress_1.jpg";
import women_img2 from "../img/women/women_jeans_1.jpg";
import women_img3 from "../img/women/women_blouse_1.jpg";
import women_img4 from "../img/women/women_leggings_1.jpg";
import women_img5 from "../img/women/women_watch_1.jpg";
import women_img6 from "../img/women/women_skirt_1.jpg";
import women_img7 from "../img/women/women_sweater_1.jpg";
import women_img8 from "../img/women/women_dress_2.jpeg";
import women_img9 from "../img/women/women_handbag_1.jpg";
import women_img10 from "../img/women/women_earrings_1.jpg";

// Import Kid's Images
import kid_img1 from "../img/kid/kid_backpack_1.jpg";
import kid_img2 from "../img/kid/kid_building_blocks_1.jpg";
import kid_img3 from "../img/kid/kid_tshirt_1.webp";
import kid_img4 from "../img/kid/kid_bedding_set_1.jpg";
import kid_img5 from "../img/kid/kid_art_kit_1.webp";
import kid_img6 from "../img/kid/kid_plush_toy_1.jpg";
import kid_img7 from "../img/kid/kid_puzzle_1.webp";
import kid_img8 from "../img/kid/kid_superhero_cape_1.webp";
import kid_img9 from "../img/kid/kid_telescope_1.png";
import kid_img10 from "../img/kid/kid_storybook_1.png";

const items = [
  // Men's Category
  {
    id: 1,
    title: "Stride Elegance Sneakers",
    price: 2499,
    category: "men",
    description:
      "Experience the perfect blend of comfort and style with our Stride Elegance Sneakers. These sneakers are designed to provide excellent support for your feet, making them ideal for long walks and everyday wear.",
    image: men_img1,
  },
  {
    id: 2,
    title: "Urban Explorer Running Shoes",
    price: 1899,
    category: "men",
    description:
      "Unleash your inner urban explorer with our Urban Explorer Running Shoes. Whether you are jogging in the park or running errands in the city, these shoes offer superior cushioning and traction.",
    image: men_img2,
  },
  {
    id: 3,
    title: "Vintage Vibes Graphic Tee",
    price: 325,
    category: "men",
    description:
      "Embrace the vintage vibes with our Graphic Tee. Made from soft, breathable cotton, this t-shirt features a unique graphic print that adds a retro touch to your outfit.",
    image: men_img3,
  },
  {
    id: 4,
    title: "Urban Edge Slim-Fit Jeans",
    price: 1299,
    category: "men",
    description:
      "Discover the urban edge with our Slim-Fit Jeans. Crafted from premium denim, these jeans offer a comfortable fit and a modern silhouette. The distressed details and faded wash give them a stylish worn-in look.",
    image: men_img4,
  },
  {
    id: 5,
    title: "Active Pursuit Track Pants",
    price: 899,
    category: "men",
    description:
      "Embark on your active pursuits with our Track Pants. These pants feature moisture-wicking fabric that keeps you dry and comfortable during workouts. Whether you are hitting the gym or going for a run, these track pants are your perfect companion.",
    image: men_img5,
  },
  {
    id: 6,
    title: "Weekend Escape Cargo Shorts",
    price: 550,
    category: "men",
    description:
      "Plan your weekend escape in style with our Cargo Shorts. These shorts are designed for maximum comfort and functionality. With multiple pockets for your essentials and a durable construction, they are perfect for outdoor adventures.",
    image: men_img6,
  },
  {
    id: 7,
    title: "Urban Voyager Leather Loafers",
    price: 1599,
    category: "men",
    description:
      "Step into the world of sophistication with our Urban Voyager Leather Loafers. Crafted from genuine leather, these loafers exude timeless elegance. The cushioned insole provides exceptional comfort, making them ideal for formal occasions or a night out.",
    image: men_img7,
  },
  {
    id: 8,
    title: "Modern Gentlemen Dress Shirt",
    price: 275,
    category: "men",
    description:
      "Be the epitome of style with our Modern Gentlemen Dress Shirt. Tailored to perfection, this shirt features a slim fit and a subtle pattern for a contemporary look. The high-quality fabric ensures a luxurious feel against the skin.",
    image: men_img8,
  },
  {
    id: 9,
    title: "Adventure Seeker Outdoor Jacket",
    price: 1895,
    category: "men",
    description:
      "Embark on your outdoor adventures with confidence in our Adventure Seeker Outdoor Jacket. This jacket is designed to withstand various weather conditions, keeping you warm and dry. With multiple pockets and adjustable features, it offers functionality and style.",
    image: men_img9,
  },
  {
    id: 10,
    title: "Timeless Explorer Watch",
    price: 3299,
    category: "men",
    description:
      "Embrace the spirit of exploration with our Timeless Explorer Watch. This watch combines classic design elements with modern features. The durable stainless steel case and genuine leather strap enhance its longevity.",
    image: men_img10,
  },

  // Women's Category
  {
    id: 11,
    title: "Elegance Redefined Dress",
    price: 249,
    category: "women",
    description:
      "Step into sophistication with our Elegance Redefined Dress. Perfect for formal occasions, this dress combines grace and style, making you the center of attention.",
    image: women_img1,
  },
  {
    id: 12,
    title: "Chic Comfort Denim Jeans",
    price: 799,
    category: "women",
    description:
      "Experience chic comfort with our Denim Jeans. Crafted for both style and ease, these jeans are your go-to choice for casual outings and relaxed moments.",
    image: women_img2,
  },
  {
    id: 13,
    title: "Floral Fantasy Blouse",
    price: 325,
    category: "women",
    description:
      "Embrace the floral fantasy with our Blouse. Delicate patterns and a flattering fit make this blouse an essential addition to your wardrobe.",
    image: women_img3,
  },
  {
    id: 14,
    title: "Active Lifestyle Leggings",
    price: 499,
    category: "women",
    description:
      "Enhance your active lifestyle with our Leggings. Designed for flexibility and support, these leggings keep up with your every move, ensuring comfort.",
    image: women_img4,
  },
  {
    id: 15,
    title: "Timeless Classic Watch",
    price: 1899,
    category: "women",
    description:
      "Adorn your wrist with our Timeless Classic Watch. A blend of elegance and functionality, this watch complements any outfit, adding a touch of sophistication.",
    image: women_img5,
  },
  {
    id: 16,
    title: "Effortless Charm Skirt",
    price: 299,
    category: "women",
    description:
      "Radiate effortless charm with our Skirt. Versatile and stylish, this skirt is perfect for various occasions, promising a chic and trendy look.",
    image: women_img6,
  },
  {
    id: 17,
    title: "Cozy Comfort Sweater",
    price: 499,
    category: "women",
    description:
      "Wrap yourself in cozy comfort with our Sweater. Soft to the touch and stylish in design, this sweater keeps you warm while adding a touch of elegance.",
    image: women_img7,
  },
  {
    id: 18,
    title: "Bohemian Beauty Dress",
    price: 220,
    category: "women",
    description:
      "Embrace your inner bohemian beauty with our Bohemian Beauty Dress. Flowy and feminine, this dress captures the essence of boho-chic, making you stand out.",
    image: women_img8,
  },
  {
    id: 19,
    title: "Classic Allure Handbag",
    price: 999,
    category: "women",
    description:
      "Carry your essentials in style with our Classic Allure Handbag. With its timeless design and spacious compartments, this handbag combines fashion and functionality.",
    image: women_img9,
  },
  {
    id: 20,
    title: "Graceful Bloom Earrings",
    price: 1199,
    category: "women",
    description:
      "Adorn your ears with our Graceful Bloom Earrings. Delicate and elegant, these earrings add a touch of sophistication to any ensemble, making you shine.",
    image: women_img10,
  },

  // Kids' Category
  {
    id: 21,
    title: "Adventure Explorer Backpack",
    price: 499,
    category: "kid",
    description:
      "Let your little one embark on exciting adventures with our Adventure Explorer Backpack. Designed for comfort and style, this backpack is perfect for school and outdoor activities.",
    image: kid_img1,
  },
  {
    id: 22,
    title: "Playful Pals Building Blocks",
    price: 759,
    category: "kid",
    description:
      "Spark your child's creativity with our Playful Pals Building Blocks. These colorful blocks encourage imaginative play and help develop fine motor skills.",
    image: kid_img2,
  },
  {
    id: 23,
    title: "Dino Discovery T-shirt",
    price: 335,
    category: "kid",
    description:
      "Make learning fun with our Dino Discovery T-shirt. Featuring vibrant dinosaur prints, this t-shirt is both educational and stylish for your little explorer.",
    image: kid_img3,
  },
  {
    id: 24,
    title: "Cosmic Adventure Bedding Set",
    price: 1299,
    category: "kid",
    description:
      "Transform your child's room into a cosmic adventure with our Bedding Set. Soft and cozy, this set inspires dreams of outer space and intergalactic adventures.",
    image: kid_img4,
  },
  {
    id: 25,
    title: "Creative Genius Art Kit",
    price: 719,
    category: "kid",
    description:
      "Nurture your child's artistic talents with our Creative Genius Art Kit. Packed with high-quality art supplies, this kit encourages creativity and self-expression.",
    image: kid_img5,
  },
  {
    id: 26,
    title: "Safari Explorer Plush Toy",
    price: 299,
    category: "kid",
    description:
      "Embark on a safari adventure with our Safari Explorer Plush Toy. Soft and huggable, this toy brings the wild animals of the savanna to your child's arms.",
    image: kid_img6,
  },
  {
    id: 27,
    title: "Space Tour Puzzle",
    price: 199,
    category: "kid",
    description:
      "Explore the wonders of outer space with this captivating puzzle. Perfect for space enthusiasts and curious minds.",
    image: kid_img7,
  },
  {
    id: 28,
    title: "Superhero Adventure Cape",
    price: 525,
    category: "kid",
    description:
      "Empower your little hero with our Superhero Adventure Cape. With vibrant colors and a comfortable fit, this cape inspires imaginative play and superhero dreams.",
    image: kid_img8,
  },
  {
    id: 29,
    title: "Daring Explorer Telescope",
    price: 289,
    category: "kid",
    description:
      "Encourage curiosity and exploration with our Daring Explorer Telescope. Easy to use and durable, this telescope opens up the wonders of the night sky for your budding astronomer.",
    image: kid_img9,
  },
  {
    id: 30,
    title: "Enchanted Forest Storybook",
    price: 179,
    category: "kid",
    description:
      "Embark on a magical journey with our Enchanted Forest Storybook. Filled with captivating tales and beautiful illustrations, this book sparks the imagination of young readers.",
    image: kid_img10,
  },
];

export default items;
