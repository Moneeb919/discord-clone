"use client"

import { Plus } from "lucide-react"
import { ActionTooltip } from "../action-tooltip"
import { useModal } from "@/hooks/use-modal-store"

export const NavigationAction = () => {
    const { onOpen } = useModal();

    return (
        <div>
            <ActionTooltip label="Add a server" side="right" align="center">
                <button onClick={() => onOpen("createServer")} className="group flex items-center">
                    <div className="flex mx-3 items-center justify-center h-[48px] w-[48px] rounded-[24px] overflow-hidden transition-all group-hover:rounded-[16px] bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                        <Plus className="group-hover:text-white transition text-emerald-500" size={25} />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    )
}