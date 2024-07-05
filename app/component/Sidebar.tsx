import React from 'react'
import { HomeIcon, Logo, ChevronUp, ChevronDown, SettingsIcon, InformativosIcon, SairIcon } from './icons'
import Link from 'next/link'
const Sidebar = () => {
    const items = [{
        title: "Inicio",
        link: "/",
        icon: <HomeIcon className="size-5" />,
        sub: [
            {
                title: 'Agenda WEB',
                link: "/"
            },
            {
                title: 'CRM',
                link: "/"
            },
            {
                title: 'Poral de franquias',
                link: "/"
            },
            {
                title: 'CAC',
                link: "/"
            },
            {
                title: 'GRF',
                link: "/"
            },
            {
                title: 'PUSH',
                link: "/"
            },
        ]
    }]
    return (
        <aside className="bg-[#000722] w-72 h-svh sticky top-0 z-50">
            <div className=" w-full flex flex-col items-center">
                <div className="py-5">
                    <Logo className="w-44 h-fit" />
                </div>
                <div className="w-full ">
                    <div className="px-5 py-3">
                        <span className="text-gray-400">Sistemas</span>
                    </div>
                    {items.map(item => {
                        return (
                            <div key={item.title}>
                                <Link className="flex items-center bg-white/45 py-5 px-10 relative before:content-[''] before:absolute before:left-0 before:h-full before:w-2 before:bg-white" href={item.link}>
                                    <div className="w-full ">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span>
                                                    {item.icon}
                                                </span>
                                                <span className="text-white">{item.title}</span>
                                            </div>
                                            <div>
                                                <ChevronUp className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div>
                                    {item.sub.map(subItem => {
                                        return (
                                            <Link href={subItem.link} key={subItem.title}>
                                                <span className=" block py-2 px-10 text-white/80 text-sm">
                                                    {subItem.title}
                                                </span>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full ">
                    <div className="px-5 py-3">
                        <span className="text-gray-400">Gerais</span>
                    </div>
                    <div className="space-y-6">
                        <Link href={'/'} className=" flex items-center gap-3 px-10 text-white/80">
                            <SettingsIcon className="size-6" />
                            <span className="font-light">Configuracces</span>
                        </Link>
                        <Link href={'/'} className=" flex items-center gap-3 px-10 text-white/80">
                            <InformativosIcon className="size-6" />
                            <span className="font-light">Informativos</span>
                        </Link>
                        <Link href={'/'} className=" flex items-center gap-3 px-10 text-white/80">
                            <SairIcon className="size-6" />
                            <span className="font-light">Sair</span>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar