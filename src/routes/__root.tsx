import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Luxury Barbers — Premium Grooming in Lekki Phase 1, Lagos" },
      { name: "description", content: "Luxury Barbers (LB): premium haircuts, hot towel shaves and beard grooming. Lekki Phase 1, Lagos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Luxury Barbers — Premium Grooming in Lekki Phase 1, Lagos" },
      { name: "twitter:title", content: "Luxury Barbers — Premium Grooming in Lekki Phase 1, Lagos" },
      { property: "og:description", content: "Luxury Barbers (LB): premium haircuts, hot towel shaves and beard grooming. Lekki Phase 1, Lagos." },
      { name: "twitter:description", content: "Luxury Barbers (LB): premium haircuts, hot towel shaves and beard grooming. Lekki Phase 1, Lagos." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b44bae4-1bd2-487b-8d52-03afb3d66e73/id-preview-36afea48--0fddd1ac-2d8c-4bb0-bf27-8f3577055998.lovable.app-1777991212975.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b44bae4-1bd2-487b-8d52-03afb3d66e73/id-preview-36afea48--0fddd1ac-2d8c-4bb0-bf27-8f3577055998.lovable.app-1777991212975.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
