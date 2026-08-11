import { CATEGORIES, DRINKS, SHOPS } from "@/lib/drinks";
import { Gallery } from "@/components/Gallery";
import { CherryBlossom } from "@/components/floral/CherryBlossom";
import { Peony } from "@/components/floral/Peony";
import { Lotus } from "@/components/floral/Lotus";
import { Chrysanthemum } from "@/components/floral/Chrysanthemum";
import { PlumBlossom } from "@/components/floral/PlumBlossom";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* color washes */}
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/25" />
        <div className="absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-purple-300/40 blur-3xl dark:bg-purple-500/25" />
        <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/25" />
        <div className="absolute right-1/4 top-1/3 h-[24rem] w-[24rem] rounded-full bg-pink-300/35 blur-3xl dark:bg-pink-500/20" />
        <div className="absolute left-0 top-1/2 h-[22rem] w-[22rem] rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute bottom-10 right-0 h-[20rem] w-[20rem] rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/20" />
        <div className="absolute left-1/2 top-0 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-fuchsia-200/30 blur-3xl dark:bg-fuchsia-500/15" />

        {/* floating boba pearls */}
        <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-amber-900/20 blur-[1px] dark:bg-amber-100/25" />
        <div className="absolute left-[85%] top-[15%] h-2 w-2 rounded-full bg-purple-900/20 blur-[1px] dark:bg-purple-100/25" />
        <div className="absolute left-[70%] top-[45%] h-4 w-4 rounded-full bg-rose-900/15 blur-[1px] dark:bg-rose-100/20" />
        <div className="absolute left-[20%] top-[55%] h-2.5 w-2.5 rounded-full bg-emerald-900/15 blur-[1px] dark:bg-emerald-100/20" />
        <div className="absolute left-[45%] top-[8%] h-2 w-2 rounded-full bg-sky-900/15 blur-[1px] dark:bg-sky-100/20" />
        <div className="absolute left-[6%] top-[70%] h-3 w-3 rounded-full bg-orange-900/15 blur-[1px] dark:bg-orange-100/20" />
        <div className="absolute left-[92%] top-[65%] h-2.5 w-2.5 rounded-full bg-fuchsia-900/15 blur-[1px] dark:bg-fuchsia-100/20" />

        {/* floral sprigs — cherry blossom, peony, lotus, chrysanthemum, plum blossom */}
        <CherryBlossom className="absolute -left-8 top-6 h-64 w-44 rotate-[-14deg] text-rose-900/[0.22] dark:text-rose-100/[0.3]" />
        <Peony className="absolute right-0 top-16 h-80 w-52 rotate-[18deg] text-purple-900/[0.2] dark:text-purple-100/[0.28]" />
        <Lotus className="absolute -bottom-12 left-1/4 h-72 w-48 rotate-[8deg] text-emerald-900/[0.2] dark:text-emerald-100/[0.28]" />
        <Chrysanthemum className="absolute bottom-4 right-1/5 h-56 w-40 rotate-[-22deg] text-amber-900/[0.2] dark:text-amber-100/[0.28]" />
        <PlumBlossom className="absolute left-1/2 -top-6 h-44 w-32 rotate-[4deg] text-pink-900/[0.18] dark:text-pink-100/[0.25]" />
        <Lotus className="absolute -right-6 bottom-1/4 h-52 w-36 rotate-[-6deg] text-sky-900/[0.18] dark:text-sky-100/[0.25]" />
        <Peony className="absolute left-[8%] bottom-1/3 h-48 w-32 rotate-[26deg] text-fuchsia-900/[0.14] dark:text-fuchsia-100/[0.2]" />
        <Chrysanthemum className="absolute left-[2%] top-[35%] h-40 w-28 rotate-[12deg] text-orange-900/[0.16] dark:text-orange-100/[0.22]" />
        <PlumBlossom className="absolute right-[4%] top-[40%] h-44 w-32 rotate-[-16deg] text-rose-900/[0.14] dark:text-rose-100/[0.2]" />
        <CherryBlossom className="absolute left-[30%] top-[60%] h-40 w-28 rotate-[20deg] text-pink-900/[0.13] dark:text-pink-100/[0.18]" />
        <Lotus className="absolute right-[15%] top-[65%] h-48 w-32 rotate-[10deg] text-teal-900/[0.15] dark:text-teal-100/[0.2]" />
        <Peony className="absolute left-[55%] top-[80%] h-44 w-32 rotate-[-10deg] text-violet-900/[0.14] dark:text-violet-100/[0.2]" />
        <Chrysanthemum className="absolute right-[35%] top-[90%] h-40 w-28 rotate-[-4deg] text-amber-900/[0.13] dark:text-amber-100/[0.18]" />
        <PlumBlossom className="absolute left-[10%] top-[95%] h-36 w-24 rotate-[8deg] text-rose-900/[0.12] dark:text-rose-100/[0.17]" />
      </div>

      <main className="relative z-10 flex w-full max-w-6xl flex-1 flex-col items-center gap-10 px-6 py-16 sm:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Boba Gallery
          </h1>
          <p className="max-w-lg text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            A little menu of milk teas, fruit teas, and specialty drinks —
            browse by category and find your next order.
          </p>
        </div>

        <Gallery drinks={DRINKS} categories={CATEGORIES} shops={SHOPS} />
      </main>
    </div>
  );
}
