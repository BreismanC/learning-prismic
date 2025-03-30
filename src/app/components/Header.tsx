import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header>
      <Link href="/">{settings.data.site_title}</Link>
      <nav>
        <ul>
          {settings.data.navigation.map(({ link }) => (
            <li key={link.text}>
              <PrismicNextLink field={link} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
