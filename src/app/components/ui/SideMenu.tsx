"use client"

import React from "react";
import { useRouter } from 'next/navigation'

import {Listbox, ListboxItem} from "@nextui-org/react";
const ChevronRightIcon = () => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="1em"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
export default function SideMenu() {
    const router = useRouter()
    return (
        // onAction={(key) => alert(key)}
        <Listbox
            aria-label="User Menu"
            onAction={(key) => router.push(key)}
            className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
            itemClasses={{
                base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
            }}
        >
            <ListboxItem
                key="/gallery"
                endContent={<ChevronRightIcon className="text-xl" />}
            >
                Gallery
            </ListboxItem>
            <ListboxItem
                key="pull_requests"
                endContent={<ChevronRightIcon className="text-xl" />}
            >
                Albums
            </ListboxItem>
            <ListboxItem
                key="discussions"
                endContent={<ChevronRightIcon className="text-xl" />}
            >
                Favourites
            </ListboxItem>
        </Listbox>
    );
}
