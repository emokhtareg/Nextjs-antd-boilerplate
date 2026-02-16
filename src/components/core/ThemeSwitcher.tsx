"use client";

import { Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

interface ThemeSwitcherProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeSwitcher({ isDark, onToggle }: ThemeSwitcherProps) {
  return (
    <Switch
      checked={isDark}
      onChange={onToggle}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
      style={{ marginLeft: "auto" }}
    />
  );
}
