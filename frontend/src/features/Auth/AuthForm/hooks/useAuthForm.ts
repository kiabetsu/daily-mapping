import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useAuthForm = () => {
  const schema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.email(),
  });

  type RegisterFormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    console.log('submit');
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors };
};
