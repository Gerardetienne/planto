
import { ReactNode } from 'react';
import { FaCalendarCheck } from 'react-icons/fa6';

export  interface ItemCard {
    image: string
    title: string
    description: string
    price: string
    addCard: any
    rating: number 
    instock: boolean
    id:number 
}

export interface Props {
    image: string
    title:string 
    content1:string 
    content2:string 
    link:string
}


export interface DataPlanteTypes {
    id: number;
    nom: string; // Le nom commun de la plante
    variete: string; // La variété ou l'espèce de la plante
    variation: string; // Une variation ou un sous-type spécifique
    lieux_de_cultivation: string; // Les régions principales de cultivation
    type: string; // Le type de plante (ex: arbuste, herbacée)
    famille: string; // La famille botanique
    nom_scientifique: string; // Le nom scientifique officiel
    nomenclature: string[]; // Les noms communs ou surnoms
    categorie: string; // La catégorie générale (fleurs, médicinales, etc.)
    image:string[];
    price: number;
    description: string;
    image_featured?:string 
    rating : number
    instock: boolean
    baseUrl:string
  }

  export interface test {
    id: number;
    nom: string; // Le nom commun de la plante
    variete: string; // La variété ou l'espèce de la plante
    variation: string; // Une variation ou un sous-type spécifique
    lieux_de_cultivation: string; // Les régions principales de cultivation
    type: string; // Le type de plante (ex: arbuste, herbacée)
    famille: string; // La famille botanique
    nom_scientifique: string; // Le nom scientifique officiel
    nomenclature: string[]; // Les noms communs ou surnoms
    categorie: string; // La catégorie générale (fleurs, médicinales, etc.)
    image:string[];
    price: number;
    description: string;
    image_featured?:string 
    rating : number
    instock: boolean
    baseUrl:string
    quantity: number
  }



  export const DataPlante: DataPlanteTypes[] = [
    {  
      "id": 0,
      "image_featured": "/planto/PlanteModel1.png",
      "rating": 5,
      "instock": true,
      "nom": "Rose de Damas",
      "variete": "Rosa damascena",
      "variation": "Rose ancienne",
      "lieux_de_cultivation": "Bulgarie, Turquie, Maroc",
      "type": "Arbuste",
      "famille": "Rosaceae",
      "nom_scientifique": "Rosa × damascena",
      "nomenclature": ["Rose à parfum", "Rose de mai"],
      "categorie": "Fleurs",
      "baseUrl": "/plante1/",
      "image":[
        "/plante1/plante.png",
        "/plante1/plante1.png",
        "/plante1/plante2.png",
        "/plante1/plante3.png"
      ],
      
      "price": 700,
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
      
    },
    { 
    "id": 1,
    "image_featured": "/planto/calethea-removebg.png",
    "rating": 4,
    "instock": true,
      "nom": "Bambou Géant",
      "variete": "Phyllostachys edulis",
      "variation": "Bambou moso",
      "lieux_de_cultivation": "Chine, Japon, Taïwan",
      "type": "Herbacée",
      "famille": "Poaceae",
      "nom_scientifique": "Phyllostachys edulis",
      "nomenclature": ["Moso", "Bambou géant"],
      "categorie": "Plantes ornementales",
      "baseUrl": "/plante2/",
      "image":[
        "/plante2/plante.png",
        "/plante2/plante1.png",
        "/plante2/plante2.png",
        "/plante2/plante3.png"
      ],
      "price": 700,
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    },
    {  
      "id": 2,
      "image_featured": "/planto/roseGoldopti.png",
      "rating": 5,
      "instock": true,
      "nom": "Cactus Saguaro",
      "variete": "Carnegiea gigantea",
      "variation": "Cactus colonnaire",
      "lieux_de_cultivation": "Déserts du sud-ouest des États-Unis",
      "type": "Succulente",
      "famille": "Cactaceae",
      "nom_scientifique": "Carnegiea gigantea",
      "nomenclature": ["Saguaro", "Cierge géant"],
      "categorie": "Plantes désertiques",
      "baseUrl": "/plante3/",
      "image":[
        "/plante3/plante.png",
        "/plante3/plante1.png",
        "/plante3/plante2.png",
        "/plante3/plante3.png"
      ],
      "price": 700,
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    },
    { 
      "id": 3,
      "image_featured": "/planto/Monogram.png",
      "rating": 3,
      "instock": true,
      "nom": "Orchidée Paphiopedilum",
      "variete": "Paphiopedilum insigne",
      "variation": "Sabot de Vénus",
      "lieux_de_cultivation": "Asie du Sud-Est",
      "type": "Vivace",
      "famille": "Orchidaceae",
      "nom_scientifique": "Paphiopedilum insigne",
      "nomenclature": ["Orchidée sabot", "Sabot de Vénus"],
      "categorie": "Plantes à fleurs",
      "baseUrl": "/plante4/",
      "image":[
        "/plante4/plante.png",
        "/plante4/plante1.png",
        "/plante4/plante2.png",
        "/plante4/plante3.png"
      ],
      "price": 700,
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    },
    { 
    "id": 4,
    "image_featured": "/planto/Monogram1.png",
    "rating": 6,
    "instock": true,
      "nom": "Aloès Vera",
      "variete": "Aloe barbadensis",
      "variation": "Aloès médicinal",
      "lieux_de_cultivation": "Afrique, Inde, Méditerranée",
      "type": "Succulente",
      "famille": "Asphodelaceae",
      "nom_scientifique": "Aloe vera",
      "nomenclature": ["Aloès", "Plante des brûlures"],
      "categorie": "Plantes médicinales",
      "baseUrl": "/plante5/",
      "image":[
        "/plante5/plante.png",
        "/plante5/plante1.png",
        "/plante5/plante2.png",
        "/plante5/plante3.png"
      ],
      "price": 700,
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    },
    { 
      "id" : 5,
      "image_featured": "/planto/Monogram2.png",
      "rating": 3,
      "instock": false,
      "nom": "Lavande",
      "variete": "Lavandula angustifolia",
      "variation": "Lavande vraie",
      "lieux_de_cultivation": "Provence, Espagne, Italie",
      "type": "Arbuste",
      "famille": "Lamiaceae",
      "nom_scientifique": "Lavandula angustifolia",
      "nomenclature": ["Lavande officinale", "Lavande fine"],
      "categorie": "Plantes aromatiques",
      "baseUrl": "/plante6/",
      "image":[
        "/plante6/plante.png",
        "/plante6/plante1.jpg",
        "/plante6/plante2.png",
        "/plante6/plante3.png",
        "/plante6/plante4.png"
      ],
      "price": 700,
      "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    },
    // {  
    //   "id": 6,
    //   "image_featured": "",
    //   "rating": 4,
    //   "instock": true,
    //   "nom": "Palmier-dattier",
    //   "variete": "Phoenix dactylifera",
    //   "variation": "Dattier du désert",
    //   "lieux_de_cultivation": "Afrique du Nord, Moyen-Orient",
    //   "type": "Arbre",
    //   "famille": "Arecaceae",
    //   "nom_scientifique": "Phoenix dactylifera",
    //   "nomenclature": ["Palmier dattier", "Palmier à dattes"],
    //   "categorie": "Plantes fruitières",
    //   "image":[
    //     "",
    //     "",
    //     "",
    //   ],
    //   "price": 700,
    //   "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    // },
    // {  
    //   "id": 7,
    //   "image_featured": "",
    //   "rating": 1,
    //   "instock": true,
    //   "nom": "Fougère de Boston",
    //   "variete": "Nephrolepis exaltata",
    //   "variation": "Fougère d'intérieur",
    //   "lieux_de_cultivation": "Régions tropicales",
    //   "type": "Vivace",
    //   "famille": "Nephrolepidaceae",
    //   "nom_scientifique": "Nephrolepis exaltata",
    //   "nomenclature": ["Fougère d'appartement", "Boston fern"],
    //   "categorie": "Plantes d'intérieur",
    //   "image":[
    //     "",
    //     "",
    //     "",
    //   ],
    //   "price": 700,
    //   "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    // },
    // { 
    //     "id": 8,
    //     "image_featured": "",
    //     "rating": 5,
    //     "instock": true,
    //   "nom": "Basilic sacré",
    //   "variete": "Ocimum tenuiflorum",
    //   "variation": "Tulsi",
    //   "lieux_de_cultivation": "Inde, Asie du Sud-Est",
    //   "type": "Herbacée",
    //   "famille": "Lamiaceae",
    //   "nom_scientifique": "Ocimum tenuiflorum",
    //   "nomenclature": ["Tulsi", "Basilic indien"],
    //   "categorie": "Plantes médicinales",
    //   "image":[
    //     "",
    //     "",
    //     "",
    //   ],
    //   "price": 700,
    //   "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    // },
    // { 
    //   "id": 9,
    //   "image_featured": "",
    //   "rating": 3,
    //   "instock": false,
    //   "nom": "Nénuphar",
    //   "variete": "Nymphaea alba",
    //   "variation": "Nénuphar blanc",
    //   "lieux_de_cultivation": "Étangs, lacs en Europe",
    //   "type": "Aquatique",
    //   "famille": "Nymphaeaceae",
    //   "nom_scientifique": "Nymphaea alba",
    //   "nomenclature": ["Lys d'eau", "Water lily"],
    //   "categorie": "Plantes aquatiques",
    //   "image":[
    //     "",
    //     "",
    //     "",
    //   ],
    //   "price": 700,
    //   "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque felis laoreet curabitur dis. Sodales habitant nullam. Eu sem vulputate vel. Taciti penatibus mus bibendum. Dui tempor tempus egestas. Turpis nisl feugiat elementum vehicula. Facilisi tempor mi sapien dapibus. Et ultricies eros finibus. Fusce eleifend primis. Parturient posuere ad vestibulum. Arcu congue arcu."
    // }
  ]
  




export const LiestCard: ItemCard[] = [
    {   id: 0,
        image: "/planto/PlanteModel1.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: FaCalendarCheck,
        rating: 5,
        instock: true
    },
    {
        id: 1,
        image: "/planto/calethea-removebg.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: FaCalendarCheck,
        rating: 4,
        instock: true
    },
    {   
        id: 2,
        image: "/planto/roseGoldopti.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: FaCalendarCheck,
        rating: 2,
        instock: false
    },

    {   id: 3,
        image: "/planto/Monogram.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "50 000 Ar",
        addCard: FaCalendarCheck,
        rating: 3,
        instock: true
    },
    {   id: 4,
        image: "/planto/Monogram1.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: FaCalendarCheck,
        rating: 1,
        instock: false
    },
    {   id: 5,
        image: "/planto/Monogram2.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: FaCalendarCheck,
        rating: 5,
        instock: true
    }
]


export const DataSlide:Props[] = [
    {
        image: "/planto/plante (6).png",
        title: "We Have Small And Best O2 Plants Collection’s",
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        link: "#" 
    },
    {
        image: "/planto/plante__2.png",
        title: "We Have Small And Best O3 Plants Collection’s",
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        link: "#"
    },
    {
        image: "/planto/plante (7).png",
        title: "We Have Small And Best O4 Plants Collection’s",
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        link: "#" 
    }
]



