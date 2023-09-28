import useBuyCredits from "~/hooks/useBuyCredits";

import { signIn, signOut, useSession } from "next-auth/react";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export default function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;

  const buyCredits = useBuyCredits();

  return (
    <header className="container mx-auto flex h-16 items-center justify-between px-2 ">
      <div className="container mx-auto flex h-full items-center justify-between">
        <HeaderLink href="/">aicons.bomb</HeaderLink>

        <nav>
          <ul>
            <li>
              <HeaderLink href="/generate">Gererate</HeaderLink>
            </li>
          </ul>
        </nav>

        <ul className="flex items-center gap-2">
          {!isLoggedIn && (
            <li>
              <HeaderButton
                onClick={() => {
                  signIn().catch(console.error);
                }}
              >
                Login
              </HeaderButton>
            </li>
          )}

          {isLoggedIn && (
            <>
              <li>
                <HeaderLink href={`/user/${session.data.user.id}`}>
                  Account
                </HeaderLink>
              </li>
              <li>
                {isLoggedIn && (
                  <>
                    <HeaderButton onClick={buyCredits}>
                      Buy Credits
                    </HeaderButton>
                  </>
                )}
              </li>

              <li>
                <HeaderButton
                  onClick={() => {
                    signOut().catch(console.error);
                  }}
                >
                  Logout
                </HeaderButton>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

function HeaderLink(props: LinkProps & { children: ReactNode }) {
  return (
    <Link {...props} className={`text-cyan-200 hover:text-cyan-400`}>
      {props.children}
    </Link>
  );
}

export function HeaderButton(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className="rounded border-2 border-cyan-200 p-1 text-cyan-200 transition hover:bg-cyan-200 hover:text-gray-800"
    >
      {props.children}
    </button>
  );
}
