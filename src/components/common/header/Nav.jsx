import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const navItems = [
    {
      label: 'Accueil',
      slug: '/',
    },
    {
      label: 'A propos',
      slug: '/apropos',
    },
    {
      label: 'Catégories',
      children: [
        {
          label: 'Film',
          slug: '/categorie/film',
        },
        {
          label: 'Documentaire',
          slug: '/categorie/documentaire',
        },
      ],
    },
    {
      label: 'Chaussures',
      children: [
        {
          label: 'Chaussures',
          slug: '/chaussures/',
        },
      ],
    },
  ]

  return (
    <nav>
      {navItems.map((item) =>
        item.children ? (
          <details key={item.label}>
            <summary>{item.label}</summary>

            {item.children.map((child) => (
              <div key={child.slug}>
                <Link to={child.slug}>{child.label}</Link>
              </div>
            ))}
          </details>
        ) : (
          <Link key={item.slug} to={item.slug}>
            {item.label}
          </Link>
        )
      )}
    </nav>
  )
}
