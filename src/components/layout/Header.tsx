import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import Dropdown from "../ui/Dropdown";
import tractianLogo from "../../assets/tractian_logo.png";
import { Chevron } from "../icons/Chevron";
import Button from "../ui/Button";
import { useLocale, useTranslations } from "next-intl";

export function Header() {
  const i18n = useTranslations("header");
  const locale = useLocale();
  return (
    <header className="sticky top-0 z-50 bg-background-secondary border-b border-gray-100 h-18 px-8">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-4 h-full">
          <Link href="/">
            <Image
              src={tractianLogo}
              alt="Tractian"
              height={24}
              width={128}
              priority
            />
          </Link>

          <nav className="flex items-center">
            <Dropdown title={i18n("solutions")}>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-text-primary hover:bg-gray-50 rounded-lg"
                  >
                    Monitoreo Online
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-text-primary hover:bg-gray-50 rounded-lg"
                  >
                    Gestión de Activos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-text-primary hover:bg-gray-50 rounded-lg"
                  >
                    Gestión de Energía
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Dropdown title={i18n("industries")}>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Gerente de planta
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Ingeniero de confiabilidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Ingeniero de mantenimiento
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Dropdown title={i18n("resources")}>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Casos de Estudio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Videos
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Dropdown title={i18n("about")}>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Dropdown title={i18n("pricing")}>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-gray-50 rounded-lg"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </Dropdown>
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <Dropdown
            variant="small"
            trigger={
              <span className="group flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5 text-text-primary group-hover:text-primary transition-colors" />
                <Chevron className="w-3 h-2 text-text-primary group-hover:text-primary transition-colors" />
              </span>
            }
          >
            <ul>
              <li>
                <Link
                  href="/pt/who-we-serve/plant-manager"
                  className={`block w-full text-left text-text-primary px-3 py-2 text-sm ${
                    locale === "pt" ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  {i18n("pt")}
                </Link>
              </li>
              <li>
                <Link
                  href="/en/who-we-serve/plant-manager"
                  className={`block w-full text-left text-text-primary px-3 py-2 text-sm ${
                    locale === "en" ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  {i18n("en")}
                </Link>
              </li>
              <li>
                <Link
                  href="/es/who-we-serve/gerente-de-planta"
                  className={`block w-full text-left text-text-primary px-3 py-2 text-sm ${
                    locale === "es" ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  {i18n("es")}
                </Link>
              </li>
            </ul>
          </Dropdown>
          <Link
            href="#"
            className="text-6 text-text-primary select-none font-medium hover:text-primary transition-colors"
          >
            {i18n("login")}
          </Link>

          <Button variant="secondary" href="#">
            {i18n("demo")}
          </Button>
        </div>
      </div>
    </header>
  );
}
