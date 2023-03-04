"use client";

import { useRecoilState } from "recoil";
import Link from "next/link";
import { NavLink } from "@mantine/core";
import { IconHome2, IconBorderAll } from "@tabler/icons";

import { DrawerOpenAtom } from "~/state/DrawerOpenAtom";

export const DrawerContent = () => {
  const [opened, setOpened] = useRecoilState(DrawerOpenAtom);

  return (
    <>
      <Link href="/" onClick={() => setOpened(false)}>
        <NavLink
          label="Main" //
          icon={<IconHome2 size={16} stroke={1.5} />}
        />
      </Link>
      <Link href="/table" onClick={() => setOpened(false)}>
        <NavLink
          label="Table" //
          icon={<IconBorderAll size={16} stroke={1.5} />}
        />
      </Link>
    </>
  );
};
