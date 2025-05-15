import { useMutation } from '@tanstack/react-query';

import { createFolder } from '../api';

const useCreateFolder = () => {
  return useMutation({
    mutationFn: createFolder,
  });
};

export default useCreateFolder;
