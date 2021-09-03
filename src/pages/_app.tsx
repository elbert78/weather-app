import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="max-w-full max-h-full min-h-screen bg-gray-50 min-w-screen">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
export default MyApp;
