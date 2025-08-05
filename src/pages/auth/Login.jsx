import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Diameter, Lock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router";
import { loginUser } from "../../api";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate,isPending, error } = useMutation({
    mutationFn: async (data) => {
      return await loginUser(data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["login"], data);
      navigate("/");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <Card className='max-w-md w-full bg-zinc-900 rounded-3xl px-4'>
        <CardHeader>
          <CardTitle className={'text-white align-middle font-bold text-2xl py-5 flex items-center gap-2'}>  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
              </div>Demo Panel</CardTitle>
        </CardHeader>
        <CardContent className={'text-white'}>
          <h1 className="text-2xl font-medium">Log in to your account!</h1>
          <p className="text-zinc-500 pt-3 pb-7 text-sm">Enter your email and password to login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <Send className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500" />
                <Input
                  type="email"
                  placeholder="Enter email address..."
                  className={'ps-12'}
                  {...register("email")}
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
              </div>
              <div className="relative mt-6">
                <Lock className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500" />
                <Input
                  type="password"
                  placeholder="Enter Password..."
                  className={'ps-12'}
                  {...register("password")}
                />
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
              </div>

              <div className="flex justify-between py-5"> 
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" className={' data-[state=checked]:text-white bg-white'}/>
                  <Label htmlFor="terms">Remember me</Label>
                </div>
                <a href="/forgot-password" className="text-zinc-500">Forgot password?</a>
              </div>
              <Button type="submit"  className="w-full bg-white text-black py-6 font-semibold  hover:bg-white/80 cursor-pointer active:scale-95 transition-all duration-100 ease-in" disabled={isPending}>{isPending ? "Signing in..." : "Sign In to Account"}</Button>
            </div>
          </form>

        </CardContent>
        <CardFooter className={' px-6 flex-col'}>
          <p className="text-sm border-t-[1px] border-zinc-600 w-full text-center text-zinc-500 py-4">
              Don't have account ?
          </p>
          <Link to={'/signup'} className="border-white rounded-2xl font-semibold text-white border w-full py-4 text-center active:scale-95 duration-100 ease-in transition-all">Create New Account</Link>
          <p className="text-sm  pt-10 text-center text-zinc-500 py-4">2025 © Demo Panel | FE</p>
        </CardFooter>
      </Card>
    </div>
  )
}
