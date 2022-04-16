async function createUser(userData) {
	validateUserData(userData);

	await userRepository.create(userData);
}

async function updateUser(userId, userData) {
	validateUserData(userData);

	await userRepository.update(userId, userData);
}

async function validateUserData(data) {
	const { name, cpf } = data;

	if (name.length === 0 || cpf.length !== 14) throw "erro nos dados";
}
