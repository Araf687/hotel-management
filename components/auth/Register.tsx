// app/(auth)/register/page.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { registerSchema, RegisterFormData } from "@/lib/schema";
import api from "@/config/api";
export default function Register({setIsLoginPage}: {setIsLoginPage: (value: boolean) => void}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register data:", data);

    api.post("register", data).then((res) => {  
      if(res.status === 201) {
        console.log(res.data);
        setIsLoginPage(true);
      }
        
    }).catch((err) => {  console.log(err); });

    // Add your registration logic here
  };

  console.log(errors);

  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter username"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>
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
        <div>
          <Label htmlFor="password_confirmation">Confirm Password</Label>
          <Input
            id="password_confirmation"
            type="password"
            placeholder="Confirm your password"
            {...register("password_confirmation")}
          />
          {errors.password_confirmation && (
            <p className="text-sm text-red-500">{errors.password_confirmation.message}</p>
          )}
        </div>
        <Button className="w-full" type="submit" onClick={()=>console.log("Register")}>
          Registeras
        </Button>
      </form>
    </div>
  );
}