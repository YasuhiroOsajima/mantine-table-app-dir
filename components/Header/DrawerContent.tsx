"use client";
import Link from "next/link";
import { NavLink } from "@mantine/core";
import { IconHome2, IconBorderAll } from "@tabler/icons";

export const DrawerContent = () => {
  return (
    <>
      <Link href="/">
        <NavLink
          label="Main" //
          icon={<IconHome2 size={16} stroke={1.5} />}
        />
      </Link>
      <Link href="/table">
        <NavLink
          label="Table" //
          icon={<IconBorderAll size={16} stroke={1.5} />}
        />
      </Link>
    </>
  );
};
