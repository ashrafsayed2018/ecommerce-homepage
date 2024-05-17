export async function createRandomAvatar(user, setAvatar) {
  const name = await user.name;

  const avatar = `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;
  setAvatar(avatar);
}
