import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-full max-h-full min-h-screen bg-gray-50 min-w-screen">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
