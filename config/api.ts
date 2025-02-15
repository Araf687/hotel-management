/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/hooks/use-toast";
import { getSession } from "@/lib/auth";
import { ENV_VARIABLES } from "@/lib/constants";


import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: ENV_VARIABLES.AXIOS_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    const session = await getSession();
    if (session?.userData?.token) {
      config.headers.Authorization = `Bearer ${session.userData.token}`;
    }
  } catch (error) {
    console.error("Error setting auth token:", error);
  }

  return config;
});

api.interceptors.response.use(
  function (response) {
    // Extract necessary data
    const { data,message } = response.data;
    const { method } = response.config;
    console.log(response)

    // Show success toast for relevant methods
    if (["post", "put", "delete"].includes(method?.toLowerCase() || "") && response.status === 200) {
      toast({
        title: "Success",
        description: message || "Action completed successfully!",
        variant: "default",
      });
    }
    
    return response;
  },
  function (error: AxiosError) {
    if (!error.response) {
      // Network errors or unknown issues
      toast({
        title: "Network Error",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
      return Promise.reject(error);
    }

    const status = error.response.status;
    const message = (error.response.data as any)?.message || "An unexpected error occurred.";

    // Show toast notifications based on status code
    switch (status) {
      case 400:
        toast({
          title: "Bad Request",
          description: message || "Invalid request. Please check your input.",
          variant: "destructive",
        });
        break;

      case 401:
        toast({
          title: "Unauthorized",
          description: "You are not authorized. Please log in again.",
          variant: "destructive",
        });
        break;

      case 403:
        toast({
          title: "Forbidden",
          description: "You don't have permission to perform this action.",
          variant: "destructive",
        });
        break;

      case 404:
        toast({
          title: "Not Found",
          description: "The requested resource was not found.",
          variant: "destructive",
        });
        break;

      case 422:
        toast({
          title: "Validation Error",
          description: message || "There were some validation errors. Please check your input.",
          variant: "destructive",
        });
        break;

      case 500:
        toast({
          title: "Server Error",
          description: "Something went wrong on the server. Please try again later.",
          variant: "destructive",
        });
        break;

      default:
        toast({
          title: "Error",
          description: message || "An unknown error occurred.",
          variant: "destructive",
        });
    }

    return Promise.reject(error);
  }
);

export const fetcher = (url: string) => api.get(url).then(res => res.data);

export default api;