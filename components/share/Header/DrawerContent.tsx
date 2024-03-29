"use client";

import { useRecoilState } from "recoil";
import Link from "next/link";
import { NavLink } from "@mantine/core";
import { IconHome2, IconBorderAll } from "@tabler/icons-react";

import { DrawerOpenAtom } from "@/state/DrawerOpenAtom";
import { imageOptimizer } from "next/dist/server/image-optimizer";

export const DrawerContent = () => {
  const [_, setOpened] = useRecoilState(DrawerOpenAtom);

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
