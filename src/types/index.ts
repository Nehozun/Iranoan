import { NextPage } from "next";
import { ComponentType } from "react";

export type NextPageLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: ComponentType<{ pageProps: P }>;
};
