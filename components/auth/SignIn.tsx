// app/(auth)/login/page.tsx
"use client";

import { SignInFormData, signInSchema } from "@/lib/schema";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSessionData } from "@/context/SessionProvider";
import { login } from "@/lib/auth";
import { Dispatch, SetStateAction, useState } from "react";
import api from "@/config/api";

export default function LoginPage({setIsloginSuccess}:{setIsloginSuccess: Dispatch<SetStateAction<boolean>>}) {
  const router = useRouter();
  const { setSessionUserData } = useSessionData();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    console.log("Sign-in data:", data);

    try {
      const res = await api.post("login", data);
      const { user, token } = res.data;
      const { name, email, id } = user;
      const userData = { name, email, id, token };

      setSessionUserData(userData);
      await login(userData, true);
      router.push("/dashboard");
      setIsloginSuccess(true)

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("login")}
          />
          {errors.login && (
            <p className="text-sm text-red-500">{errors.login.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
}
