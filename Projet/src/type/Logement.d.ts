import type * as Kit from '@sveltejs/kit';

export type Logement = {
    id: string;
	nom: string;
	ville: string;
    description: string;
	imageURL: string;
    proprietaireId: string;

    prix: number;
    capacite: number;
};
