"use client";

import BrandScroll from "@/components/BrandScroll";
import ScrollableContainer from "@/components/ScrollableContainer";
import { CAR_MODELS } from "@/data/carModels";
import Link from "next/link";

export default function ModelsListPage() {
  return (
    <div className="p-20 px-30 min-h-screen">
      <BrandScroll/>
      <BrandScroll/>
      <BrandScroll/>
      <BrandScroll/>
    </div>
  );
}
