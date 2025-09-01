// Ejemplo de estructura devuelta:
/*
[
  {
    id: "id_categoria",
    category: "Empanadas Venezolanas",
    description: "...",
    image: "...",
    items: [
      { id: "id_item", name: "...", price: "...", ingredients: "..." },
      // ...
    ],
    adicionais: [
      { id: "id_adicional", name: "...", price: "..." }
      // ... (si existen)
    ]
  },
  // ...
]
*/

import { NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Root2, Item, Adicionai } from '@/types';

export async function GET() {
	try {
		const categoriesSnap = await getDocs(collection(db, 'menuCategories'));
		const categories: Root2[] = [];

		for (const categoryDoc of categoriesSnap.docs) {
			const categoryData = categoryDoc.data();
			const categoryId = categoryDoc.id;

			// Obtener items
			const itemsSnap = await getDocs(
				collection(db, 'menuCategories', categoryId, 'items')
			);
			const items: Item[] = itemsSnap.docs.map((doc) => {
				const data = doc.data();
				return {
					id: doc.id,
					name: data.name ?? '',
					price: data.price ?? '',
					ingredients: data.ingredients,
				};
			});

			// Obtener adicionais (si existen)
			const adicionaisSnap = await getDocs(
				collection(db, 'menuCategories', categoryId, 'adicionais')
			);
			const adicionais: Adicionai[] | undefined = adicionaisSnap.empty
				? undefined
				: adicionaisSnap.docs.map((doc) => {
						const data = doc.data();
						return {
							id: doc.id,
							name: data.name ?? '',
							price: data.price ?? '',
						};
					});

			categories.push({
				id: categoryId,
				category: categoryData.category ?? '',
				description: categoryData.description,
				image: categoryData.image,
				items,
				...(adicionais ? { adicionais } : {}),
			});
		}

		return NextResponse.json(categories, { status: 200 });
	} catch (error: unknown) {
		let errorMessage = 'Error interno';
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		return NextResponse.json({ error: errorMessage }, { status: 500 });
	}
}
