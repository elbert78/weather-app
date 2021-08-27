import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
