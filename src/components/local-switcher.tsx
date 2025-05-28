'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const segments = pathname.split('/');
    if (segments[1] === 'ru' || segments[1] === 'kz') {
      segments[1] = nextLocale;
    }
    const nextPath = segments.join('/') || '/';
    startTransition(() => {
      router.replace(nextPath);
    });
  };
  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='ru'>Русский</option>
        <option value='kz'>Қазақша</option>
      </select>
    </label>
  );
}
