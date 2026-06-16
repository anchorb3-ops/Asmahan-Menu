import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import logoAsset from "@/assets/asmahan-logo.asset.json";
import { lebaneseMenu, internationalMenu, setMenus, type Menu, type Dish, type Category } from "@/components/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asmahan — Lebanese & International Menu" },
      { name: "description", content: "Asmahan Group in Zgharta, Bnachii — refined Lebanese and international dining. Browse our full menu." },
      { property: "og:title", content: "Asmahan — Lebanese & International Menu" },
      { property: "og:description", content: "Refined Lebanese and international dining in Zgharta, Bnachii." },
    ],
  }),
  component: Index,
});

type NavItem = { id: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { id: "appetizers", label: "Appetizers" },
  { id: "lebanese-salads", label: "Lebanese Salads" },
  { id: "cold-mezza", label: "Cold Mezza" },
  { id: "nayeh", label: "Nayeh" },
  { id: "hot-mezza", label: "Hot Mezza" },
  { id: "grilled", label: "Grilled" },
  { id: "lebanese-desserts", label: "Lebanese Desserts" },
  { id: "international-salads", label: "International Salads" },
  { id: "gluten-free", label: "Gluten Free" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "burgers", label: "Burgers" },
  { id: "pasta", label: "Pasta" },
  { id: "main-course", label: "Main Course" },
  { id: "kids-menu", label: "Kids Menu" },
  { id: "international-desserts", label: "International Desserts" },
  { id: "set-menus", label: "Set Menus" },
];

const LEBANESE_IDS: Record<string, string> = {
  "Salads": "lebanese-salads",
  "Cold Mezza": "cold-mezza",
  "Nayeh (Raw)": "nayeh",
  "Hot Mezza": "hot-mezza",
  "Grilled (Mashewe)": "grilled",
  "Desserts": "lebanese-desserts",
};

const INTERNATIONAL_IDS: Record<string, string> = {
  "Appetizers": "appetizers",
  "Salads": "international-salads",
  "Gluten Free": "gluten-free",
  "Sandwiches": "sandwiches",
  "Burgers": "burgers",
  "Pasta": "pasta",
  "Main Course — Chicken": "main-course",
  "Kids Menu": "kids-menu",
  "Desserts": "international-desserts",
};

