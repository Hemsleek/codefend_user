//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import { AiOutlineMail, AiFillLock } from "solid-icons/ai";
import VoxService from "../../Services/apiHandler.jsx";
import history from "../../history.jsx";

//Components
import WebApplication from "./viewComponents/webApplication.jsx";
import WebApplicationLocation from "./viewComponents/webApplicationLocation.jsx";
import WebApplicationStatics from "./viewComponents/webApplicationStatics.jsx";
import WebApplicationCredentials from "./viewComponents/WebApplicationCredentials.jsx";
import toast from "solid-toast";

function MainView() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const requestBody = {
      email: email(),
      password: password(),
    };

    return VoxService.sessionHandler(requestBody)
      .then(() => {
        history.push("/");
        toast.success("Welcome Back");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  console.log({ loading: isLoading() });

  return (
    <>
      <section class="log-component">
        <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form class="w-full max-w-md">
            [[CODEFEND LOGO]]
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
              sign In
            </h1>
            <div class="relative flex items-center mt-8">
              <span class="absolute">
                <AiOutlineMail class="w-6 h-6 mx-3" />
              </span>

              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="Email address"
              ></input>
            </div>
            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <AiFillLock class="w-6 h-6 mx-3" />
              </span>

              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="Password"
              ></input>
            </div>
            <div class="mt-6">
              <button
                disabled={isLoading()}
                onClick={(e) => {
                  handleSubmit(e);
                }}
                class={`bg-codefend w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 rounded ${
                  isLoading() && "bg-opacity-5 cursor-not-allowed"
                }`}
              >
                Sign in
              </button>

              <div class="mt-6 text-center ">
                <a
                  href="#"
                  onClick={() => {
                    history.push("/auth/signup");
                  }}
                  class="text-sm codefend-text-red hover:underline"
                >
                  Don’t have an account yet? Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default MainView;
