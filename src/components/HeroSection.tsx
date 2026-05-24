const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Floating gradient blobs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#7650FE]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#005BF0]/20 blur-3xl" />

      <div className="container mx-auto px-8 lg:px-12 xl:px-16 relative z-10">
        <h1 className="text-center font-heading font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-8xl lg:text-9xl">
          DÊ O{" "}
          <span className="text-play-gradient">PLAY</span>
          <br />
          NO SEU NEGÓCIO
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
