'use client';

import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';
import { useEffect, useState, useSyncExternalStore } from 'react';
import {
  CONSENT_SETTINGS_EVENT,
  DEFAULT_CONSENT,
  type ConsentPreferences,
  readConsent,
  writeConsent,
} from '@/lib/consent';

type ConsentView = 'hidden' | 'banner' | 'settings';

type TrackingWindow = Window & {
  clarity?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

const subscribeToMount = () => () => undefined;

function clearTrackingCookies() {
  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0]?.trim())
    .filter((name): name is string =>
      Boolean(name && (/^_ga/.test(name) || /^_cl/.test(name) || /^_fb/.test(name) || name === '_gid')),
    );

  const domains = ['', window.location.hostname, `.${window.location.hostname}`];

  cookieNames.forEach((name) => {
    domains.forEach((domain) => {
      const domainAttribute = domain ? `; domain=${domain}` : '';
      document.cookie = `${name}=; Max-Age=0; path=/${domainAttribute}; SameSite=Lax`;
    });
  });
}

function revokeTrackingConsent(preferences: ConsentPreferences) {
  const trackingWindow = window as TrackingWindow;

  if (!preferences.analytics) {
    trackingWindow.gtag?.('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    trackingWindow.clarity?.('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: 'denied',
    });
    trackingWindow.clarity?.('consent', false);
  }

  if (!preferences.marketing) {
    trackingWindow.fbq?.('consent', 'revoke');
  }

  if (!preferences.analytics || !preferences.marketing) {
    clearTrackingCookies();
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}

export function CookieSettingsButton({ className = '' }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={openCookieSettings}>
      Cookie設定
    </button>
  );
}

