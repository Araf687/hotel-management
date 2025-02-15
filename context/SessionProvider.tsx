"use client";
import { getSession } from "@/lib/auth";
import { SessionUser } from "@/types/data";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/config/api";

interface SessionContextType {
  sessionUser: SessionUser | null;
  setSessionUserData: (sessionUser: SessionUser | null) => void;
  clearSessionUserData: () => void;
}

const DataContext = createContext<SessionContextType>({
  sessionUser: null,
  setSessionUserData: () => {
    throw new Error("setSessionUserData must be used within a SessionProvider");
  },
  clearSessionUserData: () => {
    throw new Error("clearSessionUserData must be used within a SessionProvider");
  },
});

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(null);

  const setSessionUserData = (sessionUser: SessionUser | null) => {
    console.log("set Session user");
    setSessionUser(sessionUser);
  };

  const clearSessionUserData = () => {
    setSessionUser(null);
  };

  useEffect(() => {
    const setSession = async () => {
      try {
        const session = await getSession();
        if (session?.userData) {
          setSessionUser(session.userData);
        } else {
          setSessionUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch session:", error);
        setSessionUser(null);
      }
    };
    setSession();
  }, []);

  return (
    <DataContext.Provider
      value={{
        sessionUser,
        setSessionUserData,
        clearSessionUserData,
      }}
    >
      <SWRConfig value={{ fetcher }}>
        {children}
      </SWRConfig>
    </DataContext.Provider>
  );
};

export default SessionProvider;

export const useSessionData = (): SessionContextType => {
  return useContext(DataContext);
};
