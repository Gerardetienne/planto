"use client"
import { LiestCard } from "@/app/data";
import { useParams } from "next/navigation"; // Pour récupérer les paramètres
 // Assurez-vous que le chemin est correct

const ItemDetailsPage = () => {
    const params = useParams(); // Récupérer les paramètres dynamiques
    const { id } = params; // Extraire 'id'

    // Convertir `id` en nombre car les IDs dans `LiestCard` sont numériques
    const item = LiestCard.find((item) => item.id === Number(id));

    // Gérer les cas où l'élément n'existe pas
    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="p-4">
            <img src={item.image} alt={item.title} className="w-full h-auto" />
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-gray-600">{item.description}</p>
        </div>
    );
};

export default ItemDetailsPage;