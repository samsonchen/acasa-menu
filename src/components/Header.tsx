import { useLanguage } from '../hooks/useLanguage'
import { STORE_INFO, UI_STRINGS } from '../data/site-info'

export function Header() {
  const { lang } = useLanguage()
  const ui = UI_STRINGS[lang]
  const phoneHref = `tel:${STORE_INFO.phone.replace(/\D/g, '')}`

  return (
    <>
      <div className="h-[168px] w-full overflow-hidden bg-ink">
        <img
          src="./images/storefront.jpeg"
          alt="storefront"
          loading="eager"
          className="h-full w-full object-cover"
        />
      </div>

      <section className="px-5 pb-3 pt-4">
        <h1 className="m-0 text-[24px] font-extrabold leading-[1.25] tracking-[-0.005em] text-brand">
          {STORE_INFO.shopName[lang]}
          <span className="ml-[6px] text-brand">A-casa meet</span>
        </h1>
        <p className="mt-[6px] text-[13px] leading-[1.55] text-ink-soft">
          <span>{STORE_INFO.address[lang]}</span>
          <span className="mx-[6px] text-ink-mute">·</span>
          <span>{ui.phoneLabel}</span>{' '}
          <a href={phoneHref} className="text-inherit no-underline">
            {STORE_INFO.phone}
          </a>
        </p>
        <p className="mt-1 text-[12px] leading-[1.55] text-ink-mute">
          <span>{ui.hoursLabel}</span> <span>{STORE_INFO.hours[lang].join(' / ')}</span>
          <span className="mx-[6px] text-ink-mute">·</span>
          <span>{STORE_INFO.closed[lang]}</span>
        </p>
      </section>
    </>
  )
}
