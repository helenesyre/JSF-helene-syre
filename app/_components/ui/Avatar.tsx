// Avatar component
export default function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-14 h-14 rounded-full bg-red-800 flex items-center justify-center">
      <p className="text-white text-lg font-bold uppercase">{initials}</p>
    </div>
  );
}
