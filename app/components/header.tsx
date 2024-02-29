import { CloudSunIcon, CopyrightIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h3 className="flex items-center gap-2 text-xl font-medium text-blue-500">
        <CloudSunIcon size={24} />
        Weather Hub
      </h3>

      <p className="flex items-center gap-1 text-xs opacity-50">
        <CopyrightIcon size={10} />
        2024 Arison. All Rights Reserved
      </p>
    </header>
  );
}
