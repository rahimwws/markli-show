import { UserLogin, UserRegister, UserResponse } from '@/entities/user';
import { client } from '@/shared/api';

export const registerUser = async (user: UserRegister): Promise<{ data: UserResponse }> => {
  const formData = new FormData();
  formData.append('name', user.name);
  formData.append('email', user.email);
  if (user.referred_by) {
    formData.append('referred_by', user.referred_by);
  }

  if (user.avatar) {
    const filename = user.avatar.split('/').pop() || 'avatar.jpg';
    formData.append('file', {
      uri: user.avatar,
      name: filename,
      type: 'image/jpeg',
    } as any);
  }

  const response = await client.post('/auth/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
export const loginUser = async (user: UserLogin): Promise<{ data: UserResponse }> => {
  const response = await client.post('/auth/login', user);
  return response.data;
};
