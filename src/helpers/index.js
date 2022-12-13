import hortfruit from '../db/hortfruit.json';

export const getFrutas = () => {
	return hortfruit.filter(({ tipo }) => tipo === 'fruta');
}

export const getLegumes = () => {
	return hortfruit.filter(({ tipo }) => tipo === 'legume');
}
