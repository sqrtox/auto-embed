import {
  defaultLocale,
  type LocaleId,
  locales,
  type TranslationKey,
} from "#src/i18n/locale.js";

export const getTranslation = (
  localeId: LocaleId,
  key: TranslationKey,
): string => (locales[localeId] ?? defaultLocale).translations[key];

export const t = getTranslation;
