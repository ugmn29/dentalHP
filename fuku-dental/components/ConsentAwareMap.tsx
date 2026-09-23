'use client';

import { ExternalLink, MapPin } from 'lucide-react';
import { useSyncExternalStore } from 'react';

const MAP_PREFERENCE_KEY = 'fshika-google-maps-enabled';
const MAP_PREFERENCE_EVENT = 'fshika:google-maps-enabled';

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.010249888901!2d139.798077!3d35.6521191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018895bd480af87%3A0x46a0d1583ceadde6!2zRuODh-ODs-OCv-ODq-OCquODleOCo-OCuSDosYrmtLLjg5fjg6njgqTjg6Djgrnjgq_jgqjjgqLpmaI!5e0!3m2!1sja!2sjp!4v1778288265882!5m2!1sja!2sjp';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=F%E3%83%87%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9%20%E8%B1%8A%E6%B4%B2%E3%83%97%E3%83%A9%E3%82%A4%E3%83%A0%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%E9%99%A2';

function subscribeToMapPreference(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(MAP_PREFERENCE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(MAP_PREFERENCE_EVENT, onStoreChange);
  };
}

function getMapPreference() {
  return window.localStorage.getItem(MAP_PREFERENCE_KEY) === 'true';
}

function enableGoogleMaps() {
  window.localStorage.setItem(MAP_PREFERENCE_KEY, 'true');
  window.dispatchEvent(new Event(MAP_PREFERENCE_EVENT));
}

export function ConsentAwareMap({ title }: { title: string }) {
  const externalContentAllowed = useSyncExternalStore(
    subscribeToMapPreference,
    getMapPreference,
    () => false,
  );

  if (externalContentAllowed) {
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

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#f4f7f5] px-5 py-6 text-center">
      <MapPin aria-hidden="true" className="mb-3 text-[#0a8a85]" size={28} />
      <p className="text-sm font-semibold leading-6 text-[#2c2c2a]">Fデンタルオフィス 豊洲プライムスクエア院</p>
      <p className="mt-1 max-w-sm text-xs leading-5 text-[#6b6b68]">
        地図を表示するとGoogleへ接続します。
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          className="inline-flex min-h-10 items-center border border-[#0a8a85] bg-[#0a8a85] px-4 text-xs font-semibold text-white hover:bg-[#08726e] sm:rounded-md"
          onClick={enableGoogleMaps}
        >
          地図を表示
        </button>
        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="inline-flex min-h-10 items-center gap-2 border border-[#0a8a85] bg-white px-4 text-xs font-semibold text-[#08726e] hover:bg-[#edf8f7] sm:rounded-md"
        >
          <ExternalLink aria-hidden="true" size={15} />
          Googleマップで開く
        </a>
      </div>
    </div>
  );
}
