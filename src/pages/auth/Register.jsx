import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../api";

// Define validation schema
const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().min(8).required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  avatar: yup.mixed().nullable()
});

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const { mutate, error } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      // Toast notification is handled in the API
      setLoading(false);
    },
    onError: (error) => {
      // Toast notification is handled in the API
      setLoading(false);
    }
  });
  
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    mutate({
      ...data,
      avatar: avatarFile // Include the avatar file
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6 border rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
        
        {/* Avatar Upload Section */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {avatarPreview ? (
              <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">Photo</span>
            )}
          </div>
          <label className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            Choose Photo
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>

        <input type="email" placeholder="Email" {...register("email")} className="p-2 border rounded"/>
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

        <input type="text" placeholder="Full Name" {...register("name")} className="p-2 border rounded"/>
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

        <input type="text" placeholder="Username" {...register("username")} className="p-2 border rounded"/>
        {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}

        <input type="password" placeholder="Password" {...register("password")} className="p-2 border rounded"/>
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

        <input type="password" placeholder="Confirm Password" {...register("passwordConfirm")} className="p-2 border rounded"/>
        {errors.passwordConfirm && <span className="text-red-500 text-sm">{errors.passwordConfirm.message}</span>}

        <button 
          type="submit" 
          disabled={loading}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:bg-gray-400"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
