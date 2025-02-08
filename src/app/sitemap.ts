// Placement in project structure with i18n: 
// app/
//  ├── about/
//  ├── contact/
//  └── page.tsx
//  └── layout.tsx
//  ├── sitemap.ts // Place at the root of the app directory

import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://maag-consulting.com'
  const baseUrl = 'https://maag-consulting.com'

  // Base routes that are common across languages
  const routes = [
    '',
    '/about',
    '/coaching',
    '/consulting',
    '/references',
    '/impressum',
    '/dsvgo',
  ]

  // Generate entries for all language/route combinations
  const entries = 
  // languages.flatMap(lang => 
    routes.map(route => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      // hogher propiority for the home page route
      priority: route === '' ? 1 : 0.8,
    })
  // )
  )

  return entries
}

// npm run build
// npm run start

// The sitemap will be available at:

// /sitemap.xml
// /robots.txt