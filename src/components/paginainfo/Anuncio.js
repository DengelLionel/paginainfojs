import { useContext } from 'react'
import IconTelefono from '../icons/IconTelefono'
import IconFacebook from '../icons/IconFacebook'
import IconInstagram from '../icons/IconInstagram'
import IconTiktok from '../icons/IconTiktok'
import IconYoutuve from '../icons/IconYoutuve'
import Link from 'next/link'
import ItemBuscadorTwo from '../icons/ItemBuscadorTwo'
import IconClose from '../icons/IconClose'
import { PaginaContextValue } from '@/context/contextpaginaifno'
const Anuncio = () => {
    const { openSearch, setOpenSearch } = useContext(PaginaContextValue)

    return (
        <div className="hidden md:flex md:flex-row md:h-[38px] md:w-full  md:justify-between md:items-center md:bg-plomo md:text-white md:pl-[90px] md:pr-[32px] md:font-medium">
            <span className="block lg:hidden">
                Siguenos en nuestras redes sociales
            </span>
            <span className="hidden lg:block ">/ ventas@nexomedic.com.pe/</span>
            <div className="md:flex md:flex-row md:items-center md:gap-[14px]">
                <div className="hidden lg:block lg:cursor-pointer">
                    {openSearch ? (
                        <IconClose open={() => setOpenSearch(!openSearch)} />
                    ) : (
                        <ItemBuscadorTwo
                            open={() => setOpenSearch(!openSearch)}
                        />
                    )}
                </div>
                <Link href={'#'}>
                    <IconFacebook fill="#EEEFF3" />
                </Link>
                <Link href={'#'}>
                    {' '}
                    <IconInstagram fill="#EEEFF3" />
                </Link>
                <Link href={'#'}>
                    {' '}
                    <IconTiktok fill="#EEEFF3" />
                </Link>
                <Link href={'#'}>
                    {' '}
                    <IconYoutuve fill="#EEEFF3" />
                </Link>
            </div>
            <Link
                href={'tel:+517583872'}
                className="md:flex md:flex-row md:items-center md:gap-[14px] xl:hidden">
                <IconTelefono fill="#fafafa" />
                (511) 758-3872
            </Link>
        </div>
    )
}

export default Anuncio
