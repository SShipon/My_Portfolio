import ProductGrid from "./ProductGrid";



const products = [
  {
    id:1,
    name: "Facebook Marketing",
    description: "Step up your game with MKS Batting Gloves, engineered for ultimate comfort and protection at the crease. Crafted with precision and designed for performance, these gloves are essential gear for every cricketer Featuring a lightweight design and split-finger construction, MKS Batting Gloves offer maximum flexibility and dexterity, allowing you to maintain control and precision during every shot. The duo-layer of foam padding provides exceptional impact protection, shielding your hands from the rigors of fast-paced cricket",
    category: "facebook",
    rating: 4.8,
    image: "https://i.ibb.co/n0bs97Q/download-3.jpg",
    isFeatured: true
  },
  {
    id:2,
    name: "search engine optimization",
    description: "Step up your game with MKS Batting Gloves, engineered for ultimate comfort and protection at the crease. Crafted with precision and designed for performance, these gloves are essential gear for every cricketer Featuring a lightweight design and split-finger construction, MKS Batting Gloves offer maximum flexibility and dexterity, allowing you to maintain control and precision during every shot. The duo-layer of foam padding provides exceptional impact protection, shielding your hands from the rigors of fast-paced cricket",
    category: "facebook",
    rating: 4.8,
    image: "https://i.ibb.co/zfvy0BD/download.png",
    isFeatured: true
  },
  {
    id:3,
    name: "Lead generation",
    description: "Step up your game with MKS Batting Gloves, engineered for ultimate comfort and protection at the crease. Crafted with precision and designed for performance, these gloves are essential gear for every cricketer Featuring a lightweight design and split-finger construction, MKS Batting Gloves offer maximum flexibility and dexterity, allowing you to maintain control and precision during every shot. The duo-layer of foam padding provides exceptional impact protection, shielding your hands from the rigors of fast-paced cricket",
    category: "facebook",
    rating: 4.8,
    image: "https://i.ibb.co/n0bs97Q/download-3.jpg",
    isFeatured: true
  },
  {
    id:4,
    name: "Lead generation",
    description: "Step up your game with MKS Batting Gloves, engineered for ultimate comfort and protection at the crease. Crafted with precision and designed for performance, these gloves are essential gear for every cricketer Featuring a lightweight design and split-finger construction, MKS Batting Gloves offer maximum flexibility and dexterity, allowing you to maintain control and precision during every shot. The duo-layer of foam padding provides exceptional impact protection, shielding your hands from the rigors of fast-paced cricket",
    category: "facebook",
    rating: 4.8,
    image: "https://i.ibb.co/PTG9DBb/download-2.jpg",
    isFeatured: true
  },
  {
    id:5,
    name: "Lead generation",
    description: "Step up your game with MKS Batting Gloves, engineered for ultimate comfort and protection at the crease. Crafted with precision and designed for performance, these gloves are essential gear for every cricketer Featuring a lightweight design and split-finger construction, MKS Batting Gloves offer maximum flexibility and dexterity, allowing you to maintain control and precision during every shot. The duo-layer of foam padding provides exceptional impact protection, shielding your hands from the rigors of fast-paced cricket",
    category: "facebook",
    rating: 4.8,
    image: "https://i.ibb.co/n0bs97Q/download-3.jpg",
    isFeatured: true
  },
  {
    id:6,
    name: "Lead generation",
    description: "Step up your game with MKS Batting Gloves, engineered for ultimate comfort and protection at the crease. Crafted with precision and designed for performance, these gloves are essential gear for every cricketer Featuring a lightweight design and split-finger construction, MKS Batting Gloves offer maximum flexibility and dexterity, allowing you to maintain control and precision during every shot. The duo-layer of foam padding provides exceptional impact protection, shielding your hands from the rigors of fast-paced cricket",
    category: "facebook",
    rating: 4.8,
    image: "https://i.ibb.co/n0bs97Q/download-3.jpg",
    isFeatured: true
  }
];

export default function page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Grid</h1>
      <ProductGrid products={products} key={products.id} />
    </div>
  );
}
