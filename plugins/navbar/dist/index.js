import { h } from "preact"

export const Navbar = () => {
  const Component = ({ fileData }) => {
    const slug = fileData?.slug ?? ""
    const links = [
      { href: "/", label: "主页", active: slug === "index" },
      { href: "/blog/", label: "博客", active: slug.startsWith("blog") },
      // 关于页的规范地址不带斜杠（about.html），带斜杠会导致页内相对链接解析错误
      { href: "/about", label: "关于", active: slug.startsWith("about") },
    ]

    return h(
      "nav",
      { class: "navbar", "aria-label": "主导航" },
      links.map((link) =>
        h(
          "a",
          {
            class: link.active ? "navbar-link active" : "navbar-link",
            href: link.href,
            key: link.href,
          },
          link.label,
        ),
      ),
    )
  }

  Component.css = `
header {
  flex-wrap: wrap;
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.navbar-link {
  color: var(--darkgray);
  font-size: 1rem;
  text-decoration: none;
  padding: 0.2rem 0;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.navbar-link:hover {
  color: var(--secondary);
}

.navbar-link.active {
  color: var(--secondary);
  border-bottom-color: var(--secondary);
  font-weight: 600;
}

@media (max-width: 800px) {
  .navbar {
    gap: 0.9rem;
    width: 100%;
  }
}
`

  return Component
}

export default Navbar
