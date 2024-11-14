"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export const ClientProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
