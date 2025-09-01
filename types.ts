export type Root = Root2[];

export interface Root2 {
	id: string;
	category: string;
	description: string;
	image: string;
	items: Item[];
	adicionais?: Adicionai[];
}

export interface Item {
	id: string;
	name: string;
	price: string;
	ingredients?: string;
}

export interface Adicionai {
	id: string;
	name: string;
	price: string;
}
