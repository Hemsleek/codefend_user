import { TbLoader } from "solid-icons/tb";

function Loader() {
  return (
    <div class="w-screen h-screen flex items-center justify-center bg-black/10">
      <TbLoader class="w-14 h-14 codefend-text-red animate-spin" />
    </div>
  );
}

export default Loader;
