import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import * as yup from "yup"
import { User, Eye, EyeOff, MoveRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"
import { Checkbox } from "@/components/ui/checkbox"
import { signupUser } from "@/api"
import { useNavigate } from "react-router"
import TermsConditons from "@/components/TermsConditons"
// Validation schema
const schema = yup.object({
  name: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  acceptTerms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
})



export default function SignupForm() {
  const navigate = useNavigate();
  const [avatarFile, setAvatarFile] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema),mode:'onChange' });

  const { mutate, isPending, error } = useMutation({ 
    mutationFn: signupUser,
     onSuccess: () => { 
      navigate("/login")
     }, });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => { setAvatarPreview(reader.result); }; reader.readAsDataURL(file);
    }
  };


  const onSubmit = async (data) => {
    mutate({
      ...data, avatar: avatarFile
    })// Include the avatar file    });  };
  }
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4"
      >
        <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-3xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-white text-2xl font-medium mb-1">Create <span className="text-zinc-400">your account!</span></h1>
              <p className="text-zinc-500 text-sm">Sign up to unlock exclusive features.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
              </div>
              <span className="text-white font-semibold">
                Demo <span className="text-zinc-400">Panel</span>
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border-t-[1px] border-zinc-600 pt-6 ">
            {/* Avatar Upload */}
            <div className="flex items-start gap-4 mb-6 flex-col md:flex-row">
              <div className="relative">
                <div className="w-24 h-24 bg-zinc-800 rounded-2xl border-2 border-zinc-500 flex items-center justify-center overflow-hidden">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview || "/placeholder.svg"}
                      alt="Avatar preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 text-gray-500" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>

              {/* Full Name */}
              <div className="flex-1">
                <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                <Input
                  {...register("name")}
                  type="text"
                  placeholder="Enter your full name"
                 
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
              </div>
            </div>

            {/* Username and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Username</label>
                <Input
                  {...register("username")}
                  type="text"
                  placeholder="Enter your username"
                 
                />
                {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username.message}</p>}
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your full email"
                 
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                   
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
                <div className="relative">
                  <Input
                    {...register("passwordConfirm")}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                   
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.passwordConfirm && <p className="text-red-400 text-xs mt-1">{errors.passwordConfirm.message}</p>}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex justify-between flex-col md:flex-row gap-4 mt-6">
              <div className="flex items-center gap-3  w-full">
                <Checkbox
                  {...register("acceptTerms", {
                    setValueAs: (value) => value === "on" || value === true
                  })}
                  type="checkbox"
                  className={' data-[state=checked]:text-white bg-white'}
                />
                <label className="text-zinc-500 text-sm">
                  I accept the{" "}
                 <TermsConditons/>
                </label>
              </div>
              {errors.acceptTerms && <p className="text-red-400 text-xs mt-1">{errors.acceptTerms.message}</p>}
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full  bg-white text-gray-900 font-semibold py-3  rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-100 ease-in disabled:opacity-50 disabled:cursor-not-allowed m"
              >
                {isPending ? "Creating Account..." : <p>Create Account <MoveRight className="inline"/></p>}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-sm text-center mt-2">
                {error.message || "An error occurred. Please try again."}
              </p>
            )}

          
            
          </form>
          <div className="flex justify-between items-center border-t-[1px] border-zinc-600 mt-6">
            <p className="text-center text-zinc-500 text-sm mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-white underline hover:text-blue-400">
                  Log in
                </Link>
              </p>
            {/* Footer */}
            <p className="text-center text-zinc-500 text-xs mt-8">2025 © Demo Panel | FE</p>
          </div>
        </div>
      </div>
    )
  }
  