export function CookieConsent() {
  const isMounted = useSyncExternalStore(subscribeToMount, () => true, () => false);
  const [view, setView] = useState<ConsentView>('hidden');
  const [draft, setDraft] = useState<ConsentPreferences>(DEFAULT_CONSENT);
  const saved = isMounted ? readConsent() : null;
  const hasSavedChoice = Boolean(saved);
  const visibleView = view === 'hidden' && isMounted && !saved ? 'banner' : view;

  useEffect(() => {
    const handleOpenSettings = () => {
      const current = readConsent();
      setDraft(current ?? DEFAULT_CONSENT);
      setView('settings');
    };

    window.addEventListener(CONSENT_SETTINGS_EVENT, handleOpenSettings);
    return () => window.removeEventListener(CONSENT_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  const save = (preferences: ConsentPreferences) => {
    revokeTrackingConsent(preferences);
    writeConsent(preferences);
    window.location.reload();
  };

  if (visibleView === 'hidden') {
    return null;
  }

  if (visibleView === 'settings') {
    return (
      <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-6">
        <section
          aria-labelledby="cookie-settings-title"
          aria-modal="true"
          role="dialog"
          className="max-h-[90dvh] w-full overflow-y-auto border border-[#ddd8cf] bg-white p-5 shadow-2xl sm:max-w-xl sm:rounded-lg sm:p-7"
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck aria-hidden="true" className="mt-0.5 text-[#0a8a85]" size={24} />
              <div>
                <h2 id="cookie-settings-title" className="text-xl font-semibold text-[#2c2c2a]">
                  Cookie設定
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#6b6b68]" style={{ wordBreak: 'normal' }}>
                  必須機能は常に有効です。選択はいつでも変更できます。
                </p>
              </div>
            </div>
            {hasSavedChoice && (
              <button
                type="button"
                aria-label="Cookie設定を閉じる"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#6b6b68] hover:bg-[#f2f0eb]"
                onClick={() => setView('hidden')}
              >
                <X aria-hidden="true" size={20} />
              </button>
            )}
          </div>

          <div className="divide-y divide-[#e6e3dc] border-y border-[#e6e3dc]">
            <div className="flex items-start justify-between gap-5 py-5">
              <div>
                <h3 className="text-base font-semibold text-[#2c2c2a]">必須</h3>
                <p className="mt-1 text-sm leading-6 text-[#6b6b68]" style={{ wordBreak: 'normal' }}>
                  セキュリティとCookie設定の保存に必要です。
                </p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-[#0a8a85]">常に有効</span>
            </div>

            <label className="flex cursor-pointer items-start justify-between gap-5 py-5">
              <span>
                <span className="block text-base font-semibold text-[#2c2c2a]">アクセス解析</span>
                <span className="mt-1 block text-sm leading-6 text-[#6b6b68]" style={{ wordBreak: 'normal' }}>
                  Google AnalyticsとMicrosoft Clarityで、閲覧や操作の傾向を分析します。
                </span>
              </span>
              <input
                type="checkbox"
                checked={draft.analytics}
                className="mt-1 h-5 w-5 shrink-0 accent-[#0a8a85]"
                onChange={(event) =>
                  setDraft((current) => ({ ...current, analytics: event.target.checked }))
                }
              />
            </label>

            <label className="flex cursor-pointer items-start justify-between gap-5 py-5">
              <span>
                <span className="block text-base font-semibold text-[#2c2c2a]">外部コンテンツ</span>
                <span className="mt-1 block text-sm leading-6 text-[#6b6b68]" style={{ wordBreak: 'normal' }}>
                  Googleマップなど、第三者が提供するコンテンツをページ内に表示します。
                </span>
              </span>
              <input
                type="checkbox"
                checked={draft.externalContent}
                className="mt-1 h-5 w-5 shrink-0 accent-[#0a8a85]"
                onChange={(event) =>
                  setDraft((current) => ({ ...current, externalContent: event.target.checked }))
                }
              />
            </label>

            <label className="flex cursor-pointer items-start justify-between gap-5 py-5">
              <span>
                <span className="block text-base font-semibold text-[#2c2c2a]">広告効果測定</span>
                <span className="mt-1 block text-sm leading-6 text-[#6b6b68]" style={{ wordBreak: 'normal' }}>
                  広告経由のアクセスや予約導線の利用を測定します。
                </span>
              </span>
              <input
                type="checkbox"
                checked={draft.marketing}
                className="mt-1 h-5 w-5 shrink-0 accent-[#0a8a85]"
                onChange={(event) =>
                  setDraft((current) => ({ ...current, marketing: event.target.checked }))
                }
              />
            </label>
          </div>

          <p className="mt-4 text-xs leading-5 text-[#6b6b68]">
            詳細は{' '}
            <Link className="font-semibold text-[#0a8a85] underline underline-offset-2" href="/privacy">
              プライバシーポリシー
            </Link>
            をご確認ください。
          </p>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="min-h-11 border border-[#bdb8ae] px-5 text-sm font-semibold text-[#4f4f4b] hover:bg-[#f7f6f2] sm:rounded-md"
              onClick={() => save(DEFAULT_CONSENT)}
            >
              すべて拒否
            </button>
            <button
              type="button"
              className="min-h-11 bg-[#0a8a85] px-5 text-sm font-semibold text-white hover:bg-[#08726e] sm:rounded-md"
              onClick={() => save(draft)}
            >
              選択を保存
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <section
      aria-label="Cookieの利用について"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#d8d3ca] bg-white px-5 py-5 shadow-[0_-12px_32px_rgba(44,44,42,0.14)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-3xl items-start gap-3">
          <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-[#0a8a85]" size={24} />
          <p className="text-sm leading-6 text-[#4f4f4b]" style={{ wordBreak: 'normal' }}>
            当サイトでは、利用状況の分析、地図などの外部コンテンツ表示、広告効果測定のためにCookie等を使用します。許可する項目を選べます。{' '}
            <Link className="font-semibold text-[#0a8a85] underline underline-offset-2" href="/privacy">
              詳細
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:flex lg:shrink-0">
          <button
            type="button"
            className="min-h-11 border border-[#bdb8ae] px-4 text-sm font-semibold text-[#4f4f4b] hover:bg-[#f7f6f2] sm:rounded-md"
            onClick={() => save(DEFAULT_CONSENT)}
          >
            拒否
          </button>
          <button
            type="button"
            className="min-h-11 border border-[#0a8a85] px-4 text-sm font-semibold text-[#08726e] hover:bg-[#edf8f7] sm:rounded-md"
            onClick={() => setView('settings')}
          >
            設定する
          </button>
          <button
            type="button"
            className="min-h-11 bg-[#0a8a85] px-4 text-sm font-semibold text-white hover:bg-[#08726e] sm:rounded-md"
            onClick={() =>
              save({
                ...DEFAULT_CONSENT,
                analytics: true,
                externalContent: true,
                marketing: true,
              })
            }
          >
            すべて許可
          </button>
        </div>
      </div>
    </section>
  );
}
