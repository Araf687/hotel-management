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
import { useState } from "react";

export default function LoginPage() {
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
    const { email, password } = data;
    const userData = { email, id: 1, name: "Araf", token: "ashjahvsbjsybjyu" };

    // Set session data first
    setSessionUserData(userData); // Ensure session data is set first

    // Then log the user in
    await login(userData, true);
    router.push("/dashboard");
    // Add your sign-in logic here
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
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
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
