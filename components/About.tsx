"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I&#39;m a software engineer who loves passion and innovation.
          Throughout my career, I have consistently focused not only developing
          my technical skills but also make a real difference through my work.
          The idea that I embraced at the early stage of my career was
          &quot;It&apos;s not what you know, but who you know&quot;.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          In this ever-evolving landscape, I have honed my craft to specialize
          in crafting awe-inspiring websites that leave a lasting impression and
          immersive mobile app experiences that transport players to
          extraordinary realms. With each project, I embark on a thrilling
          journey, pushing the boundaries of technology to create something
          truly extraordinary.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Outside of work, I&#39;m an avid reader of blockchain and deep
          learning and enjoy my time outdoors. Looking forward, I aim to
          leverage my technical expertise and innovation to help business grow
          and make everyone&apos;s lives a lot easier.
        </p>
      </div>
    </section>
  );
}
