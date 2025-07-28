import en_US from "#src/i18n/locales/en-US.json" with { type: "json" };
import ja from "#src/i18n/locales/ja.json" with { type: "json" };

export const defaultLocale = en_US;

export type Locale = typeof defaultLocale;

export type LocaleId = keyof typeof locales;

export type TranslationKey = keyof Locale["translations"];

export const locales = {
  ja: ja,
  "en-US": en_US,
};

export const translations = {
  ja: locales.ja.translations,
  "en-US": locales["en-US"].translations,
};
