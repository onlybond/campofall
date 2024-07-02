import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

// Define the ComponentCardProps interface
interface ComponentCardProps {
  imageSrc: string;
  likes: number;
  tags: string[];
}

// Define the ComponentCard component
const ComponentCard: React.FC<ComponentCardProps> = ({ imageSrc, likes, tags }) => {
  return (
    <div className="break-inside-avoid mb-6 bg-[#131313] shadow-md rounded-[25px] overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={imageSrc} alt="Component Image" className="rounded-[25px] w-full h-auto p-4" />
      <div className="bg-[#131313] w-full flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-2"> 
          <FaHeart className="text-[#F37121]" />
          <span className="text-white text-xs">{likes}</span>
        </div>
        <Button
          variant={"outline"}
          className="bg-[#363636] h-fit text-xs py-1 rounded-[25px] border-white hover:bg-white hover:text-[#131313] focus:outline-none"
         >
          <MdContentCopy className="w-4 h-4 fill-[#F37121] mr-2" />
          copy to clipboard
        </Button>
      </div>
      <div className="text-primary space-x-2 overflow-x-auto whitespace-nowrap text-xs font-bold p-4" style={{ scrollbarWidth: "none", scrollbarColor: "#F37121 transparent" }}>
        {tags.map((tag, index) => (
          <span key={index} className="text-[#F37121]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Define the Gallery component props
interface GalleryProps {
  displayCount?: number;
}

// Define the Gallery component
const Gallery: React.FC<GalleryProps> = ({ displayCount }) => {
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is card 1', imgSrc: '/img/features.png', likes: 10, tags: ['feature', 'image'] },
    { id: 2, title: 'Card 2', description: 'This is card 2', imgSrc: '/img/verify.png', likes: 20, tags: ['verification', 'security'] },
    { id: 3, title: 'Card 3', description: 'This is card 3', imgSrc: '/img/shotgun 650.jpg', likes: 30, tags: ['shotgun', 'image'] },
    { id: 4, title: 'Card 4', description: 'This is card 4', imgSrc: '/img/stencil-white-000.avif', likes: 40, tags: ['stencil', 'white'] },
    { id: 5, title: 'Card 5', description: 'This is card 5', imgSrc: '/img/features.png', likes: 50, tags: ['feature', 'image'] },
    { id: 6, title: 'Card 6', description: 'This is card 6', imgSrc: '/img/verify.png', likes: 60, tags: ['verification', 'security'] },
    { id: 1, title: 'Card 1', description: 'This is card 1', imgSrc: '/img/features.png', likes: 10, tags: ['feature', 'image'] },
    { id: 2, title: 'Card 2', description: 'This is card 2', imgSrc: '/img/verify.png', likes: 20, tags: ['verification', 'security'] },
    { id: 3, title: 'Card 3', description: 'This is card 3', imgSrc: '/img/shotgun 650.jpg', likes: 30, tags: ['shotgun', 'image'] },
    { id: 4, title: 'Card 4', description: 'This is card 4', imgSrc: '/img/stencil-white-000.avif', likes: 40, tags: ['stencil', 'white'] },
    { id: 5, title: 'Card 5', description: 'This is card 5', imgSrc: '/img/features.png', likes: 50, tags: ['feature', 'image'] },
    { id: 6, title: 'Card 6', description: 'This is card 6', imgSrc: '/img/verify.png', likes: 60, tags: ['verification', 'security'] },
    // Add more cards as needed
  ];

  const displayedCards = displayCount ? cards.slice(0, displayCount) : cards;

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {displayedCards.map((card) => (
        <ComponentCard
          key={card.id}
          imageSrc={card.imgSrc}
          likes={card.likes}
          tags={card.tags}
        />
      ))}
    </div>
  );
};

export default Gallery;
