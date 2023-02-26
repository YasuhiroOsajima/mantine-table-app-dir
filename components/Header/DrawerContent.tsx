"use client";
import Link from "next/link";
import { NavLink } from "@mantine/core";
import { IconHome2 } from "@tabler/icons";

export const DrawerContent = () => {
  return (
    <>
      <Link href="/">
        <NavLink
          label="With icon"
          icon={<IconHome2 size={16} stroke={1.5} />}
        />
      </Link>
    </>
  );
};
