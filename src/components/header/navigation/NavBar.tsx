import { navList } from "@/lib/data/app/nav.data"
import NavClient from "./NavClient"
import { NavType } from "@/lib/types/app/nav.type"
import Link from "next/link"
import Logo from "@/components/common/Logo"
import MenuToggle from "@/components/toggles/MenuToggle"
import { X } from "lucide-react"

export default function NavBar() {
  const data: NavType = navList
  return (
    <>
      <NavClient>
        <li className="flex justify-between items-center mb-4 md:hidden">
          <Logo />
          <MenuToggle>
            <X className="text-destructive"/>
          </MenuToggle>
        </li>
        {
          data.map(item => (
            <li key={item.title}>
              <Link
                href={item.url}
                className="flex md:items-center px-1.5 py-2 md:px-2 md:py-1 rounded-md transitions hover:bg-accent active:bg-accent hover:text-primary active:text-primary"
              >
                {item.title}
              </Link>
            </li>
          ))
        }
      </NavClient>
    </>
  )
}
