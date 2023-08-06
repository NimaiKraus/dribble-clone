import Image from 'next/image'
import FooterColumn from './FooterColumn'
import { footerLinks } from '@/costants'

const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col w-full gap-12'>
        <div className="flex flex-col items-start">
          <Image
            alt='Flexibble'
            src={'/logo-purple.svg'}
            width={113}
            height={38}
          />

          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world&apos;s leading community for creatives to share, grow, and get hired.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-12">
        <FooterColumn links={footerLinks[0].links} title={footerLinks[0].title} />

        <div className="flex-1 flex flex-col gap-2">
          <FooterColumn links={footerLinks[1].links} title={footerLinks[1].title} />
          <FooterColumn links={footerLinks[2].links} title={footerLinks[2].title} />
        </div>

        <FooterColumn links={footerLinks[3].links} title={footerLinks[3].title} />

        <div className="flex-1 flex flex-col gap-2">
          <FooterColumn links={footerLinks[4].links} title={footerLinks[4].title} />
          <FooterColumn links={footerLinks[5].links} title={footerLinks[5].title} />
        </div>

        <FooterColumn links={footerLinks[6].links} title={footerLinks[6].title} />
      </div>
    </footer>
  )
}

export default Footer