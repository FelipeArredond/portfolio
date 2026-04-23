import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <main className="flex max-w-2xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Felipe Arredondo
        </h1>
        <p className="text-lg text-muted-foreground">
          Frontend Architect &bull; GDE &bull; MVP
        </p>
        <div className="flex gap-4">
          <a href="#projects" className={buttonVariants({ variant: "default" })}>
            Ver proyectos
          </a>
          <a href="#contact" className={buttonVariants({ variant: "outline" })}>
            Contacto
          </a>
        </div>
      </main>
    </div>
  );
}
