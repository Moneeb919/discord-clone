"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ActionTooltip } from "../action-tooltip"

interface NavigationItemProps {
    id: string
    imageUrl: string
    name: string
}

export const NavigationItem = ({
    id,
    imageUrl,
    name
}: NavigationItemProps) => {
    const params = useParams();
    const router = useRouter();

    const onClick = () => {
        router.push(`/servers/${id}`);
    }

    return (
        <ActionTooltip label={name} side="right" align="center">
            <button onClick={onClick} className="group relative flex text-center">
                <div className={cn(
                    "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
                    params?.serverId !== id && "group-hover:h-[20px]",
                    params?.serverId === id ? "h-[36px]" : "h-[8px]"
                )} />

                <div className={cn(
                    "relative group flex transition-all overflow-hidden h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] mx-3",
                    params?.serverId === id && "bg-primary/10 rounded-[16px] text-primary"
                )}>
                    <Image fill src={imageUrl} alt="Channel" />
                </div>
            </button>
        </ActionTooltip>
    )
}