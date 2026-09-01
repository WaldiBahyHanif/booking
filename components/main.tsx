import Card from "@/components/card";

export default function Main() {
  return (
    <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto">
      {/* Grid: 1 kolom di layar HP, 3 kolom di layar laptop/desktop */}
      <div className="grid md:grid-cols-3 gap-7">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
