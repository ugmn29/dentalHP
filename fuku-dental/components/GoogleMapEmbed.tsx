const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.010249888901!2d139.798077!3d35.6521191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018895bd480af87%3A0x46a0d1583ceadde6!2zRuODh-ODs-OCv-ODq-OCquODleOCo-OCuSDosYrmtLLjg5fjg6njgqTjg6njgrnjgq_jgqjjgqLpmaI!5e0!3m2!1sja!2sjp!4v1778288265882!5m2!1sja!2sjp';

export function GoogleMapEmbed({ title }: { title: string }) {
  return (
    <iframe
      src={GOOGLE_MAPS_EMBED_URL}
      width="100%"
      height="100%"
      className="block h-full w-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
    />
  );
}
