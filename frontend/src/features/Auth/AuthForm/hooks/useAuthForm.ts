import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useAuthForm = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  const loginSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmitLogin = () => {
    console.log('submit login');
  };

  const onSwitchForm = () => {
    setIsLogin(!isLogin);
    console.log(`isLogin now ${isLogin}`);
  };

  const singupSchema = z
    .object({
      username: z.string().min(3),
      email: z.email(),
      password: z.string().min(6),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Passwords don't match",
      path: ['confirm'],
    });

  type SingupFormData = z.infer<typeof singupSchema>;

  const {
    register: singupRegister,
    handleSubmit: singupHandleSubmit,
    formState: { errors: singupErrors },
  } = useForm<SingupFormData>({
    resolver: zodResolver(singupSchema),
  });

  const onSubmitSingup = () => {
    console.log('submit singup');
  };

  return {
    loginRegister,
    loginHandleSubmit: loginHandleSubmit(onSubmitLogin),
    loginErrors,
    isLogin,
    onSwitchForm,
    singupRegister,
    singupHandleSubmit: singupHandleSubmit(onSubmitSingup),
    singupErrors,
  };
};
