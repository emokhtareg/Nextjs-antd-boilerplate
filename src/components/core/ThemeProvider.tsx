"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConfigProvider, Layout, Button, theme } from "antd";
import { SettingOutlined, InfoCircleOutlined, ApiOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const { Header, Content } = Layout;

const NAV_ITEMS = [
  { href: "/configuration", label: "Configuration", icon: SettingOutlined },
  { href: "/viewdetails", label: "View Details", icon: InfoCircleOutlined },
  { href: "/system", label: "System", icon: ApiOutlined },
];

const STORAGE_KEY = "theme-preference";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [isDark, mounted]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const pathname = usePathname();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header
          style={{
            display: "flex",
            height: 44,
            alignItems: "center",
            padding: "0 24px",
            gap: 8,
            background: isDark ? "#141414" : "#ffffff",
            color: isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.88)",
          }}
        >
          <Link href="/" style={{ color: "inherit", fontSize: 18, fontWeight: 600, textDecoration: "none" }}>
            APP
          </Link>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href}>
                <Button
                  type={pathname === href ? "primary" : "default"}
                  icon={<Icon />}
                >
                  {/* {label} */}
                </Button>
              </Link>
            ))}
            <ThemeSwitcher isDark={isDark} onToggle={toggleTheme} />
          </div>
        </Header>
        <Content style={{ padding: 12, flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {children}
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
