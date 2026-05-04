export default function ProjectCard({ image, alt }) {
  return (
    <div className="w-full px-2 sm:px-4 md:px-6 mb-10 md:mb-24">
      <div className="relative w-full rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/5">
        <img src={image} alt={alt} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}
