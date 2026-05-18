"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

type Product = {
  name: string;
  category: string;
  price: string;
  image: string;
  desc: string;
};

const PRODUCTS: Product[] = [
  {
    name: "A1 Vertex Uniform Kit",
    category: "Uniforms",
    price: "$120",
    image: "/images/shop/uniform.jpg",
    desc: "Elite race-day kit designed for performance and comfort.",
  },
  {
    name: "Performance Backpack",
    category: "Accessories",
    price: "$85",
    image: "/images/shop/backpack.jpg",
    desc: "Durable training backpack for meets and daily use.",
  },
  {
    name: "Team Warmup Set",
    category: "Warmups",
    price: "$140",
    image: "/images/shop/warmup.jpg",
    desc: "Lightweight warmup suit built for pre-race activation.",
  },
  {
    name: "Compression Gear Set",
    category: "Compression",
    price: "$65",
    image: "/images/shop/compression.jpg",
    desc: "Supportive compression wear for training and recovery.",
  },
  {
    name: "Training Tee",
    category: "Shirts",
    price: "$35",
    image: "/images/shop/tee.jpg",
    desc: "Breathable performance shirt for daily sessions.",
  },
  {
    name: "A1 Vertex Hoodie",
    category: "Hoodies",
    price: "$75",
    image: "/images/shop/hoodie.jpg",
    desc: "Premium heavyweight hoodie with team branding.",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="relative max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Official Merchandise
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Team Shop.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Train. Compete. Represent.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Official A1 Vertex Athletics gear designed for performance,
            identity, and team culture.
          </p>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((item, i) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition"
            >
              {/* IMAGE */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="font-black text-lg">{item.name}</h2>
                  <span className="text-xs text-cyan-400 uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                </div>

                <p className="text-white/60 text-sm mb-4">{item.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-white font-black">{item.price}</span>

                  <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black text-sm font-black">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUNDLES */}
      <section className="px-6 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
        >
          <h2 className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Athlete Packages
          </h2>

          <h3 className="text-2xl font-black mb-3">
            Complete Training Bundles
          </h3>

          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            Save more with bundled athlete packages including uniforms, warmups,
            compression gear, and training essentials.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm">
              Starter Bundle
            </button>

            <button className="px-8 py-3.5 rounded-full border border-white/15 text-white/70 text-sm hover:bg-white/10 transition">
              Elite Bundle
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
