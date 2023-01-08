import Image from "next/image";

export function Avatar() {
  return (
    <Image
      style={{
        clipPath: "circle()",
      }}
      priority={true}
      src="/images/me-avatar.png"
      alt="Tylee in the garden"
      width={640}
      height={640}
    />
  );
}
export function Portrait() {
  return (
    <Image
      className="rounded-lg"
      priority={true}
      src="/images/me-portrait.png"
      alt="Tylee in the garden"
      width={640}
      height={640}
    />
  );
}
