import { cn } from "@/lib/utils"

interface StateRow {
    state: string
    style: string
    token?: string
}

interface StateTableProps {
    states: StateRow[]
    className?: string
}

export function StateTable({ states, className }: StateTableProps) {
    return (
        <div className={cn("my-6 w-full overflow-y-auto rounded-xl border border-border/40", className)}>
            <table className="w-full text-left text-sm">
                <thead className="border-b border-border/40 bg-muted/20">
                    <tr>
                        <th className="px-4 py-3 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">State</th>
                        <th className="px-4 py-3 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Style</th>
                        <th className="px-4 py-3 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Token / Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                    {states.map((item) => (
                        <tr key={item.state}>
                            <td className="px-4 py-3 font-medium text-[13px] text-foreground/80 bg-muted/5">
                                {item.state}
                            </td>
                            <td className="px-4 py-3 text-[13px] text-muted-foreground/70">
                                {item.style}
                            </td>
                            <td className="px-4 py-3">
                                <code className="text-[13px] font-mono text-foreground/70 bg-muted/20 border border-border/30 px-1.5 py-0.5 rounded leading-none">
                                    {item.token || "-"}
                                </code>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
