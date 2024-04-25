"use client";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col gap-4 lg:px-6 mt-16">
        <p className="text-sm text-start text-muted-foreground">
          Coded in{" "}
          <a className="text-foreground" href="https://code.visualstudio.com/">
            Visual Studio Code.
          </a>{" "}
          Built with{" "}
          <a className="text-foreground" href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a className="text-foreground" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>{" "}
          and{" "}
          <a className="text-foreground" href="https://ui.shadcn.com/">
            Shadcn/ui
          </a>
          , deployed with{" "}
          <a className="text-foreground" href="https://netlify.com/">
            Netlify
          </a>
          .
        </p>
      </div>
    </section>
  );
}
