import PocketBase from "pocketbase";
import { toast } from "sonner";


const pb = new PocketBase(import.meta.env.VITE_BASE_URL);

// Login function for admin authentication
export const loginUser = async (credentials) => {
  try {
    const response = await pb.collection('users').authWithPassword(credentials.email, credentials.password);
    localStorage.setItem("token", response.token);
    toast.success("Login successful!");
    return response;
  } catch (error) {
    toast.error(error.message || "Login failed");
    throw new Error(error.message || "Login failed");
  }
};

// Signup function for user registration
export const signupUser = async (userData) => {
  try {
    const formData = new FormData();
    
    // Add all text fields
    formData.append('email', userData.email);
    formData.append('emailVisibility', true);
    formData.append('name', userData.name);
    formData.append('username', userData.username);
    formData.append('password', userData.password);
    formData.append('passwordConfirm', userData.passwordConfirm);
    
    // Add avatar file if provided
    if (userData.avatar && userData.avatar instanceof File) {
      formData.append('avatar', userData.avatar);
    }
    
    const record = await pb.collection('users').create(formData);
    toast.success("Registration successful!");
    return record;
  } catch (error) {
    toast.error(error.message || "Registration failed");
    throw new Error(error.message || "Registration failed");
  }
};

// Export the PocketBase client for direct use if needed
export { pb };
export default pb;