function Index() {
  const appetizers = internationalMenu.categories.find((c) => c.title === "Appetizers")!;
  const otherInternational = internationalMenu.categories.filter((c) => c.title !== "Appetizers");

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Header />
      <CategoryNav />
      <main className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16 space-y-24">
        <Hero />
        <section className="space-y-20">
          <CategoryBlock category={appetizers} sectionId="appetizers" />
        </section>
        <section>
          <SectionTitle>Lebanese Menu</SectionTitle>
          <div className="space-y-20">
            {lebaneseMenu.categories.map((cat) => (
              <CategoryBlock key={cat.title} category={cat} sectionId={LEBANESE_IDS[cat.title]} />
            ))}
          </div>
        </section>
        <section>
          <SectionTitle>International Menu</SectionTitle>
          <div className="space-y-20">
            {otherInternational.map((cat) => (
              <CategoryBlock key={cat.title} category={cat} sectionId={INTERNATIONAL_IDS[cat.title]} />
            ))}
          </div>
        </section>
        <SetMenusSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-background/85 border-b border-accent/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 sm:gap-4 text-center">
          <a href="tel:+96181414900" className="flex items-center justify-center sm:justify-start gap-2 text-sm text-foreground/80 hover:text-accent transition-colors order-2 sm:order-1">
            <Phone className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
            <span className="tracking-wide">+961 81 414 900</span>
          </a>
          <a href="#top" className="flex items-center justify-center order-1 sm:order-2">
            <img
              src="/asmahan-logo-burgundy.png"
              alt="Asmahan Group"
              className="h-28 sm:h-36 w-auto"
            />
          </a>
          <div className="flex items-center justify-center sm:justify-end gap-2 text-sm text-foreground/80 order-3">
            <MapPin className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
            <span className="tracking-wide">Zgharta, Bnachii</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function CategoryNav() {
  const [active, setActive] = useState<string>(NAV_ITEMS[0].id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = navRef.current?.querySelector<HTMLAnchorElement>(`a[data-id="${active}"]`);
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      if (elRect.left < navRect.left || elRect.right > navRect.right) {
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [active]);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b border-accent/40 bg-background"
    >
      <div ref={navRef} className="mx-auto max-w-7xl overflow-x-auto no-scrollbar">
        <ul className="flex items-stretch gap-1 sm:gap-2 px-4 sm:px-8 whitespace-nowrap">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  data-id={item.id}
                  href={`#${item.id}`}
                  className={`relative inline-flex items-center px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium tracking-wide transition-opacity text-primary ${isActive ? 'opacity-100' : 'opacity-75'}`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute left-2 right-2 bottom-0 h-[2px] rounded-full bg-accent transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="text-center pt-6 sm:pt-10">
      <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-5">Asmahan Group</p>
      <h1 className="font-serif text-5xl sm:text-7xl font-medium text-primary leading-[1.05]">
        Our Menu
      </h1>
      <div className="mx-auto mt-6 h-px w-24 bg-accent" />
      <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/75">
        A celebration of Lebanese tradition and international flavors, crafted with
        seasonal ingredients and a warm Mediterranean spirit.
      </p>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-14">
      <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">The Menu</p>
      <h2 className="font-serif text-4xl sm:text-5xl font-medium text-primary">{children}</h2>
      <div className="mx-auto mt-5 h-[2px] w-16 bg-accent" />
    </div>
  );
}

function MenuSection({ menu, idMap }: { menu: Menu; idMap: Record<string, string> }) {
  const usedIds = new Set<string>();
  return (
    <section>
      <SectionTitle>{menu.title}</SectionTitle>
      <div className="space-y-20">
        {menu.categories.map((cat) => {
          const mapped = idMap[cat.title];
          let sectionId: string | undefined;
          if (mapped && !usedIds.has(mapped)) {
            sectionId = mapped;
            usedIds.add(mapped);
          }
          return (
          <div key={cat.title} id={sectionId} className="scroll-mt-20">
            <div className="mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-primary">
                {cat.title}
              </h3>
              <div className="mt-2 h-[2px] w-10 bg-accent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cat.dishes.map((d) => (
                <DishCard key={d.name} dish={d} />
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  const slug = dish.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.storage
        .from("dish-images")
        .list("", { search: slug, limit: 1 });
      const match = data?.find((f) => f.name.startsWith(slug + "."));
      if (match && !cancelled) {
        const { data: signed } = await supabase.storage
          .from("dish-images")
          .createSignedUrl(match.name, 60 * 60 * 24 * 7);
        if (signed?.signedUrl) setImageUrl(signed.signedUrl);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  async function handleFile(file: File) {
    setUploading(true);
    try {
      // remove any existing files for this dish
      const { data: existing } = await supabase.storage
        .from("dish-images")
        .list("", { search: slug });
      const toRemove = existing?.filter((f) => f.name.startsWith(slug + ".")) ?? [];
      if (toRemove.length) {
        await supabase.storage.from("dish-images").remove(toRemove.map((f) => f.name));
      }
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
      const path = `${slug}.${ext}`;
      const { error } = await supabase.storage
        .from("dish-images")
        .upload(path, file, { upsert: true, contentType: file.type });
      if (error) throw error;
      const { data: signed } = await supabase.storage
        .from("dish-images")
        .createSignedUrl(path, 60 * 60 * 24 * 7);
      if (signed?.signedUrl) setImageUrl(signed.signedUrl);
    } catch (e) {
      console.error(e);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <article className="group flex flex-col bg-background border border-border/70 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/60 hover:shadow-[0_8px_30px_-15px_rgba(110,34,53,0.25)]">
      <div className="aspect-square bg-secondary/60 relative overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={dish.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-accent/40">
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.25">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12c3-3 6-3 9 0s6 3 9 0" />
            </svg>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
            e.target.value = "";
          }}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="absolute bottom-2 right-2 rounded-full bg-primary/90 text-primary-foreground text-[11px] font-medium tracking-wide px-3 py-1.5 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity hover:bg-accent disabled:opacity-70"
        >
          {uploading ? "Uploading…" : imageUrl ? "Replace photo" : "Upload photo"}
        </button>
      </div>
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h4 className="font-serif text-2xl sm:text-3xl font-medium text-primary leading-snug">
          {dish.name}
        </h4>
        {dish.desc && (
          <p className="mt-2 text-sm leading-relaxed text-foreground/65">{dish.desc}</p>
        )}
        <div className="mt-5 pt-4 border-t border-dashed border-accent/30 flex items-end justify-between">
          <span className="text-[11px] tracking-[0.25em] uppercase text-foreground/40">Price</span>
          <span className="font-serif text-xl text-accent font-medium tabular-nums">—</span>
        </div>
      </div>
    </article>
  );
}

function CategoryBlock({ category, sectionId }: { category: Category; sectionId?: string }) {
  return (
    <div id={sectionId} className="scroll-mt-20">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-primary">
          {category.title}
        </h3>
        <div className="mt-2 h-[2px] w-10 bg-accent" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {category.dishes.map((d) => (
          <DishCard key={d.name} dish={d} />
        ))}
      </div>
    </div>
  );
}

function SetMenusSection() {
  return (
    <section id="set-menus" className="scroll-mt-20">
      <SectionTitle>Set Menus</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {setMenus.map((m) => (
          <div
            key={m.title}
            className="relative bg-background border border-accent/40 rounded-2xl p-8 sm:p-10 shadow-[0_4px_20px_-10px_rgba(217,164,65,0.2)]"
          >
            <div className="text-center mb-8">
              <p className="text-[11px] tracking-[0.4em] uppercase text-accent mb-2">Set Menu</p>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-primary">{m.title}</h3>
              <div className="mx-auto mt-4 h-px w-12 bg-accent" />
            </div>
            <ul className="space-y-2.5">
              {m.items.map((it) => (
                <li key={it} className="flex items-baseline gap-3 text-foreground/80">
                  <span className="text-accent text-xs leading-none mt-1">◆</span>
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-dashed border-accent/30 flex items-end justify-between">
              <span className="text-[11px] tracking-[0.25em] uppercase text-foreground/40">Price per person</span>
              <span className="font-serif text-2xl text-accent font-medium">—</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-primary text-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 text-center">
        <img
          src={logoAsset.url}
          alt="Asmahan Group"
          className="mx-auto h-32 w-auto opacity-90"
          style={{ filter: "brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(380%) hue-rotate(5deg) brightness(102%) contrast(96%)" }}
        />
        <h3 className="mt-2 font-serif text-3xl text-background">Asmahan Group</h3>
        <div className="mx-auto mt-4 h-px w-12 bg-accent" />
        <div className="mt-6 space-y-2 text-background/85">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} />
            Zgharta, Bnachii
          </p>
          <p>
            <a href="tel:+96181414900" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} />
              +961 81 414 900
            </a>
          </p>
        </div>
        <p className="mt-10 text-xs tracking-[0.3em] uppercase text-background/55">
          Prices are exclusive of tax
        </p>
      </div>
    </footer>
  );
}
