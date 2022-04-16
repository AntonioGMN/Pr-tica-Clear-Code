async function updateUser(userId, data) {
	validadeUser(userId)

  await userRepository.update(userId, data);
}

async function deleteUser(userId) {
	validadeUser(userId)

  await userRepository.delete(userId);
}

function validadeUser(id){
  const user = await userRepository.find(id);
	if(!user) throw 'User not found';
}