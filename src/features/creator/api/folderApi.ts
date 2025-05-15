import { CreateFolderDto, CreatedFolderResponse } from '@/entities/creator';
import { client } from '@/shared/api';

export const createFolder = async (
  folder: CreateFolderDto
): Promise<{ data: CreatedFolderResponse }> => {
  const response = await client.post('/folders', folder);
  return response.data;
};
