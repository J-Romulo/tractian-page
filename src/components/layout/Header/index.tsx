"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Menu, X } from "lucide-react";
import Dropdown from "../../ui/Dropdown";
import tractianLogo from "../../../assets/tractian_logo.png";
import { Chevron } from "../../icons/Chevron";
import Button from "../../ui/Button";
import { useLocale, useTranslations } from "next-intl";
import DemoModal from "../DemoModal";

export function Header() {
  const i18n = useTranslations("header");
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col items-center justify-center transition-colors duration-150 ease-in-out bg-slate-100 border-b border-slate-200 h-18">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
        {/* Desktop Navigation */}
        <div className="hidden h-full w-full items-center justify-between lg:flex">
          <section className="flex items-center gap-x-4">
            <Link href="/" aria-label="Tractian Logo">
              <Image
                src={tractianLogo}
                alt="Tractian"
                height={24}
                width={128}
                priority
              />
            </Link>

            <div className="flex h-[72px] items-center">
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
          </section>

          <section className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
            <Dropdown
              variant="small"
              trigger={
                <span className="group flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
                  <Globe className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                  <Chevron className="w-3 h-3 text-slate-500 group-hover:text-blue-600 transition-colors" />
                </span>
              }
            >
              <ul>
                <li>
                  <Link
                    href="/pt/who-we-serve/plant-manager"
                    className={`block w-full text-left text-text-primary px-3 py-2 text-sm ${locale === "pt" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                  >
                    {i18n("pt")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/who-we-serve/plant-manager"
                    className={`block w-full text-left text-text-primary px-3 py-2 text-sm ${locale === "en" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                  >
                    {i18n("en")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/who-we-serve/gerente-de-planta"
                    className={`block w-full text-left text-text-primary px-3 py-2 text-sm ${locale === "es" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                  >
                    {i18n("es")}
                  </Link>
                </li>
              </ul>
            </Dropdown>

            <Link
              href="https://app.tractian.com"
              target="_blank"
              className="block text-center text-base lg:hidden xl:block font-medium text-slate-500 hover:text-blue-600"
            >
              {i18n("login")}
            </Link>

            <DemoModal
              trigger={<Button variant="secondary">{i18n("demo")}</Button>}
            />
          </section>
        </div>

        {/* Mobile Navigation */}
        <div className="w-full overflow-hidden lg:hidden">
          <div className="flex w-full items-center justify-between">
            <figure className="fill-blue-600">
              <Link href="/" aria-label="Tractian Logo">
                <Image
                  src={tractianLogo}
                  alt="Tractian"
                  height={25}
                  width={128}
                  className="w-32"
                  priority
                />
              </Link>
            </figure>

            <figure className="flex items-center justify-center">
              <button
                className="flex h-10 w-10 items-center justify-center"
                type="button"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-blue-600" />
                ) : (
                  <Menu className="h-6 w-6 text-blue-600" />
                )}
              </button>
            </figure>
          </div>

          {/* Mobile Menu Panel */}
          <div
            className={`absolute left-0 top-[56px] z-[9999] bg-white transition-all duration-150 ${
              mobileMenuOpen ? "w-full" : "w-0 overflow-hidden"
            }`}
            style={{
              height: "calc(100dvh - 56px)",
              overflowY: "auto",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <div className="pt-4">
              {/* Mobile Nav Items */}
              <div className="w-full">
                <button
                  aria-label="Open Solutions"
                  className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125"
                >
                  <p className="text-slate-500 text-base">
                    {i18n("solutions")}
                  </p>
                  <Chevron className="h-4 w-4 text-slate-500 transition-all" />
                </button>
              </div>

              <div className="w-full">
                <button
                  aria-label="Open Industries"
                  className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125"
                >
                  <p className="text-slate-500 text-base">
                    {i18n("industries")}
                  </p>
                  <Chevron className="h-4 w-4 text-slate-500 transition-all" />
                </button>
              </div>

              <div className="w-full">
                <button
                  aria-label="Open Resources"
                  className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125"
                >
                  <p className="text-slate-500 text-base">
                    {i18n("resources")}
                  </p>
                  <Chevron className="h-4 w-4 text-slate-500 transition-all" />
                </button>
              </div>

              <div className="w-full">
                <button
                  aria-label="Open About"
                  className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125"
                >
                  <p className="text-slate-500 text-base">{i18n("about")}</p>
                  <Chevron className="h-4 w-4 text-slate-500 transition-all" />
                </button>
              </div>

              <div className="w-full">
                <button
                  aria-label="Open Pricing"
                  className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125"
                >
                  <p className="text-slate-500 text-base">{i18n("pricing")}</p>
                  <Chevron className="h-4 w-4 text-slate-500 transition-all" />
                </button>
              </div>

              {/* Mobile Language Switcher */}
              <div className="w-full">
                <div className="relative inline-flex w-full flex-col py-4">
                  <button
                    aria-label="Switch Language Button"
                    className="group flex w-full items-center justify-between gap-x-2 rounded-sm px-4 py-1 text-sm focus:outline-none"
                  >
                    <div className="flex items-center gap-x-4">
                      <Globe className="w-5 h-5 text-slate-500 transition-all duration-150 group-hover:text-blue-600" />
                      <p className="font-medium text-slate-500 transition-all duration-150 text-sm group-hover:text-blue-600">
                        {i18n("pt")}
                      </p>
                    </div>
                    <Chevron className="h-4 w-4 text-slate-500 transition-transform group-hover:text-blue-600" />
                  </button>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex items-center justify-between gap-4 px-4 py-6">
                <div className="w-full">
                  <Link
                    href="https://app.tractian.com"
                    target="_blank"
                    className="block w-full rounded-sm transition ease-in-out duration-150 text-center text-blue-600 outline outline-1 outline-blue-600 hover:outline-2 active:outline-4 text-base px-4 py-2"
                  >
                    {i18n("login")}
                  </Link>
                </div>
                <DemoModal
                  trigger={
                    <button
                      className="w-full rounded-sm transition ease-in-out duration-150 text-center bg-blue-600 text-white font-medium text-base px-4 py-2 hover:bg-blue-900 active:bg-blue-950"
                      type="button"
                    >
                      {i18n("demo")}
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
