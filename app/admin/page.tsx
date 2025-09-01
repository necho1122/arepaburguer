'use client';
import { useEffect, useState } from 'react';
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	User,
} from 'firebase/auth';
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
	setDoc,
} from 'firebase/firestore';
import { app, db } from '@/lib/firebase';
import type { Root2, Item, Adicionai } from '@/types';

function AdminCRUD() {
	const [categories, setCategories] = useState<Root2[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	// Form states
	const [newCategory, setNewCategory] = useState({
		category: '',
		description: '',
		image: '',
	});
	const [editingCategoryId, setEditingCategoryId] = useState<string | null>(
		null
	);
	const [editingCategory, setEditingCategory] = useState<Partial<Root2>>({});

	const [newItem, setNewItem] = useState<{ [catId: string]: Partial<Item> }>(
		{}
	);
	const [editingItem, setEditingItem] = useState<{
		[itemId: string]: Partial<Item>;
	}>({});
	const [editingItemId, setEditingItemId] = useState<string | null>(null);

	const [newAdicional, setNewAdicional] = useState<{
		[catId: string]: Partial<Adicionai>;
	}>({});
	const [editingAdicional, setEditingAdicional] = useState<{
		[adId: string]: Partial<Adicionai>;
	}>({});
	const [editingAdicionalId, setEditingAdicionalId] = useState<string | null>(
		null
	);

	const fetchData = async () => {
		setLoading(true);
		try {
			const categoriesSnap = await getDocs(collection(db, 'menuCategories'));
			const cats: Root2[] = [];
			for (const categoryDoc of categoriesSnap.docs) {
				const categoryData = categoryDoc.data();
				const categoryId = categoryDoc.id;
				const itemsSnap = await getDocs(
					collection(db, 'menuCategories', categoryId, 'items')
				);
				const items = itemsSnap.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				})) as Item[];
				const adicionaisSnap = await getDocs(
					collection(db, 'menuCategories', categoryId, 'adicionais')
				);
				const adicionais = adicionaisSnap.empty
					? undefined
					: (adicionaisSnap.docs.map((doc) => ({
							id: doc.id,
							...doc.data(),
						})) as Adicionai[]);
				cats.push({
					id: categoryId,
					category: categoryData.category ?? '',
					description: categoryData.description ?? '',
					image: categoryData.image ?? '',
					items,
					...(adicionais ? { adicionais } : {}),
				});
			}
			setCategories(cats);
		} catch {
			setError('Error cargando datos');
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	// --- Categoría ---
	const handleAddCategory = async () => {
		if (!newCategory.category) return;
		setLoading(true);
		const ref = doc(collection(db, 'menuCategories'));
		await setDoc(ref, {
			category: newCategory.category,
			description: newCategory.description,
			image: newCategory.image,
		});
		setNewCategory({ category: '', description: '', image: '' });
		await fetchData();
		setLoading(false);
	};

	const handleEditCategory = async (catId: string) => {
		if (!editingCategory.category) return;
		setLoading(true);
		const ref = doc(db, 'menuCategories', catId);
		await updateDoc(ref, {
			category: editingCategory.category,
			description: editingCategory.description,
			image: editingCategory.image,
		});
		setEditingCategoryId(null);
		setEditingCategory({});
		await fetchData();
		setLoading(false);
	};

	// Confirmación antes de borrar
	const confirmDelete = async (
		message: string,
		action: () => Promise<void>
	) => {
		if (window.confirm(message)) {
			await action();
		}
	};

	const handleDeleteCategory = async (catId: string) => {
		await confirmDelete(
			'¿Estás seguro que deseas eliminar esta categoría y todos sus items/adicionales?',
			async () => {
				setLoading(true);
				await deleteDoc(doc(db, 'menuCategories', catId));
				await fetchData();
				setLoading(false);
			}
		);
	};

	// --- Item ---
	const handleAddItem = async (catId: string) => {
		const item = newItem[catId];
		if (!item?.name || !item?.price) return;
		await addDoc(collection(db, 'menuCategories', catId, 'items'), {
			name: item.name,
			price: item.price,
			ingredients: item.ingredients ?? '',
		});
		setNewItem((prev) => ({ ...prev, [catId]: {} }));
		await fetchData();
	};

	const handleEditItem = async (catId: string, itemId: string) => {
		const item = editingItem[itemId];
		if (!item?.name || !item?.price) return;
		await updateDoc(doc(db, 'menuCategories', catId, 'items', itemId), {
			name: item.name,
			price: item.price,
			ingredients: item.ingredients ?? '',
		});
		setEditingItemId(null);
		setEditingItem((prev) => ({ ...prev, [itemId]: {} }));
		await fetchData();
	};

	const handleDeleteItem = async (catId: string, itemId: string) => {
		await confirmDelete(
			'¿Estás seguro que deseas eliminar este item?',
			async () => {
				await deleteDoc(doc(db, 'menuCategories', catId, 'items', itemId));
				await fetchData();
			}
		);
	};

	// --- Adicional ---
	const handleAddAdicional = async (catId: string) => {
		const adicional = newAdicional[catId];
		if (!adicional?.name || !adicional?.price) return;
		await addDoc(collection(db, 'menuCategories', catId, 'adicionais'), {
			name: adicional.name,
			price: adicional.price,
		});
		setNewAdicional((prev) => ({ ...prev, [catId]: {} }));
		await fetchData();
	};

	const handleEditAdicional = async (catId: string, adId: string) => {
		const adicional = editingAdicional[adId];
		if (!adicional?.name || !adicional?.price) return;
		await updateDoc(doc(db, 'menuCategories', catId, 'adicionais', adId), {
			name: adicional.name,
			price: adicional.price,
		});
		setEditingAdicionalId(null);
		setEditingAdicional((prev) => ({ ...prev, [adId]: {} }));
		await fetchData();
	};

	const handleDeleteAdicional = async (catId: string, adId: string) => {
		await confirmDelete(
			'¿Estás seguro que deseas eliminar este adicional?',
			async () => {
				await deleteDoc(doc(db, 'menuCategories', catId, 'adicionais', adId));
				await fetchData();
			}
		);
	};

	return (
		<div className='w-full max-w-3xl mx-auto py-8 px-2 sm:px-4'>
			<h3 className='text-2xl font-bold mb-6 text-orange-600 text-center'>
				Administrar Menú
			</h3>
			{loading && (
				<p className='text-orange-500 text-center mb-4'>Cargando...</p>
			)}
			{error && <p className='text-red-500 text-center mb-4'>{error}</p>}

			{/* Agregar categoría */}
			<div className='mb-10 bg-white dark:bg-neutral-900 rounded-xl shadow p-4 border border-orange-100 dark:border-neutral-700'>
				<h4 className='font-semibold mb-3 text-lg text-orange-500'>
					Agregar nueva categoría
				</h4>
				<div className='flex flex-col sm:flex-row gap-2 flex-wrap'>
					<input
						type='text'
						placeholder='Nombre'
						value={newCategory.category}
						onChange={(e) =>
							setNewCategory({ ...newCategory, category: e.target.value })
						}
						className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
					/>
					<input
						type='text'
						placeholder='Descripción'
						value={newCategory.description}
						onChange={(e) =>
							setNewCategory({ ...newCategory, description: e.target.value })
						}
						className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
					/>
					<input
						type='text'
						placeholder='URL Imagen'
						value={newCategory.image}
						onChange={(e) =>
							setNewCategory({ ...newCategory, image: e.target.value })
						}
						className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
					/>
					<button
						onClick={handleAddCategory}
						className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-semibold'
					>
						Agregar
					</button>
				</div>
			</div>

			{/* Listado de categorías */}
			<div className='flex flex-col gap-8'>
				{categories.map((cat) => (
					<div
						key={cat.id}
						className='bg-white dark:bg-neutral-900 rounded-xl shadow p-4 border border-orange-100 dark:border-neutral-700'
					>
						{/* Editar categoría */}
						{editingCategoryId === cat.id ? (
							<div className='mb-4 flex flex-col sm:flex-row gap-2'>
								<input
									type='text'
									placeholder='Nombre'
									value={editingCategory.category ?? ''}
									onChange={(e) =>
										setEditingCategory({
											...editingCategory,
											category: e.target.value,
										})
									}
									className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
								/>
								<input
									type='text'
									placeholder='Descripción'
									value={editingCategory.description ?? ''}
									onChange={(e) =>
										setEditingCategory({
											...editingCategory,
											description: e.target.value,
										})
									}
									className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
								/>
								<input
									type='text'
									placeholder='URL Imagen'
									value={editingCategory.image ?? ''}
									onChange={(e) =>
										setEditingCategory({
											...editingCategory,
											image: e.target.value,
										})
									}
									className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
								/>
								<button
									onClick={() => handleEditCategory(cat.id)}
									className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 font-semibold'
								>
									Guardar
								</button>
								<button
									onClick={() => {
										setEditingCategoryId(null);
										setEditingCategory({});
									}}
									className='bg-gray-300 px-3 py-1 rounded font-semibold'
								>
									Cancelar
								</button>
							</div>
						) : (
							<div className='flex flex-col sm:flex-row gap-2 items-center mb-4'>
								<span className='font-bold text-lg text-orange-600'>
									{cat.category}
								</span>
								<span className='text-gray-500 text-sm'>{cat.description}</span>
								{cat.image && (
									// eslint-disable-next-line @next/next/no-img-element
									<img
										src={cat.image}
										alt={cat.category}
										className='w-10 h-10 object-cover rounded border border-orange-200 dark:border-neutral-700'
									/>
								)}
								<div className='flex gap-2 mt-2 sm:mt-0'>
									<button
										onClick={() => {
											setEditingCategoryId(cat.id);
											setEditingCategory({
												category: cat.category,
												description: cat.description,
												image: cat.image,
											});
										}}
										className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 font-semibold'
									>
										Editar
									</button>
									<button
										onClick={() => handleDeleteCategory(cat.id)}
										className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 font-semibold'
									>
										Eliminar
									</button>
								</div>
							</div>
						)}

						{/* Items */}
						<div className='ml-0 sm:ml-4 mb-4'>
							<h5 className='font-semibold text-orange-500 mb-2'>Items</h5>
							<ul className='flex flex-col gap-2'>
								{cat.items.map((item) =>
									editingItemId === item.id ? (
										<li
											key={item.id}
											className='flex flex-col sm:flex-row gap-2'
										>
											<input
												type='text'
												placeholder='Nombre'
												value={editingItem[item.id]?.name ?? ''}
												onChange={(e) =>
													setEditingItem((prev) => ({
														...prev,
														[item.id]: {
															...prev[item.id],
															name: e.target.value,
														},
													}))
												}
												className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
											/>
											<input
												type='text'
												placeholder='Precio'
												value={editingItem[item.id]?.price ?? ''}
												onChange={(e) =>
													setEditingItem((prev) => ({
														...prev,
														[item.id]: {
															...prev[item.id],
															price: e.target.value,
														},
													}))
												}
												className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
											/>
											<input
												type='text'
												placeholder='Ingredientes'
												value={editingItem[item.id]?.ingredients ?? ''}
												onChange={(e) =>
													setEditingItem((prev) => ({
														...prev,
														[item.id]: {
															...prev[item.id],
															ingredients: e.target.value,
														},
													}))
												}
												className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
											/>
											<button
												onClick={() => handleEditItem(cat.id, item.id)}
												className='bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 font-semibold'
											>
												Guardar
											</button>
											<button
												onClick={() => {
													setEditingItemId(null);
													setEditingItem((prev) => ({
														...prev,
														[item.id]: {},
													}));
												}}
												className='bg-gray-300 px-2 py-1 rounded font-semibold'
											>
												Cancelar
											</button>
										</li>
									) : (
										<li
											key={item.id}
											className='flex flex-col sm:flex-row gap-2 items-center'
										>
											<span className='font-medium text-gray-900 dark:text-gray-100'>
												{item.name}
											</span>
											<span className='text-orange-500'>{item.price}</span>
											{item.ingredients && (
												<span className='text-gray-500 text-xs'>
													{item.ingredients}
												</span>
											)}
											<div className='flex gap-2 mt-2 sm:mt-0'>
												<button
													onClick={() => {
														setEditingItemId(item.id);
														setEditingItem((prev) => ({
															...prev,
															[item.id]: {
																name: item.name,
																price: item.price,
																ingredients: item.ingredients,
															},
														}));
													}}
													className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 font-semibold'
												>
													Editar
												</button>
												<button
													onClick={() => handleDeleteItem(cat.id, item.id)}
													className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 font-semibold'
												>
													Eliminar
												</button>
											</div>
										</li>
									)
								)}
							</ul>
							{/* Agregar item */}
							<div className='flex flex-col sm:flex-row gap-2 mt-2'>
								<input
									type='text'
									placeholder='Nombre'
									value={newItem[cat.id]?.name ?? ''}
									onChange={(e) =>
										setNewItem((prev) => ({
											...prev,
											[cat.id]: { ...prev[cat.id], name: e.target.value },
										}))
									}
									className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
								/>
								<input
									type='text'
									placeholder='Precio'
									value={newItem[cat.id]?.price ?? ''}
									onChange={(e) =>
										setNewItem((prev) => ({
											...prev,
											[cat.id]: { ...prev[cat.id], price: e.target.value },
										}))
									}
									className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
								/>
								<input
									type='text'
									placeholder='Ingredientes'
									value={newItem[cat.id]?.ingredients ?? ''}
									onChange={(e) =>
										setNewItem((prev) => ({
											...prev,
											[cat.id]: {
												...prev[cat.id],
												ingredients: e.target.value,
											},
										}))
									}
									className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
								/>
								<button
									onClick={() => handleAddItem(cat.id)}
									className='bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 font-semibold'
								>
									Agregar
								</button>
							</div>
						</div>

						{/* Adicionales */}
						<div className='ml-0 sm:ml-4'>
							<h5 className='font-semibold text-orange-500 mb-2'>
								Adicionales
							</h5>
							<ul className='flex flex-col gap-2'>
								{cat.adicionais?.map((ad) =>
									editingAdicionalId === ad.id ? (
										<li
											key={ad.id}
											className='flex flex-col sm:flex-row gap-2'
										>
											<input
												type='text'
												placeholder='Nombre'
												value={editingAdicional[ad.id]?.name ?? ''}
												onChange={(e) =>
													setEditingAdicional((prev) => ({
														...prev,
														[ad.id]: { ...prev[ad.id], name: e.target.value },
													}))
												}
												className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
											/>
											<input
												type='text'
												placeholder='Precio'
												value={editingAdicional[ad.id]?.price ?? ''}
												onChange={(e) =>
													setEditingAdicional((prev) => ({
														...prev,
														[ad.id]: { ...prev[ad.id], price: e.target.value },
													}))
												}
												className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
											/>
											<button
												onClick={() => handleEditAdicional(cat.id, ad.id)}
												className='bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 font-semibold'
											>
												Guardar
											</button>
											<button
												onClick={() => {
													setEditingAdicionalId(null);
													setEditingAdicional((prev) => ({
														...prev,
														[ad.id]: {},
													}));
												}}
												className='bg-gray-300 px-2 py-1 rounded font-semibold'
											>
												Cancelar
											</button>
										</li>
									) : (
										<li
											key={ad.id}
											className='flex flex-col sm:flex-row gap-2 items-center'
										>
											<span className='font-medium text-gray-900 dark:text-gray-100'>
												{ad.name}
											</span>
											<span className='text-orange-500'>{ad.price}</span>
											<div className='flex gap-2 mt-2 sm:mt-0'>
												<button
													onClick={() => {
														setEditingAdicionalId(ad.id);
														setEditingAdicional((prev) => ({
															...prev,
															[ad.id]: {
																name: ad.name,
																price: ad.price,
															},
														}));
													}}
													className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 font-semibold'
												>
													Editar
												</button>
												<button
													onClick={() => handleDeleteAdicional(cat.id, ad.id)}
													className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 font-semibold'
												>
													Eliminar
												</button>
											</div>
										</li>
									)
								)}
							</ul>
							{/* Agregar adicional */}
							<div className='flex flex-col sm:flex-row gap-2 mt-2'>
								<input
									type='text'
									placeholder='Nombre'
									value={newAdicional[cat.id]?.name ?? ''}
									onChange={(e) =>
										setNewAdicional((prev) => ({
											...prev,
											[cat.id]: { ...prev[cat.id], name: e.target.value },
										}))
									}
									className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
								/>
								<input
									type='text'
									placeholder='Precio'
									value={newAdicional[cat.id]?.price ?? ''}
									onChange={(e) =>
										setNewAdicional((prev) => ({
											...prev,
											[cat.id]: { ...prev[cat.id], price: e.target.value },
										}))
									}
									className='border px-2 py-1 rounded flex-1 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400'
								/>
								<button
									onClick={() => handleAddAdicional(cat.id)}
									className='bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 font-semibold'
								>
									Agregar
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default function AdminPage() {
	const [user, setUser] = useState<User | null>(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		const auth = getAuth(app);
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			setUser(firebaseUser);
		});
		return () => unsubscribe();
	}, []);

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		const auth = getAuth(app);
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch {
			setError('Credenciales incorrectas o usuario no autorizado');
		}
	};

	const handleLogout = async () => {
		const auth = getAuth(app);
		await signOut(auth);
	};

	if (!user) {
		return (
			<div className='flex flex-col items-center justify-center min-h-screen'>
				<h2 className='mb-4 text-xl font-bold'>Área de administración</h2>
				<form
					onSubmit={handleLogin}
					className='flex flex-col gap-3 w-80'
				>
					<input
						type='email'
						placeholder='Correo electrónico'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='border px-3 py-2 rounded'
						required
					/>
					<input
						type='password'
						placeholder='Contraseña'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='border px-3 py-2 rounded'
						required
					/>
					<button
						type='submit'
						className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600'
					>
						Iniciar sesión
					</button>
					{error && <p className='text-red-500 text-sm'>{error}</p>}
				</form>
			</div>
		);
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h2 className='mb-4 text-xl font-bold'>Bienvenido, {user.email}</h2>
			<button
				onClick={handleLogout}
				className='mb-8 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300'
			>
				Cerrar sesión
			</button>
			<AdminCRUD />
		</div>
	);
}
